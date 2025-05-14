
import { Canvas, Textbox, Circle, Line, Triangle, Rect } from 'fabric';

// Example for art concepts
export const createArtExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Color Theory Basics', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create primary colors section
  const primaryTitle = new Textbox('Primary Colors', {
    left: 50,
    top: 80,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Create circles for primary colors
  const redCircle = new Circle({
    left: 80,
    top: 120,
    radius: 25,
    fill: '#e11d48', // Red
    stroke: '#881337',
    strokeWidth: 2,
  });
  
  const yellowCircle = new Circle({
    left: 150,
    top: 120,
    radius: 25,
    fill: '#facc15', // Yellow
    stroke: '#ca8a04',
    strokeWidth: 2,
  });
  
  const blueCircle = new Circle({
    left: 220,
    top: 120,
    radius: 25,
    fill: '#2563eb', // Blue
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  // Labels for primary colors
  const redLabel = new Textbox('Red', {
    left: 70,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  const yellowLabel = new Textbox('Yellow', {
    left: 135,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  const blueLabel = new Textbox('Blue', {
    left: 210,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Create secondary colors section
  const secondaryTitle = new Textbox('Secondary Colors', {
    left: 300,
    top: 80,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Create circles for secondary colors
  const purpleCircle = new Circle({
    left: 330,
    top: 120,
    radius: 25,
    fill: '#9333ea', // Purple
    stroke: '#6b21a8',
    strokeWidth: 2,
  });
  
  const greenCircle = new Circle({
    left: 400,
    top: 120,
    radius: 25,
    fill: '#16a34a', // Green
    stroke: '#166534',
    strokeWidth: 2,
  });
  
  const orangeCircle = new Circle({
    left: 470,
    top: 120,
    radius: 25,
    fill: '#f97316', // Orange
    stroke: '#c2410c',
    strokeWidth: 2,
  });
  
  // Labels for secondary colors
  const purpleLabel = new Textbox('Purple\n(Red + Blue)', {
    left: 310,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  const greenLabel = new Textbox('Green\n(Blue + Yellow)', {
    left: 375,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  const orangeLabel = new Textbox('Orange\n(Red + Yellow)', {
    left: 445,
    top: 175,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Create color wheel
  const colorWheelTitle = new Textbox('Color Wheel', {
    left: 50,
    top: 230,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Create color harmonies section
  const harmoniesTitle = new Textbox('Color Harmonies', {
    left: 300,
    top: 230,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Create complementary colors example
  const complementaryTitle = new Textbox('Complementary', {
    left: 300,
    top: 260,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const complementaryRect1 = new Rect({
    left: 300,
    top: 290,
    width: 50,
    height: 50,
    fill: '#2563eb', // Blue
  });
  
  const complementaryRect2 = new Rect({
    left: 360,
    top: 290,
    width: 50,
    height: 50,
    fill: '#f97316', // Orange
  });
  
  // Create analogous colors example
  const analogousTitle = new Textbox('Analogous', {
    left: 450,
    top: 260,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const analogousRect1 = new Rect({
    left: 450,
    top: 290,
    width: 30,
    height: 50,
    fill: '#16a34a', // Green
  });
  
  const analogousRect2 = new Rect({
    left: 480,
    top: 290,
    width: 30,
    height: 50,
    fill: '#2563eb', // Blue
  });
  
  const analogousRect3 = new Rect({
    left: 510,
    top: 290,
    width: 30,
    height: 50,
    fill: '#9333ea', // Purple
  });
  
  // Create triadic colors example
  const triadicTitle = new Textbox('Triadic', {
    left: 300,
    top: 360,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const triadicRect1 = new Rect({
    left: 300,
    top: 390,
    width: 30,
    height: 50,
    fill: '#e11d48', // Red
  });
  
  const triadicRect2 = new Rect({
    left: 330,
    top: 390,
    width: 30,
    height: 50,
    fill: '#facc15', // Yellow
  });
  
  const triadicRect3 = new Rect({
    left: 360,
    top: 390,
    width: 30,
    height: 50,
    fill: '#2563eb', // Blue
  });
  
  // Create simple color wheel
  const colorWheel = [];
  const wheelCenter = { x: 150, y: 320 };
  const radius = 70;
  const colors = [
    '#e11d48', // Red
    '#f97316', // Orange
    '#facc15', // Yellow
    '#16a34a', // Green
    '#2563eb', // Blue
    '#9333ea', // Purple
  ];
  
  for (let i = 0; i < colors.length; i++) {
    const angle = (i * 60) * Math.PI / 180;
    const x1 = wheelCenter.x;
    const y1 = wheelCenter.y;
    const x2 = wheelCenter.x + radius * Math.cos(angle);
    const y2 = wheelCenter.y + radius * Math.sin(angle);
    
    // Create a triangle for each color segment
    const nextAngle = ((i + 1) % colors.length * 60) * Math.PI / 180;
    const x3 = wheelCenter.x + radius * Math.cos(nextAngle);
    const y3 = wheelCenter.y + radius * Math.sin(nextAngle);
    
    const segment = new Triangle({
      points: [
        { x: x1, y: y1 },
        { x: x2, y: y2 },
        { x: x3, y: y3 },
      ],
      fill: colors[i],
      stroke: '#333333',
      strokeWidth: 1,
    });
    
    colorWheel.push(segment);
  }
  
  // Add explanation
  const explanation = new Textbox('Color theory is the study of how colors interact and how we perceive them. Understanding color relationships helps in creating harmonious designs, paintings, and other visual compositions.', {
    left: 50,
    top: 450,
    width: canvasWidth - 100,
    fontSize: 14,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, primaryTitle, secondaryTitle,
    redCircle, yellowCircle, blueCircle,
    redLabel, yellowLabel, blueLabel,
    purpleCircle, greenCircle, orangeCircle,
    purpleLabel, greenLabel, orangeLabel,
    colorWheelTitle, harmoniesTitle,
    complementaryTitle, complementaryRect1, complementaryRect2,
    analogousTitle, analogousRect1, analogousRect2, analogousRect3,
    triadicTitle, triadicRect1, triadicRect2, triadicRect3,
    explanation
  );
  
  // Add color wheel segments
  colorWheel.forEach(segment => canvas.add(segment));
};
