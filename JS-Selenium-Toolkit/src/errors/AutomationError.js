/**
 * Created by charles.sexton on 2/25/2016.
 */
'use strict';

/**
 * Automation Testing Error
 * @param message The error message to display.
 */
module.exports = function AutomationError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
};

require('util').inherits(module.exports, Error);