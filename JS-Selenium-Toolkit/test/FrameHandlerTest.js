/**
 * Created by charles.sexton on 2/26/2016.
 */
var expect = require('chai').expect;
var FrameHandler = require('../../JS-Selenium-Toolkit/src/FrameHandler');
var OrasiDriver = require('../../JS-Selenium-Toolkit/src/OrasiDriver');
var IllegalArgumentError = require('../src/errors/IllegalArgumentError');
var webdriver = require('selenium-webdriver');

describe('FrameHandler', function () {

    var driver = OrasiDriver({browserName: 'firefox'});
    var frameHandler = new FrameHandler(driver);

    it('Should pass if the currently set frame name is top_page', function (done) {
        this.timeout(15000);

        driver.get('http://orasi.github.io/Selenium-Java-Core/sites/unitTests/orasi/utils/frameHandler.html').then(function () {
            return frameHandler.switchToFrame('top_page');
        }).then(function () {
            return frameHandler.getCurrentFrameName();
        }).then(function (name) {
            expect(name).to.equal('top_page');
            done();
        });
    });

    it('Should pass if the set frame is main_frame1', function (done) {
        this.timeout(15000);

        driver.get('http://orasi.github.io/Selenium-Java-Core/sites/unitTests/orasi/utils/frameHandler.html').then(function () {
            return frameHandler.switchToFrame('main_page');
        }).then(function () {
            return frameHandler.switchToFrame('main_frame1');
        }).then(function () {
            return frameHandler.getCurrentFrameName();
        }).then(function (name) {
            expect(name).to.equal('main_frame1');
            done();
        });
    });

    it('Should throw an IllegalArgumentException when switch to frame name is not entered', function (done) {
        this.timeout(15000);
        driver.get('http://orasi.github.io/Selenium-Java-Core/sites/unitTests/orasi/utils/frameHandler.html').then(function () {
            expect(function () {
                frameHandler.switchToFrame()
            }).to.throw(IllegalArgumentError);
            done();
        });
    });

    it('Should throw an IllegalArgumentException when switch to frame name is not entered', function (done) {
        this.timeout(15000);
        driver.get('http://orasi.github.io/Selenium-Java-Core/sites/unitTests/orasi/utils/frameHandler.html').then(function () {
            return frameHandler.switchToFrame('main_page');
        }).then(function () {
            return frameHandler.switchToFrame('main_frame1');
        }).then(function () {
            return frameHandler.switchToParentFrame();
        }).then(function() {
            return frameHandler.getCurrentFrameName();
        }).then(function(name) {
            expect(name).to.equal('main_page');
        });
    });
});

