'use strict';

// Register `employeeList` component, along with its associated controller and template
angular.module('employeeList')
    .component('employeeList', {
        templateUrl: "employee-list/employee-list.template.html",
        controller: function EmployeeListController() {
            this.employees = [
                {
                    id: 1,
                    name: 'Daniel',
                    lastname: 'Mateianu',
                    salary: 4500
                }, {
                    id: 2,
                    name: 'Marian',
                    lastname: 'Duca',
                    salary: 2500
                }, {
                    id: 3,
                    name: 'Rasca',
                    lastname: 'Irideanu',
                    salary: 7000
                },
            ];
        }
});

/*// Register `phoneList` component, along with its associated controller and template
angular.
module('phoneList').
component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        this.phones = [
            {
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }
        ];
    }
});*/

