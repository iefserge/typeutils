'use strict';

var isUndefined = function(value) {
  return value === void 0;
};

exports.isUndefined = isUndefined;

var isFunction = function(obj) {
  return typeof obj == 'function' || false;
};

exports.isFunction = isFunction;

exports.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

var isArray = Array.isArray;
exports.isArray = isArray;

var isArrayOf = function(value, fn) {
  if (!isArray(value)) {
    return false;
  }

  if (!isFunction(fn)) {
    throw new Error('test function expected');
  }

  for (var i = 0, l = value.length; i < l; ++i) {
    if (!fn(value[i])) {
      return false;
    }
  }

  return true;
};

exports.isArrayOf = isArrayOf;

// Number.isInteger polyfill
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
exports.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' && isFinite(value)
    && Math.floor(value) === value;
};

exports.isString = function(value) {
  return typeof value === 'string';
};

exports.isNumber = function(value) {
  return typeof value === 'number';
};

exports.isBoolean = function(value) {
  return value === true || value === false;
};

exports.testInstanceOf = function(type) {
  return function(value) {
    return value instanceof type;
  };
};

exports.testArrayOf = function(fn) {
  return function(value) {
    return isArrayOf(value, fn);
  };
};
