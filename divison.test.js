// mathDivision.test.js

test("checks division results for a = 3 and b = 5", () => {
  const a = 3;
  const b = 5;

  const floorResult = Math.floor(a / b);
  const normalResult = a / b;

  // Assertions
  expect(floorResult).toBe(0);
  expect(normalResult).toBeCloseTo(0.6, 5);
});
