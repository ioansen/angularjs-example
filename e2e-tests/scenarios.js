describe('mainApp Application', function() {

    describe('employeeList', function() {

        beforeEach(function() {
            browser.get('index.html');
        });

        it('should filter the employee list as a user types into the search box', function() {
            var employeeList = element.all(by.repeater('e in $ctrl.employees'));
            var query = element(by.model('$ctrl.query'));

            expect(employeeList.count()).toBe(10);

            query.sendKeys('Daniel');
            expect(employeeList.count()).toBe(3);

            query.clear();
            query.sendKeys('Irideanu');
            expect(employeeList.count()).toBe(2);
        });

        it('should be possible to control employee order via the drop-down menu', function() {
            var sorted = []; //array to check different sorts

            var orderSelect = element(by.model('$ctrl.orderProp'));
            var nameOption = orderSelect.element(by.css('option[value="lastname"]'));
            var salaryOption = orderSelect.element(by.css('option[value="salary"]'));
            var idOption = orderSelect.element(by.css('option[value="id"]'));
            var employeeLastnames = element.all(by.repeater('e in $ctrl.employees').column('e.lastname'));
            var employeeIds = element.all(by.repeater('e in $ctrl.employees').column('e.id'));
            var employeeSalaries = element.all(by.repeater('e in $ctrl.employees').column('e.salary'));

            employeeLastnames.getText().then(function(textArray) {
                sorted = textArray.slice();
            });
            nameOption.click();
            employeeLastnames.getText().then(function(textArray) {
                expect(sorted).not.toEqual(textArray); //comment this lines, data could be already sorted (before sorting) and this test will fail
                sorted.sort();
                expect(sorted).toEqual(textArray);
            });

            employeeIds.getText().then(function(textArray) {
                sorted = textArray.slice();
            });
            idOption.click();
            employeeIds.getText().then(function(textArray) {
                expect(sorted).not.toEqual(textArray);
                sorted.sort();
                expect(sorted).toEqual(textArray);
            });

            employeeSalaries.getText().then(function(textArray) {
                sorted = textArray.slice();
            });
            salaryOption.click();
            employeeSalaries.getText().then(function(textArray) {
                expect(sorted).not.toEqual(textArray);
                sorted.sort();
                expect(sorted).toEqual(textArray);
            });



        });

    });

});
