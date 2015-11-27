Validate Typed Array Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

>  Validates if every element of a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) passes a test condition.


## Installation

``` bash
$ npm install validate.io-typed-array-function
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var validate = require( 'validate.io-typed-array-function' );
```

<a name="validate"></a>
#### validate( fcn, value )

Validates if a `value` is a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) for which all elements pass the test given by the supplied `function`. Given an input [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), the function returns `true` if all elements pass the test. It returns `false` otherwise.

``` javascript
var arr1 = [ 1, 3, 5, 7 ],
	arr2 = [ 3, 5, 'c' ];

function isOdd( x ) {
	return ( typeof x === 'number' && x % 2 === 1 ) ? true : false;
}

var out = validate( isOdd, arr1 );
// returns true

var out = validate( isOdd, arr2 );
// returns false

```

===
### Create

To facilitate using [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) validation functions within an application, a method to create minimal [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) validation functions is provided.

#### validate.create( fcn )

Creates a validation `function` which validates whether a `value` is a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) for which all elements pass the test given by the supplied `function`.

``` javascript
var isOddArray = validate.create( isOdd ),
	out;

out = isOddArray( [1,3,5] );
// returns true;

out = isOddArray( [2,3,4] );
// returns false;

function isOdd( x ) {
	return ( typeof x === 'number' && x % 2 === 1 ) ? true : false;
}
```

===
### Raw

A lower-level API is provided which forgoes some of the guarantees of the above APIs, such as input argument validation. While use of the above APIs is encouraged in REPL environments, use of the lower-level interface may be warranted when arguments are of a known type or when performance is paramount.

#### validate.raw( fcn, value )

Validates if a `value` is a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) for which all elements pass the test given by the supplied `function`. Given an input [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), the function returns `true` if all elements pass the test and `false` otherwise.

``` javascript
var arr = [ 1, 1, 1, 1, 1 ]

var out = validate.raw( isOdd, arr );
// returns true;

function isOdd( x ) {
	return ( typeof x === 'number' && x % 2 === 1 ) ? true : false;
}
```

## Notes

* 	A provided test function should accept a single argument: a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) element. If the [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) element satisfies a test condition, the function should return `true`; otherwise, the function should return `false`.
*	The validation functions will return `false` for an empty [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays).
*	The `.create()` method uses dynamic code evaluation. Beware when using it in the browser as it may violate your [content security policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) (CSP).


## Examples

``` javascript
var validateTypedArray = require( 'validate.io-typed-array-function' );

function isEven( x ) {
	return ( typeof x === 'number' && x % 2 === 0 ) ? true : false;
}

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

out = validateArray( isEven, arr1 );
console.log( out );

out = validateArray( isEven, arr2 );
console.log( out );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/validate.io-typed-array-function.svg
[npm-url]: https://npmjs.org/package/validate.io-typed-array-function

[travis-image]: http://img.shields.io/travis/validate-io/typed-array-function/master.svg
[travis-url]: https://travis-ci.org/validate-io/typed-array-function

[codecov-image]: https://img.shields.io/codecov/c/github/validate-io/typed-array-function/master.svg
[codecov-url]: https://codecov.io/github/validate-io/typed-array-function?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/typed-array-function.svg
[dependencies-url]: https://david-dm.org/validate-io/typed-array-function

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/typed-array-function.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/typed-array-function

[github-issues-image]: http://img.shields.io/github/issues/validate-io/typed-array-function.svg
[github-issues-url]: https://github.com/validate-io/typed-array-function/issues
