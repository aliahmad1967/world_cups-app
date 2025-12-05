export default function Stats() {
  const champions = [
    { country: "البرازيل", titles: 5, years: "1958, 1962, 1970, 1994, 2002", flag: "🇧🇷" },
    { country: "ألمانيا", titles: 4, years: "1954, 1974, 1990, 2014", flag: "🇩🇪" },
    { country: "إيطاليا", titles: 4, years: "1934, 1938, 1982, 2006", flag: "🇮🇹" },
    { country: "الأرجنتين", titles: 3, years: "1978, 1986, 2022", flag: "🇦🇷" },
    { country: "فرنسا", titles: 2, years: "1998, 2018", flag: "🇫🇷" },
    { country: "أوروغواي", titles: 2, years: "1930, 1950", flag: "🇺🇾" },
    { country: "إنجلترا", titles: 1, years: "1966", flag: "🇬🇧" },
    { country: "إسبانيا", titles: 1, years: "2010", flag: "🇪🇸" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 border-r-4 border-[#32ccff] pr-4">سجل الأبطال</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {champions.map((champ) => (
          <div key={champ.country} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center hover:border-[#0455bf] transition-colors group">
            <div className="text-6xl mb-4 grayscale group-hover:grayscale-0 transition-all">{champ.flag}</div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{champ.country}</h3>
            <div className="bg-[#0455bf] text-white font-black text-xl w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
              {champ.titles}
            </div>
            <p className="text-sm text-gray-500 font-medium">{champ.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
