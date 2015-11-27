/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	noop = require( '@kgryte/noop' ),
	isEven = require( './fixtures/isEven.js' ),
	every = require( './../lib/every.raw.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'every (raw)', function tests() {

	it( 'should export a function', function test() {
		expect( every ).to.be.a( 'function' );
	});

	it( 'should return false if not provided an input typed array', function test() {
		var values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			[2,4,6],
			{},
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.strictEqual( every( noop, values[ i ] ), false );
		}
	});

	it( 'should return false for an empty typed array', function test() {
		assert.strictEqual( every( noop, new Int32Array() ), false );
	});

	it( 'should validate elements of a typed array', function test() {
		var arr,
			out;

		arr = new Float64Array( [ 1, 1, 2, 4 ] );

		out = every( isEven, arr );
		assert.deepEqual( out, false );

		arr = new Float64Array( [ 2, 2, 2, 4 ] );

		out = every( isEven, arr );
		assert.deepEqual( out, true );
	});

});
