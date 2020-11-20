self.addEventListener('install', function(event) {
})

self.addEventListener("activate", function(event) {
	console.log('activated')
	console.log(event)
})