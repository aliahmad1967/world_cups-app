export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/30 backdrop-blur-sm py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 space-x-reverse mb-4 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-2xl">⚽️</span>
          <span className="font-bold text-lg">تاريخ كأس العالم</span>
        </div>
        <p className="text-slate-500">تم التطوير باستخدام أحدث تقنيات الويب © 2025</p>
      </div>
    </footer>
  );
}
