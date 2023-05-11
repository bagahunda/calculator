// Calculation logic
const calculatorService = require('../services/calculatorService');

// Summ handler
exports.add = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Error: Wrong number format');
    return;
  }

  const result = calculatorService.add(num1, num2);
  res.send(result.toString());
};

// Subtraction handler
exports.subtract = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Error: Wrong number format');
    return;
  }

  const result = calculatorService.subtract(num1, num2);
  res.send(result.toString());
};

// Multiplication handler
exports.multiply = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Error: Wrong number format');
    return;
  }

  const result = calculatorService.multiply(num1, num2);
  res.send(result.toString());
};

// Division handler
exports.divide = (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Error: Wrong number format');
    return;
  }

  try {
    const result = calculatorService.divide(num1, num2);
    res.send(result.toString());
  } catch (error) {
    res.status(400).send(error.message);
  }
};
