export default function Matches() {
  const upcomingMatches = [
    { id: 1, team1: "البرازيل", team2: "فرنسا", time: "22:00", date: "25 مارس", stadium: "ملعب لوسيل" },
    { id: 2, team1: "الأرجنتين", team2: "إسبانيا", time: "19:00", date: "26 مارس", stadium: "المدينة التعليمية" },
    { id: 3, team1: "ألمانيا", team2: "إنجلترا", time: "21:00", date: "27 مارس", stadium: "أليانز أرينا" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 border-r-4 border-[#0455bf] pr-4">جدول المباريات</h2>
      
      <div className="space-y-4">
        {upcomingMatches.map((match) => (
          <div key={match.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-8 space-x-reverse flex-1 justify-center md:justify-start">
              {/* Teams */}
              <div className="flex items-center gap-4 w-1/3 justify-end">
                <span className="font-bold text-lg">{match.team1}</span>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">?</div>
              </div>
              
              <div className="bg-gray-100 px-4 py-1 rounded text-sm font-mono font-bold text-[#0455bf]">
                {match.time}
              </div>
              
              <div className="flex items-center gap-4 w-1/3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">?</div>
                <span className="font-bold text-lg">{match.team2}</span>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:border-r md:border-gray-100 md:pr-8 flex flex-col items-center md:items-start text-sm text-gray-500 w-full md:w-auto">
              <span className="font-bold text-[#1a1a1a] mb-1">{match.date}</span>
              <span>{match.stadium}</span>
              <button className="mt-3 text-[#0455bf] font-bold border border-[#0455bf] px-6 py-1.5 rounded-full hover:bg-[#0455bf] hover:text-white transition-colors text-xs">
                شراء التذاكر
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
