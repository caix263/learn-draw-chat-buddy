
import { Canvas, Textbox, Circle, Line, Polygon } from 'fabric';

// Example for biology concepts
export const createBiologyExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Cell Structure', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Center coordinates for cell
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2 - 30;
  
  // Create cell membrane
  const cellMembrane = new Circle({
    left: centerX - 120,
    top: centerY - 90,
    radius: 90,
    fill: '#F1F0FB',
    stroke: '#8B5CF6',
    strokeWidth: 3,
  });
  
  // Create nucleus
  const nucleus = new Circle({
    left: centerX - 150,
    top: centerY - 70,
    radius: 30,
    fill: '#FFDEE2',
    stroke: '#D946EF',
    strokeWidth: 2,
  });
  
  // Create mitochondrion (oval shape)
  const mitochondrion1 = new Circle({
    left: centerX - 80,
    top: centerY - 60,
    radius: 25,
    scaleX: 1.5,
    fill: '#FDE68A',
    stroke: '#F97316',
    strokeWidth: 2,
    angle: 45,
  });
  
  const mitochondrion2 = new Circle({
    left: centerX - 170,
    top: centerY - 30,
    radius: 20,
    scaleX: 1.5,
    fill: '#FDE68A',
    stroke: '#F97316',
    strokeWidth: 2,
    angle: -30,
  });
  
  // Create endoplasmic reticulum (wavy lines)
  const erPoints1 = [
    centerX - 115, centerY - 20,
    centerX - 95, centerY - 15,
    centerX - 75, centerY - 25,
    centerX - 55, centerY - 15,
    centerX - 35, centerY - 25,
  ];
  
  const erLine1 = new Line(erPoints1, {
    stroke: '#0EA5E9',
    strokeWidth: 2,
    fill: '',
    strokeLineCap: 'round',
  });
  
  const erPoints2 = [
    centerX - 115, centerY - 10,
    centerX - 95, centerY - 5,
    centerX - 75, centerY - 15,
    centerX - 55, centerY - 5,
    centerX - 35, centerY - 15,
  ];
  
  const erLine2 = new Line(erPoints2, {
    stroke: '#0EA5E9',
    strokeWidth: 2,
    fill: '',
    strokeLineCap: 'round',
  });
  
  // Create Golgi apparatus (stacked curves)
  const golgiPoints = [
    [centerX - 95, centerY + 20, centerX - 75, centerY + 20, centerX - 55, centerY + 15],
    [centerX - 95, centerY + 30, centerX - 75, centerY + 30, centerX - 55, centerY + 25],
    [centerX - 95, centerY + 40, centerX - 75, centerY + 40, centerX - 55, centerY + 35],
  ];
  
  const golgiLines = golgiPoints.map(points => 
    new Line([points[0], points[1], points[2], points[3], points[4], points[5]], {
      stroke: '#16A34A',
      strokeWidth: 2,
      fill: '',
      strokeLineCap: 'round',
    })
  );
  
  // Create lysosomes (small circles)
  const lysosomes = [];
  for (let i = 0; i < 3; i++) {
    lysosomes.push(new Circle({
      left: centerX - 80 + i * 30,
      top: centerY + 55,
      radius: 8,
      fill: '#E11D48',
      stroke: '#881337',
      strokeWidth: 1,
    }));
  }
  
  // Add labels
  const labels = [
    { text: 'Cell Membrane', x: centerX - 40, y: centerY - 130, color: '#8B5CF6' },
    { text: 'Nucleus', x: centerX - 155, y: centerY - 80, color: '#D946EF' },
    { text: 'Mitochondrion', x: centerX - 70, y: centerY - 80, color: '#F97316' },
    { text: 'Endoplasmic\nReticulum', x: centerX - 20, y: centerY - 30, color: '#0EA5E9' },
    { text: 'Golgi Apparatus', x: centerX - 110, y: centerY + 15, color: '#16A34A' },
    { text: 'Lysosomes', x: centerX - 95, y: centerY + 55, color: '#881337' },
  ];
  
  const labelObjects = labels.map(label => 
    new Textbox(label.text, {
      left: label.x,
      top: label.y,
      fontSize: 12,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fill: label.color,
    })
  );
  
  // Add lines connecting labels to organelles
  const connectingLines = [
    new Line([centerX - 40, centerY - 120, centerX, centerY - 90], {
      stroke: '#8B5CF6',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
    new Line([centerX - 145, centerY - 70, centerX - 120, centerY - 60], {
      stroke: '#D946EF',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
    new Line([centerX - 60, centerY - 70, centerX - 70, centerY - 50], {
      stroke: '#F97316',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
    new Line([centerX - 20, centerY - 20, centerX - 50, centerY - 15], {
      stroke: '#0EA5E9',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
    new Line([centerX - 90, centerY + 25, centerX - 75, centerY + 30], {
      stroke: '#16A34A',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
    new Line([centerX - 85, centerY + 65, centerX - 75, centerY + 55], {
      stroke: '#881337',
      strokeWidth: 1,
      strokeDashArray: [3, 3],
    }),
  ];
  
  // Add explanation
  const explanation = new Textbox('Eukaryotic cells contain membrane-bound organelles, each with specific functions. The nucleus stores genetic material, mitochondria produce energy, the endoplasmic reticulum synthesizes proteins and lipids, the Golgi apparatus packages and distributes molecules, and lysosomes contain digestive enzymes.', {
    left: 50,
    top: centerY + 100,
    width: canvasWidth - 100,
    fontSize: 14,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(
    title, cellMembrane, nucleus, 
    mitochondrion1, mitochondrion2,
    erLine1, erLine2, 
    explanation
  );
  
  // Add Golgi lines
  golgiLines.forEach(line => canvas.add(line));
  
  // Add lysosomes
  lysosomes.forEach(lysosome => canvas.add(lysosome));
  
  // Add labels and connecting lines
  labelObjects.forEach(label => canvas.add(label));
  connectingLines.forEach(line => canvas.add(line));
};
