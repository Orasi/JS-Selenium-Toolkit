/**
 * Created by charles.sexton on 2/25/2016.
 */
var WebElementCondition = require('./selenium-webdriver/lib/until');

var ExpectedConditions = function()
{
    this.waitForWindowWithTitle = function (title)
    {

        return driver.getAllWindowHandles().then(function (title, handles) {

            console.log(handles.length + ' .then function');

            for (var window in handles) {
                if (window.title === title)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        });
    }
}

module.exports = ExpectedConditions;
require('util').inherits(module.exports, WebElementCondition);