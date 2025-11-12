const arithmeticOperations = require("./arithmetic-operators");

test("checks arithmetic operations for a = 3 and b = 5", () => {
  const a = 3;
  const b = 5;

  const result = arithmeticOperations(a, b);

  expect(result.addition).toBe(8); // 3 + 5
  expect(result.subtraction).toBe(-2); // 3 - 5
  expect(result.multiplication).toBe(15); // 3 * 5
});
