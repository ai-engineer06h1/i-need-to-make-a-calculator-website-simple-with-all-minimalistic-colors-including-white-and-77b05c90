import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = async (operation) => {
    const response = await fetch(`/api/${operation}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1: parseFloat(num1), num2: parseFloat(num2) }),
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Calculator</h1>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className="border rounded p-2" placeholder="Number 1"/>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className="border rounded p-2" placeholder="Number 2"/>
      <div className="space-x-2">
        <button onClick={() => handleCalculation('add')} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        <button onClick={() => handleCalculation('subtract')} className="bg-blue-500 text-white px-4 py-2 rounded">Subtract</button>
        <button onClick={() => handleCalculation('multiply')} className="bg-blue-500 text-white px-4 py-2 rounded">Multiply</button>
        <button onClick={() => handleCalculation('divide')} className="bg-blue-500 text-white px-4 py-2 rounded">Divide</button>
      </div>
      {result !== null && <h2 className="text-xl">Result: {result}</h2>}
    </div>
  );
}

export default Calculator;