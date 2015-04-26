var test = require('tape');
var typeutils = require('./');

test('isFunction', function(t) {
  function fn() {}
  t.equal(typeutils.isFunction(fn), true);
  t.equal(typeutils.isFunction(function() {}), true);
  t.equal(typeutils.isFunction({}), false);
  t.equal(typeutils.isFunction(null), false);
  t.equal(typeutils.isFunction(), false);
  t.equal(typeutils.isFunction(10), false);
  t.equal(typeutils.isFunction(new String('hello')), false);
  t.end();
});

test('isObject', function(t) {
  t.equal(typeutils.isObject({}), true);
  t.equal(typeutils.isObject(function() {}), true);
  t.equal(typeutils.isObject(null), false);
  t.equal(typeutils.isObject(), false);
  t.equal(typeutils.isObject(23.4), false);
  t.equal(typeutils.isObject(/abc/), true);
  t.equal(typeutils.isObject(new String('hello')), true);
  t.equal(typeutils.isObject(new Number(13)), true);
  t.equal(typeutils.isObject(new Boolean(false)), true);
  t.end();
});

test('isArray', function(t) {
  t.equal(typeutils.isArray([1, 2, 3]), true);
  t.equal(typeutils.isArray([]), true);
  t.equal(typeutils.isArray(new Array(10)), true);
  t.equal(typeutils.isArray(arguments), false);
  t.equal(typeutils.isArray({}), false);
  t.equal(typeutils.isArray(null), false);
  t.equal(typeutils.isArray(), false);
  t.end();
});

test('isInteger', function(t) {
  t.equal(typeutils.isInteger(10), true);
  t.equal(typeutils.isInteger(0), true);
  t.equal(typeutils.isInteger(-14), true);
  t.equal(typeutils.isInteger(0.2), false);
  t.equal(typeutils.isInteger(), false);
  t.equal(typeutils.isInteger(null), false);
  t.equal(typeutils.isInteger(.2), false);
  t.equal(typeutils.isInteger(0x10), true);
  t.equal(typeutils.isInteger(new Number(20)), false);
  t.equal(typeutils.isInteger(NaN), false);
  t.equal(typeutils.isInteger(Infinity), false);
  t.equal(typeutils.isInteger(-Infinity), false);
  t.end();
});

test('isNumber', function(t) {
  t.equal(typeutils.isNumber(-0.2), true);
  t.equal(typeutils.isNumber(.2), true);
  t.equal(typeutils.isNumber(0), true);
  t.equal(typeutils.isNumber(-0), true);
  t.equal(typeutils.isNumber(NaN), true);
  t.equal(typeutils.isNumber(Infinity), true);
  t.equal(typeutils.isNumber(-Infinity), true);
  t.equal(typeutils.isNumber('10'), false);
  t.equal(typeutils.isNumber(''), false);
  t.equal(typeutils.isNumber([]), false);
  t.equal(typeutils.isNumber(null), false);
  t.equal(typeutils.isNumber(), false);
  t.equal(typeutils.isNumber(new Number(10)), false);
  t.end();
});

test('isString', function(t) {
  t.equal(typeutils.isString('hello'), true);
  t.equal(typeutils.isString(''), true);
  t.equal(typeutils.isString(10..toString()), true);
  t.equal(typeutils.isString(new String('ab')), false);
  t.equal(typeutils.isString(), false);
  t.equal(typeutils.isString(null), false);
  t.equal(typeutils.isString(10), false);
  t.equal(typeutils.isString([]), false);
  t.equal(typeutils.isString({}), false);
  t.end();
});

test('isBoolean', function(t) {
  t.equal(typeutils.isBoolean(true), true);
  t.equal(typeutils.isBoolean(false), true);
  t.equal(typeutils.isBoolean(0), false);
  t.equal(typeutils.isBoolean(1), false);
  t.equal(typeutils.isBoolean(-1), false);
  t.equal(typeutils.isBoolean(null), false);
  t.equal(typeutils.isBoolean(), false);
  t.equal(typeutils.isBoolean(''), false);
  t.equal(typeutils.isBoolean({}), false);
  t.equal(typeutils.isBoolean([]), false);
  t.equal(typeutils.isBoolean(new Boolean(false)), false);
  t.equal(typeutils.isBoolean(new Boolean(true)), false);
  t.end();
});
