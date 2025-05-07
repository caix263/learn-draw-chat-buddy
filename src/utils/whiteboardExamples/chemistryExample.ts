
import { Canvas, Circle, Textbox, Line } from 'fabric';

// Example for chemistry diagrams - FIXED positioning to prevent cut-off
export const createChemistryExample = (canvas: Canvas) => {
  // Get canvas dimensions to better position elements
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Calculate center points for better positioning
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;
  
  // Add title
  const title = new Textbox('Water Molecule (H₂O)', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Create oxygen atom - centered
  const oxygen = new Circle({
    left: centerX - 40, // Center the oxygen horizontally
    top: centerY - 30,  // Position in upper half of canvas
    radius: 35,         // Slightly smaller radius
    fill: '#e11d48',
    stroke: '#881337',
    strokeWidth: 2,
  });
  
  // Create hydrogen atoms - ensure they're fully visible
  const hydrogen1 = new Circle({
    left: centerX - 100, // Position further left from oxygen
    top: centerY - 70,   // Position above and left of oxygen
    radius: 25,
    fill: '#2563eb',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  const hydrogen2 = new Circle({
    left: centerX + 30, // Position right of oxygen
    top: centerY - 70,  // Position above and right of oxygen
    radius: 25,
    fill: '#2563eb',
    stroke: '#1e40af',
    strokeWidth: 2,
  });
  
  // Add bonds - adjust to connect the atoms at their new positions
  const bond1 = new Line([
    oxygen.left + oxygen.radius - 10, 
    oxygen.top + oxygen.radius - 20,
    hydrogen1.left + hydrogen1.radius + 15, 
    hydrogen1.top + hydrogen1.radius + 10
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  const bond2 = new Line([
    oxygen.left + oxygen.radius + 10, 
    oxygen.top + oxygen.radius - 20,
    hydrogen2.left + hydrogen2.radius - 15, 
    hydrogen2.top + hydrogen2.radius + 10
  ], {
    stroke: '#000000',
    strokeWidth: 3,
  });
  
  // Add labels
  const oxygenLabel = new Textbox('O', {
    left: oxygen.left + 25,
    top: oxygen.top + 25,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const h1Label = new Textbox('H', {
    left: hydrogen1.left + 15,
    top: hydrogen1.top + 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  const h2Label = new Textbox('H', {
    left: hydrogen2.left + 15,
    top: hydrogen2.top + 15,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#000000',
  });
  
  // Add explanation - positioned lower to avoid overlap
  const explanation = new Textbox('Water molecule consists of one oxygen atom covalently bonded to two hydrogen atoms. The bond angle is approximately 104.5°.', {
    left: 50,
    top: centerY + 70, // Position below the molecule
    width: canvasWidth - 100,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(title, oxygen, hydrogen1, hydrogen2, bond1, bond2, oxygenLabel, h1Label, h2Label, explanation);
};
