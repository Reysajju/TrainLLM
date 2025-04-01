import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import DashboardPreview from './pages/DashboardPreview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="dashboard-preview" element={<DashboardPreview />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;