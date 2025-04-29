
import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';
import Whiteboard from '@/components/Whiteboard';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<'chat' | 'whiteboard'>('chat');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-tutor-secondary p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-tutor-primary text-center">AI Tutor</h1>
          <p className="text-center text-gray-600 mt-2">Your personal AI tutor for interactive learning</p>
        </header>
        
        {isMobile ? (
          <>
            <div className="flex border-b border-gray-200 mb-4">
              <button 
                className={`flex-1 py-2 px-4 text-center ${activeTab === 'chat' ? 'border-b-2 border-tutor-primary text-tutor-primary font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
              <button 
                className={`flex-1 py-2 px-4 text-center ${activeTab === 'whiteboard' ? 'border-b-2 border-tutor-primary text-tutor-primary font-medium' : 'text-gray-500'}`}
                onClick={() => setActiveTab('whiteboard')}
              >
                Whiteboard
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {activeTab === 'chat' ? (
                <ChatInterface />
              ) : (
                <Whiteboard />
              )}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Chat with AI Tutor</h2>
              </div>
              <ChatInterface />
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Interactive Whiteboard</h2>
              </div>
              <Whiteboard />
            </div>
          </div>
        )}
        
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>AI Tutor © {new Date().getFullYear()} | Ask any question to get interactive help</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
