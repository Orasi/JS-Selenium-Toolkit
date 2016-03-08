/**
 * Created by charles.sexton on 2/29/2016.
 */
'use strict';

var AutomationError = require('./AutomationError');

/**
 * Illegal argument error
 * @param message Error message to display
 */
module.exports = function IllegalArgumentError(message) {
    this.name = this.constructor.name;
    this.message = message;
};

require('util').inherits(module.exports, AutomationError);