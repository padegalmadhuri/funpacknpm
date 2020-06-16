# What is this
This package provide functions to simplify your code.

# Installation

`npm i funcpack`

# Importing

`const Funcpack=require('funcpack');`

# Available Functions



#### chunk
Divides the array into blocks of given number and return it.
```
let result =Funcpack.chunk(['a', 'b', 'c', 'd'], 2)
//=> [["a", "b"], ["c","d"]]
```

#### compact
Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.
```
let result=Funcpack.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```
#### defer
Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.
```
Funcpack.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.
```
#### drop
Creates a slice of array with n elements dropped from the beginning.
```
Funcpack.drop([1, 2, 3]);
// => [2, 3]
Funcpack.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

####fill
Fills elements of array with value from start up to, but not including, end.
```
var array = [1, 2, 3];
 Funcpack.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
```
#### head
Gets the first element of array.
```
Funcpack.head([1, 2, 3]);
// => 1
```
#### rest
```
Funcpack.rest('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```
#### some
Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
```
Funcpack.some([null, 0, 'yes', false], Boolean);
// => true
```

#### tail
Gets all but the first element of array.
```
Funcpack.tail([1, 2, 3]);
// => [2, 3]
```

#### take
Creates a slice of array with n elements taken from the beginning.
```
Funcpack.take([1, 2, 3]);
// => [1]

Funcpack.take([1, 2, 3], 2);
// => [1, 2]
```
#### zip
Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
```
Funcpack.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
```
