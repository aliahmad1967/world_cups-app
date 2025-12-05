import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
