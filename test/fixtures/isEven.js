'use strict';

/**
* FUNCTION: isEven( x )
*	Checks whether an input number is even.
*
* @param {Number} x - input number
* @returns {Boolean} true if x is even; otherwise, false
*/
function isEven( x ) {
	return x % 2 === 0;
} // end FUNCTION isEven()


// EXPORTS //

module.exports = isEven;
