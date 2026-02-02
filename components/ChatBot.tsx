'use client';
import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([{ role: 'bot', text: 'Hi! I am Sairam\'s AI Assistant. Ask me about his projects or skills!' }]);

  const askQuestion = (q: string) => {
    let response = "I'm not sure about that, but you can check Sairam's LinkedIn!";
    if (q.includes('stock')) response = "Sairam built a Stock Predictor using LSTM and Sentiment Analysis with a Flask dashboard.";
    if (q.includes('iot')) response = "He achieved a 0.93 ROC-AUC score on IoT fault detection using NASA datasets.";
    if (q.includes('contact')) response = "You can email him at chakalisairam2004@gmail.com.";

    setHistory([...history, { role: 'user', text: q }, { role: 'bot', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-800 w-80 h-96 rounded-2xl flex flex-col shadow-2xl">
          <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-blue-600 rounded-t-2xl">
            <span className="font-bold text-white text-sm">Sairam AI Agent</span>
            <X size={18} className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {history.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-zinc-800 grid grid-cols-2 gap-2">
            <button onClick={() => askQuestion('Tell me about Stock project')} className="text-[10px] bg-zinc-800 p-1 rounded hover:bg-zinc-700 text-zinc-400">Stock Project</button>
            <button onClick={() => askQuestion('IoT Accuracy?')} className="text-[10px] bg-zinc-800 p-1 rounded hover:bg-zinc-700 text-zinc-400">IoT Accuracy</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-blue-600 p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
          <MessageSquare className="text-white" />
        </button>
      )}
    </div>
  );
}