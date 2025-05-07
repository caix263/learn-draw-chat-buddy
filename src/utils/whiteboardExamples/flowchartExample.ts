
import { Canvas, Rect, Circle, Textbox, Line, Polygon } from 'fabric';

// Example for flowchart diagrams - Scale down to ensure fit
export const createFlowchartExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  const centerX = canvasWidth / 2;
  
  // Scale factor to ensure flowchart fits
  const scale = Math.min(canvasWidth / 700, canvasHeight / 600, 0.85);
  
  // Add title
  const title = new Textbox('Problem Solving Process', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Horizontal offset to center the flowchart
  const offsetX = centerX - 290 * scale;
  
  // Create flowchart shapes
  const startRect = new Rect({
    left: offsetX + 200 * scale,
    top: 80 * scale,
    width: 180 * scale,
    height: 60 * scale,
    rx: 20 * scale,
    ry: 20 * scale,
    fill: '#34d399',
    stroke: '#047857',
    strokeWidth: 2,
  });
  
  const process1Rect = new Rect({
    left: offsetX + 200 * scale,
    top: 180 * scale,
    width: 180 * scale,
    height: 60 * scale,
    fill: '#93c5fd',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  // Adjust the diamond shape to fit
  const decisionDiamond = new Polygon([
    {x: offsetX + 290 * scale, y: 280 * scale},
    {x: offsetX + 380 * scale, y: 330 * scale},
    {x: offsetX + 290 * scale, y: 380 * scale},
    {x: offsetX + 200 * scale, y: 330 * scale},
  ], {
    fill: '#fde68a',
    stroke: '#92400e',
    strokeWidth: 2,
  });
  
  const process2Rect = new Rect({
    left: offsetX + 400 * scale,
    top: 330 * scale,
    width: 180 * scale,
    height: 60 * scale,
    fill: '#93c5fd',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  const endRect = new Rect({
    left: offsetX + 200 * scale,
    top: 430 * scale,
    width: 180 * scale,
    height: 60 * scale,
    rx: 20 * scale,
    ry: 20 * scale,
    fill: '#f87171',
    stroke: '#991b1b',
    strokeWidth: 2,
  });
  
  // Add connecting arrows
  const arrow1 = new Line([
    offsetX + 290 * scale, 140 * scale,
    offsetX + 290 * scale, 180 * scale
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow2 = new Line([
    offsetX + 290 * scale, 240 * scale,
    offsetX + 290 * scale, 280 * scale
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow3 = new Line([
    offsetX + 380 * scale, 330 * scale,
    offsetX + 400 * scale, 330 * scale
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow4 = new Line([
    offsetX + 290 * scale, 380 * scale,
    offsetX + 290 * scale, 430 * scale
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  // Add text labels - adjusted for scale
  const startText = new Textbox('Start', {
    left: offsetX + 235 * scale,
    top: 97 * scale,
    fontSize: 18 * scale,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const process1Text = new Textbox('Identify Problem', {
    left: offsetX + 215 * scale,
    top: 197 * scale,
    fontSize: 18 * scale,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const decisionText = new Textbox('Solution\nfound?', {
    left: offsetX + 260 * scale,
    top: 320 * scale,
    fontSize: 16 * scale,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
    textAlign: 'center',
  });
  
  const process2Text = new Textbox('Try different\napproach', {
    left: offsetX + 420 * scale,
    top: 340 * scale,
    fontSize: 16 * scale,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const endText = new Textbox('End', {
    left: offsetX + 245 * scale,
    top: 447 * scale,
    fontSize: 18 * scale,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add yes/no labels
  const yesText = new Textbox('Yes', {
    left: offsetX + 275 * scale,
    top: 390 * scale,
    fontSize: 14 * scale,
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const noText = new Textbox('No', {
    left: offsetX + 385 * scale,
    top: 310 * scale,
    fontSize: 14 * scale,
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, startRect, process1Rect, decisionDiamond, process2Rect, endRect, 
    arrow1, arrow2, arrow3, arrow4, 
    startText, process1Text, decisionText, process2Text, endText,
    yesText, noText
  );
};
