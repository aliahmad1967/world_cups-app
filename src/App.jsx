import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import History from './pages/History';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<div className="text-center mt-20">الصفحة غير موجودة</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
