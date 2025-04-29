
import { useEffect, useRef, useState } from 'react';
import { Canvas } from 'fabric';
import WhiteboardTools from './WhiteboardTools';
import { toast } from 'sonner';

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeTool, setActiveTool] = useState<'select' | 'draw' | 'rectangle' | 'circle' | 'text' | 'eraser'>('draw');
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Set up the canvas on initial render
    const canvas = new Canvas(canvasRef.current, {
      backgroundColor: '#ffffff',
      isDrawingMode: true,
    });
    
    // Make the canvas responsive
    const resizeCanvas = () => {
      const parentEl = canvasRef.current?.parentElement;
      if (!parentEl || !canvas) return;
      
      const width = parentEl.clientWidth;
      const height = parentEl.clientHeight || 400;
      
      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.renderAll();
    };
    
    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Set up the drawing brush
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = activeColor;
      canvas.freeDrawingBrush.width = 2;
    }
    
    setFabricCanvas(canvas);
    toast("Whiteboard ready!");
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.dispose();
    };
  }, []);
  
  // Handle tool changes
  useEffect(() => {
    if (!fabricCanvas) return;
    
    fabricCanvas.isDrawingMode = activeTool === 'draw';
    
    if (fabricCanvas.isDrawingMode && fabricCanvas.freeDrawingBrush) {
      fabricCanvas.freeDrawingBrush.color = activeTool === 'eraser' ? '#ffffff' : activeColor;
      fabricCanvas.freeDrawingBrush.width = activeTool === 'eraser' ? 20 : 2;
    }
    
  }, [activeTool, activeColor, fabricCanvas]);
  
  // Here we'll provide some content for the whiteboard as an example
  useEffect(() => {
    // If you want to add content to the whiteboard by default, you can add it here
    // This is where the AI could draw or write on the whiteboard
  }, [fabricCanvas]);

  return (
    <div className="flex flex-col h-full">
      <WhiteboardTools 
        activeTool={activeTool} 
        setActiveTool={setActiveTool}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        fabricCanvas={fabricCanvas}
      />
      <div className="flex-1 relative border-t">
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default Whiteboard;
