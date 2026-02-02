import { Cpu, TrendingUp, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-32 pb-20 px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          CHAKALI SAIRAM
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          AI & ML Engineer specialized in Deep Learning & Predictive Modeling. 
          Turning complex data into interactive intelligence.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/chakalisairam14" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition"><Github /></a>
          <a href="https://www.linkedin.com/in/chakali-sairam-ab1183253" target="_blank" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition"><Linkedin /></a>
          <a href="mailto:chakalisairam2004@gmail.com" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition"><Mail /></a>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Cpu className="text-blue-500" /> Featured Engineering
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1: Stock Market */}
          <div className="group p-8 bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-blue-500/50 transition-all">
            <TrendingUp className="text-blue-500 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3 text-white">Stock Market Forecasting</h3>
            <p className="text-gray-400 mb-6">Built a forecasting model integrating LSTM-based Deep Learning with Sentiment Analysis. Accuracy enhanced by TextBlob NLP processing.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'LSTM', 'Flask', 'NLP', 'Plotly'].map(t => (
                <span key={t} className="px-3 py-1 bg-zinc-900 text-zinc-400 text-xs rounded-full border border-zinc-800">{t}</span>
              ))}
            </div>
          </div>

          {/* Project 2: IoT Fault Detection */}
          <div className="group p-8 bg-zinc-950 border border-zinc-800 rounded-3xl hover:border-green-500/50 transition-all">
            <ShieldCheck className="text-green-500 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3 text-white">IoT Fault Detection</h3>
            <p className="text-gray-400 mb-6">Developed for Morphius AI using NASA datasets. Achieved a 0.93 ROC-AUC score for real-time equipment failure prediction.</p>
            <div className="flex flex-wrap gap-2">
              {['Random Forest', 'XGBoost', 'IoT', 'NASA Dataset'].map(t => (
                <span key={t} className="px-3 py-1 bg-zinc-900 text-zinc-400 text-xs rounded-full border border-zinc-800">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}