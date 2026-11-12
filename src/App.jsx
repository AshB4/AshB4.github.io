// src/App.jsx
import './index.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import EngineeringExpertise from './components/EngineeringExpertise';
import ProfessionalExperience from './components/ProfessionalExperience';
import TechStack from './components/TechStack';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <main className="bg-cream min-h-screen text-main font-sans">
      <Hero />
      <Projects />
      <About />
      <EngineeringExpertise />
      <ProfessionalExperience />
      <TechStack />
      <Contact description="Open to full-time software engineering opportunities, with a focus on healthcare technology, business applications, and workflow automation." />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
