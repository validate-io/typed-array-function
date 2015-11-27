'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' ),
	isTypedArray = require( 'validate.io-typed-array' );


// EVERY //

/**
* FUNCTION: every( fcn, value )
*	Validates each typed array element.
*
* @param {Function} fcn - function to apply
* @param {*} value - value to be validated
* @returns {Boolean} true if value is a typed array for which all elements pass; otherwise, false
*/
function every( fcn, value ) {
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a function. Value: `' + fcn + '`.' );
	}
	if ( !isTypedArray( value ) ) {
		return false;
	}
	var len = value.length,
		i;
	if ( !len ) {
		return false;
	}
	for ( i = 0; i < len; i++ ) {
		if ( fcn( value[ i ] ) === false ) {
			return false;
		}
	}
	return true;
} // end FUNCTION every()


// EXPORTS //

module.exports = every;
