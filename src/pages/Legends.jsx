import { Trophy } from 'lucide-react';

export default function Legends() {
  const scorers = [
    { rank: 1, name: "ميروسلاف كلوزه", country: "ألمانيا", goals: 16, matches: 24, tournaments: "2002, 2006, 2010, 2014" },
    { rank: 2, name: "رونالدو", country: "البرازيل", goals: 15, matches: 19, tournaments: "1994, 1998, 2002, 2006" },
    { rank: 3, name: "غيرد مولر", country: "ألمانيا الغربية", goals: 14, matches: 13, tournaments: "1970, 1974" },
    { rank: 4, name: "ليونيل ميسي", country: "الأرجنتين", goals: 13, matches: 26, tournaments: "2006, 2010, 2014, 2018, 2022" },
    { rank: 4, name: "جاست فونتين", country: "فرنسا", goals: 13, matches: 6, tournaments: "1958" },
    { rank: 6, name: "كيليان مبابي", country: "فرنسا", goals: 12, matches: 14, tournaments: "2018, 2022" },
    { rank: 6, name: "بيليه", country: "البرازيل", goals: 12, matches: 14, tournaments: "1958, 1962, 1966, 1970" },
    { rank: 8, name: "يورغن كلينسمان", country: "ألمانيا", goals: 11, matches: 17, tournaments: "1990, 1994, 1998" },
    { rank: 8, name: "ساندرو كوتشيس", country: "المجر", goals: 11, matches: 5, tournaments: "1954" },
    { rank: 10, name: "غابرييل باتيستوتا", country: "الأرجنتين", goals: 10, matches: 12, tournaments: "1994, 1998, 2002" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <span className="text-[#0455bf] font-bold tracking-wider uppercase text-sm">التاريخ الذهبي</span>
        <h2 className="text-4xl font-black text-[#1a1a1a] mt-2">الهدافون التاريخيون لكأس العالم</h2>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="grid grid-cols-12 bg-gray-50 py-4 px-6 border-b border-gray-200 text-sm font-bold text-gray-500 uppercase tracking-wider">
          <div className="col-span-1">#</div>
          <div className="col-span-3">اللاعب</div>
          <div className="col-span-2">المنتخب</div>
          <div className="col-span-2 text-center">الأهداف</div>
          <div className="col-span-2 text-center">المباريات</div>
          <div className="col-span-2 text-left pl-4 hidden md:block">النسخ</div>
        </div>

        <div className="divide-y divide-gray-100">
          {scorers.map((player) => (
            <div key={player.name} className="grid grid-cols-12 py-5 px-6 items-center hover:bg-blue-50/30 transition-colors cursor-default text-[#1a1a1a]">
              <div className="col-span-1 font-black text-[#0455bf]">{player.rank}</div>
              <div className="col-span-3 font-bold text-lg flex items-center">
                {player.rank === 1 && <Trophy className="w-4 h-4 text-yellow-500 ml-2" />}
                {player.name}
              </div>
              <div className="col-span-2 font-medium text-gray-600">{player.country}</div>
              <div className="col-span-2 text-center font-black text-xl text-[#0455bf] bg-blue-50 rounded py-1 mx-2">{player.goals}</div>
              <div className="col-span-2 text-center font-mono text-gray-500">{player.matches}</div>
              <div className="col-span-2 text-left pl-4 text-xs text-gray-400 hidden md:block">{player.tournaments}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
