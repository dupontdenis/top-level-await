import { data } from "./module1.mjs";

// Await the data at the top level
const result = await data;

console.log(result);
document.body.innerHTML = result;
