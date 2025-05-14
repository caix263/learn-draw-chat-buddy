
import { useEffect, useRef } from 'react';
import WhiteboardTools from './WhiteboardTools';
import WhiteboardExampleButtons from './WhiteboardExampleButtons';
import { useWhiteboardState } from '@/hooks/useWhiteboardState';
import { useWhiteboardCanvas } from '@/hooks/useWhiteboardCanvas';

const Whiteboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get whiteboard state from the hook
  const {
    fabricCanvas,
    setFabricCanvas,
    activeColor,
    setActiveColor,
    activeTool,
    setActiveTool,
    exampleVisible,
    setExampleVisible,
    currentExample,
    setCurrentExample,
    canUndo,
    setCanUndo,
    canRedo,
    setCanRedo,
    history,
    setHistory,
    historyIndex,
    setHistoryIndex
  } = useWhiteboardState();
  
  // Initialize canvas and handle undo/redo operations
  const { handleUndo, handleRedo, showExample } = useWhiteboardCanvas(
    canvasRef,
    containerRef,
    fabricCanvas,
    setFabricCanvas,
    activeColor,
    activeTool,
    setCanUndo,
    setCanRedo,
    history,
    setHistory,
    historyIndex,
    setHistoryIndex,
    exampleVisible,
    currentExample
  );
  
  // Handle showing an example and update example state
  const handleShowExample = (type: typeof currentExample) => {
    showExample(type);
    setCurrentExample(type);
    setExampleVisible(true);
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
      <WhiteboardExampleButtons 
        currentExample={currentExample} 
        exampleVisible={exampleVisible} 
        onShowExample={handleShowExample} 
      />
    </div>
  );
};

export default Whiteboard;
