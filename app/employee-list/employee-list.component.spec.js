'use strict';

describe('employeeList', function() {

    // Load the module that contains the `employeeList` component before each test
    beforeEach(module('employeeList'));

    // Test the controller
    describe('EmployeeListController', function() {

        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_ ) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('employees/employees.json')
                .respond(
                    [
                        {
                            "id": "1",
                            "name": "Daniel",
                            "lastname": "Mateianu",
                            "salary": 4500
                        },
                        {
                            "id": "2",
                            "name": "Samuel",
                            "lastname": "Irideanu",
                            "salary": 2500
                        },
                        {
                            "id": "3",
                            "name": "Canoe",
                            "lastname": "Livreanu",
                            "salary": 2500
                        },
                        {
                            "id": "4",
                            "name": "Radu",
                            "lastname": "Mateianu",
                            "salary": 4500
                        },
                        {
                            "id": "5",
                            "name": "Andrei",
                            "lastname": "Barca",
                            "salary": 4500
                        },
                        {
                            "id": "6",
                            "name": "Daniel",
                            "lastname": "Popa",
                            "salary": 4500
                        },
                        {
                            "id": "7",
                            "name": "Daniel",
                            "lastname": "Mirideanu",
                            "salary": 7000
                        },
                        {
                            "id": "8",
                            "name": "Dumitru",
                            "lastname": "Dumitru",
                            "salary": 4500
                        },
                        {
                            "id": "9",
                            "name": "Dragos",
                            "lastname": "Didi",
                            "salary": 7000
                        },
                        {
                            "id": "10",
                            "name": "Dumitru",
                            "lastname": "Dinca",
                            "salary": 4500
                        }

                    ]
                );
            ctrl = $componentController('employeeList');
        }));

        it('should create a `employees` model with 10 employees fetched with $http', function() {
            expect(ctrl.employees).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.employees.length).toBe(10);
        });

        it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('id');
        });

    });

});