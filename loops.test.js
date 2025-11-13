const squaresUpTo = require("./loops");

test("generates correct squares up to n", () => {
  // n = 5 → [0, 1, 4, 9, 16]
  expect(squaresUpTo(5)).toEqual([0, 1, 4, 9, 16]);

  // n = 0 → []
  expect(squaresUpTo(0)).toEqual([]);

  // n = 1 → [0]
  expect(squaresUpTo(1)).toEqual([0]);
});
