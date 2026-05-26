import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <ThemeSwitcher />
      <Footer />
    </div>
  );
}