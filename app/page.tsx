import { Cpu, TrendingUp, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* 1. Hero Section */}
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

      {/* 2. Featured Projects Grid */}
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

      {/* 3. Experience & Journey Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <TrendingUp className="text-blue-500" /> Career Journey
        </h2>

        <div className="space-y-12">
          {/* Internship */}
          <div className="relative pl-8 border-l-2 border-zinc-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
            <h4 className="text-sm font-mono text-blue-400 uppercase">July - Aug 2025</h4>
            <h3 className="text-xl font-bold text-white">AI & ML Intern</h3>
            <p className="text-zinc-400 font-medium">ThinkMates EduTech (Client: Morphius AI)</p>
            <ul className="mt-4 text-sm text-zinc-500 space-y-2 list-disc ml-4">
              <li>Analyzed NASA IoT datasets for industrial equipment failure prediction.</li>
              <li>Optimized classification models to 0.93 ROC-AUC score.</li>
            </ul>
          </div>

          {/* Education */}
          <div className="relative pl-8 border-l-2 border-zinc-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-700 rounded-full" />
            <h4 className="text-sm font-mono text-zinc-500 uppercase">2021 - 2025</h4>
            <h3 className="text-xl font-bold text-white">B.Tech in CSE (AI & ML)</h3>
            <p className="text-zinc-400 font-medium">TKR College of Engineering & Technology</p>
            <p className="text-zinc-500 text-sm mt-2">CGPA: 8.54 / 10.0</p>
          </div>
        </div>
      </section>

      {/* 4. Skills & Credentials Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-zinc-900">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <ShieldCheck className="text-blue-500" /> Credentials & Expertise
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <h4 className="text-blue-400 font-mono text-xs mb-2 uppercase">Infosys Springboard</h4>
            <p className="font-bold text-white">NLP & Deep Learning Specialization</p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <h4 className="text-blue-400 font-mono text-xs mb-2 uppercase">Cognizant</h4>
            <p className="font-bold text-white">AI Job Simulation</p>
          </div>

          <div className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
            <h4 className="text-blue-400 font-mono text-xs mb-2 uppercase">Great Learning</h4>
            <p className="font-bold text-white">Python for Data Science</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'MySQL', 'React', 'AWS'].map((skill) => (
            <span key={skill} className="px-6 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* 5. Leadership & Creative Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-zinc-900">
        <h2 className="text-2xl font-bold mb-4 italic text-zinc-300">Not just an engineer, but a builder.</h2>
        <p className="text-zinc-500 leading-relaxed max-w-2xl mx-auto">
          Beyond AI, I lead. From organizing the <strong>NISHKARSNA</strong> symposium to coordinating 
          IEEE Hackathons, I manage the people as well as the pixels. I also run 
          <strong> @divineaura.studio_</strong>, blending AI generation with digital branding.
        </p>
      </section>

    </main>
  );
}