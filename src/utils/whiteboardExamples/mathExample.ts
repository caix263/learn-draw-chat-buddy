
import { Canvas, Textbox } from 'fabric';

// Example for math equations or formulas
export const createMathExample = (canvas: Canvas) => {
  // Center the elements based on canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  const centerX = canvasWidth / 2;
  
  // Add title
  const title = new Textbox('Quadratic Formula', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Add the formula
  const formula = new Textbox('x = (-b ± √(b² - 4ac)) / 2a', {
    left: 50,
    top: 70,
    fontSize: 20,
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add explanation
  const explanation = new Textbox('Where:\na = coefficient of x²\nb = coefficient of x\nc = constant term', {
    left: 50,
    top: 120,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#555555',
  });
  
  // Add an example
  const example = new Textbox('Example: For equation 2x² + 5x - 3 = 0\nWe have a=2, b=5, c=-3\nUsing the formula:\nx = (-5 ± √(25 - 4×2×(-3))) / (2×2)\nx = (-5 ± √(25 + 24)) / 4\nx = (-5 ± √49) / 4\nx = (-5 ± 7) / 4\nx₁ = 0.5, x₂ = -3', {
    left: 50,
    top: 200,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    width: 400,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(title, formula, explanation, example);
};
