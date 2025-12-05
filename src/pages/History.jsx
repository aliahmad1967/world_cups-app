import { Trophy } from 'lucide-react';

export default function History() {
  const tournaments = [
    { year: 2022, host: "قطر", winner: "الأرجنتين", score: "3-3 (4-2)" },
    { year: 2018, host: "روسيا", winner: "فرنسا", score: "4-2" },
    { year: 2014, host: "البرازيل", winner: "ألمانيا", score: "1-0" },
    { year: 2010, host: "جنوب أفريقيا", winner: "إسبانيا", score: "1-0" },
    { year: 2006, host: "ألمانيا", winner: "إيطاليا", score: "1-1 (5-3)" },
    { year: 2002, host: "كوريا / اليابان", winner: "البرازيل", score: "2-0" },
    { year: 1998, host: "فرنسا", winner: "فرنسا", score: "3-0" },
    { year: 1994, host: "الولايات المتحدة", winner: "البرازيل", score: "0-0 (3-2)" },
    { year: 1990, host: "إيطاليا", winner: "ألمانيا الغربية", score: "1-0" },
    { year: 1986, host: "المكسيك", winner: "الأرجنتين", score: "3-2" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-4xl font-black text-[#1a1a1a] mb-4 md:mb-0">سجل النهائيات</h2>
        <div className="flex space-x-2 space-x-reverse">
          <button className="bg-[#0455bf] text-white px-6 py-2 rounded-full font-bold text-sm">عرض القائمة</button>
          <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-50">عرض الشبكة</button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-gray-50 py-4 px-6 border-b border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-wider">
          <div className="col-span-2">السنة</div>
          <div className="col-span-3">المستضيف</div>
          <div className="col-span-4">البطل</div>
          <div className="col-span-3 text-left pl-4">النتيجة النهائية</div>
        </div>

        {/* List Items */}
        <div className="divide-y divide-gray-100">
          {tournaments.map((t) => (
            <div key={t.year} className="grid grid-cols-12 py-6 px-6 items-center hover:bg-blue-50/30 transition-colors group cursor-pointer text-[#1a1a1a]">
              <div className="col-span-2 font-black text-xl text-[#0455bf]">{t.year}</div>
              <div className="col-span-3 font-medium text-gray-600">{t.host}</div>
              <div className="col-span-4 flex items-center font-bold">
                 <Trophy className="w-4 h-4 text-[#daa520] ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                 {t.winner}
              </div>
              <div className="col-span-3 text-left pl-4 font-mono text-gray-500">{t.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
