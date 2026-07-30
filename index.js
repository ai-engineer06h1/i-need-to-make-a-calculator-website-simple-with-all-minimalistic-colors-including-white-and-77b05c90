const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Addition
app.post('/api/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid inputs; num1 and num2 should be numbers.' });
  }
  const result = num1 + num2;
  res.json({ result });
});

// Subtraction
app.post('/api/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid inputs; num1 and num2 should be numbers.' });
  }
  const result = num1 - num2;
  res.json({ result });
});

// Multiplication
app.post('/api/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid inputs; num1 and num2 should be numbers.' });
  }
  const result = num1 * num2;
  res.json({ result });
});

// Division
app.post('/api/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid inputs; num1 and num2 should be numbers.' });
  }
  if (num2 === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed.' });
  }
  const result = num1 / num2;
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});