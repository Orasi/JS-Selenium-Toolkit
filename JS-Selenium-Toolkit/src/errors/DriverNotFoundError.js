/**
 * Created by charles.sexton on 2/24/2016.
 */
'use strict';

var AutomationError = require('./AutomationError');

/**
 * Browser Driver not found error
 * @param message The error message to display
 */
module.exports = function DriverNotFoundError(message) {
    this.name = this.constructor.name;
    this.message = message;
};

require('util').inherits(module.exports, AutomationError);