import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";


function sum(a: number, b: number) {
  return a + b;
}
test("adds 1+2 to equal 3", () => {
  expect(sum(1,2)).toBe(3);
  expect(sum(3,3)).not.toBe(4);
});

test("objects are equal", () => {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { a: 1, b: 2 };
  expect(obj1).toEqual(obj2);
});

test("objects assign new properties", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj1:any = { a: 1, b: 2 };
  obj1["c"] = 3;
  expect(obj1).toEqual({ a: 1, b: 2, c: 3 });
});

test('There is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
})

function getResponse() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 1000);
  });
}

// test("async test", async () => {
//   const response = await getResponse();
//   expect(response).toBe("Hello World");
// });

describe("Combine async test", () => {
  test("async test should return Hello World", async () => {
    const response = await getResponse();
    expect(response).toBe("Hello World");
  });
  test("async test should not return abcd", async () => {
    const response = await getResponse();
    expect(response).toBe("Hello World");
  });
});