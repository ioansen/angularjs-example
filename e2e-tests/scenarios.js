describe('mainApp Application', function() {

    describe('employeeList', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('should filter the employee list as a user types into the search box', function() {
            var employeeList = element.all(by.repeater('e in $ctrl.employees'));
            var query = element(by.model('$ctrl.query'));

            expect(employeeList.count()).toBe(3);

            query.sendKeys('Daniel');
            expect(employeeList.count()).toBe(1);

            query.clear();
            query.sendKeys('Irideanu');
            expect(employeeList.count()).toBe(2);
        });

        it('should be possible to control employee order via the drop-down menu', function() {
            var orderSelect = element(by.model('$ctrl.orderProp'));
            var nameOption = orderSelect.element(by.css('option[value="lastname"]'));
            var salaryOption = orderSelect.element(by.css('option[value="salary"]'));
            var employeeLastnameColumn = element.all(by.repeater('e in $ctrl.employees').column('e.lastname'));
            var employeeIdColumn = element.all(by.repeater('e in $ctrl.employees').column('e.id'));
            var employeeSalaryColumn = element.all(by.repeater('e in $ctrl.employees').column('e.salary'));

            function getLastnames() {
                return employeeLastnameColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            function getIds() {
                return employeeIdColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            function getSalaries() {
                return employeeSalaryColumn.map(function(elem) {
                    return elem.getText();
                });
            }

            expect(getIds()).toEqual([
                '1',
                '2',
                '3'
            ]);

            nameOption.click();

            expect(getLastnames()).toEqual([
                'Irideanu',
                'Irideanu',
                'Mateianu'
            ]);

            salaryOption.click();

            expect(getSalaries()).toEqual([
                '2500',
                '4500',
                '7000'
            ]);
        });

    });

});
