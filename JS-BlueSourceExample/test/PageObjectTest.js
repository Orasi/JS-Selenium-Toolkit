/**
 * Created by charles.sexton on 3/3/2016.
 */
var OrasiDriver = require('../src/OrasiDriver');
var webdriver = require('selenium-webdriver');
var LoginPage = require('../src/LoginPage');
var EmployeePage = require('../src/EmployeePage');
var Employee = require('../src/Employee');
var AddEmployeeForm = require('../src/AddEmployeeForm');

var driver = new OrasiDriver({browserName: 'firefox'}).getDriver();
var employee = new Employee('grimlek', 'Charles', 'Sexton', 'TitleTitle',
    'Upper Management', 'Company Admin', 'Contractor', '-7', 'Remote',
    '05212016', '3369407787', '3368791234', 'charles@example.com',
    'charles.sexton', 'Skype', 'abcdefgh');
var employeePage;
var loginPage;
var addEmployeeForm;

driver.get('https://bluesourcestaging.herokuapp.com/login').then(function () {
    loginPage = new LoginPage(driver);
    return loginPage.login('company.admin', 'password');
}).then(function () {
    employeePage = new EmployeePage(driver);
    return employeePage.clickAddEmployee()
}).then(function () {
    addEmployeeForm = new AddEmployeeForm(driver);
    return addEmployeeForm.waitForElementsToBecomeVisible();
}).then(function() {
    return addEmployeeForm.completeForm(employee);
}).then(function() {
    return addEmployeeForm.clickCreateEmployee();
}).then(function() {
    return employeePage.searchEmployee(employee);
});