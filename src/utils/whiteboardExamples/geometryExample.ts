
import { Canvas, Polygon, Textbox, Line, Circle } from 'fabric';

// Example for geometry concepts
export const createGeometryExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Center coordinates
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  
  // Add title
  const title = new Textbox('Geometry: Triangles', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create an equilateral triangle
  const equilateralPoints = [
    { x: centerX - 150, y: 140 },
    { x: centerX - 200, y: 220 },
    { x: centerX - 100, y: 220 },
  ];
  
  const equilateralTriangle = new Polygon(equilateralPoints, {
    fill: '#D6BCFA',
    stroke: '#8B5CF6',
    strokeWidth: 2,
  });
  
  const equilateralLabel = new Textbox('Equilateral Triangle\nAll sides equal\nAll angles 60°', {
    left: centerX - 180,
    top: 230,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Create an isosceles triangle
  const isoscelesPoints = [
    { x: centerX, y: 140 },
    { x: centerX - 40, y: 220 },
    { x: centerX + 40, y: 220 },
  ];
  
  const isoscelesTriangle = new Polygon(isoscelesPoints, {
    fill: '#FEC6A1',
    stroke: '#F97316',
    strokeWidth: 2,
  });
  
  const isoscelesLabel = new Textbox('Isosceles Triangle\nTwo sides equal\nTwo angles equal', {
    left: centerX - 40,
    top: 230,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Create a scalene triangle
  const scalenePoints = [
    { x: centerX + 150, y: 130 },
    { x: centerX + 100, y: 220 },
    { x: centerX + 200, y: 210 },
  ];
  
  const scaleneTriangle = new Polygon(scalenePoints, {
    fill: '#D3E4FD',
    stroke: '#0EA5E9',
    strokeWidth: 2,
  });
  
  const scaleneLabel = new Textbox('Scalene Triangle\nNo equal sides\nNo equal angles', {
    left: centerX + 120,
    top: 230,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Create a right-angled triangle
  const rightTrianglePoints = [
    { x: 100, y: 300 },
    { x: 100, y: 380 },
    { x: 180, y: 380 },
  ];
  
  const rightTriangle = new Polygon(rightTrianglePoints, {
    fill: '#F2FCE2',
    stroke: '#16A34A',
    strokeWidth: 2,
  });
  
  // Add the right angle symbol
  const rightAngleSymbol = new Polygon([
    { x: 110, y: 370 },
    { x: 110, y: 360 },
    { x: 120, y: 360 },
  ], {
    fill: 'transparent',
    stroke: '#16A34A',
    strokeWidth: 2,
  });
  
  const rightTriangleLabel = new Textbox('Right Triangle\nOne 90° angle\nPythagoras: a² + b² = c²', {
    left: 70,
    top: 390,
    fontSize: 14,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Add Pythagorean theorem visualization
  const pythagoreanTitle = new Textbox('Pythagorean Theorem', {
    left: 300,
    top: 300,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const pythagoreanEquation = new Textbox('a² + b² = c²', {
    left: 300,
    top: 330,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#555555',
  });
  
  // Create a right triangle for Pythagorean theorem
  const pTrianglePoints = [
    { x: 340, y: 360 },
    { x: 340, y: 420 },
    { x: 400, y: 420 },
  ];
  
  const pTriangle = new Polygon(pTrianglePoints, {
    fill: 'transparent',
    stroke: '#D946EF',
    strokeWidth: 2,
  });
  
  // Label the sides
  const sideALabel = new Textbox('a', {
    left: 320,
    top: 385,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#D946EF',
  });
  
  const sideBLabel = new Textbox('b', {
    left: 365,
    top: 425,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#D946EF',
  });
  
  const sideCLabel = new Textbox('c', {
    left: 360,
    top: 380,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#D946EF',
  });
  
  // Add explanation
  const explanation = new Textbox('Triangles are classified by their sides (equilateral, isosceles, scalene) and by their angles (acute, right, obtuse).', {
    left: 50,
    top: 450,
    width: canvasWidth - 100,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, equilateralTriangle, equilateralLabel,
    isoscelesTriangle, isoscelesLabel,
    scaleneTriangle, scaleneLabel,
    rightTriangle, rightAngleSymbol, rightTriangleLabel,
    pythagoreanTitle, pythagoreanEquation,
    pTriangle, sideALabel, sideBLabel, sideCLabel,
    explanation
  );
};
