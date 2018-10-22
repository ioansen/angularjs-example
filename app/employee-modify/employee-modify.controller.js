angular.module('employeeModify')
    .controller('EmployeeModifyController',
        ['$location', '$routeParams','Employee',
            function EmployeeListController($location, $routeParams, Employee) {
                var self = this;
                self.action = 'Modify';
                self.showId = true;

                Employee.read($routeParams.id)
                    .then(function (response) {
                        self.employee = response.data;
                    });

                self.post = function(){
                    Employee.update(self.employee);
                    console.log("employee modified");
                    $location.path("#/employees/");
                };
        }]);