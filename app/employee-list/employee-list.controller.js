// Define the `EmployeeListController` controller on the `employeeList` module
angular.module('employeeList')
    .controller('EmployeeListController', ['$state', 'Employee',
        function EmployeeListController($state, Employee) {
            var self = this;
            self.orderProp = 'id';

            self.delete = function (id) {
                Employee.delete(id).then(function success(resp) {
                    console.log(resp.data.message);
                    $state.reload();
                });
            }
}]);