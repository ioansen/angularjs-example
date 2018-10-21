'use strict';

describe('employeeList', function() {

    // Load the module that contains the `employeeList` component before each test
    beforeEach(module('employeeList'));

    // Test the controller
    describe('EmployeeListController', function() {

        it('should create a `employees` model with 3 employees', inject(function($componentController) {
            var ctrl = $componentController('employeeList');

            expect(ctrl.employees.length).toBe(3);
        }));

    });

});

/*'use strict';

describe('phoneList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('phoneList'));

    // Test the controller
    describe('PhoneListController', function() {

        it('should create a `phones` model with 3 phones', inject(function($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.phones.length).toBe(3);
        }));

    });

});*/
