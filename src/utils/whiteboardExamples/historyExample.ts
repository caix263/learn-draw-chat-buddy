
import { Canvas, Circle, Textbox, Line } from 'fabric';

// Example for history timeline - Scale and position to fit
export const createHistoryTimeline = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Scale factor to ensure timeline fits
  const scale = Math.min(canvasWidth / 700, 0.9);
  
  // Add title
  const title = new Textbox('World War II Timeline', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create timeline line - adjust width based on canvas
  const timelineWidth = Math.min(600, canvasWidth - 100);
  const timelineLine = new Line([
    50, 150,
    50 + timelineWidth, 150
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  // Create timeline points - distribute evenly
  const pointSpacing = timelineWidth / 4;
  const timelinePoints = [
    { x: 50 + pointSpacing * 0, y: 150, year: '1939', event: 'Germany invades Poland, starting World War II in Europe' },
    { x: 50 + pointSpacing * 1, y: 150, year: '1941', event: 'Japan attacks Pearl Harbor, US enters the war' },
    { x: 50 + pointSpacing * 2, y: 150, year: '1942', event: 'Battle of Stalingrad begins' },
    { x: 50 + pointSpacing * 3, y: 150, year: '1944', event: 'D-Day: Allied invasion of Normandy' },
    { x: 50 + pointSpacing * 4, y: 150, year: '1945', event: 'Germany and Japan surrender, war ends' },
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
    
    // Create event description - make smaller with limited width
    const eventDesc = new Textbox(point.event, {
      left: point.x - Math.min(100, pointSpacing/2),
      top: index % 2 === 0 ? point.y - 70 : point.y + 50,
      width: Math.min(190, pointSpacing * 0.9),
      fontSize: 13,
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
  
  // Add explanation - positioned at the bottom
  const explanation = new Textbox('World War II was a global conflict that lasted from 1939 to 1945, involving many of the world\'s nations including all of the great powers.', {
    left: 50,
    top: 280,
    width: timelineWidth,
    fontSize: 15,
    fontFamily: 'Arial',
    textAlign: 'center',
    fill: '#333333',
  });
  
  // Add to canvas
  canvas.add(title, timelineLine, explanation);
};
