
import { Canvas, Circle, Textbox, Line, Rect } from 'fabric';

// Example for multiple choice questions
export const createQuizExample = (canvas: Canvas) => {
  // Get canvas dimensions for better positioning
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Multiple Choice Question', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Add question
  const question = new Textbox('What is the capital of France?', {
    left: 50,
    top: 80,
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#000000',
    width: canvasWidth - 100,
  });
  
  // Add options
  const options = [
    { text: 'A) London', correct: false },
    { text: 'B) Paris', correct: true },
    { text: 'C) Berlin', correct: false },
    { text: 'D) Madrid', correct: false },
  ];
  
  // Show answer status
  const userAnswer = 'B';
  const correctAnswer = 'B';
  const isCorrect = userAnswer === correctAnswer;
  
  const optionObjects = [];
  
  options.forEach((option, index) => {
    const top = 130 + index * 50;
    
    // Option background
    const bgColor = option.text.startsWith(userAnswer) 
      ? (option.correct ? '#86efac' : '#fecaca')  // Green if correct, red if wrong
      : (option.correct ? '#d9f99d' : '#ffffff'); // Light green for correct answer, white for others
    
    const optionBg = new Rect({
      left: 50,
      top,
      width: 350,
      height: 40,
      fill: bgColor,
      rx: 5,
      ry: 5,
    });
    
    // Option text
    const optionText = new Textbox(option.text, {
      left: 60,
      top: top + 10,
      fontSize: 16,
      fontFamily: 'Arial',
      fill: '#000000',
    });
    
    // If this is the user's answer, add a mark
    if (option.text.startsWith(userAnswer)) {
      const mark = new Textbox(option.correct ? '✓' : '✗', {
        left: 380,
        top: top + 5,
        fontSize: 24,
        fontFamily: 'Arial',
        fill: option.correct ? '#16a34a' : '#dc2626',
      });
      optionObjects.push(mark);
    }
    
    optionObjects.push(optionBg, optionText);
  });
  
  // Add result message
  const resultMessage = new Textbox(
    isCorrect ? 'Correct! Well done!' : 'Incorrect. Try again!', {
    left: 50,
    top: 340,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: isCorrect ? '#16a34a' : '#dc2626',
  });
  
  // Add explanation
  const explanation = new Textbox(
    'Paris is the capital and most populous city of France. It is located on the Seine River in northern France.', {
    left: 50,
    top: 380,
    width: canvasWidth - 100,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Add objects to canvas
  canvas.add(title, question, resultMessage, explanation);
  
  // Add option objects
  optionObjects.forEach(obj => canvas.add(obj));
};
