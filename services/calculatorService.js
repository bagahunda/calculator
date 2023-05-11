// Summ function
exports.add = (num1, num2) => {
  return num1 + num2;
};

// Subtraction function
exports.subtract = (num1, num2) => {
  return num1 - num2;
  };
  
  // Multiplication function
  exports.multiply = (num1, num2) => {
  return num1 * num2;
  };

  // Division function
exports.divide = (num1, num2) => {
  if (num2 === 0) {
  throw new Error('Error: Division by zero');
  }
  return num1 / num2;
  };
