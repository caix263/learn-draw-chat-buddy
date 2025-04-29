
import { Canvas, Textbox, Line, Rect, Circle, Triangle, Path, Polygon, IText } from 'fabric';

// Example for math equations or formulas
export const createMathExample = (canvas: Canvas) => {
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

// Example for chemistry diagrams
export const createChemistryExample = (canvas: Canvas) => {
  // Add title
  const title = new Textbox('Water Molecule (H₂O)', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create oxygen atom
  const oxygen = new Circle({
    left: 200,
    top: 150,
    radius: 40,
    fill: '#e11d48',
    stroke: '#881337',
    strokeWidth: 2,
  });
  
  // Create hydrogen atoms
  const hydrogen1 = new Circle({
    left: 130,
    top: 110,
    radius: 25,
    fill: '#2563eb',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  const hydrogen2 = new Circle({
    left: 270,
    top: 110,
    radius: 25,
    fill: '#2563eb',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  // Add bonds
  const bond1 = new Line([
    oxygen.left + oxygen.radius - 10, 
    oxygen.top + oxygen.radius - 10,
    hydrogen1.left + hydrogen1.radius + 10, 
    hydrogen1.top + hydrogen1.radius + 10
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  const bond2 = new Line([
    oxygen.left + oxygen.radius + 10, 
    oxygen.top + oxygen.radius - 10,
    hydrogen2.left + hydrogen2.radius - 10, 
    hydrogen2.top + hydrogen2.radius + 10
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  // Add labels
  const oxygenLabel = new Textbox('O', {
    left: oxygen.left + 30,
    top: oxygen.top + 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const h1Label = new Textbox('H', {
    left: hydrogen1.left + 20,
    top: hydrogen1.top + 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const h2Label = new Textbox('H', {
    left: hydrogen2.left + 20,
    top: hydrogen2.top + 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add explanation
  const explanation = new Textbox('Water molecule consists of one oxygen atom covalently bonded to two hydrogen atoms. The bond angle is approximately 104.5°.', {
    left: 50,
    top: 250,
    width: 400,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(title, oxygen, hydrogen1, hydrogen2, bond1, bond2, oxygenLabel, h1Label, h2Label, explanation);
};

// Example for flowchart diagrams
export const createFlowchartExample = (canvas: Canvas) => {
  // Add title
  const title = new Textbox('Problem Solving Process', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create flowchart shapes
  const startRect = new Rect({
    left: 200,
    top: 80,
    width: 180,
    height: 60,
    rx: 20,
    ry: 20,
    fill: '#34d399',
    stroke: '#047857',
    strokeWidth: 2,
  });
  
  const process1Rect = new Rect({
    left: 200,
    top: 180,
    width: 180,
    height: 60,
    fill: '#93c5fd',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  const decisionDiamond = new Polygon([
    {x: 290, y: 280},
    {x: 380, y: 330},
    {x: 290, y: 380},
    {x: 200, y: 330},
  ], {
    fill: '#fde68a',
    stroke: '#92400e',
    strokeWidth: 2,
  });
  
  const process2Rect = new Rect({
    left: 400,
    top: 330,
    width: 180,
    height: 60,
    fill: '#93c5fd',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  const endRect = new Rect({
    left: 200,
    top: 430,
    width: 180,
    height: 60,
    rx: 20,
    ry: 20,
    fill: '#f87171',
    stroke: '#991b1b',
    strokeWidth: 2,
  });
  
  // Add connecting arrows
  const arrow1 = new Line([
    290, 140,
    290, 180
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow2 = new Line([
    290, 240,
    290, 280
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow3 = new Line([
    380, 330,
    400, 330
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  const arrow4 = new Line([
    290, 380,
    290, 430
  ], {
    stroke: '#000000',
    strokeWidth: 2,
    strokeLineCap: 'round',
  });
  
  // Add text labels
  const startText = new Textbox('Start', {
    left: 235,
    top: 97,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const process1Text = new Textbox('Identify Problem', {
    left: 215,
    top: 197,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const decisionText = new Textbox('Solution\nfound?', {
    left: 260,
    top: 320,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
    textAlign: 'center',
  });
  
  const process2Text = new Textbox('Try different\napproach', {
    left: 420,
    top: 340,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const endText = new Textbox('End', {
    left: 245,
    top: 447,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add yes/no labels
  const yesText = new Textbox('Yes', {
    left: 275,
    top: 390,
    fontSize: 14,
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const noText = new Textbox('No', {
    left: 385,
    top: 310,
    fontSize: 14,
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

// Example for history timeline
export const createHistoryTimeline = (canvas: Canvas) => {
  // Add title
  const title = new Textbox('World War II Timeline', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create timeline line
  const timelineLine = new Line([
    50, 150,
    650, 150
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  // Create timeline points
  const timelinePoints = [
    { x: 100, y: 150, year: '1939', event: 'Germany invades Poland, starting World War II in Europe' },
    { x: 200, y: 150, year: '1941', event: 'Japan attacks Pearl Harbor, US enters the war' },
    { x: 300, y: 150, year: '1942', event: 'Battle of Stalingrad begins' },
    { x: 400, y: 150, year: '1944', event: 'D-Day: Allied invasion of Normandy' },
    { x: 500, y: 150, year: '1945', event: 'Germany surrenders, Japan surrenders after atomic bombings' },
  ];
  
  // Add points and labels
  timelinePoints.forEach((point, index) => {
    // Create point
    const circle = new Circle({
      left: point.x - 10,
      top: point.y - 10,
      radius: 10,
      fill: '#2563eb',
      stroke: '#1e40af',
      strokeWidth: 2,
    });
    
    // Create year label
    const yearLabel = new Textbox(point.year, {
      left: point.x - 20,
      top: point.y + 20,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Arial',
      fill: '#000000',
    });
    
    // Create event description
    const eventDesc = new Textbox(point.event, {
      left: point.x - 100,
      top: index % 2 === 0 ? point.y - 80 : point.y + 50,
      width: 200,
      fontSize: 14,
      fontFamily: 'Arial',
      textAlign: 'center',
      fill: '#333333',
    });
    
    // Create connecting line
    const connectingLine = new Line([
      point.x, point.y,
      point.x, index % 2 === 0 ? point.y - 30 : point.y + 30
    ], {
      stroke: '#666666',
      strokeWidth: 2,
      strokeDashArray: [3, 3],
    });
    
    // Add objects to canvas
    canvas.add(circle, yearLabel, eventDesc, connectingLine);
  });
  
  // Add explanation
  const explanation = new Textbox('World War II was a global conflict that lasted from 1939 to 1945, involving many of the world\'s nations including all of the great powers.', {
    left: 100,
    top: 270,
    width: 500,
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Add to canvas
  canvas.add(title, timelineLine, explanation);
};
