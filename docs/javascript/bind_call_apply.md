# Bind, Call & Apply

Bind, Call and Apply are all functions that live on the prototype of the function object. All three functions allow you to change the context of the 'this' keyword by passing the context as the first parameter.

## Call & Apply

Call and Apply work in the exact same way with one difference. Call accepts parameters separated by commas whereas Apply only accepts an array of parameters as its second argument. Both functions (Call and Apply) also immediately execute the functions they are used on

```js
  // Example
  function.call(ContextOfThis, Param1, Param2);
  function.apply(ContextOfThis, [Param1, Param2]);
```

## Bind

Bind works differently than the other two. Bind create a
**copy** of the function it is used on. The copied function will be returned. Bind changes the context of the 'this' keyword just the same as Call and Apply but any other parameters given to it will be set as a permanent value of the function it copied

```js
  // Example
  function.apply(ContextOfThis, Param1, Param2);

  // Usage
  function car(make, year){
    console.log(`Make is ${make} and year is ${year}`);
  }

  car(); //output: Make is undefined and year is undefined
  const nissan = car.bind(this, 'nissan'); //output: Make is nissan and year is undefined
  nissan(1998); //output: Make is nissan and year is 1998
```
