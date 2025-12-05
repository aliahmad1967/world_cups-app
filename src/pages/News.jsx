export default function News() {
  const newsItems = [
    { id: 1, title: "الفيفا يعلن عن نظام جديد لكأس العالم 2026", category: "رسمي", image: "bg-blue-600" },
    { id: 2, title: "تصنيف المنتخبات لشهر ديسمبر: قفزة للمغرب", category: "تصنيف", image: "bg-red-600" },
    { id: 3, title: "الكرة الذهبية: المرشحون النهائيون", category: "جوائز", image: "bg-yellow-500" },
    { id: 4, title: "تطوير البنية التحتية للملاعب الجديدة", category: "تطوير", image: "bg-emerald-600" },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 border-r-4 border-[#32ccff] pr-4">آخر الأخبار</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
            <div className={`h-48 ${item.image} relative`}>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg leading-tight group-hover:text-[#0455bf] transition-colors">{item.title}</h3>
              <span className="text-gray-400 text-xs mt-4 block">قبل ساعتين</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
