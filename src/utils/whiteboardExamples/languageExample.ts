
import { Canvas, Textbox, Rect, Line } from 'fabric';

// Example for language learning
export const createLanguageExample = (canvas: Canvas) => {
  // Get canvas dimensions
  const canvasWidth = canvas.width || 600;
  const canvasHeight = canvas.height || 500;
  
  // Add title
  const title = new Textbox('Spanish Verb Conjugation', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fill: '#2563eb',
  });
  
  // Add subtitle
  const subtitle = new Textbox('Present Tense: Hablar (to speak)', {
    left: 50,
    top: 70,
    fontSize: 18,
    fontFamily: 'Arial',
    fill: '#333333',
    fontWeight: 'bold',
  });
  
  // Create a table for conjugation
  const tableWidth = Math.min(canvasWidth - 100, 500);
  const cellHeight = 40;
  const startX = 50;
  const startY = 110;
  const columnWidth = tableWidth / 2;
  
  // Create table header
  const headerRect = new Rect({
    left: startX,
    top: startY,
    width: tableWidth,
    height: cellHeight,
    fill: '#9b87f5',
    stroke: '#7E69AB',
    strokeWidth: 1,
  });
  
  const headerText = new Textbox('Subject Pronoun | Conjugation', {
    left: startX + 10,
    top: startY + 10,
    width: tableWidth - 20,
    fontSize: 18,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fill: '#FFFFFF',
  });
  
  // Create divider line for header
  const headerDivider = new Line([
    startX + columnWidth, startY,
    startX + columnWidth, startY + cellHeight
  ], {
    stroke: '#7E69AB',
    strokeWidth: 1,
  });
  
  // Create table rows
  const rowData = [
    { subject: 'yo', conjugation: 'hablo' },
    { subject: 'tú', conjugation: 'hablas' },
    { subject: 'él / ella / usted', conjugation: 'habla' },
    { subject: 'nosotros / nosotras', conjugation: 'hablamos' },
    { subject: 'vosotros / vosotras', conjugation: 'habláis' },
    { subject: 'ellos / ellas / ustedes', conjugation: 'hablan' }
  ];
  
  const rowObjects: any[] = [];
  
  rowData.forEach((row, index) => {
    const rowY = startY + cellHeight * (index + 1);
    
    // Row rectangle
    const rowRect = new Rect({
      left: startX,
      top: rowY,
      width: tableWidth,
      height: cellHeight,
      fill: index % 2 === 0 ? '#F1F0FB' : '#FFFFFF',
      stroke: '#C8C8C9',
      strokeWidth: 1,
    });
    
    // Subject text
    const subjectText = new Textbox(row.subject, {
      left: startX + 10,
      top: rowY + 10,
      width: columnWidth - 20,
      fontSize: 16,
      fontFamily: 'Arial',
      fill: '#333333',
    });
    
    // Conjugation text
    const conjugationText = new Textbox(row.conjugation, {
      left: startX + columnWidth + 10,
      top: rowY + 10,
      width: columnWidth - 20,
      fontSize: 16,
      fontFamily: 'Arial',
      fontWeight: 'bold',
      fill: '#333333',
    });
    
    // Divider line
    const divider = new Line([
      startX + columnWidth, rowY,
      startX + columnWidth, rowY + cellHeight
    ], {
      stroke: '#C8C8C9',
      strokeWidth: 1,
    });
    
    rowObjects.push(rowRect, subjectText, conjugationText, divider);
  });
  
  // Add explanation
  const explanation = new Textbox('Regular -ar verbs like "hablar" follow this conjugation pattern. The verb stem "habl-" remains constant, while the endings change based on the subject.', {
    left: 50,
    top: startY + cellHeight * 7 + 20,
    width: tableWidth,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add example sentences
  const examples = new Textbox('Examples:\n1. Yo hablo español. (I speak Spanish.)\n2. Tú hablas muy rápido. (You speak very fast.)\n3. Ella habla tres idiomas. (She speaks three languages.)', {
    left: 50,
    top: startY + cellHeight * 7 + 100,
    width: tableWidth,
    fontSize: 16,
    fontFamily: 'Arial',
    lineHeight: 1.5,
    fill: '#333333',
  });
  
  // Add all objects to canvas
  canvas.add(title, subtitle, headerRect, headerText, headerDivider, explanation, examples);
  rowObjects.forEach(obj => canvas.add(obj));
};
