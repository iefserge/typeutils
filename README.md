## SYNOPSIS

Super lightweight JavaScript typecheck library for primitive values.

[![Build Status](https://travis-ci.org/iefserge/typeutils.svg)](https://travis-ci.org/iefserge/typeutils)

## USAGE

```js
var typeutils = require('typeutils');

typeutils.isUndefined()               // true
typeutils.isFunction(function() {})   // true
typeutils.isObject({})                // true
typeutils.isArray([1, 2, 3])          // true
typeutils.isInteger(10)               // true
typeutils.isString('hello')           // true
typeutils.isNumber(-0.2)              // true
typeutils.isBoolean(false)            // true

typeutils.isArrayOf([1, 2, 3], typeutils.isInteger)   // true
typeutils.isArrayOf([[1], [2]],
  typeutils.testArrayOf(typeutils.isInteger))         // true

function A() {}
typeutils.isArrayOf([new A(), new A()],
  typeutils.testInstanceOf(A))                        // true
```

Note: primitive value wrapper objects are intentionally ignored:

```js
typeutils.isBoolean(new Boolean(false))   // false
typeutils.isString(new String('hello'))   // false
typeutils.isNumber(new Number(10))        // false
typeutils.isInteger(new Number(10))       // false

typeutils.isObject(new Boolean(false))    // true
typeutils.isObject(new String('hello'))   // true
typeutils.isObject(new Number(10))        // true
```

##LICENSE

Apache License, Version 2.0
