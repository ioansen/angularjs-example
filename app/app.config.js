'use strict';
/**
* This is the configuration for the routes
* Maps a URL fragment to a template and controller
*/
angular.module('mainApp')
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/employees', {
                    template: '<employee-list></employee-list>'
                }).
                when('/employees/view/:id', {
                    template: '<employee-detail></employee-detail>'
                }).
                /*when('/employees/delete/:id', {
                    templateUrl: 'employee-list.html',
                    controller: 'EmployeeDeleteCtrl'
                }).
                when('/employees/add/', {
                    templateUrl: 'employee-add.html',
                    controller: 'EmployeeAddCtrl'
                }).
                when('/employees/update/:id', {
                    templateUrl: 'employee-add.html',
                    controller: 'EmployeeUpdateCtrl'
                }).*/
                otherwise({redirectTo: '/employees'});
}]);