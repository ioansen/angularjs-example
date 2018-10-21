'use strict';

describe('employeeList', function() {

    // Load the module that contains the `employeeList` component before each test
    beforeEach(module('employeeList'));

    // Test the controller
    describe('EmployeeListController', function() {

        var ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('employeeList');
        }));

        it('should create a `employees` model with 3 employees', function() {
            expect(ctrl.employees.length).toBe(3);
        });

        it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('id');
        });

    });

});

