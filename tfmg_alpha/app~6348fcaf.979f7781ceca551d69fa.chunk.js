(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"resources/elements/dataEditor":function(e,n,i){"use strict";i.r(n),i.d(n,"DataEditor",(function(){return f})),i.d(n,"ListSuggestionService",(function(){return m}));var r,s,t,c=i("aurelia-framework"),a=i("+Aae"),o=i("Iab2");var l,d,p,u,g,b,f=(t=function(){function e(){var e,n,i,r;this.editList=null,this.eTypes=["crafter","miner","research","defense","offense"],e=this,n="editType",r=this,(i=s)&&Object.defineProperty(e,n,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0}),a.a.de=this,this.mgrs=a.a}var n=e.prototype;return n.detached=function(){this.editing=null,this.editList=null,this.editType=null},n.editTypeChanged=function(e){if(e){if("icons"==e)return this.editList=null,void(this.editing=null);this.editList=a.a.data[e],this.editing=null}},n.selectEdit=function(e){this.editing=a.a.data[this.editType][e],"entity"==this.editType&&(this.editing.crafting_categories?(this.eTypeSelect="crafter",this.editing.subType="crafter"):this.editing.resource_categories?(this.eTypeSelect="miner",this.editing.subType="miner"):this.editing.inputs?(this.eTypeSelect="research",this.editing.subType="research"):this.editing.defense_value?(this.eTypeSelect="defense",this.editing.subType="defense"):this.editing.offense_value&&(this.eTypeSelect="offense",this.editing.subType="offense"))},n.addNew=function(){this.editing={type:this.editType},"recipe"==this.editType&&(this.editing.ingredients=[{name:"__someitem__",amount:1}],this.editing.category="crafting",this.editing.results=[{name:"__someitem__",amount:1}],this.editing.enabled=!1),"technology"==this.editType&&(this.editing.prerequisites=["__sometech__"],this.editing.unlocks=["__somerecipe__"],this.editing.cost={ingredients:[["automation-science-pack",1]]})},n.saveItem=function(){"research"==this.eTypeSelect&&"string"==typeof this.editing.inputs&&(this.editing.inputs=this.editing.inputs.split(",")),a.a.data[this.editType][this.editing.name]=this.editing,this.editing=null},n.deleteItem=function(){delete a.a.data[this.editType][this.editing.name],delete this.editList[this.editing.name],this.editing=null},n.saveDataSet=function(){a.a.idb.set("dataSet",a.a.data),this.editList=null,this.editType=null},n.dlDataSet=function(){var e=new File([JSON.stringify(a.a.data)],"data_source.json",{type:"application/json"});Object(o.saveAs)(e)},n.close=function(){a.a.baseApp.viewPane.version="beta"},e}(),l=(r=t).prototype,d="editType",p=[c.e],u={configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}},b={},Object.keys(u).forEach((function(e){b[e]=u[e]})),b.enumerable=!!b.enumerable,b.configurable=!!b.configurable,("value"in b||b.initializer)&&(b.writable=!0),b=p.slice().reverse().reduce((function(e,n){return n(l,d,e)||e}),b),g&&void 0!==b.initializer&&(b.value=b.initializer?b.initializer.call(g):void 0,b.initializer=void 0),void 0===b.initializer&&(Object.defineProperty(l,d,b),b=null),s=b,r),m=function(){function e(e){this.type=e}var n=e.prototype;return n.suggest=function(e){if(""===e)return Promise.resolve([]);e=e.toLowerCase();var n=a.a.data[this.type].filter((function(n){return 0===n.name.toLowerCase().indexOf(e)})).map((function(e){return e.name}));return Promise.resolve(n)},n.getName=function(e){return e},e}()},"resources/elements/dataEditor.html":function(e,n,i){e.exports='<template>\r\n  <require from="./dataEditor.scss"></require>\r\n  <require from="./iconEditor"></require>\r\n  <header>\r\n    <h5 click.delegate="editType=\'item\'">Items</h5>\r\n    <h5 click.delegate="editType=\'recipe\'">Recipes</h5>\r\n    <h5 click.delegate="editType=\'technology\'">Technologies</h5>\r\n    <h5 click.delegate="editType=\'resource\'">Resources</h5>\r\n    <h5 click.delegate="editType=\'entity\'">Entities</h5>\r\n    <h5 click.delegate="editType=\'icons\'">Icons</h5>\r\n  </header>\r\n  <main>\r\n    <div if.bind="!editing">\r\n      <ul class="icon-list">\r\n        <img\r\n          repeat.for="each of editList | objectValues"\r\n          src.bind="mgrs.icon.getSrc(each.icon)"\r\n          click.delegate="selectEdit(each.name)"\r\n          >\r\n        </img>\r\n      </ul>\r\n    </div>\r\n    <div if.bind="editType==\'icons\'">\r\n      <icon-editor></icon-editor>\r\n    </div>\r\n    <div if.bind="editing">\r\n      Name: <input type="text" value.bind="editing.name"><br>\r\n      Icon: <input type="text" value.bind="editing.icon"><br>\r\n      <img src.bind="mgrs.icon.getSrc(editing.icon)"></img>\r\n    <div if.bind="editType==\'item\'">\r\n        StackSize: <input type="text" value.bind="editing.stack_size">\r\n      </div>\r\n      <div if.bind="editType==\'recipe\'">\r\n        Time: <input type="number" value.bind="editing.crafting_speed">\r\n        Enabled: <input type="checkbox" checked.bind="editing.enabled"><br>\r\n        Category: <input type="text" value.bind="editing.category"><br>\r\n        Ingredients: <textarea value.bind="editing.ingredients | jsonString" rows="6"></textarea><br>\r\n        Results: <textarea value.bind="editing.results | jsonString" rows="6"></textarea><br>\r\n      </div>\r\n      <div if.bind="editType==\'technology\'">\r\n        Enabled: <input type="checkbox" checked.bind="editing.enabled">\r\n        Hidden: <input type="checkbox" checked.bind="editing.hidden"><br>\r\n        Prereqs:<textarea value.bind="editing.prerequisites | jsonString" rows="6"></textarea><br>\r\n        Unlocks:<textarea value.bind="editing.unlocks | jsonString" rows="6"></textarea><br>\r\n        Cost: <input type="number" value.bind="editing.cost.count">\r\n        Time: <input type="number" value.bind="editing.cost.time"><br>\r\n        Ingredients: <textarea value.bind="editing.cost.ingredients | jsonString" rows="6"></textarea>\r\n      </div>\r\n      <div if.bind="editType==\'resource\'">\r\n        Time: <input type="numebr" value.bind="editing.mining_time">\r\n        Results: <input type="text" value.bind="editing.mining_results"><br>\r\n        Cat:  <input type="text" value.bind="editing.category">\r\n      </div>\r\n      <div if.bind="editType==\'entity\'">\r\n        Space used: <input value.bind="editing.space"></input>\r\n        <fieldset>\r\n          <label repeat.for="eType of eTypes">\r\n            <input type="radio" name="eType" value.bind="eType" checked.bind="eTypeSelect">\r\n            ${eType}\r\n          </label>\r\n        </fieldset>\r\n        <div if.bind="eTypeSelect==\'crafter\'">\r\n          <h5>Crafter</h5>\r\n          CraftCats: <textarea value.bind="editing.crafting_categories"></textarea>\r\n          Speed:<input type="number" value.bind="editing.crafting_speed">\r\n        </div>\r\n        <div if.bind="eTypeSelect==\'miner\'">\r\n          <h5>Miner</h5>\r\n          ResCats: <textarea value.bind="editing.resource_categories"></textarea>\r\n          Speed:<input type="number" value.bind="editing.mining_speed">\r\n        </div>\r\n        <div if.bind="eTypeSelect==\'research\'">\r\n          <h5>Researcher</h5>\r\n          Inputs: <textarea value.bind="editing.inputs"></textarea>\r\n          Speed: <input type="number" value.bind="editing.researching_speed">\r\n        </div>\r\n        <div if.bind="eTypeSelect==\'defense\'">\r\n          <h5>Defense</h5>\r\n          Value: <input type="number" value.bind="editing.defense_value">\r\n          Range: <input type="number" value.bind="editing.defense_range">\r\n        </div>\r\n        <div if.bind="eTypeSelect==\'offense\'">\r\n          <h5>Offense</h5>\r\n          Attack: <input type="number" value.bind="editing.offense_value">\r\n          Supply: <input type="number" value.bind="editing.offense_supply">\r\n          Radar: <input type="number" value.bind="editing.radar">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div if.bind="editType==\'icons\'">\r\n      <div if.bind="editing">\r\n        ${editing.name}\r\n      </div>\r\n      <div if.bind="!editing">\r\n        Icons\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer class="btn-group">\r\n    <span class="btn btn-secondary" click.delegate="editing = null" if.bind="editing">cancel</span>\r\n    <span class="btn btn-danger" click.delegate="deleteItem()" if.bind="editing">Delete</span>\r\n    <span class="btn btn-success" click.delegate="saveItem()" if.bind="editing">save Item</span>\r\n    \r\n    <span class="btn btn-secondary" click.delegate="close()" if.bind="!editing">Close</span>\r\n    <span class="btn btn-primary" click.delegate="addNew()" if.bind="!editing && editType">Add</span>\r\n    <span class="btn btn-info" click.delegate="saveDataSet()" if.bind="!editing">save list</span>\r\n    <span class="btn btn-light" click.delegate="dlDataSet()" if.bind="!editing">download</span>\r\n  </footer>\r\n</template>\r\n'},"resources/elements/dataEditor.scss":function(e,n,i){(n=i("JPst")(!1)).push([e.i,"data-editor{width:100%;height:100%;position:relative;display:grid;grid-template-columns:20% auto;grid-template-rows:10% auto max(8%,15px);-moz-column-gap:10px;column-gap:10px;row-gap:5px}data-editor header{overflow-x:auto;grid-row:1/2;grid-column:1/3}data-editor header h5{display:inline-block}data-editor aside{overflow-y:scroll;overflow-x:auto;grid-row:2/3;grid-column:1/2}data-editor aside::-webkit-scrollbar{width:10px}data-editor aside ol{list-style-type:none;-webkit-padding-start:0;padding-inline-start:0}data-editor main{grid-row:2/3;grid-column:1/3;overflow-y:auto}data-editor footer{grid-row:3/4;grid-column:1/3}data-editor textarea{resize:both;width:100%}data-editor input,data-editor textarea{background-color:#483d8b;color:#db7093}data-editor .list-group .list-group-item{padding:2px 4px;background-color:#483d8b}data-editor img{max-height:48px;max-width:48px;min-width:16px;min-height:16px;border:2px dotted #006400;border-radius:4px}#editDataSource{height:100vh;width:100vw}",""]),e.exports=n},"resources/elements/factoryBlocks/busView.html":function(e,n){e.exports='<template>\r\n  <scope-var var.bind="$scope={busLine: viewPane.showingItem}"></scope-var>\r\n  <section\r\n    id="viewBusLine"\r\n    click.capture="CCC.provide($event, \'at\', \'factoryBus\', viewPane.showingItem)"\r\n    mouseenter.trigger = "tooltip = null"\r\n    class="container">\r\n    <div class="row">\r\n      <div class="col">\r\n        Size: ${$scope.busLine.size}\r\n      </div>\r\n      <div class="col">\r\n        <h5 class="bus_header">\r\n          ${$scope.busLine.name}-\r\n          <icon-base\r\n            click.delegate="CCC.issue(\'factoryBus.selectSubIcon\', {}, $event)"\r\n            item.bind="$scope.busLine.subIcon"\r\n          ></icon-base>)</h5>\r\n      </div>\r\n      <div class="col text-end">\r\n        Complexity: ${$scope.busLine.complexity}\r\n      </div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="col busLine_tut_inProgress">\r\n        <span\r\n          show.bind="$scope.busLine.clogged"\r\n          click.delegate="CCC.issue(\'factoryBus.clearClog\', {}, $event)"\r\n          >Clear Clog</span>\r\n        <div class="row">\r\n          <icon-base\r\n            repeat.for="item of IgorJs.getObjId($scope.busLine.processors.central).items"\r\n            if.bind="item.count"\r\n            item.bind="item.name"\r\n            count.bind="item.count"\r\n          ></icon-base>\r\n          <span>\r\n            Next stack at: ${Math.ceil($scope.busLine.size/50)*50}\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr class="bus"/>\r\n    <div class="row">\r\n      <div class="col">\r\n        <div>\r\n          <h5>Sources</h5>\r\n          <span\r\n            class="progressBarBase busLine_expandProcessing"\r\n            css="border-image-source: linear-gradient(to right, green 0%, green ${$scope.busLine.processors.source.xferTimer/$scope.busLine.processors.source.xferTicks*100-10}%, red ${$scope.busLine.processors.source.xferTimer/$scope.busLine.processors.source.xferTicks*100+10}%, red )"\r\n          >Acquisition</span>\r\n          Qty: ${$scope.busLine.processors.source.xferQty}\r\n          <span\r\n            click.delegate="CCC.issue(\'factoryBus.expandProcessing\', {\'dir.string\':\'source\'}, $event)"\r\n            mouseenter.trigger="tooltip = CCC.utilityFn(\'busLine_Costs\', $scope.busLine.$_id, {which: \'input_processing\'})"\r\n            class="busLine_expandProcessing fas fa-plus-square fa_icon_sm"\r\n          ></span>\r\n        </div>\r\n        <span id="busLine_sources">\r\n          Max Sources: ${$scope.busLine.connections.maxSources}\r\n          <span \r\n            id="busLine_sources_add"\r\n            mouseenter.trigger="tooltip = CCC.utilityFn(\'busLine_Costs\', $scope.busLine.$_id, {which: \'expand_input_sources\'})"\r\n            click.delegate="CCC.issue(\'factoryBus.expandBus\', {\'dir.string\':\'source\'}, $event)"\r\n            class="fas fa-plus-square fa_icon_sm"\r\n          ></span>\r\n        </span><br>\r\n        <div repeat.for="source of $scope.busLine.connections.sources">\r\n          <span\r\n            class="fas fa-sign-in-alt fa_icon_sm"\r\n            click.delegate="showItem = {item: source, view:\'viewFacBlock\'}"\r\n          ></span>\r\n          ${IgorJs.getObjId(source).name}\r\n          <icon-base\r\n            repeat.for="item of IgorJs.getObjId(source, \'buffers.out\').items & signal:\'generalUpdate\'"\r\n            item.bind="item.name"\r\n            count.bind="item.count"\r\n          ></icon-base>\r\n          <span if.bind="$scope.busLine.processors.source.xferTarget==$index">&lt;--</span>\r\n        </div>\r\n      </div>\r\n      <div class="col">\r\n        <div>\r\n          <h5 class="text-end">Drains</h5>\r\n          <span\r\n          class="progressBarBase busLine_expandProcessing"\r\n          css="border-image-source: linear-gradient(to right, green 0%, green ${$scope.busLine.processors.drain.xferTimer/$scope.busLine.processors.drain.xferTicks*100-10}%, red ${$scope.busLine.processors.drain.xferTimer/$scope.busLine.processors.drain.xferTicks*100+10}%, red )"\r\n          >Deposition</span>\r\n          Qty: ${$scope.busLine.processors.drain.xferQty}\r\n          <span\r\n            class="fas fa-plus-square fa_icon_sm busLine_expandProcessing"\r\n            click.delegate="CCC.issue(\'factoryBus.expandProcessing\', {\'dir.string\':\'drain\'}, $event)"\r\n            mouseenter.trigger="tooltip = CCC.utilityFn(\'busLine_Costs\', $scope.busLine.$_id, {which: \'output_processing\'})"\r\n          ></span>\r\n        </div>\r\n        <span id="busLine_drains">\r\n          Max Drains: ${$scope.busLine.connections.maxDrains}\r\n          <span id="busLine_drains_add"\r\n            click.delegate="CCC.issue(\'factoryBus.expandBus\', {\'dir.string\':\'drain\'}, $event)"\r\n            mouseenter.trigger="tooltip = CCC.utilityFn(\'busLine_Costs\', $scope.busLine.$_id, {which: \'expand_output_drains\'})"\r\n            class="fas fa-plus-square fa_icon_sm"\r\n          ></span>\r\n        </span>\r\n        <br>\r\n        <div repeat.for="drain of $scope.busLine.connections.drains">\r\n          <span if.bind="$scope.busLine.processors.drain.xferTarget==$index">&gt;--</span>\r\n          <span if.bind="$scope.busLine.processors.drain.xferTarget!=$index">&nbsp;&nbsp;&nbsp;</span>\r\n          <icon-base\r\n            repeat.for="item of IgorJs.getObjId(drain, \'buffers.in\').items & signal:\'generalUpdate\'"\r\n            item.bind="item.name"\r\n            count.bind="item.count"\r\n          ></icon-base>\r\n          ${IgorJs.getObjId(drain).name}\r\n          <span\r\n            class="fas fa-sign-out-alt fa_icon_sm"\r\n            click.delegate="showItem = {item: drain, view:\'viewFacBlock\'}"\r\n          ></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</template>\r\n'},"resources/elements/factoryBlocks/mainView.html":function(e,n){e.exports='<template>\r\n<scope-var var.bind="$scope={facBlock: viewPane.showingItem}"></scope-var>\r\n<section id="viewFacBlock" click.capture="CCC.provide($event, \'at\', \'factoryBlock\', $scope.facBlock )" class="container">\r\n  <div class=\'row\'>\r\n    <span class="col">Land Size : ${$scope.facBlock.size}</span>\r\n    <span class="col">\r\n      <h5>\r\n        ${$scope.facBlock.name}-\r\n        <icon-base\r\n          class="row ib_sm"\r\n          click.delegate="CCC.issue(\'factoryBlock.selectSubIcon\', {}, $event)"\r\n          item.bind="$scope.facBlock.subIcon"\r\n        ></icon-base>)</h5>\r\n    </span>\r\n\r\n    <span class="col">Complexity: ${$scope.facBlock.complexity}</span>\r\n  </div>\r\n  <div class="row bufferRow">\r\n    <div\r\n      if.bind="$scope.facBlock.buffers.in"\r\n      click.capture="CCC.provide($event, \'which\', \'buffer\', $scope.facBlock.buffers.in)"\r\n      class="col">\r\n      <div class="row">\r\n        <div\r\n          class="col"\r\n          repeat.for="sourceIdx of $scope.facBlock.connections.maxSources"\r\n        >\r\n          <span\r\n            class="fas fa-sign-out-alt fa_icon_sm"\r\n            click.delegate="showItem = {item: IgorJs.getObjId($scope.facBlock.connections.sources[sourceIdx]), view:\'viewFacBlock\'}"\r\n          ></span>:\r\n          <span\r\n            class="facBlockIn connection"\r\n            click.delegate="CCC.issue(\'factoryBus.connectTo\', \r\n                {\r\n                    \'$_factoryBusXlist\': IgorJs.arrayFromIds(globals.facBlocks.buses),\r\n                    \'dir.string\': \'input\',\r\n                    \'connectTo.block\': $scope.facBlock.$_id,\r\n                    \'current.bus\': $scope.facBlock.connections.sources[sourceIdx] || -1\r\n                }, $event)"\r\n          >\r\n            ${IgorJs.getObjId($scope.facBlock.connections.sources[sourceIdx]).name || "none" & signal:"generalUpdate"}\r\n            <span class="fas fa-edit fa_icon_sm"></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <icon-base\r\n          repeat.for="item of IgorJs.getObjId($scope.facBlock.buffers.in).items & signal:\'generalUpdate\'"\r\n          item.bind="item"\r\n          count.bind="item.count"\r\n          click.delegate="CCC.issue(\'entity.bufferFill\', {\'item.name\': item.name, \'at.entity\': \'temp_null\'}, $event)"\r\n        ></icon-base>\r\n      </div>\r\n    </div>\r\n    <div\r\n        show.bind="IgorJs.getObjId($scope.facBlock.buffers.internal).items"\r\n        click.capture="CCC.provide($event, \'which\', \'buffer\', $scope.facBlock.buffers.internal)"\r\n        class="col">\r\n        <div class="row">\r\n          <span class="col fab fa-creative-commons-sa fa_icon_sm"></span>\r\n        </div>\r\n        <div class="row">\r\n          <div repeat.for="item of IgorJs.getObjId($scope.facBlock.buffers.internal).items & signal:\'generalUpdate\'" class="col interItem">\r\n            <icon-base if.bind="item" item.bind="item" count.bind="item.count"></icon-base>\r\n            <span\r\n              class="fas fa-level-up-alt fa-rotate-90"\r\n              if.bind="item.name"\r\n              click.delegate="CCC.issue(\'entity.bufferFill\', {\'item.name\': item.name, \'at.entity\': \'temp_null\'}, $event)"\r\n            ></span>\r\n            <span\r\n              class="fas fa-level-down-alt"\r\n              if.bind="item.name"\r\n              click.delegate="CCC.issue(\'entity.bufferCollect\', {\'item.name\': item.name, \'at.entity\': \'temp_null\', }, $event)"\r\n            ></span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div\r\n      if.bind="$scope.facBlock.buffers.out"\r\n      click.capture="CCC.provide($event, \'which\', \'buffer\', $scope.facBlock.buffers.out)"\r\n      class="col">\r\n      <div class="row">\r\n        <div\r\n          class="col"\r\n          repeat.for="drainIdx of $scope.facBlock.connections.maxDrains"\r\n        >\r\n          <span\r\n            class="fas fa-sign-in-alt fa_icon_sm"\r\n            click.delegate="showItem = {item: IgorJs.getObjId($scope.facBlock.connections.drains[drainIdx]), view:\'viewFacBlock\'}"\r\n          ></span>:\r\n          <span\r\n            class="facBlockOut connection"\r\n            click.delegate="CCC.issue(\'factoryBus.connectTo\',\r\n                    {\r\n                      \'$_factoryBusXlist\': IgorJs.arrayFromIds(globals.facBlocks.buses),\r\n                      \'dir.string\': \'output\',\r\n                      \'connectTo.block\': $scope.facBlock.$_id,\r\n                      \'current.bus\': $scope.facBlock.connections.drains[drainIdx] || -1\r\n                    }, $event)"\r\n          >\r\n            ${IgorJs.getObjId($scope.facBlock.connections.drains[drainIdx]).name || "none" & signal:\'generalUpdate\'}\r\n            <span class="fas fa-edit fa_icon_sm"></span>\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <icon-base \r\n          repeat.for="item of IgorJs.getObjId($scope.facBlock.buffers.out).items & signal:\'generalUpdate\'"\r\n          if.bind="item" \r\n          item.bind="item" \r\n          count.bind="item.count"\r\n          click.delegate="CCC.issue(\'entity.bufferCollect\', {\'item.name\': item.name, \'at.entity\': \'temp_null\'}, $event)"\r\n        ></icon-base>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="row buffersEdit">\r\n    <div if.bind="$scope.bufferEdit">\r\n      ${$scope.bufferEdit.$_id}\r\n    </div>\r\n  </div>\r\n  <div\r\n    class="productionLines row"\r\n    repeat.for="line of ChameView.viewFn.sort(IgorJs.arrayFromIds($scope.facBlock.factoryLines)) & signal:\'generalUpdate\'"\r\n    click.capture="CCC.provide($event, \'at\', \'factoryLine\', line)"\r\n    >\r\n    <span\r\n      if.bind="line.buildingType"\r\n      class="setRecipe col"\r\n      click.delegate="CCC.issue(\'factoryLine.setRecipe\', {$_recipeXlist: ChameView.viewFn.recipeFilter(line.crafting_categories, true)}, $event)"\r\n      >\r\n      Recipe: \r\n        <icon-base\r\n          if.bind="line.recipe"\r\n          item.bind="line.recipe"\r\n          class="progressBarBase"\r\n          css="border-image-source: linear-gradient(to right, green ${line.processing_ticks/line.processing_time*100-5}%, red ${line.processing_ticks/line.processing_time*100+10}% )"\r\n          ></icon-base>\r\n        <span if.bind="!line.recipe">None</span>\r\n    </span>\r\n    <span class="col">\r\n      <span\r\n        if.bind="!line.buildingType"\r\n        todo="building selection dialog needs to be more restricted"\r\n        click.delegate="CCC.issue(\'factoryLine.setBuilding\', null, $event)"\r\n        class="setBuildingType"\r\n      >Set Building Type...</span>\r\n      <span\r\n        if.bind="line.buildingType"\r\n        click.delegate="CCC.issue(\'factoryLine.addBuilding\', null, $event)"\r\n      >\r\n        <icon-base item.bind="line.buildingType"></icon-base>\r\n        : ${line.built}\r\n      </span>\r\n    </span>\r\n    <span\r\n      class="col"\r\n      click.delegate="CCC.issue(\'factoryLine.prep\', null, $event)"\r\n      mouseenter.trigger="tooltip=CCC.utilityFn(\'factoryLine.toolTips\', line.$_id, {which: \'foundation\'})"\r\n      if.bind="line.buildingType"\r\n    >\r\n      Prepped spaces: ${line.prepped}\r\n      <span\r\n        class="fas fa-plus-square fa_icon_sm"\r\n      ></span>\r\n    </span>\r\n    <span class="col">\r\n      <span\r\n        class="fas fa-sort-up"\r\n        click.delegate="CCC.issue(\'object.move\', {\'which.obj\': line, \'list.objs\': $scope.facBlock.factoryLines, \'dir.number\':-1}, $event)"\r\n        show.bind="!$first"\r\n      ></span>\r\n      <span\r\n        class="fas fa-trash-alt"\r\n        click.delegate="CCC.issue(\'object.delete\', {\'which.obj\': line, \'list.objs\': $scope.facBlock.factoryLines}, $event)"\r\n      ></span>\r\n      <span\r\n        class="fas fa-sort-down"\r\n        click.delegate="CCC.issue(\'object.move\', {\'which.obj\': line, \'list.objs\': $scope.facBlock.factoryLines, \'dir.number\':1}, $event)"\r\n        show.bind="!$last"\r\n      ></span>\r\n    </span>\r\n  </div>\r\n  <div note="add new line to factory block" class="row">\r\n    <span\r\n      mouseenter.trigger="CCC.utilityFn(\'facBlock.__tooltips\', $scope.facBlock.$_id, {which: \'addLine\'})"\r\n      click.delegate="CCC.issue(\'factoryBlock.addLine\', null, $event)"\r\n    >Add Line</span>\r\n  </div>\r\n</section>\r\n</template>\r\n'},"resources/elements/factoryBlocks/resView.html":function(e,n){e.exports='<template>\r\n    <scope-var var.bind="$scope={resBlock: viewPane.showingItem}"></scope-var>\r\n    <section\r\n        id="viewResBlock"\r\n        click.capture="CCC.provide($event, \'at\', \'ResourceBlock\', viewPane.showingItem)"\r\n        class="container"\r\n    >\r\n        <div class="row">\r\n            <span class="col">Space Used: ${$scope.resBlock.spaceUsed}</span>\r\n            <h3 class="col">${$scope.resBlock.name}</h3>\r\n            <span class="col">Complexity: ${$scope.resBlock.complexity}</span>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col">\r\n                <span\r\n                    id="resBlock_foundation"\r\n                    click.delegate="CCC.issue(\'resBlock.prepSpace\', {}, $event)"\r\n                    mouseenter.trigger="tooltip = CCC.utilityFn(\'resBlock.__foundationCost\', $scope.resBlock.$_id)"\r\n                >Foundations: ${$scope.resBlock.prepped}</span>\r\n                <br>\r\n                <span\r\n                    id="resBlock_miners"\r\n                    click.delegate="CCC.issue(\'resBlock.buildMine\', {}, $event)"\r\n                    mouseenter.trigger="tooltip = CCC.utilityFn(\'resBlock.__minerCost\', $scope.resBlock.$_id)"\r\n                >Miners: ${$scope.resBlock.built}</span>\r\n            </div>\r\n            <div class="col">\r\n                <h5\r\n                    class="progressBarBase" \r\n                    css="border-image-source: linear-gradient(to left, red ${$scope.resBlock.mining_ticks/$scope.resBlock.patchProperties.mining_time*100}%, green ${$scope.resBlock.mining_ticks/$scope.resBlock.patchProperties.mining_time*100}%"\r\n                >\r\n                    <icon-base\r\n                        item.bind="$scope.resBlock.patchProperties.resource"\r\n                        if.bind="$scope.resBlock.patchProperties.resource"\r\n                        count.bind="CCC.utilityFn(\'inventory.total\', $scope.resBlock.buffers.out, {name: $scope.resBlock.patchProperties.resource}) & signal: \'bufferUpdate\'"\r\n                        max_fill.bind="IgorJs.getObjId($scope.resBlock.buffers.out).stackSize"\r\n                        click.delegate="CCC.issue(\'entity.bufferCollect\', {\'which.buffer\': $scope.resBlock.output, \'at.entity\': \'temp_null\', \'item.name\':$scope.resBlock.patchProperties.resource}, $event)"\r\n                    ></icon-base>\r\n                </h5>\r\n                <p\r\n                    class="resBlock_setResource"\r\n                    click.delegate="CCC.issue(\'resBlock.setResource\', {\'$_resourceXlist\': ChameView.viewFn.objectValues(dataSet.resource)}, $event )"\r\n                >Change Resource</p>\r\n            </div>\r\n            <div class="col">\r\n                <div class="resBlock connection">\r\n                    <span\r\n                        class="fas fa-sign-out-alt fa_icon_sm"\r\n                        click.delegate="showItem = {item: IgorJs.getObjId($scope.resBlock.connections.drains[0]), view:\'viewFacBlock\'}"\r\n                    ></span>\r\n                    <span\r\n                        click.delegate="CCC.issue(\'factoryBus.connectTo\', \r\n                            {   \'dir.string\': \'output\',\r\n                                \'$_factoryBusXlist\': IgorJs.arrayFromIds(globals.facBlocks.buses),\r\n                                \'connectTo.block\' : $scope.resBlock.$_id,\r\n                                \'current.bus\': $scope.resBlock.connections.drains[0] || -1\r\n                            }, $event)"\r\n                    >\r\n                        ${IgorJs.getObjId($scope.resBlock.connections.drains[0]).name || "none" & signal:\'generalUpdate\'}\r\n                        <span class="fas fa-edit fa_icon_sm"></span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        </section>\r\n</template>'},"resources/elements/factoryBlocks/techBlock.html":function(e,n){e.exports='<template>\r\n    <scope-var var.bind="$scope={techBlock: viewPane.showingItem}"></scope-var>\r\n    <section\r\n        click.capture="CCC.provide($event, \'at\', \'techBlock\', viewPane.showingItem)"\r\n        mouseenter.trigger = "tooltip = null"\r\n        class="container"\r\n    >\r\n        <div class="row">\r\n            <span class="col">Space Used: ${$scope.techBlock.spaceUsed}</span>\r\n            <h5 class="col">${$scope.techBlock.name}</h5>\r\n            <span class="col">Complexity: ${$scope.techBlock.complexity}</span>\r\n        </div>\r\n        <div class="row">\r\n            <div class="col">\r\n                <div class="techBlock connection">\r\n                    <span\r\n                        class="fas fa-sign-in-alt fa_icon_sm "\r\n                        click.delegate="showItem = {item: IgorJs.getObjId($scope.techBlock.connections.sources[0]), view:\'viewFacBlock\'}"\r\n                    ></span>\r\n                    <span\r\n                        click.delegate="CCC.issue(\'factoryBus.connectTo\',\r\n                        { \'dir.string\': \'input\',\r\n                        \'$_factoryBusXlist\': IgorJs.arrayFromIds(globals.facBlocks.buses),\r\n                        \'connectTo.block\': $scope.techBlock.$_id,\r\n                        \'current.bus\': $scope.techBlock.connections.sources[0] || -1\r\n                        })"\r\n                    >\r\n                        ${IgorJs.getObjId($scope.techBlock.connections.sources[0]).name || "none" & signal:\'generalUpdate\'}\r\n                        <span class="fas fa-edit fa_icon_sm"></span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <div class="col">\r\n                <icon-base\r\n                    repeat.for="each of IgorJs.getObjId($scope.techBlock.buffers.in).items"\r\n                    item.bind="each.name"\r\n                    count.bind="each.count"\r\n                    click.delegate="CCC.issue(\'entity.bufferFill\', {\'which.buffer\': $scope.techBlock.buffers.in, \'item.name\': each.name}, $event)"\r\n                ></icon-base>\r\n            </div>\r\n        </div>\r\n        <div class="row">\r\n            <div\r\n                class="col ${$scope.techBlock.research_time && \'progressBarBase\'} ${$scope.techBlock.stalled && \'stalled\'}"\r\n                css="border-image-source: linear-gradient(to left, red ${$scope.techBlock.research_ticks/$scope.techBlock.research_time*100-5}%, green ${$scope.techBlock.research_ticks/$scope.techBlock.research_time*100+10}%)"\r\n            >\r\n                <span\r\n                    id="techBlock_foundation"\r\n                    click.delegate="CCC.issue(\'techBlock.prepSpace\', {}, $event)"\r\n                    mouseenter.trigger="tooltip = CCC.utilityFn(\'techBlock.toolTips\', $scope.techBlock.$_id, {which: \'foundation\'})"\r\n                >Foundations: ${$scope.techBlock.prepped}</span><br>\r\n                <span\r\n                    id="techBlock_labs"\r\n                    click.delegate="CCC.issue(\'techBlock.buildLab\', {}, $event)"\r\n                    mouseenter.trigger="tooltip = CCC.utilityFn(\'techBlock.toolTips\', $scope.techBlock.$_id, {which: \'buildLab\'})"\r\n                >Labs: ${$scope.techBlock.built}</span><br>\r\n            </div>\r\n            <div class="col">\r\n                <span>Tech Branch: ${$scope.techBlock.techTreeClass}</span><br>\r\n                <span>${globals.research.progressing.name || "No Research" & signal:\'generalUpdate\'}</span><br>\r\n                <span show.bind="globals.research.progressing">\r\n                     ${globals.research[globals.research.progressing.name].completeUnits}\r\n                    /${globals.research.progressing.cost.count}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</template>'}}]);
//# sourceMappingURL=app~6348fcaf.979f7781ceca551d69fa.bundle.map