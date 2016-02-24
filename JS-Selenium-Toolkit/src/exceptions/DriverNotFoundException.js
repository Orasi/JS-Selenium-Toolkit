/**
 * Created by charles.sexton on 2/24/2016.
 */
module.exports = function DriverNotFoundException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error)
        Error.captureStackTrace(this, DriverNotFoundException);
    else
        this.stack = (new Error()).stack;
};

DriverNotFoundException.prototype = Object.create(Error.prototype);
DriverNotFoundException.prototype.name = "DriverNotFoundException";
DriverNotFoundException.prototype.constructor = DriverNotFoundException;