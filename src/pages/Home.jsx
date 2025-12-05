import { ArrowRight, Calendar, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Width Image Style */}
      <div className="bg-[#002f6c] text-white relative h-[600px] flex items-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0455bf] skew-x-12 translate-x-32 z-0" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#033a8c] -skew-x-12 -translate-x-12 z-0 opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-[#32ccff] text-[#002f6c] px-4 py-1.5 font-bold uppercase tracking-wider text-xs rounded-sm inline-block">
              الوجهة الرسمية
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              تاريخ كأس العالم
            </h1>
            <p className="text-xl opacity-90 leading-relaxed font-light">
              استكشف القصص والأرقام واللحظات الخالدة من البطولة الرياضية الأعظم في العالم.
            </p>
            <div className="pt-4">
              <Link 
                to="/history" 
                className="inline-flex items-center bg-transparent border-2 border-[#32ccff] text-white hover:bg-[#32ccff] hover:text-[#002f6c] px-8 py-3 rounded-full font-bold transition-all group"
              >
                تصفح الأرشيف
                <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Link>
            </div>
          </div>
          
          {/* Hero Visual Placeholder */}
          <div className="hidden lg:block relative">
             {/* Using a placeholder div for standard image simulation */}
             <div className="aspect-[4/3] bg-gradient-to-tr from-blue-400 to-emerald-400 rounded-lg shadow-2xl opacity-20 transform rotate-3" />
             <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
                <span className="text-white font-bold opacity-30 text-2xl">صورة البطولة</span>
             </div>
          </div>
        </div>
      </div>

      {/* Latest Highlights / Cards Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-black text-[#1a1a1a] uppercase tracking-tighter">أبرز المحطات</h2>
          <Link to="/history" className="text-[#0455bf] font-bold hover:underline flex items-center text-sm">
            عرض الكل <ChevronLeft className="w-4 h-4 mr-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard 
            category="إحصائيات"
            title="الأرقام القياسية في تاريخ كأس العالم"
            date="منذ 1930"
            imageColor="bg-red-500"
          />
          <NewsCard 
            category="أساطير"
            title="أعظم 10 هدافين في تاريخ البطولة"
            date="تحديث مستمر"
            imageColor="bg-emerald-500"
          />
          <NewsCard 
            category="ذكريات"
            title="مباريات نهائية لن ينساها التاريخ"
            date="أرشيف كامل"
            imageColor="bg-yellow-500"
          />
        </div>
      </div>
      
      {/* Featured Tournament Banner */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
             <div className="md:w-1/2 bg-[#0455bf] p-12 text-white flex flex-col justify-center">
               <h3 className="text-3xl font-bold mb-4">كأس العالم 2026</h3>
               <p className="opacity-90 mb-8 leading-relaxed">
                 استعد للحدث القادم في كندا، المكسيك، والولايات المتحدة. البطولة الأكبر في التاريخ بمشاركة 48 منتخباً.
               </p>
               <button className="bg-white text-[#0455bf] font-bold px-6 py-3 rounded-full w-fit hover:bg-gray-100">
                 معرفة المزيد
               </button>
             </div>
             <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative">
               {/* Image Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                 صورة ترويجية 2026
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function NewsCard({ category, title, date, imageColor }) {
  return (
    <div className="group cursor-pointer">
      <div className={`aspect-[16/9] ${imageColor} rounded-lg mb-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-4 right-4 bg-white text-[#0455bf] text-xs font-bold px-3 py-1 rounded-full uppercase">
          {category}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-gray-500 text-xs font-medium">
          <Calendar className="w-3 h-3 ml-1" />
          {date}
        </div>
        <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#0455bf] transition-colors leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}
