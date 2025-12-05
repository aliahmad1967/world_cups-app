import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import History from './pages/History';
import Home from './pages/Home';
import Matches from './pages/Matches';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<div className="text-center mt-20 text-xl font-bold">عذراً، هذه الصفحة غير متاحة حالياً</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
