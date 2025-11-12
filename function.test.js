const isLeap = require("./function");

test("checks leap year logic", () => {
  expect(isLeap(1990)).toBe(false);
  expect(isLeap(2000)).toBe(true);
  expect(isLeap(1900)).toBe(false);
  expect(isLeap(2024)).toBe(true);
});
