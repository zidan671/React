

function pow(a, b) {
  if (b === 0) return 1;

  return a*pow(a, b - 1)
}

let result = pow(2, 5)
console.log(result);
