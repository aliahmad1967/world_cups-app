import { MapPin, Trophy } from 'lucide-react';

export default function History() {
  const tournaments = [
    { year: 2022, host: "قطر", winner: "الأرجنتين", count: "3", color: "from-sky-600 to-white" },
    { year: 2018, host: "روسيا", winner: "فرنسا", count: "2", color: "from-blue-700 to-red-600" },
    { year: 2014, host: "البرازيل", winner: "ألمانيا", count: "4", color: "from-black to-yellow-500" },
    { year: 2010, host: "جنوب أفريقيا", winner: "إسبانيا", count: "1", color: "from-red-600 to-yellow-400" },
    { year: 2006, host: "ألمانيا", winner: "إيطاليا", count: "4", color: "from-green-600 to-red-600" },
    { year: 2002, host: "كوريا / اليابان", winner: "البرازيل", count: "5", color: "from-yellow-400 to-green-600" },
    { year: 1998, host: "فرنسا", winner: "فرنسا", count: "1", color: "from-blue-700 to-red-600" },
    { year: 1994, host: "الولايات المتحدة", winner: "البرازيل", count: "4", color: "from-yellow-400 to-green-600" },
    { year: 1990, host: "إيطاليا", winner: "ألمانيا الغربية", count: "3", color: "from-black to-yellow-500" },
    { year: 1986, host: "المكسيك", winner: "الأرجنتين", count: "2", color: "from-sky-600 to-white" },
    { year: 1982, host: "إسبانيا", winner: "إيطاليا", count: "3", color: "from-green-600 to-red-600" },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-white to-slate-400 mb-4 inline-block">
          سجل الأبطال
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-transparent mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tournaments.map((t) => (
          <div key={t.year} className="glass-card rounded-xl p-6 group relative overflow-hidden">
             {/* Subtle flag gradient overlay */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${t.color}`} />
            
            <div className="flex justify-between items-start mb-6">
              <span className="text-3xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                {t.year}
              </span>
              <Trophy className={`w-6 h-6 ${t.winner === 'البرازيل' ? 'text-yellow-400' : 'text-slate-400 group-hover:text-yellow-400'} transition-colors duration-300`} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-slate-300 group-hover:text-white transition-colors">
                <span className="text-lg font-bold">{t.winner}</span>
                {t.winner === 'الأرجنتين' && <span className="mr-2 text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">3 ⭐️</span>}
                {t.winner === 'البرازيل' && <span className="mr-2 text-xs bg-yellow-400/20 text-yellow-400 px-2 py-0.5 rounded-full">5 ⭐️</span>}
              </div>
              
              <div className="flex items-center text-sm text-slate-500">
                <MapPin className="w-4 h-4 ml-1" />
                <span>{t.host}</span>
              </div>
            </div>

            {/* Hover visual */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
