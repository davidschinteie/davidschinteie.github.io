# JS Arrays

### 1. Array basics

- create new array

```
const newArray = [];
const newArray2 = new Array();
```

- get array length

```
let length = newArray.length;
```

- check if is an array 

```
let numbers = [];
let isArray = Array.isArray(numbers);
```

- insert into array

```
const numbers = [10,11,12,22,213,243,434];
numbers[2] = 100;
```

- find index of value

```
const numbers = [10,11,12,22,213,243,434];
let val = numbers.indexOf(22);
```

### 2. Mutating Arrays

- Adding to end of an array

```
const numbers = [10, 11, 12];
numbers.push(250);
// expected output: [10, 11, 12, 250];
```

- Adding to front of an array

```
const numbers = [10, 11, 12];
numbers.unshift(250);
// expected output: [250, 10, 11, 12];
```

- Remove from end of an array

```
const numbers = [10, 11, 12];
numbers.pop();
// expected output: [10, 11];
```

- Remove from front of an array

```
const numbers = [10, 11, 12];
numbers.shift();
// expected output: [11, 12];
```

- Array splice

```
const numbers = [11, 12, 13, 14];
numbers.splice(1,3) // 1 - is the index where to start and 3 is index where it ends
```

- Array reverse()

```
const numbers = [11, 12, 13, 14];
numbers.reverse();
// expected output: [14, 13, 12, 11]
```

- Concatenate array()

```
const numbers1 = [10, 11, 12];
const numbers2 = [13, 14, 15];

let val = numbers1.concat(numbers2);
// expected output: [10, 11, 12, 13, 14, 15]
```

### 3. Sorting Arrays

- using sort() for strings sorted alphabetically

```
const fruits = ['banana', 'kiwi', 'orange', 'mango', 'apple'];
let val = fruits.sort();

// expected output of val: ['apple', 'banana', 'kiwi', 'mango', 'orange']
```

- using sort in numbers array
```
const numbers2 = [42, 22, 14, 17, 29, 50];
//for ascending order:
let val = numbers2.sort((a, b) => a - b);
// expected output: [ 14, 17, 22, 29, 42, 50 ]

//for descending order:
val = numbers2.sort((a, b) => b - a);
// expected output: [ 50, 42, 29, 22, 17, 14 ]

```

### 4. Array functions

 - `find` - The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. 
```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

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

- `reduce` - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumWithInitial);
// expected output: 10
```
