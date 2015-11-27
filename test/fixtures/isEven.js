'use strict';

/**
* FUNCTION: isEven( x )
*	Checks whether a function is an even number
*
* @param {Number} x - input value
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
