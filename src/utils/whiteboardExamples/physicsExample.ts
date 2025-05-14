
import { Canvas, Line, Circle, Textbox, Group } from 'fabric';

// Example for physics concepts
export const createPhysicsExample = (canvas: Canvas) => {
  // Get canvas dimensions for responsive positioning
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Newton\'s Laws of Motion', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // First Law - Object at rest
  const firstLawTitle = new Textbox('First Law: An object at rest stays at rest', {
    left: 50,
    top: 80,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  // Create a static object
  const staticObject = new Circle({
    left: 120,
    top: 130,
    radius: 20,
    fill: '#9b87f5',
    stroke: '#7E69AB',
    strokeWidth: 2,
  });
  
  // Add arrows indicating zero force
  const arrow1 = new Line([
    staticObject.left + staticObject.radius + 10, staticObject.top + staticObject.radius,
    staticObject.left + staticObject.radius + 40, staticObject.top + staticObject.radius
  ], {
    stroke: '#9b87f5',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  // Second Law - F = ma
  const secondLawTitle = new Textbox('Second Law: F = ma', {
    left: 50,
    top: 190,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
  });
  
  const equation = new Textbox('Force = Mass × Acceleration', {
    left: 100,
    top: 220,
    fontSize: 16,
    fontFamily: 'Arial',
    fill: '#555555',
  });
  
  // Third Law - Action and Reaction
  const thirdLawTitle = new Textbox('Third Law: For every action, there is an equal and opposite reaction', {
    left: 50,
    top: 260,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#333333',
    width: canvasWidth - 100,
  });
  
  // Add two objects with opposing forces
  const object1 = new Circle({
    left: 100,
    top: 310,
    radius: 20,
    fill: '#0EA5E9',
    stroke: '#0077B6',
    strokeWidth: 2,
  });
  
  const object2 = new Circle({
    left: 250,
    top: 310,
    radius: 20,
    fill: '#F97316',
    stroke: '#C2410C',
    strokeWidth: 2,
  });
  
  // Add arrows showing equal and opposite forces
  const forceArrow1 = new Line([
    object1.left + object1.radius + 5, object1.top + object1.radius,
    object2.left - object2.radius - 5, object2.top + object2.radius
  ], {
    stroke: '#0EA5E9',
    strokeWidth: 3,
    strokeLineCap: 'round',
  });
  
  const forceArrow2 = new Line([
    object2.left - 5, object2.top + object2.radius,
    object1.left + object1.radius + 30, object1.top + object1.radius
  ], {
    stroke: '#F97316',
    strokeWidth: 3,
    strokeLineCap: 'round',
  });
  
  // Add explanation
  const explanation = new Textbox('Newton\'s three laws of motion describe the relationship between an object and the forces acting upon it, and its motion in response to those forces.', {
    left: 50,
    top: 360,
    width: canvasWidth - 100,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, firstLawTitle, staticObject, arrow1,
    secondLawTitle, equation, thirdLawTitle,
    object1, object2, forceArrow1, forceArrow2, explanation
  );
};
