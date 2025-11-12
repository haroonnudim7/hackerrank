test("logs correct arithmetic results", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  let a = 3;
  let b = 5;

  console.log(a + b); // Addition
  console.log(a - b); // Subtraction
  console.log(a * b); // Multiplication

  // Verify that console.log was called with correct values
  expect(logSpy).toHaveBeenNthCalledWith(1, 8); // a + b
  expect(logSpy).toHaveBeenNthCalledWith(2, -2); // a - b
  expect(logSpy).toHaveBeenNthCalledWith(3, 15); // a * b

  logSpy.mockRestore();
});
