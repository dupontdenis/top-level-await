/**
 * Asynchronous function that returns a promise.
 * @returns {Promise<string>} A promise that resolves with the string "Data from DB" after a delay of 2seconds.
 */
export async function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data from DB"), 2000);
  });
}

export const data = await asyncFunction1();
