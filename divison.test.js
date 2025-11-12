const divide = require("./division");

test("checks division results for a = 3 and b = 5", () => {
  const a = 3;
  const b = 5;

  const result = divide(a, b);

  expect(result.floorResult).toBe(0);
  expect(result.normalResult).toBeCloseTo(0.6, 5);
});
