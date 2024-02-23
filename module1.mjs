async function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from asyncFunction1"), 2000);
  });
}

// Export a promise that resolves with the result of asyncFunction1
export const data = asyncFunction1();
