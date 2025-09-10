// src/App.jsx
import './index.css';
import CanvasHexFrame from './components/CanvasHexFrame';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import GumroadProducts from './components/GumroadProducts';
import BackToTop from './components/BackToTop';



function App() {
  return (
    <main className="bg-cream min-h-screen text-gray-900 font-sans">
      <div className="relative min-h-screen">
      <CanvasHexFrame />
      </div>
      <Hero />
      
      {/* wip <ParallaxBanner /> */}
      <Projects />
      <Resume />
      <GumroadProducts />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;