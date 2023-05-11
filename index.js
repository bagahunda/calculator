const express = require('express');
const app = express();

const port = 3000;

// Controller
const calculatorController = require('./controllers/calculatorController');

// GET-request handler for the plus operation
app.get('/add/:num1/:num2', calculatorController.add);

// GET-request handler for the minus operation
app.get('/subtract/:num1/:num2', calculatorController.subtract);

// GET-request handler for the multiplication operation
app.get('/multiply/:num1/:num2', calculatorController.multiply);

// GET-request handler for the division operation
app.get('/divide/:num1/:num2', calculatorController.divide);

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
