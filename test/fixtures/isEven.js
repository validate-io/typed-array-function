'use strict';

/**
* FUNCTION: isEven( x )
*	Checks whether an input value is an even number.
*
* @param {*} x - input value
* @returns {Boolean} true if x is even; otherwise, false
*/
function isEven( x ) {
	if ( typeof x === 'number' && x % 2 === 0 ) {
		return true;
	} else {
		return false;
	}
} // end FUNCTION isEven()


// EXPORTS //

module.exports = isEven;
