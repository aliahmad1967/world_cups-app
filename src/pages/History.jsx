import { Trophy } from 'lucide-react';

export default function History() {
  const tournaments = [
    { year: 2022, host: "قطر", winner: "الأرجنتين", runnerUp: "فرنسا", score: "3-3 (4-2)" },
    { year: 2018, host: "روسيا", winner: "فرنسا", runnerUp: "كرواتيا", score: "4-2" },
    { year: 2014, host: "البرازيل", winner: "ألمانيا", runnerUp: "الأرجنتين", score: "1-0" },
    { year: 2010, host: "جنوب أفريقيا", winner: "إسبانيا", runnerUp: "هولندا", score: "1-0" },
    { year: 2006, host: "ألمانيا", winner: "إيطاليا", runnerUp: "فرنسا", score: "1-1 (5-3)" },
    { year: 2002, host: "كوريا / اليابان", winner: "البرازيل", runnerUp: "ألمانيا", score: "2-0" },
    { year: 1998, host: "فرنسا", winner: "فرنسا", runnerUp: "البرازيل", score: "3-0" },
    { year: 1994, host: "الولايات المتحدة", winner: "البرازيل", runnerUp: "إيطاليا", score: "0-0 (3-2)" },
    { year: 1990, host: "إيطاليا", winner: "ألمانيا الغربية", runnerUp: "الأرجنتين", score: "1-0" },
    { year: 1986, host: "المكسيك", winner: "الأرجنتين", runnerUp: "ألمانيا الغربية", score: "3-2" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl font-black text-[#1a1a1a] mb-4 md:mb-0">سجل النهائيات</h2>
        <div className="flex space-x-2 space-x-reverse">
          <button className="bg-[#0455bf] text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:bg-[#03449e]">عرض القائمة</button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-50 py-4 px-6 border-b border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-wider hidden md:grid">
          <div className="col-span-1">السنة</div>
          <div className="col-span-2">المستضيف</div>
          <div className="col-span-3">البطل</div>
          <div className="col-span-3">الوصيف</div>
          <div className="col-span-3 text-left pl-4">النتيجة النهائية</div>
        </div>

        {/* List Items */}
        <div className="divide-y divide-gray-100">
          {tournaments.map((t) => (
            <div key={t.year} className="grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-center hover:bg-blue-50/30 transition-colors group cursor-pointer text-[#1a1a1a] gap-4 md:gap-0">
              <div className="col-span-1 font-black text-xl text-[#0455bf]">{t.year}</div>
              <div className="col-span-2 font-medium text-gray-600 flex items-center md:block">
                 <span className="md:hidden font-bold ml-2">المستضيف:</span> {t.host}
              </div>
              <div className="col-span-3 flex items-center font-bold text-lg">
                 <span className="md:hidden font-bold ml-2 text-sm text-gray-500">البطل:</span>
                 <Trophy className="w-5 h-5 text-[#daa520] ml-2" />
                 {t.winner}
              </div>
              <div className="col-span-3 flex items-center font-medium text-gray-600">
                 <span className="md:hidden font-bold ml-2 text-sm text-gray-500">الوصيف:</span>
                 <span className="w-2 h-2 bg-gray-300 rounded-full ml-2 hidden md:block"></span>
                 {t.runnerUp}
              </div>
              <div className="col-span-3 md:text-left md:pl-4 font-mono text-gray-500 flex md:block items-center">
                 <span className="md:hidden font-bold ml-2 text-sm text-gray-500">النتيجة:</span>
                 {t.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
