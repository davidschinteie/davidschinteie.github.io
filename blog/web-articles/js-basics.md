# JS Basics

1. Arrow function

ce sunt?
- An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- Alternativa es6 de a scrie functii anonime cu un cod mai concis si cu o diferenta legat de modul in care este folosit contextul lui `this`

de ce le folosim?
- cod mai concis: 
    - just one line of code
    - no function keyword
    - no return keyword
    - and no curly braces `{}`
- forget about old-time hacks to solve the binding of the `this` keyword
- Arrow functions also work great with array methods like .map(), .sort(), .forEach(), .filter(), and .reduce()

diferenta legata de `this`:
- When you use an arrow function in JavaScript, the value of the this keyword doesn’t get rebound. It’s inherited from the parent scope (this is called lexical scoping).

resurse:
 - [ES6 Arrow Function](https://www.youtube.com/watch?v=mrYMzpbFz18)
 - [Arrow Functions in JavaScript: How to Use Fat & Concise Syntax](https://www.sitepoint.com/arrow-functions-javascript/)

2. Array functions

 - `forEach` - The forEach() method executes a provided function once for each array element. 

```
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

```

 - `map` - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 

 ```
 const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 
 ```

- `filter` - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

reduce

3. Objects

4. `this` keyword