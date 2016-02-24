/**
 * Created by charles.sexton on 2/23/2016.
 */
function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

/** Constants are defined below */
define("ELEMENT_TIMEOUT", 10);
define("PAGE_TIMEOUT", 10);
define("DEFAULT_GLOBAL_DRIVER_TIMEOUT", 10);

/**
 *
 * For calling constants, import the file and then use
 * 1. import the constants file
 * 2. constants.CONSTANT_NAME
 *
 */