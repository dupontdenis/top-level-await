# top level await

[Top-level](https://v8.dev/features/top-level-await) await enables developers to use the await keyword outside of async functions. It acts like a big async function causing other modules who import them to wait before they start evaluating their body.

## Example

Transform the code with top level await

```js
//module1.mjs
export async function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from asyncFunction1"), 2000);
  });
}

//module2.mjs
import { asyncFunction1 } from "./module1.mjs";

export async function asyncFunction2() {
  const data = await asyncFunction1();
  document.body.innnerHTML = data;
}

asyncFunction2();
```
