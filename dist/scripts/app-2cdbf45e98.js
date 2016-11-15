/******/!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1),o=n(2),a=n(3),r=n(4),l=n(5),d=n(6),c=n(7),s=n(8),u=n(9),m=n(10);angular.module("tollminderAdmin",["ngSanitize","ngMessages","ui.router","ngMaterial","md.data.table"]).constant("API","http://54.152.103.212/api").config(i.config).config(o.routerConfig).run(a.runBlock).controller("RootController",r.RootController).controller("LoginController",l.LoginController).controller("RoadListController",d.RoadListController).controller("EntityController",c.EntityController).controller("DialogController",s.DialogController).service("LoginService",u.LoginService).service("CrudService",m.CrudService)},function(t,e){"use strict";function n(t,e){"ngInject";t.debugEnabled(!0),e.theme("default").primaryPalette("blue-grey")}n.$inject=["$logProvider","$mdThemingProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.config=n},function(t,e){"use strict";function n(t,e){"ngInject";e.html5Mode=!0,t.state("login",{url:"/login",templateUrl:"app/views/login.html",controller:"LoginController",controllerAs:"ctrl"}).state("roadList",{url:"/",templateUrl:"app/views/roadList.html",controller:"RoadListController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"}],child:"tollRoad"}}).state("tollRoad",{url:"/tollRoad/{_id}",templateUrl:"app/views/entity.html",controller:"EntityController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"},{title:"latitude",value:0,type:"number"},{title:"longitude",value:0,type:"number"}],thead:["Way Point name","Latitude","Longitude"],tbody:["name","latitude","longitude"],child:"wayPoint",back:"home"}}).state("wayPoint",{url:"/wayPoint/{_id}",templateUrl:"app/views/entity.html",controller:"EntityController",controllerAs:"ctrl",data:{schema:[{title:"name",value:"",type:"text"},{title:"latitude",value:0,type:"number"},{title:"longitude",value:0,type:"number"},{title:"action",value:"exit",type:"select",options:["entrance","bridge","exit"]}],thead:["Toll Point name","Latitude","Longitude","Action"],tbody:["name","latitude","longitude","action"],child:"tollPoint"}}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=n},function(t,e){"use strict";function n(t,e,n){"ngInject";e.$on("$stateChangeSuccess",function(){localStorage.authToken||n.go("login")}),t.debug("runBlock end")}n.$inject=["$log","$rootScope","$state"],Object.defineProperty(e,"__esModule",{value:!0}),e.runBlock=n},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RootController=function(){function t(e){"ngInject";n(this,t),this.state=e}return t.$inject=["$state"],i(t,[{key:"logout",value:function(){localStorage.authToken="",this.state.go("login")}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.LoginController=function(){function t(e,i,o){"ngInject";n(this,t),this.state=i,this.Login=e,this.log=o,this.username="",this.password=""}return t.$inject=["LoginService","$state","$log"],i(t,[{key:"signin",value:function(){var t=this;this.form.$valid&&this.Login.auth(this.username,this.password).then(function(e){localStorage.authToken=e.data.token,t.state.go("roadList")})["catch"](function(e){return t.err=e.data.err})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.RoadListController=function(){function t(e,i,o,a){"ngInject";n(this,t),this.dialog=e,this.log=i,this.CRUD=o,this.state=a,this.roads=[],this.limit=20,this.page=1,this.getRoads()}return t.$inject=["$mdDialog","$log","CrudService","$state"],i(t,[{key:"getRoads",value:function(){var t=this;this.CRUD.get("tollRoad").then(function(e){return t.roads=e.data})["catch"](this.log.debug)}},{key:"showModal",value:function(t){this.dialog.show({controller:"DialogController",controllerAs:"dialog",templateUrl:"app/views/modals/dialog.html",clickOutsideToClose:!0,bindToController:!0,locals:{data:t}})}},{key:"remove",value:function(t){var e=this,n=this.dialog.confirm().title("Are you sure?").textContent("Would you like to delete this road?").ok("Yes").cancel("No");this.dialog.show(n).then(function(){return e.CRUD.remove("tollRoad",t)}).then(function(){return e.state.reload()})["catch"](function(){return e.log.debug("canceled")})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.EntityController=function(){function t(e,i,o,a){"ngInject";n(this,t),this.dialog=e,this.log=i,this.state=a,this.CRUD=o,this.mappingField=null,this.data={},this.log.debug(this.state),this.getEntity()}return t.$inject=["$mdDialog","$log","CrudService","$state"],i(t,[{key:"getEntity",value:function(){var t=this;this.CRUD.get(this.state.current.name,this.state.params._id).then(function(e){e.data.hasOwnProperty("_wayPoints")&&(t.mappingField="_wayPoints"),e.data.hasOwnProperty("_tollPoints")&&(t.mappingField="_tollPoints"),t.data=e.data})["catch"](this.log.error)}},{key:"showModal",value:function(t){this.dialog.show({controller:"DialogController",controllerAs:"dialog",templateUrl:"app/views/modals/dialog.html",clickOutsideToClose:!0,bindToController:!0,locals:{data:t}})}},{key:"remove",value:function(t){var e=this,n=this.dialog.confirm().title("Are you sure?").textContent("Would you like to delete this "+this.state.current.data.child+"?").ok("Yes").cancel("No");this.dialog.show(n).then(function(){return e.CRUD.remove(e.state.current.data.child,t)}).then(function(){return e.state.reload()})["catch"](function(){return e.log.debug("canceled")})}}]),t}()},function(t,e){"use strict";function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.DialogController=function(){function t(e,o,a,r){"ngInject";var l=this;i(this,t),this.upd=this.data?!0:!1,this.dialog=e,this.CRUD=o,this.state=a,this.log=r,this.schema=this.state.current.data.schema,this.document=n({},"_"+this.state.current.name,this.state.params._id),this.data&&(this.document._id=this.data._id),this.schema.map(function(t){return l.document[t.title]=l.data?l.data[t.title]:t.value}),this.log.debug(this.data)}return t.$inject=["$mdDialog","CrudService","$state","$log"],o(t,[{key:"save",value:function(){var t=this;this.form.$valid&&this.CRUD.save(this.state.current.data.child,this.document,this.upd).then(function(e){t.log.debug(e),t.dialog.hide(),t.state.reload()})["catch"](this.log.error)}},{key:"hide",value:function(){this.dialog.hide()}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.LoginService=function(){function t(e,i){"ngInject";n(this,t),this.http=e,this.API=i}return t.$inject=["$http","API"],i(t,[{key:"auth",value:function(t,e){return this.http.post(this.API+"/user/adminAuth",{name:t,password:e})}}]),t}()},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();e.CrudService=function(){function t(e,i){"ngInject";n(this,t),this.API=i,this.http=e}return t.$inject=["$http","API"],i(t,[{key:"save",value:function(t,e,n){return n?this.http.put(this.API+"/"+t+"/"+e._id,e):this.http.post(this.API+"/"+t+"/",e)}},{key:"get",value:function(t,e){return e?this.http.get(this.API+"/"+t+"/"+e):this.http.get(this.API+"/"+t)}},{key:"remove",value:function(t,e){return this.http["delete"](this.API+"/"+t+"/"+e)}}]),t}()}]),angular.module("tollminderAdmin").run(["$templateCache",function(t){t.put("app/views/entity.html",'<div class=wrapper><md-button ng-if="ctrl.state.current.name == \'tollRoad\'" ui-sref=roadList>to road list</md-button><md-button ng-if="ctrl.state.current.name == \'wayPoint\'" ui-sref="tollRoad({_id: ctrl.data._tollRoad._id})">to {{ctrl.data._tollRoad.name}}</md-button><div layout=row layout-align="space-between center"><div><h2><strong class=capitalize>{{ctrl.state.current.name}}</strong> : {{ctrl.data.name}}</h2><i>Created at: {{ctrl.data.createdAt | date}}</i><br><i ng-if=ctrl.data.updatedAt>Last update: {{ctrl.data.updatedAt | date}}</i></div><md-button class=create ng-click=ctrl.showModal()>Create new {{ctrl.state.current.data.child}}</md-button></div><hr><table md-table><thead md-head><tr md-row><th md-column ng-repeat="title in ctrl.state.current.data.thead"><span>{{title}}</span></th><th md-column md-numeric><span></span></th></tr></thead><tbody md-body><tr md-row ng-repeat="row in ctrl.data[ctrl.mappingField] track by row._id"><td md-cell ng-repeat="cell in ctrl.state.current.data.tbody" class=capitalize><a ng-href="{{ctrl.state.href(ctrl.state.current.data.child, {_id : row._id})}}" ng-if="cell == \'name\'">{{row[cell]}} </a><span ng-if="cell !== \'name\'">{{row[cell]}}</span></td><td md-cell><md-button class=md-icon-button ng-click=ctrl.showModal(row)><i class="fa fa-edit" aria-hidden=true></i></md-button><md-button class=md-icon-button ng-click=ctrl.remove(row._id)><i class="fa fa-trash-o" aria-hidden=true></i></md-button></td></tr></tbody></table></div>'),t.put("app/views/login.html",'<div class=wrapper><md-card><form name=ctrl.form ng-submit=ctrl.signin() novalidate><md-card-title><md-card-title-text layout=row layout-align="space-between center"><div class=md-headline>Login</div><div class=error ng-show=ctrl.err>{{ctrl.err}}</div></md-card-title-text></md-card-title><md-card-content><md-input-container><label>Username</label><input type=text name=username ng-model=ctrl.username required><div ng-messages=ctrl.form.username.$error><div ng-message=required>This field is required</div></div></md-input-container><md-input-container><label>Password</label><input type=password name=password ng-model=ctrl.password required><div ng-messages=ctrl.form.password.$error><div ng-message=required>This field is required</div></div></md-input-container></md-card-content><md-card-actions layout=row layout-align="end center"><md-button type=submit>Sign in</md-button></md-card-actions></form></md-card></div>'),t.put("app/views/roadList.html",'<div class=wrapper><div><md-button class=create ng-click=ctrl.showModal()>Create new Toll Road</md-button></div><table md-table><thead md-head><tr md-row><th md-column><span>Toll Road</span></th><th md-column md-numeric><span>Way Points</span></th><th md-column md-numeric><span></span></th></tr></thead><tbody md-body><tr md-row ng-repeat="road in ctrl.roads | limitTo: ctrl.limit: (ctrl.page - 1) * ctrl.limit"><td md-cell><a ui-sref="tollRoad({_id: road._id})">{{road.name}}</a></td><td md-cell>{{road._wayPoints.length}}</td><td md-cell><md-button class=md-icon-button ng-click=ctrl.showModal(road)><i class="fa fa-edit" aria-hidden=true></i></md-button><md-button class=md-icon-button ng-click=ctrl.remove(road._id)><i class="fa fa-trash-o" aria-hidden=true></i></md-button></td></tr></tbody></table><md-table-pagination md-limit-options=[20,35,50] md-limit=ctrl.limit md-page=ctrl.page md-total={{ctrl.roads.length}}></md-table-pagination></div>'),t.put("app/views/modals/dialog.html",'<md-dialog><form name=dialog.form ng-submit=dialog.save() novalidate><md-toolbar><div class=md-toolbar-tools><h3>{{dialog.upd ? "Update" : "Create new " + dialog.state.current.data.child }}</h3><span flex></span><md-button class=md-icon-button ng-click=dialog.hide()>&#10005</md-button></div></md-toolbar><md-dialog-content><div class=md-dialog-content><md-input-container ng-repeat="field in dialog.schema"><label class=capitalize>{{field.title}}</label><input ng-if="field.type != \'select\'" type={{field.type}} name={{field.title}} ng-model=dialog.document[field.title] ng-required="field.required || true"><md-select ng-if="field.type == \'select\'" ng-model=dialog.document[field.title] name={{field.title}} ng-required="field.required || true" class=capitalize><md-option ng-repeat="option in field.options" ng-value=option class=capitalize>{{option}}</md-option></md-select><div ng-messages=dialog.form[field.title].$error multiple md-auto-hide=true><div ng-message=required>This field required</div></div></md-input-container></div></md-dialog-content><md-dialog-actions class=modal-buttons layout=row><md-button ng-click=dialog.hide()>Cancel</md-button><md-button type=submit>Save</md-button></md-dialog-actions></form></md-dialog>')}]);
//# sourceMappingURL=../maps/scripts/app-2cdbf45e98.js.map
