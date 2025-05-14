
import { Canvas, Text, Circle, Group, IEvent, Line } from 'fabric';

export const createQuizExample = (canvas: Canvas) => {
  // Clear canvas for the new example
  canvas.clear();
  canvas.backgroundColor = '#ffffff';
  
  // Quiz title
  const title = new Text('Multiple Choice Question', {
    left: 50,
    top: 30,
    fontSize: 24,
    fontWeight: 'bold',
    fill: '#333333',
    fontFamily: 'Arial'
  });
  
  // Question
  const question = new Text('What is the capital city of Japan?', {
    left: 50,
    top: 80,
    fontSize: 18,
    fill: '#333333',
    fontFamily: 'Arial'
  });
  
  // Answer options
  const options = [
    { text: 'A. Beijing', correct: false },
    { text: 'B. Tokyo', correct: true },
    { text: 'C. Seoul', correct: false },
    { text: 'D. Bangkok', correct: false },
  ];
  
  // Variables to track state
  let selectedOption: Group | null = null;
  let feedbackShown = false;
  
  // Create option groups (circle + text)
  const optionGroups = options.map((option, index) => {
    const circle = new Circle({
      left: 50,
      top: 130 + (index * 50),
      radius: 12,
      fill: '#ffffff',
      stroke: '#666666',
      strokeWidth: 2,
      selectable: true
    });
    
    const text = new Text(option.text, {
      left: 80,
      top: 120 + (index * 50),
      fontSize: 16,
      fill: '#333333',
      fontFamily: 'Arial',
      selectable: false
    });
    
    const group = new Group([circle, text], {
      left: 50,
      top: 130 + (index * 50),
      selectable: true,
      subTargetCheck: true,
      interactive: true,
    });
    
    // Store the correct answer status with the group
    group.set('correct', option.correct);
    
    // Add click event to each option
    group.on('selected', function(e: IEvent<MouseEvent>) {
      if (feedbackShown) return; // Don't allow selection after feedback is shown
      
      // Reset previous selection
      if (selectedOption) {
        const prevCircle = selectedOption.getObjects()[0] as Circle;
        prevCircle.set({ fill: '#ffffff' });
      }
      
      // Highlight new selection
      const currentCircle = group.getObjects()[0] as Circle;
      currentCircle.set({ fill: '#bbdefb' });
      selectedOption = group;
      
      canvas.renderAll();
    });
    
    return group;
  });
  
  // Submit button
  const submitBtn = new Group([
    new Text('Check Answer', {
      left: 0,
      top: 0,
      fontSize: 16,
      fill: '#ffffff',
      fontFamily: 'Arial',
      textAlign: 'center',
    })
  ], {
    left: 50,
    top: 350,
    width: 150,
    height: 40,
    backgroundColor: '#1976d2',
    selectable: true,
  });
  
  // Style the button
  submitBtn.set({
    rx: 5,
    ry: 5,
    padding: 10,
  });
  
  // Feedback text elements (hidden initially)
  const resultText = new Text('', {
    left: 50,
    top: 400,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    visible: false
  });
  
  const explanationText = new Text('Tokyo is the capital and largest city of Japan.\nIt serves as the country\'s political, economic,\nand cultural center.', {
    left: 50,
    top: 430,
    fontSize: 16,
    fontFamily: 'Arial',
    visible: false,
    lineHeight: 1.3
  });
  
  // Submit button click handler
  submitBtn.on('selected', function() {
    if (!selectedOption || feedbackShown) return;
    
    feedbackShown = true;
    
    const isCorrect = selectedOption.get('correct') === true;
    
    // Show feedback based on selected answer
    resultText.set({
      text: isCorrect ? 'Correct! ✓' : 'Incorrect! ✗',
      fill: isCorrect ? '#388e3c' : '#d32f2f',
      visible: true
    });
    
    // Show explanation
    explanationText.set({
      visible: true
    });
    
    // Highlight correct answer
    optionGroups.forEach(group => {
      const isCorrectOption = group.get('correct') === true;
      const circle = group.getObjects()[0] as Circle;
      
      if (isCorrectOption) {
        circle.set({
          stroke: '#388e3c',
          strokeWidth: 3
        });
      }
    });
    
    canvas.renderAll();
  });
  
  // Add all elements to canvas
  canvas.add(
    title,
    question,
    resultText,
    explanationText,
    submitBtn,
    ...optionGroups
  );
  
  canvas.renderAll();
};
