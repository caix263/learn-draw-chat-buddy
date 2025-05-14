
import { useState } from 'react';
import { Canvas } from 'fabric';

type WhiteboardTool = 'select' | 'draw' | 'rectangle' | 'circle' | 'text' | 'eraser';
type ExampleType = 'math' | 'chemistry' | 'flowchart' | 'history' | 'physics' | 'geometry' | 'language' | 'biology' | 'programming' | 'art' | 'quiz';

export const useWhiteboardState = () => {
  const [fabricCanvas, setFabricCanvas] = useState<Canvas | null>(null);
  const [activeColor, setActiveColor] = useState('#000000');
  const [activeTool, setActiveTool] = useState<WhiteboardTool>('draw');
  const [exampleVisible, setExampleVisible] = useState(false);
  const [currentExample, setCurrentExample] = useState<ExampleType>('math');
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  return {
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
    setHistoryIndex,
  };
};

export type { WhiteboardTool, ExampleType };
