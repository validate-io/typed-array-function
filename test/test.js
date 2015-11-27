/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	validateArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate-array-function', function tests() {

	it( 'should export a function', function test() {
		expect( validateArray ).to.be.a( 'function' );
	});

	it( 'should export a function to validate array elements', function test() {
		expect( validateArray.create ).to.be.a( 'function' );
	});

	it( 'should export a validate function which provides fewer guarantees when validating input arguments', function test() {
		expect( validateArray.raw ).to.be.a( 'function' );
	});

});
