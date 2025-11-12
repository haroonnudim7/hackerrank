function divide(a, b) {
  return {
    floorResult: Math.floor(a / b),
    normalResult: a / b,
  };
}

module.exports = divide;
