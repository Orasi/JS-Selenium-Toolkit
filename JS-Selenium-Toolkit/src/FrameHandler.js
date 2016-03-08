/** Created by charles.sexton on 2/26/2016 */
var webdriver = require('selenium-webdriver');
var IllegalArgumentError = require('../src/errors/IllegalArgumentError');

var FrameHandler = function(driver) {

    var driver = driver.getDriver();

    this.switchToFrame = function(name)
    {
        if (typeof name !== 'string' || name === '' || !name)
        {
            throw new IllegalArgumentError('Please enter a valid name for the switch to frame.');
        }
        else
        {
            return driver.switchTo().frame(name);
        }
    };

    this.getCurrentFrameName = function()
    {
        return driver.executeScript('return self.name').then(function(name) {
            return name;
        });
    };

    this.switchToParentFrame = function() {
        var currentFrameName = this.getCurrentFrameName();
        driver.findElements(webdriver.By.css('frame')).then(function(frames) {
            console.log(frames);
            for(var i = 0; i < frames.length; i++) {
                console.log(frames[i].name);
                if(frames[i].name === currentFrameName && i > 0) {
                    console.log(frames[i].name);
                    return driver.switchTo().frame(frames[i - 1].name);
                }
            }
        });
    };

    this.switchToParentIFrame = function() {
        driver.findElements(webdriver.By.css('iframe')).then(function(frames) {
            return
        })
    }
};

module.exports = FrameHandler;
