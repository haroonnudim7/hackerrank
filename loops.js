function squaresUpTo(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push(i * i);
  }

  return results;
}

module.exports = squaresUpTo;
