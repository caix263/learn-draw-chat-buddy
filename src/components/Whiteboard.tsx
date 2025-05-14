
import { useEffect, useRef, useState } from 'react';
import { Canvas } from 'fabric';
import WhiteboardTools from './WhiteboardTools';
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
  createArtExample
} from '@/utils/whiteboardExamples';

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeTool, setActiveTool] = useState<'select' | 'draw' | 'rectangle' | 'circle' | 'text' | 'eraser'>('draw');
  const [exampleVisible, setExampleVisible] = useState(false);
  const [currentExample, setCurrentExample] = useState<
    'math' | 'chemistry' | 'flowchart' | 'history' | 'physics' | 'geometry' | 'language' | 'biology' | 'programming' | 'art'
  >('math');
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
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
  
  // Undo last action
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
  
  // Redo last undone action
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
  
  // Handle tool changes
  useEffect(() => {
    if (!fabricCanvas) return;
    
    fabricCanvas.isDrawingMode = activeTool === 'draw';
    
    if (fabricCanvas.isDrawingMode && fabricCanvas.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = activeTool === 'eraser' ? '#ffffff' : activeColor;
      fabricCanvas.freeDrawingBrush.width = activeTool === 'eraser' ? 20 : 2;
    }
    
  }, [activeTool, activeColor, fabricCanvas]);
  
  // Show example content in the whiteboard
  const showExample = (type: typeof currentExample) => {
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
    }
    
    setCurrentExample(type);
    setExampleVisible(true);
    
    fabricCanvas.renderAll();
    
    // Add this state to history
    saveToHistory(fabricCanvas);
    
    toast(`Showing ${type} example`);
  };

  return (
    <div className="flex flex-col h-full">
      <WhiteboardTools 
        activeTool={activeTool} 
        setActiveTool={setActiveTool}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        fabricCanvas={fabricCanvas}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={handleUndo}
        onRedo={handleRedo}
      />
      <div ref={containerRef} className="flex-1 relative border-t">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
      <div className="p-2 bg-gray-50 border-t flex flex-wrap gap-2">
        <div className="text-sm font-medium mr-2">AI Tutor Examples:</div>
        {/* First row of examples */}
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => showExample('math')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'math' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Math Equation
          </button>
          <button 
            onClick={() => showExample('chemistry')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'chemistry' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Chemistry
          </button>
          <button 
            onClick={() => showExample('flowchart')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'flowchart' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Flowchart
          </button>
          <button 
            onClick={() => showExample('history')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'history' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            History Timeline
          </button>
          <button 
            onClick={() => showExample('physics')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'physics' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Physics
          </button>
        </div>
        {/* Second row of examples */}
        <div className="flex flex-wrap gap-2 mt-1 w-full">
          <button 
            onClick={() => showExample('geometry')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'geometry' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Geometry
          </button>
          <button 
            onClick={() => showExample('language')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'language' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Language Learning
          </button>
          <button 
            onClick={() => showExample('biology')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'biology' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Biology
          </button>
          <button 
            onClick={() => showExample('programming')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'programming' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Programming
          </button>
          <button 
            onClick={() => showExample('art')} 
            className={`px-3 py-1 text-xs rounded-full ${currentExample === 'art' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
          >
            Art & Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
