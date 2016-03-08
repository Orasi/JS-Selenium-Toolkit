var webdriver = require('selenium-webdriver');
var EmployeePage = require('../src/EmployeePage');

var LoginPage = function(driver) {

    this.login = function(username, password) {
        driver.findElement(webdriver.By.name('employee[username]')).sendKeys(username);
        driver.findElement(webdriver.By.name('employee[password]')).sendKeys(password);
        return driver.findElement(webdriver.By.name('commit')).click();
    }
}

module.exports = LoginPage;
