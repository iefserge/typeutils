## SYNOPSIS

Super lightweight JavaScript typecheck library for primitive values.

## USAGE

```js
var typeutils = require('typeutils');

typeutils.isFunction(function() {})   // true
typeutils.isObject({})                // true
typeutils.isArray([1, 2, 3])          // true
typeutils.isInteger(10)               // true
typeutils.isString('hello')           // true
typeutils.isNumber(-0.2)              // true
typeutils.isBoolean(false)            // true
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
