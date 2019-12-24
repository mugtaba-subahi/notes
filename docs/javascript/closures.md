## Closures

A closure is when the variable environment of an execution context remains even after the execution context has finished and is removed from the execution stack. This is usually the case when a function returns another function. The returned function often uses variables from the function it resides (parent function) in even though it has finished executing.

```js
function cat() {
  const age = 5; // closure scoped vairable

  return function speed() {
    console.log(`Max speed of cat is ${age * 10} mph`);
  };
}
const Bobcat = cat();
Bobcat(); // output: Max speed of cat is 50 mph
```

As we can see, the 'age' variable is not declared inside the 'speed' function but rather in its outer environment (parent function). Even though this is the case, it is still available inside the 'speed' function because the variable environment of the 'cat' function still remains in memory long after it has finished executing.

## Garbage Collection

The variable environment does not remain for eternity. After sometime, the JavaScript garbage collection cleans up the variable environment in order to save memory.
