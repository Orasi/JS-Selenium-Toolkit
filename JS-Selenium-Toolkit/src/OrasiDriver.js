/**
 * Created by charles.sexton on 2/23/2016.
 */
var webdriver = require('selenium-webdriver');

/** required imports for Google Chrome without setting the PATH environment variable */
var chrome = require('selenium-webdriver/chrome');
var chromePath = require('selenium-chromedriver').path;

var driver = null;

/**
 * Base for single instances of OrasiDriver
 */
var OrasiDriver = function()
{

    this.capabilities =
    {
        browserName: null,
        platform: null,
        version: null
    };

    this.initialize = function(info)
    {
        for (var properties in this.capabilities)
        {
            if (this.capabilities[properties] !== 'undefined')
            {
                this.capabilities[properties] = info[properties];
            }
        }
    };

    this.get = function(url)
    {
        driver.get(url);
    };

    this.getCapabilities= function() {
        return this.capabilities;
    };

    this.findButton = function (by)
    {
        return driver.findElement(webdriver.By.name(by));
    };

    this.findTextField = function (by)
    {
        return driver.findElement(webdriver.By.name(by));
    };

    this.getDriver = function () {
        return driver;
    }

};


/**
 * Factory for creating this object and assigning the appropriate browser driver without having
 * to set the Windows PATH variable for each individual driver.
 * @param info An array of the capabilities to be passed
 * @returns {OrasiDriver} An instance of this object
 */
module.exports = function(info)
{
    var instance = new OrasiDriver();

    instance.initialize(info);

    var browserName = instance.capabilities.browserName.toLowerCase();

    console.log(browserName);
    if (browserName === 'ie' || browserName === 'internet explorer')
    {
        process.chdir('node_modules');

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.ie())
            .build();

        instance.capabilities.browserName = 'Internet Explorer';
    }
    else if (browserName === 'chrome' || browserName === 'google chrome')
    {
        var service = new chrome.ServiceBuilder(chromePath).build();
        chrome.setDefaultService(service);

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

        instance.capabilities.browserName = 'Google Chrome';
    }
    else if (browserName === 'firefox' || browserName === 'mozilla firefox')
    {
        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .build();

        instance.capabilities.browserName = 'Mozilla Firefox';
    }
    else
    {
        throw new DriverNotFoundException();
    }

    return instance;

};