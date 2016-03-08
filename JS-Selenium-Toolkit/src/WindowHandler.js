/**
 * Created by charles.sexton on 2/29/2016.
 */
var webdriver = require('selenium-webdriver');
var IllegalArgumentError = require('../src/errors/IllegalArgumentError');


var WindowHandler = function (driver) {

    var driver = driver.getDriver();

    this.waitUntilWindowWithTitle = function (title, timeout) {
        if (timeout === 'undefined') {
            timeout = 5000;
        }

        return driver.wait(webdriver.until.titleIs(title), timeout);
    };

    this.waitUntilWindowTitleContains = function (substring, timeout) {
        if (timeout === 'undefined') {
            timeout = 5000;
        }

        return driver.wait(webdriver.until.titleContains(substring), timeout);
    };

    this.waitUntilWindowTitleMatches = function (regex, timeout) {
        if (timeout === 'undefined' || isNaN(timeout)) {
            timeout = 5000;
        }
        return driver.wait(webdriver.until.titleMatches(regex), timeout);
    };

    this.waitUntilNumberOfWindowsAre = function (count) {

    };
};

module.exports = WindowHandler;
