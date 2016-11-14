/******/!function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}// webpackBootstrap
/******/
var a={};return e.m=t,e.c=a,e.p="",e(0)}([function(t,e,a){"use strict";var n=a(1),i=a(2),o=a(3),l=a(4),r=a(5),d=a(6),c=a(7);angular.module("tollminderAdmin",["ngSanitize","ngMessages","ui.router","ngMaterial","toastr","md.data.table"]).constant("API","http://localhost:7000").config(n.config).config(i.routerConfig).run(o.runBlock).controller("RoadListController",l.RoadListController).controller("EntityController",r.EntityController).controller("DialogController",d.DialogController).service("CrudService",c.CrudService)},function(t,e){"use strict";function a(t,e,a){"ngInject";t.debugEnabled(!0),a.theme("default").primaryPalette("blue-grey"),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}a.$inject=["$logProvider","toastrConfig","$mdThemingProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=a},function(t,e){"use strict";function a(t,e){"ngInject";e.html5Mode=!0,t.state("roadList",{url:"/",templateUrl:"app/views/roadList.html",controller:"RoadListController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"}],child:"tollRoad"}}).state("tollRoad",{url:"/tollRoad/{_id}",templateUrl:"app/views/entity.html",controller:"EntityController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"},{title:"latitude",value:0,type:"number"},{title:"longitude",value:0,type:"number"}],thead:["Way Point name","Latitude","Longitude"],tbody:["name","latitude","longitude"],child:"wayPoint",back:"home"}}).state("wayPoint",{url:"/wayPoint/{_id}",templateUrl:"app/views/entity.html",controller:"EntityController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"},{title:"latitude",value:0,type:"number"},{title:"longitude",value:0,type:"number"},{title:"action",value:"exit",type:"select",options:["entrance","bridge","exit"]}],thead:["Toll Point name","Latitude","Longitude","Action"],tbody:["name","latitude","longitude","action"],child:"tollPoint"}}),e.otherwise("/")}a.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=a},function(t,e){"use strict";function a(t){"ngInject";t.debug("runBlock end")}a.$inject=["$log"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=a},function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();e.RoadListController=function(){function t(e,n,i,o){"ngInject";a(this,t),this.dialog=e,this.log=n,this.CRUD=i,this.state=o,this.roads=[],this.getRoads()}return t.$inject=["$mdDialog","$log","CrudService","$state"],n(t,[{key:"getRoads",value:function(){var t=this;this.CRUD.get("tollRoad").then(function(e){return t.roads=e.data})["catch"](this.log.debug)}},{key:"showModal",value:function(t){this.dialog.show({controller:"DialogController",controllerAs:"dialog",templateUrl:"app/views/modals/dialog.html",clickOutsideToClose:!0,bindToController:!0,locals:{data:t}})}},{key:"remove",value:function(t){var e=this,a=this.dialog.confirm().title("Are you sure?").textContent("Would you like to delete this road?").ok("Yes").cancel("No");this.dialog.show(a).then(function(){return e.CRUD.remove("tollRoad",t)}).then(function(){return e.state.reload()})["catch"](function(){return e.log.debug("canceled")})}}]),t}()},function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();e.EntityController=function(){function t(e,n,i,o){"ngInject";a(this,t),this.dialog=e,this.log=n,this.state=o,this.CRUD=i,this.mappingField=null,this.data={},this.log.debug(this.state),this.getEntity()}return t.$inject=["$mdDialog","$log","CrudService","$state"],n(t,[{key:"getEntity",value:function(){var t=this;this.CRUD.get(this.state.current.name,this.state.params._id).then(function(e){e.data.hasOwnProperty("_wayPoints")&&(t.mappingField="_wayPoints"),e.data.hasOwnProperty("_tollPoints")&&(t.mappingField="_tollPoints"),t.data=e.data})["catch"](this.log.error)}},{key:"showModal",value:function(t){this.dialog.show({controller:"DialogController",controllerAs:"dialog",templateUrl:"app/views/modals/dialog.html",clickOutsideToClose:!0,bindToController:!0,locals:{data:t}})}},{key:"remove",value:function(t){var e=this,a=this.dialog.confirm().title("Are you sure?").textContent("Would you like to delete this "+this.state.current.data.child+"?").ok("Yes").cancel("No");this.dialog.show(a).then(function(){return e.CRUD.remove(e.state.current.data.child,t)}).then(function(){return e.state.reload()})["catch"](function(){return e.log.debug("canceled")})}}]),t}()},function(t,e){"use strict";function a(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();e.DialogController=function(){function t(e,i,o,l){"ngInject";var r=this;n(this,t),this.upd=this.data?!0:!1,this.dialog=e,this.CRUD=i,this.state=o,this.log=l,this.schema=this.state.current.data.schema,this.document=a({},"_"+this.state.current.name,this.state.params._id),this.data&&(this.document._id=this.data._id),this.schema.map(function(t){return r.document[t.title]=r.data?r.data[t.title]:t.value}),this.log.debug(this.data)}return t.$inject=["$mdDialog","CrudService","$state","$log"],i(t,[{key:"save",value:function(){var t=this;this.form.$valid&&this.CRUD.save(this.state.current.data.child,this.document,this.upd).then(function(e){t.log.debug(e),t.dialog.hide(),t.state.reload()})["catch"](this.log.error)}},{key:"hide",value:function(){this.dialog.hide()}}]),t}()},function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();e.CrudService=function(){function t(e,n){"ngInject";a(this,t),this.API=n,this.http=e}return t.$inject=["$http","API"],n(t,[{key:"save",value:function(t,e,a){return a?this.http.put(this.API+"/"+t+"/"+e._id,e):this.http.post(this.API+"/"+t+"/",e)}},{key:"get",value:function(t,e){return e?this.http.get(this.API+"/"+t+"/"+e):this.http.get(this.API+"/"+t)}},{key:"remove",value:function(t,e){return this.http["delete"](this.API+"/"+t+"/"+e)}}]),t}()}]),angular.module("tollminderAdmin").run(["$templateCache",function(t){t.put("app/views/entity.html",'<div class=wrapper><md-button ng-if="ctrl.state.current.name == \'tollRoad\'" ui-sref=roadList>to road list</md-button><md-button ng-if="ctrl.state.current.name == \'wayPoint\'" ui-sref="tollRoad({_id: ctrl.data._tollRoad._id})">to {{ctrl.data._tollRoad.name}}</md-button><div layout=row layout-align="space-between center"><div><h2><strong class=capitalize>{{ctrl.state.current.name}}</strong> : {{ctrl.data.name}}</h2><i>Created at: {{ctrl.data.createdAt | date}}</i><br><i ng-if=ctrl.data.updatedAt>Last update: {{ctrl.data.updatedAt | date}}</i></div><md-button class=create ng-click=ctrl.showModal()>Create new {{ctrl.state.current.data.child}}</md-button></div><hr><table md-table><thead md-head><tr md-row><th md-column ng-repeat="title in ctrl.state.current.data.thead"><span>{{title}}</span></th><th md-column md-numeric><span></span></th></tr></thead><tbody md-body><tr md-row ng-repeat="row in ctrl.data[ctrl.mappingField] track by row._id"><td md-cell ng-repeat="cell in ctrl.state.current.data.tbody" class=capitalize><a ng-href="{{ctrl.state.href(ctrl.state.current.data.child, {_id : row._id})}}" ng-if="cell == \'name\'">{{row[cell]}} </a><span ng-if="cell !== \'name\'">{{row[cell]}}</span></td><td md-cell><md-button class=md-icon-button ng-click=ctrl.showModal(row)><i class="fa fa-edit" aria-hidden=true></i></md-button><md-button class=md-icon-button ng-click=ctrl.remove(row._id)><i class="fa fa-trash-o" aria-hidden=true></i></md-button></td></tr></tbody></table></div>'),t.put("app/views/roadList.html",'<div class=wrapper><div><md-button class=create ng-click=ctrl.showModal()>Create new Toll Road</md-button></div><table md-table><thead md-head><tr md-row><th md-column><span>Toll Road</span></th><th md-column md-numeric><span>Way Points</span></th><th md-column md-numeric><span></span></th></tr></thead><tbody md-body><tr md-row ng-repeat="road in ctrl.roads"><td md-cell><a ui-sref="tollRoad({_id: road._id})">{{road.name}}</a></td><td md-cell>{{road._wayPoints.length}}</td><td md-cell><md-button class=md-icon-button ng-click=ctrl.showModal(road)><i class="fa fa-edit" aria-hidden=true></i></md-button><md-button class=md-icon-button ng-click=ctrl.remove(road._id)><i class="fa fa-trash-o" aria-hidden=true></i></md-button></td></tr></tbody></table><md-table-pagination md-limit-options=[20,35,50] md-total={{ctrl.roads.length}}></md-table-pagination></div>'),t.put("app/views/modals/dialog.html",'<md-dialog><form name=dialog.form ng-submit=dialog.save() novalidate><md-toolbar><div class=md-toolbar-tools><h3>{{dialog.upd ? "Update" : "Create new " + dialog.state.current.data.child }}</h3><span flex></span><md-button class=md-icon-button ng-click=dialog.hide()>&#10005</md-button></div></md-toolbar><md-dialog-content><div class=md-dialog-content><md-input-container ng-repeat="field in dialog.schema"><label class=capitalize>{{field.title}}</label><input ng-if="field.type != \'select\'" type={{field.type}} name={{field.title}} ng-model=dialog.document[field.title] ng-required="field.required || true"><md-select ng-if="field.type == \'select\'" ng-model=dialog.document[field.title] name={{field.title}} ng-required="field.required || true" class=capitalize><md-option ng-repeat="option in field.options" ng-value=option class=capitalize>{{option}}</md-option></md-select><div ng-messages=dialog.form[field.title].$error multiple md-auto-hide=true><div ng-message=required>This field required</div></div></md-input-container></div></md-dialog-content><md-dialog-actions class=modal-buttons layout=row><md-button ng-click=dialog.hide()>Cancel</md-button><md-button type=submit>Save</md-button></md-dialog-actions></form></md-dialog>')}]);
//# sourceMappingURL=../maps/scripts/app-f0c67bd655.js.map