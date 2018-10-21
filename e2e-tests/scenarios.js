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

    });

});