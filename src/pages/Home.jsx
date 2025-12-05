import { Calendar, ChevronLeft, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative text-center py-20 px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl -z-10 animate-pulse" />
        
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-white">رحلة عبر </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            المجد الكروي
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          الأرشيف الأكمل لتاريخ كأس العالم. استعد ذكريات البطولات، الأهداف الأسطورية، 
          واللحظات التي غيرت تاريخ كرة القدم.
        </p>

        <Link 
          to="/history" 
          className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all transform hover:-translate-y-1"
        >
          <span>تصفح التاريخ</span>
          <ChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <FeatureCard 
          icon={<Trophy className="w-8 h-8 text-yellow-400" />}
          title="22 نسخة"
          desc="تغطية شاملة لكل البطولات منذ 1930"
          color="from-yellow-500/10 to-transparent"
        />
        <FeatureCard 
          icon={<Users className="w-8 h-8 text-blue-400" />}
          title="أساطير اللعبة"
          desc="إحصائيات كاملة عن النجوم والهدافين"
          color="from-blue-500/10 to-transparent"
        />
        <FeatureCard 
          icon={<Calendar className="w-8 h-8 text-purple-400" />}
          title="لحظات خالدة"
          desc="توثيق للمباريات النهائية والتاريخية"
          color="from-purple-500/10 to-transparent"
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color }) {
  return (
    <div className={`glass-card p-8 rounded-2xl relative overflow-hidden group`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10 group-hover:ring-white/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{desc}</p>
      </div>
    </div>
  );
}
