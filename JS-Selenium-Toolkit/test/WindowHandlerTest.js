/**
 * Created by charles.sexton on 3/1/2016.
 */
var expect = require('chai').expect;
var OrasiDriver = require('../../JS-Selenium-Toolkit/src/OrasiDriver');
var WindowHandler = require('../../JS-Selenium-Toolkit/src/WindowHandler');
var webdriver = require('selenium-webdriver');

describe('WindowHandler', function () {

    var driver = OrasiDriver({browserName: 'firefox'});
    var windowHandler = new WindowHandler(driver);

    it('Should pass when the window exists with the exact title', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function (done) {
            return windowHandler.waitUntilWindowWithTitle('Google', 3000);
        }).then(function (isCurrentWindow) {
            expect(isCurrentWindow).to.be.true;
            done();
        });
    });

    it('Should pass when the window doesn\'t exist with the exact title', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function (done) {
            return windowHandler.waitUntilWindowWithTitle('Yahoo', 3000);
        }).catch(function (error) {
            expect(error instanceof Error).to.be.true;
            done();
        });
    });

    it('Should pass when the window doesn\'t contain a title with the sub-string', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function () {
            return windowHandler.waitUntilWindowTitleContains('hoo', 3000);
        }).catch(function (error) {
            expect(error instanceof Error).to.be.true;
            done();
        });
    });

    it('Should pass when the window contains a title with the sub-string', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function (done) {
            return windowHandler.waitUntilWindowTitleContains('oogle', 3000);
        }).then(function (isCurrentWindow) {
            expect(isCurrentWindow).to.be.true;
            done();
        });
    });

    it('Should pass when the window title matches the regular expression', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function (done) {
            return driver.getDriver().findElement(webdriver.By.name('q'));
        }).then(function (element) {
            return element.sendKeys('citizen watches');
        }).then(function () {
            return windowHandler.waitUntilWindowTitleMatches(new RegExp('Google\\sSearch'), 3000);
        }).then(function (isCurrentWindow) {
            expect(isCurrentWindow).to.be.true;
            done();
        });
    });

    it('Should pass when the window title doesn\'t match the regular expression', function (done) {
        this.timeout(15000);
        driver.get('http://www.google.com').then(function (done) {
            return driver.getDriver().findElement(webdriver.By.name('q'));
        }).then(function (element) {
            return element.sendKeys('citizen watches');
        }).then(function () {
            return windowHandler.waitUntilWindowTitleMatches(new RegExp('The\\sNew\\sGoogle'), 5000);
        }).catch(function (error) {
            expect(error instanceof Error).to.be.true;
            done();
        });
    });

});