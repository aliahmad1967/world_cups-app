import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-emerald-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">تاريخ كأس العالم</span>
          </Link>
          
          <div className="flex space-x-6 space-x-reverse">
            <Link to="/" className="hover:text-yellow-400 transition-colors">الرئيسية</Link>
            <Link to="/history" className="hover:text-yellow-400 transition-colors">الأرشيف</Link>
            <Link to="/matches" className="hover:text-yellow-400 transition-colors">المباريات</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
