!function(){"use strict";angular.module("web",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","restangular","ui.router","toastr","firebase"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=t}angular.module("web").service("webDevTec",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("web").directive("acmeNavbar",t)}(),function(){"use strict";function t(){function t(){}var e={restrict:"E",templateUrl:"app/components/menu/menu.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("web").directive("menu",t)}(),function(){"use strict";function t(t){function e(e,n,a,r){var o,s=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){s.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){s.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}function n(t,e){function n(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return e.getContributors(10).then(function(t){return r.contributors=t,r.contributors})}var r=this;r.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:n,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("web").directive("acmeMalarkey",t)}(),function(){"use strict";function t(){function t(t,e){function n(){angular.element(document.querySelector("#panel")).removeClass("hidden")}function a(){angular.element(document.querySelector("#panel")).addClass("hidden")}function r(){var t=e.transactions;console.log(o.name),t.child(o.name).set({name:o.name,category:o.category,price:o.price}),o.text=""}var o=this;o.removeCustomClass=n,o.addCustomClass=a,o.addItem=r}t.$inject=["$scope","firebaseDataService"];var e={restrict:"E",templateUrl:"app/components/historyCenter/historycenter.html",controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("web").directive("historycenter",t)}(),function(){"use strict";function t(t,e){function n(n){function r(t){return t.data}function o(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return n||(n=30),e.get(a+"/contributors?per_page="+n).then(r)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:a,getContributors:n};return r}t.$inject=["$log","$http"],angular.module("web").factory("githubContributor",t)}(),function(){"use strict";function t(t){var e=new Firebase(t),n={root:e,users:e.child("users"),transactions:e.child("transactions")};return n}angular.module("web").factory("firebaseDataService",t),t.$inject=["FIREBASE_URL"]}(),function(){"use strict";function t(t){var e=this;e.transactions=t,console.log(t),console.log(t.length)}t.$inject=["transactions"],angular.module("web").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("web").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm",resolve:{transactions:["firebaseDataService","$firebaseArray",function(t,e){return e(t.transactions).$loaded()}]}}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("web").config(t)}(),function(){"use strict";angular.module("web").constant("FIREBASE_URL","https://money-app-999.firebaseio.com/").constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("web").config(t)}(),angular.module("web").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class=history><ul ng-repeat="transaction in vm.transactions"><li><span class=name>{{transaction.name}}</span> <span class=category>{{transaction.category}}</span> <span ng-class="{\'income\' : transaction.price > 0 , \'expense\' : transaction.price < 0}" class=price>{{transaction.price| currency:"$"}}</span></li></ul></div>'),t.put("app/components/historyCenter/historycenter.html",'<div class=historycenter><div class=addTransaction ng-click=vm.removeCustomClass()><span class="fa fa-plus"></span> <span class=button_desc>Add</span></div><div class=budget><span>$1920.90</span></div></div><div class="add_panel_background hidden" id=panel><div class=add_form><span class="fa fa-times" ng-click=vm.addCustomClass()></span><div class=form><input type=text ng-model=vm.name> <input type=text ng-model=vm.category> <input type=text ng-model=vm.price> <button ng-click=vm.addItem()>Income</button> <button>Expense</button></div></div></div>'),t.put("app/components/menu/menu.html",'<div class=menu><ul><li class=active><span class="fa fa-money"></span><p>Budget</p></li><li><span class="fa fa-area-chart"></span><p>Graph</p></li></ul></div><hr>'),t.put("app/components/navbar/navbar.html",'<nav class=navbar><span><a href=#/ ><b>my</b>Budget</a></span><div class=acme-navbar-text><span class=user_name>wornluki@gmail.com</span><div class=user_avatar><img class=circle src=http://audubondermatology.com/wp-content/uploads/2012/09/skin-care-for-men-good-looking-guy.jpg><div class=settings><ul><li class=menu_item><a href=#><span class="fa fa-cog" aria-hidden=true></span>Ustawienia</a></li><li class=menu_item><a href=#><span class="fa fa-power-off" aria-hidden=true></span>Wyloguj</a></li></ul></div></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-3bd5b7b83a.js.map