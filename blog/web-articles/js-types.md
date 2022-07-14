# JS Types

## Built-in Types

JavaScript defines seven built-in types:

* `null`
* `undefined`
* `boolean`
* `number`
* `string`
* `object`
* `symbol` -- added in ES6!

**Note:** All of these types except `object` are called "primitives".

```
typeof undefined     === "undefined"; // true
typeof true          === "boolean";   // true
typeof 42            === "number";    // true
typeof "42"          === "string";    // true
typeof { life: 42 }  === "object";    // true

// added in ES6!
typeof Symbol()      === "symbol";    // true

```

`null` *special*  in the sense that it's buggy when combined with the `typeof` operator:
```
typeof null === "object"; // true
```

If you want to test for a `null` value using its type, you need a compound condition:

```js
var a = null;

(!a && typeof a === "object"); // true
```

`null` is the only primitive value that is "falsy" but that also returns `"object"` from the `typeof` check.


## Values as Types

Variables don't have types, but the values in them do. These types define intrinsic behavior of the values.

The typeof operator always returns a string. So:

```
typeof typeof 42; // "string"
```

The first typeof 42 returns "number", and typeof "number" is "string".

### Function

It's easy to think that `function` would be a top-level built-in type in JS, especially given this behavior of the `typeof` operator. However, if you read the spec, you'll see it's actually a "subtype" of object. Specifically, a function is referred to as a "callable object" -- an object that has an internal `[[Call]]` property that allows it to be invoked.

The fact that functions are actually objects is quite useful. Most importantly, they can have properties. For example:

```js
function a(b,c) {
	/* .. */
}
```

The function object has a `length` property set to the number of formal parameters it is declared with.

```js
a.length; // 2
```

Since you declared the function with two formal named parameters (`b` and `c`), the "length of the function" is `2`.


### Arrays

```js
typeof [1,2,3] === "object"; // true
```

Arrays are just objects. It's most appropriate to think of them also as a "subtype" of object, in this case with the additional characteristics of being numerically indexed (as opposed to just being string-keyed like plain objects) and maintaining an automatically updated `.length` property.

## undefined vs "undeclared"

Many developers will assume "undefined" and "undeclared" are roughly the same thing, but in JavaScript, they're quite different. undefined is a value that a declared variable can hold. "Undeclared" means a variable has never been declared.

JavaScript unfortunately kind of conflates these two terms, not only in its error messages ("ReferenceError: a is not defined") but also in the return values of typeof, which is "undefined" for both cases.

```
var a;

a; // undefined
b; // ReferenceError: b is not defined

typeof a; // "undefined"

typeof b; // "undefined"
```

The safety guard (preventing an error) on typeof when used against an undeclared variable can be helpful in certain cases.

```
if (typeof atob === "undefined") {
	atob = function() { /*..*/ };
}
```