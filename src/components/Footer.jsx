export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">FIFA World Cup™</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">عن البطولة</li>
              <li className="hover:text-white cursor-pointer">الأخبار</li>
              <li className="hover:text-white cursor-pointer">المتجر الرسمي</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">البطولات</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">كأس العالم 2026</li>
              <li className="hover:text-white cursor-pointer">كأس العالم للسيدات</li>
              <li className="hover:text-white cursor-pointer">كأس العالم للأندية</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">مركز المساعدة</li>
              <li className="hover:text-white cursor-pointer">وظائف</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#32ccff] cursor-pointer transition-colors" />
              <div className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#32ccff] cursor-pointer transition-colors" />
              <div className="w-8 h-8 rounded-full bg-gray-700 hover:bg-[#32ccff] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2025 جميع الحقوق محفوظة لـ FIFA</p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">الشروط والأحكام</span>
            <span className="hover:text-white cursor-pointer">سياسة الخصوصية</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
