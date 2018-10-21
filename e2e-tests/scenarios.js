describe('mainApp Application', function() {

    describe('View: employeeList', function() {

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

        it('should render employee specific links', function() {
            var query = element(by.model('$ctrl.query'));
            query.sendKeys('Samuel');

            element.all(by.css('.emp-row td a')).first().click();
            expect(browser.getCurrentUrl()).toBe('http://localhost:8081/index.html#!/employees/view/2');
        });

    });

    describe('View: employeeDetail', function() {

        beforeEach(function() {
            browser.get('index.html#!/employees/view/2');
        });

        it('should display placeholder page with `id`', function() {
            expect(element(by.binding('$ctrl.id')).getText()).toBe('2');
        });

    });

});
