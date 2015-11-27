'use strict';

var validateTypedArray = require( './../lib' );

var arr1, arr2,
	out,
	i;

arr1 = new Int32Array( 25 );
for ( i = 0; i < arr1.length; i++ ) {
	arr1[ i ] = i;
}

arr2 = new Int32Array( 25 );
for ( i = 0; i < arr2.length; i++ ) {
	arr2[ i ] = 2 * i;
}

function isEven( x ) {
	return ( typeof x === 'number' && x % 2 === 0 ) ? true : false;
}

out = validateTypedArray( isEven, arr1 );
console.log( out );

out = validateTypedArray( isEven, arr2 );
console.log( out );
