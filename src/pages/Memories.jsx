export default function Memories() {
    const moments = [
      { id: 1, title: "يد الرب", year: 1986, desc: "مارادونا يسجل أشهر هدف مثير للجدل في التاريخ ضد إنجلترا.", color: "bg-sky-600" },
      { id: 2, title: "نطحة زيدان", year: 2006, desc: "النهاية المأساوية لمسيرة الأسطورة الفرنسية في نهائي برلين.", color: "bg-blue-800" },
      { id: 3, title: "معجزة بيرن", year: 1954, desc: "ألمانيا الغربية تقهر المجر التي لا تقهر وتفوز بالكأس.", color: "bg-gray-800" },
      { id: 4, title: "ماراكانازو", year: 1950, desc: "أوروغواي تصدم البرازيل في عقر دارها أمام 200 ألف متفرج.", color: "bg-yellow-600" },
      { id: 5, title: "هدف القرن", year: 1986, desc: "مارادونا يراوغ نصف منتخب إنجلترا ليسجل أعظم هدف فردي.", color: "bg-sky-500" },
      { id: 6, title: "السباعية التاريخية", year: 2014, desc: "ألمانيا تكتسح البرازيل 7-1 في بيلو هوريزونتي.", color: "bg-red-700" },
    ];
  
    return (
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8 border-r-4 border-[#da291c] pr-4">لحظات خالدة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moments.map((moment) => (
            <div key={moment.id} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all">
              <div className={`absolute inset-0 ${moment.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-5xl font-black opacity-10 absolute top-4 left-4">{moment.year}</span>
                <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">{moment.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{moment.title}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {moment.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
