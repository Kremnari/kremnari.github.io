function startAnims() {
	window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,1e3/60)}}();
	var canvas = document.getElementById("slayer1");
	var ctx = canvas.getContext("2d");

	var w = document.getElementById("slayer1").parentNode.offsetWidth, h = 200;
	canvas.width = w * window.devicePixelRatio;
	canvas.height = h * window.devicePixelRatio;
	ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
	var fsize = 7;
	var textWidth = 10;
	do {
		fsize -= 0.25;
		ctx.font = fsize+"em Asiach";
		ctx.textAlign = 'center';
		textWidth = ctx.measureText('D i g i t a l  P s y c h e G e n e s i s').width;
	} while (textWidth > canvas.width);  
	var textArea = {};
	textArea.left = w/2 - textWidth/2;
	textArea.right = w/2 + textWidth/2;
	textArea.top = h/2-50;
	textArea.bottom = h/2+50;
	
	function Particle( opts) {
		this.lor = opts.left_origin;
		this.radius = 3;
		this.draw = function() {
			if (this.incs >0 ) {
				this.x += this.dx;
				this.y += this.dy;
				this.incs--;
			} else {
				explosions.push(new Explosion(this.x, this.y, explosions.length));
				this.atTarget();
			}
			this.grad = ctx.createRadialGradient(this.x, this.y, this.radius-2, this.x, this.y, this.radius);
			this.grad.addColorStop(0, window.colors.parts[0]);
			this.grad.addColorStop(1, window.colors.parts[1]);
			ctx.fillStyle = this.grad;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
			ctx.fill();
			ctx.closePath();
		}
		this.atTarget = function() {
			var sign = 0;
			this.y = h/2;
			if(this.lor) {
				this.x = 10;
				this.dx = 5;
				sign = 1;
			} else {
				this.x = w - 10;
				this.dx = -5;
				sign = -1;
			}
			var tx = Math.round(Math.random() * (textArea.right - textArea.left) + textArea.left);
			var ty = Math.round(Math.random() * (textArea.bottom - textArea.top) + textArea.top);
			this.incs = Math.round(Math.abs((this.x-tx)/this.dx));
			this.dy = (this.y - ty) / this.incs;
		}
		this.atTarget()
	}
	function Explosion(x, y, key) {
		this.x = x;
		this.y = y;
		this.elapsed = 0;
		this.key = key;
		this.f_count = 0;
		this.draw = function() {
			if(this.f_count>15) {
				return -1
			} else {
				this.f_count += 0.25;
			}
			this.grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.f_count+2);
			this.grad.addColorStop(0, window.colors.exp[0]);
			this.grad.addColorStop(0.25, window.colors.exp[0]);
			this.grad.addColorStop(1, window.colors.exp[1]);
			ctx.fillStyle = this.grad;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.f_count, 0, Math.PI*2);
			ctx.fill();
			ctx.closePath();
		}
		this.end = function() {
		}
	}
	var particle_count = 50;
	var particles = [];
	for (var i=0; i < particle_count; i++) {
		var particle = new Particle({left_origin: i%2});
		particles.push(particle);
	}
	var explosions = [];
	var strokeAt = 0, strokeInc = 2;

	
	(function renderFrame() {
		requestAnimationFrame(renderFrame);
		if(window.pause) return;
		ctx.clearRect(0, 0, w, h);
		explosions = explosions.filter(function(exp, idx) {
			return exp.draw()!=-1
		});
		ctx.globalCompositeOperation = 'destination-atop';
		ctx.font = fsize + "em Asiach"
		drawDPGtext(ctx, {x: w/2, y: h/2});
		ctx.globalCompositeOperation = 'destination-over';
		ctx.fillStyle = window.colors.base;
		ctx.fillRect(0, 0, w, h);
		ctx.globalCompositeOperation = "source-over";
		drawDPGtextStroke(ctx, {x: w/2, y: h/2}, colourGradientor(strokeAt/100, window.colors.stroke[0], window.colors.stroke[1]));
		strokeAt += strokeInc
		if(strokeAt > 100 || strokeAt < 0) strokeInc *= -1
		particles.forEach(function(particle) {
			particle.draw();
		});
	}());
}
function drawDPGtext(ctx, pos) {
	ctx.textAlign = 'center';
	ctx.fillStyle = window.colors.dpg;
	ctx.fillText('D i g i t a l   P s y c h e G e n e s i s', pos.x, pos.y+20);
}
function drawDPGtextStroke(ctx, pos, color) {
	ctx.textAlign = 'center';
	ctx.strokeStyle = 'rgb('+color[0]+','+color[1]+','+color[2]+')';
	ctx.lineWidth = 0.5;
	ctx.strokeText('D i g i t a l   P s y c h e G e n e s i s', pos.x, pos.y+20);
}

window.gCO = "lighten";
window.pause = false;
window.colors = {base: 'rgba(44, 76, 66)',
				 exp: ['rgba(50, 205, 50, 1)', 'rgba(50, 205, 50, 0.25)'],
				 parts: ['rgba(2, 202, 52, 0.75)', 'rgba(4, 139, 37, 1)'],
				 dpg: 'rgba(4, 5, 4)',
				mask: 'rgba(255, 255, 255, 1)',
				stroke: [['0', '100', '0'],['127', '255', '255'] ]
				};

function colourGradientor(p, rgb_beginning, rgb_end){

    var w = p * 2 - 1;
    var w1 = (w + 1) / 2.0;
    var w2 = 1 - w1;
    var rgb = [parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
        parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
            parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2)];
    return rgb;
};
