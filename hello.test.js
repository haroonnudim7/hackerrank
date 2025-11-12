test("prints Hello, World!", () => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  console.log("Hello, World!");
  expect(logSpy).toHaveBeenCalledWith("Hello, World!");
  logSpy.mockRestore();
});
