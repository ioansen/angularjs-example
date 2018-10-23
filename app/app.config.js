/**
* This is the configuration for the routes
* Maps a URL fragment to a template and controller
*/
angular.module('mainApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function config($stateProvider, $urlRouterProvider ) {
            $urlRouterProvider.otherwise('/employees');

            $stateProvider
                .state('employees', {
                    url:'/employees',
                    component: 'employeeList',
                    resolve: {
                        employees: function(Employee) {
                            return Employee.list();
                        }
                    }
                })
                .state('employees.add', {
                    url:'/add',
                    template: '<employee-add on-add="$ctrl.employees.push(e)"></employee-add>'
                })
                .state('employees.view', {
                    url:'/view/{id}',
                    component: 'employeeDetail',
                    resolve: {
                        employee: function(Employee, $stateParams) {
                            return Employee.read($stateParams.id);
                        }
                    }
                })
                .state('employees.update', {
                    url:'/update/{id}',
                    component: 'employeeModify',
                    //cannot find a way to resolve employee and have onModify
                    resolve: {
                        employee: function(Employee, $stateParams) {
                            return Employee.read($stateParams.id);
                        }
                    }
                })

}]);