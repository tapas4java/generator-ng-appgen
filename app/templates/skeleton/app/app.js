(function(){
    'use strict';

    /**
     * This is the main application file.
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    angular.module('<%= _.camelize(appname) %>', ['ui.bootstrap','ui.utils', '<%= routerModuleName %>', 'ngAnimate', 'restangular', 'angular-loading-bar', 'home', 'help', 'common']);
    <% if (!uirouter) { %>
    angular.module('<%= _.camelize(appname) %>').config(function($routeProvider) {

        /* Add New Routes Above */
        $routeProvider.otherwise({redirectTo:'/home'});

    });
    <% } %><% if (uirouter) { %>
    angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

        /* Add New States Above */
        $urlRouterProvider.otherwise('/home');

    });
    <% } %>
    angular.module('<%= _.camelize(appname) %>').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();
