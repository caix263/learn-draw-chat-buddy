
import React from 'react';
import { type ExampleType } from '@/hooks/useWhiteboardState';

interface WhiteboardExampleButtonsProps {
  currentExample: ExampleType;
  exampleVisible: boolean;
  onShowExample: (type: ExampleType) => void;
}

const WhiteboardExampleButtons: React.FC<WhiteboardExampleButtonsProps> = ({
  currentExample,
  exampleVisible,
  onShowExample,
}) => {
  return (
    <div className="p-2 bg-gray-50 border-t flex flex-wrap gap-2">
      <div className="text-sm font-medium mr-2">AI Tutor Examples:</div>
      {/* First row of examples */}
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => onShowExample('math')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'math' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Math Equation
        </button>
        <button 
          onClick={() => onShowExample('chemistry')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'chemistry' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Chemistry
        </button>
        <button 
          onClick={() => onShowExample('flowchart')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'flowchart' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Flowchart
        </button>
        <button 
          onClick={() => onShowExample('history')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'history' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          History Timeline
        </button>
        <button 
          onClick={() => onShowExample('physics')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'physics' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Physics
        </button>
        <button 
          onClick={() => onShowExample('quiz')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'quiz' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Quiz
        </button>
      </div>
      {/* Second row of examples */}
      <div className="flex flex-wrap gap-2 mt-1 w-full">
        <button 
          onClick={() => onShowExample('geometry')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'geometry' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Geometry
        </button>
        <button 
          onClick={() => onShowExample('language')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'language' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Language Learning
        </button>
        <button 
          onClick={() => onShowExample('biology')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'biology' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Biology
        </button>
        <button 
          onClick={() => onShowExample('programming')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'programming' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Programming
        </button>
        <button 
          onClick={() => onShowExample('art')} 
          className={`px-3 py-1 text-xs rounded-full ${currentExample === 'art' && exampleVisible ? 'bg-tutor-primary text-white' : 'bg-gray-200'}`}
        >
          Art & Design
        </button>
      </div>
    </div>
  );
};

export default WhiteboardExampleButtons;
