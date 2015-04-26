exports.isFunction = function(obj) {
  return typeof obj == 'function' || false;
};

exports.isObject = function(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};

exports.isArray = Array.isArray;

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
