var expect = require('chai').expect;
var OrasiDriver = require('../../JS-Selenium-Toolkit/src/OrasiDriver.js');
var DriverNotFoundError = require('../src/errors/DriverNotFoundError');

describe('OrasiDriver', function() {

    it('Should pass if the Orasi Driver is set to equal the Chrome driver by using chrome', function()
    {
            var chromeDriver = OrasiDriver( { browserName: 'chrome' } );
            expect(chromeDriver.getCapabilities().browserName).to.equal('Google Chrome');
    });

    it('Should pass if the Orasi Driver is set to equal the Internet Explorer driver by ' +
        'using internet explorer', function()
    {
        var ieDriver = OrasiDriver( { browserName: 'internet explorer' } );
            expect(ieDriver.getCapabilities().browserName).to.equal('Internet Explorer');
    });

    it('Should pass if the Orasi Driver is set to equal the Firefox driver by using firefox', function()
    {
            var firefoxDriver = OrasiDriver( { browserName: 'firefox' } );
            expect(firefoxDriver.getCapabilities().browserName).to.equal('Mozilla Firefox');
    });

    it('Should pass if the Orasi Driver is set to equal the Internet Explorer driver by ' +
        'using ie', function()
    {
            var ieDriver = OrasiDriver( { browserName: 'ie' } );
            expect(ieDriver.getCapabilities().browserName).to.equal('Internet Explorer');
    });

    it('Should pass if the Orasi Driver is set to equal the Firefox driver by using mozilla firefox', function()
    {
            var firefoxDriver = OrasiDriver( { browserName: 'mozilla firefox' } );
            expect(firefoxDriver.getCapabilities().browserName).to.equal('Mozilla Firefox');
    });

    it('Should throw an error when using an unrecognized browser name.', function()
    {
            expect(function () {
                OrasiDriver( { browserName: 'Orasi Browser' } );
            }).to.throw(DriverNotFoundError);
    });
});