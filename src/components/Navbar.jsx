import { Trophy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="glass sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
            <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300 transform group-hover:scale-110">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              تاريخ كأس العالم
            </span>
          </Link>
          
          <div className="flex space-x-8 space-x-reverse">
            <NavLink to="/" active={isActive('/')}>الرئيسية</NavLink>
            <NavLink to="/history" active={isActive('/history')}>الأرشيف</NavLink>
            <NavLink to="/matches" active={isActive('/matches')}>المباريات</NavLink>
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
      className={`relative px-4 py-2 font-medium transition-colors duration-200 ${
        active ? 'text-yellow-400' : 'text-slate-300 hover:text-white'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] rounded-full" />
      )}
    </Link>
  );
}
