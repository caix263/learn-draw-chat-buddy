
import { Canvas, Rect, Textbox, Line } from 'fabric';

// Example for programming concepts
export const createProgrammingExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Basic Programming Concepts', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create code block for variables
  const variablesTitle = new Textbox('Variables', {
    left: 50,
    top: 80,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const variablesRect = new Rect({
    left: 50,
    top: 110,
    width: Math.min(canvasWidth - 100, 500),
    height: 70,
    fill: '#1A1F2C',
    rx: 5,
    ry: 5,
  });
  
  const variablesCode = new Textbox('// JavaScript Variable Declaration\nlet count = 0;           // Number\nconst name = "Alice";    // String\nlet isActive = true;     // Boolean', {
    left: 60,
    top: 115,
    width: Math.min(canvasWidth - 120, 480),
    fontSize: 14,
    fontFamily: 'Courier New',
    fill: '#E5DEFF',
    lineHeight: 1.3,
  });
  
  // Create code block for conditional statements
  const conditionalsTitle = new Textbox('Conditional Statements', {
    left: 50,
    top: 200,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const conditionalsRect = new Rect({
    left: 50,
    top: 230,
    width: Math.min(canvasWidth - 100, 500),
    height: 90,
    fill: '#1A1F2C',
    rx: 5,
    ry: 5,
  });
  
  const conditionalsCode = new Textbox('if (score >= 70) {\n  console.log("Passed!");\n} else {\n  console.log("Try again!");\n}', {
    left: 60,
    top: 235,
    width: Math.min(canvasWidth - 120, 480),
    fontSize: 14,
    fontFamily: 'Courier New',
    fill: '#E5DEFF',
    lineHeight: 1.3,
  });
  
  // Create code block for loops
  const loopsTitle = new Textbox('Loops', {
    left: 50,
    top: 340,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const loopsRect = new Rect({
    left: 50,
    top: 370,
    width: Math.min(canvasWidth - 100, 500),
    height: 90,
    fill: '#1A1F2C',
    rx: 5,
    ry: 5,
  });
  
  const loopsCode = new Textbox('// For Loop\nfor (let i = 0; i < 5; i++) {\n  console.log(`Iteration ${i}`);\n}', {
    left: 60,
    top: 375,
    width: Math.min(canvasWidth - 120, 480),
    fontSize: 14,
    fontFamily: 'Courier New',
    fill: '#E5DEFF',
    lineHeight: 1.3,
  });
  
  // Add explanation
  const explanation = new Textbox('Programming fundamentals include variables to store data, conditional statements to make decisions, and loops to repeat actions. These concepts form the building blocks of algorithms and are common across most programming languages.', {
    left: 50,
    top: 480,
    width: Math.min(canvasWidth - 100, 500),
    fontSize: 14,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, 
    variablesTitle, variablesRect, variablesCode,
    conditionalsTitle, conditionalsRect, conditionalsCode,
    loopsTitle, loopsRect, loopsCode,
    explanation
  );
};
