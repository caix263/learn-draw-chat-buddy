
import { useEffect } from 'react';
import { Canvas } from 'fabric';
import { toast } from 'sonner';
import { 
  createMathExample, 
  createFlowchartExample, 
  createChemistryExample, 
  createHistoryTimeline,
  createPhysicsExample,
  createGeometryExample,
  createLanguageExample,
  createBiologyExample,
  createProgrammingExample,
  createArtExample,
  createQuizExample
} from '@/utils/whiteboardExamples';
import { ExampleType } from './useWhiteboardState';

export const useWhiteboardCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  containerRef: React.RefObject<HTMLDivElement>,
  fabricCanvas: Canvas | null,
  setFabricCanvas: (canvas: Canvas | null) => void,
  activeColor: string,
  activeTool: string,
  setCanUndo: (canUndo: boolean) => void,
  setCanRedo: (canRedo: boolean) => void,
  history: string[],
  setHistory: (history: string[]) => void,
  historyIndex: number,
  setHistoryIndex: (index: number) => void,
  exampleVisible: boolean,
  currentExample: ExampleType
) => {
  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up the canvas on initial render
    const canvas = new Canvas(canvasRef.current, {
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    });
    
    // Make the canvas responsive
    const resizeCanvas = () => {
      const parentEl = containerRef.current;
      if (!parentEl || !canvas) return;
      
      const width = parentEl.clientWidth;
      const height = parentEl.clientHeight || 500; // Increased height
      
      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.renderAll();
      
      // If example is showing, redraw it to fit new dimensions
      if (exampleVisible && currentExample) {
        showExample(currentExample);
      }
    };
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Set up the drawing brush
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 2;
    }
    
    // Setup history tracking for undo/redo
    canvas.on('object:added', () => {
      saveToHistory(canvas);
    });
    
    canvas.on('object:modified', () => {
      saveToHistory(canvas);
    });
    
    canvas.on('object:removed', () => {
      saveToHistory(canvas);
    });
    
    setFabricCanvas(canvas);
    
    // Initialize history with empty canvas
    saveToHistory(canvas);
    
    toast("Whiteboard ready!");
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.dispose();
    };
  }, []);
  
  // Update tool and color when they change
  useEffect(() => {
    if (!fabricCanvas) return;
    
    fabricCanvas.isDrawingMode = activeTool === 'draw';
    
    if (fabricCanvas.isDrawingMode && fabricCanvas.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = activeTool === 'eraser' ? '#ffffff' : activeColor;
      fabricCanvas.freeDrawingBrush.width = activeTool === 'eraser' ? 20 : 2;
    }
    
  }, [activeTool, activeColor, fabricCanvas]);
  
  // Save current canvas state to history
  const saveToHistory = (canvas: Canvas) => {
    if (!canvas) return;
    
    // Get canvas as JSON
    const json = JSON.stringify(canvas.toJSON());
    
    // If we're not at the end of the history array, remove future states
    if (historyIndex < history.length - 1) {
      setHistory(prev => prev.slice(0, historyIndex + 1));
    }
    
    // Add new state to history
    setHistory(prev => [...prev, json]);
    setHistoryIndex(prev => prev + 1);
    
    // Update undo/redo availability
    setCanUndo(true);
    setCanRedo(false);
  };
  
  // Handle undo action
  const handleUndo = () => {
    if (historyIndex <= 0 || !fabricCanvas) return;
    
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    
    // Load previous state
    fabricCanvas.loadFromJSON(JSON.parse(history[newIndex]), () => {
      fabricCanvas.renderAll();
      setCanUndo(newIndex > 0);
      setCanRedo(true);
    });
    
    toast("Undo");
  };
  
  // Handle redo action
  const handleRedo = () => {
    if (historyIndex >= history.length - 1 || !fabricCanvas) return;
    
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    
    // Load next state
    fabricCanvas.loadFromJSON(JSON.parse(history[newIndex]), () => {
      fabricCanvas.renderAll();
      setCanRedo(newIndex < history.length - 1);
      setCanUndo(true);
    });
    
    toast("Redo");
  };
  
  // Show example content in the whiteboard
  const showExample = (type: ExampleType) => {
    if (!fabricCanvas) return;
    
    // Clear the canvas first
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = '#ffffff';
    
    // Create the example based on type
    switch (type) {
      case 'math':
        createMathExample(fabricCanvas);
        break;
      case 'chemistry':
        createChemistryExample(fabricCanvas);
        break;
      case 'flowchart':
        createFlowchartExample(fabricCanvas);
        break;
      case 'history':
        createHistoryTimeline(fabricCanvas);
        break;
      case 'physics':
        createPhysicsExample(fabricCanvas);
        break;
      case 'geometry':
        createGeometryExample(fabricCanvas);
        break;
      case 'language':
        createLanguageExample(fabricCanvas);
        break;
      case 'biology':
        createBiologyExample(fabricCanvas);
        break;
      case 'programming':
        createProgrammingExample(fabricCanvas);
        break;
      case 'art':
        createArtExample(fabricCanvas);
        break;
      case 'quiz':
        createQuizExample(fabricCanvas);
        break;
    }
    
    fabricCanvas.renderAll();
    
    // Add this state to history
    saveToHistory(fabricCanvas);
    
    toast(`Showing ${type} example`);
  };
  
  return { handleUndo, handleRedo, showExample };
};
