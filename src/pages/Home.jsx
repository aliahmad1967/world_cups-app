import { Calendar, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-emerald-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">مرحباً بكم في أرشيف كأس العالم</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            استكشف تاريخ البطولة الأعظم في كرة القدم. من الأوروغواي 1930 إلى النسخ الحديثة.
            إحصائيات، أرقام، ولحظات لا تنسى.
          </p>
          <Link 
            to="/history" 
            className="inline-block bg-yellow-400 text-emerald-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors"
          >
            تصفح البطولات
          </Link>
        </div>
        {/* Decorative elements could be added here */}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">22 نسخة</h3>
          <p className="text-slate-600">منذ انطلاق البطولة الأولى عام 1930</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">أساطير اللعبة</h3>
          <p className="text-slate-600">تعرف على الهدافين واللاعبين التاريخيين</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">لحظات خالدة</h3>
          <p className="text-slate-600">سجل كامل للمباريات النهائية والحاسمة</p>
        </div>
      </div>
    </div>
  );
}
