export default function History() {
  const tournaments = [
    { year: 2022, host: "قطر", winner: "الأرجنتين" },
    { year: 2018, host: "روسيا", winner: "فرنسا" },
    { year: 2014, host: "البرازيل", winner: "ألمانيا" },
    { year: 2010, host: "جنوب أفريقيا", winner: "إسبانيا" },
    { year: 2006, host: "ألمانيا", winner: "إيطاليا" },
    { year: 2002, host: "كوريا / اليابان", winner: "البرازيل" },
    { year: 1998, host: "فرنسا", winner: "فرنسا" },
    { year: 1994, host: "الولايات المتحدة", winner: "البرازيل" },
    { year: 1990, host: "إيطاليا", winner: "ألمانيا الغربية" },
    { year: 1986, host: "المكسيك", winner: "الأرجنتين" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-emerald-900">سجل الفائزين بكأس العالم</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tournaments.map((t) => (
          <div key={t.year} className="bg-white p-6 rounded-xl shadow-md border-r-4 border-emerald-500 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl font-bold text-slate-800">{t.year}</span>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
                {t.host}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-500 ml-2">البطل:</span>
              <span className="font-semibold text-lg">{t.winner}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
