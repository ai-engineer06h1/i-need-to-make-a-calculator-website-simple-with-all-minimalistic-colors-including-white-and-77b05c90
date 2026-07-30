from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os

app = FastAPI()

class Operation(BaseModel):
    a: float
    b: float

@app.post("/api/add")
async def add(operation: Operation):
    return {'result': operation.a + operation.b}

@app.post("/api/subtract")
async def subtract(operation: Operation):
    return {'result': operation.a - operation.b}

@app.post("/api/multiply")
async def multiply(operation: Operation):
    return {'result': operation.a * operation.b}

@app.post("/api/divide")
async def divide(operation: Operation):
    if operation.b == 0:
        raise HTTPException(status_code=400, detail="Division by zero is not allowed")
    return {'result': operation.a / operation.b}