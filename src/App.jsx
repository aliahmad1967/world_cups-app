import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import History from './pages/History';
import Home from './pages/Home';
import Legends from './pages/Legends';
import Matches from './pages/Matches';
import Memories from './pages/Memories';
import News from './pages/News';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/news" element={<News />} />
          <Route path="/legends" element={<Legends />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="*" element={<div className="text-center mt-20 text-xl font-bold">عذراً، هذه الصفحة غير متاحة حالياً</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
