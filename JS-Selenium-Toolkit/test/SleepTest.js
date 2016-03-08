/**Created by charles.sexton on 2/26/2016.*/
var expect = require('chai').expect;
var sleep = require('../../JS-Selenium-Toolkit/src/Sleep.js');
require('mocha-sinon');

describe('Sleep', function()
{

    it('Should stop the thread from performing events/requests asynchronously', function()
    {
        var log = console.log;

        this.sinon.stub(console, 'log', function() {
            return log.apply(log, arguments);
        });

        sleep(10, function() {
            return log.apply(log, arguments);
        });
        expect( console.log.calledWithMatch('Hello') ).to.be.true;
        console.log('World');
        expect( console.log.calledWithMatch('World') ).to.be.true;
    });
});