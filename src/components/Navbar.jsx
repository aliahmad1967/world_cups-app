import { Globe, Search, Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#0455bf] text-white sticky top-0 z-50 shadow-md">
      {/* Top utility bar (Language/Login style) */}
      <div className="bg-[#03449e] py-1 text-xs">
        <div className="container mx-auto px-6 flex justify-end space-x-4 space-x-reverse">
          <span className="cursor-pointer hover:text-gray-300 flex items-center gap-1">
             English <Globe className="w-3 h-3" />
          </span>
          <span className="cursor-pointer hover:text-gray-300">تسجيل الدخول</span>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Trophy className="h-8 w-8 text-white" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">FIFA</span>
              <span className="text-[0.65rem] font-medium tracking-widest uppercase opacity-80">World Cup History</span>
            </div>
          </Link>
          
          {/* Navigation */}
          <div className="hidden md:flex space-x-1 space-x-reverse h-full items-center">
            <NavLink to="/" active={isActive('/')}>الرئيسية</NavLink>
            <NavLink to="/history" active={isActive('/history')}>البطولات</NavLink>
            <NavLink to="/matches" active={isActive('/matches')}>المباريات</NavLink>
            <NavLink to="/news" active={isActive('/news')}>الأخبار</NavLink>
          </div>

          {/* Search/Action */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Search className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <button className="hidden lg:block border border-white/30 hover:bg-white hover:text-[#0455bf] px-4 py-1.5 rounded-full text-sm font-bold transition-all">
              شراء التذاكر
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link 
      to={to} 
      className={`h-16 flex items-center px-4 text-sm font-bold border-b-[3px] transition-colors ${
        active 
          ? 'border-[#32ccff] text-white' 
          : 'border-transparent text-white/80 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}
