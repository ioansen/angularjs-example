// Define the `EmployeeListController` controller on the `employeeList` module
angular.module('employeeList')
    .controller('EmployeeListController', ['$state', 'Employee',
        function EmployeeListController($state, Employee) {
            var self = this;
            self.orderProp = 'id';
            self.showAddView = false;

            self.showView = function(){
                self.showAddView = true;
            };

            self.modify = function(employee){
                for ( var i = 0; i < self.employees.length ; i++){
                    if(self.employees[i].id === employee.id){
                        self.employees[i] = employee;
                        break;
                    }
                }
                self.showAddView = false;
            };

            self.add = function(employee){
                self.employees.push(employee);
                self.showAddView = false;
            };

            self.delete = function (id) {
                Employee.delete(id).then(function success(resp) {
                    console.log(resp.data.message);
                    for ( var i = 0; i < self.employees.length ; i++){
                        if(self.employees[i].id === id){
                            self.employees.splice(i,1);
                            break;
                        }
                    }
                    //$state.reload();
                });

            Employee.demoPromise(false, 2).then(
            function success(resp) {
                console.log(resp);
            },
            function error(resp) {
                console.log(resp);
            });
            console.log('order');
            }
}]);