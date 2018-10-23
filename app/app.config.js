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
                    component: 'employeeAdd'
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
                    resolve: {
                        employee: function(Employee, $stateParams) {
                            return Employee.read($stateParams.id);
                        }
                    }
                })

}]);