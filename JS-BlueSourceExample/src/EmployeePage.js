var webdriver = require('selenium-webdriver');
var AddEmployeeForm = require('../src/AddEmployeeForm');

var EmployeePage = function (driver) {

    this.clickAddEmployee = function () {
        return driver.findElement(webdriver.By.css('button[class=\'btn btn-default\']'))
            .click();
    };

    this.searchEmployee = function (employee) {
        return driver.findElement(webdriver.By.css('input[class=\'form-control ng-pristine ng-valid\']'))
            .sendKeys(employee.firstName + ' ' + employee.lastName);
    };
};

module.exports = EmployeePage;
