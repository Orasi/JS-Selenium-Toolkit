/**
 * Created by charles.sexton on 3/4/2016.
 */
var webdriver = require('selenium-webdriver');
var EmployeePage = require('../src/EmployeePage');

var AddEmployeeForm = function (driver) {

    var usernameTextField = driver.findElement(webdriver.By.id('employee_username'));
    var firstNameTextField = driver.findElement(webdriver.By.id('employee_first_name'));
    var lastNameTextField = driver.findElement(webdriver.By.id('employee_last_name'));
    var createEmployeeButton = driver.findElement(webdriver.By.xpath('//input[@value=\'Create Employee\']'));

    this.completeForm = function (employee) {

        return Promise.all([
            usernameTextField.sendKeys(employee.username),
            firstNameTextField.sendKeys(employee.firstName),
            lastNameTextField.sendKeys(employee.lastName)
        ]).catch(function (err) {
                console.log(err.code + ' ' + err.message + ' ' + err.stack);
            });
    };

    this.clickCreateEmployee = function() {
        return createEmployeeButton.click();
    };

    this.waitForElementsToBecomeVisible = function() {
        return Promise.all([
            driver.wait(webdriver.until.elementIsVisible(usernameTextField), 500),
            driver.wait(webdriver.until.elementIsVisible(firstNameTextField), 500),
            driver.wait(webdriver.until.elementIsVisible(lastNameTextField), 500),
            driver.wait(webdriver.until.elementIsVisible(createEmployeeButton), 500)
        ]);
    };
};

module.exports = AddEmployeeForm;