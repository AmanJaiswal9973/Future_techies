import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import FeesAndBatches from './components/FeesAndBatches';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'courses', 'fees', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const headerHeight = 80;
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleJoinClick = () => {
    setIsJoinUsOpen(true);
  };

  const handleCloseJoinUs = () => {
    setIsJoinUsOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        onJoinClick={handleJoinClick}
      />
      
      <main>
        <Hero onJoinClick={handleJoinClick} onNavigate={handleNavigate} />
        <Courses onJoinClick={handleJoinClick} />
        <FeesAndBatches />
        <Gallery />
        <AboutUs />
        <ContactUs />
      </main>

      <Footer />
      
      <JoinUs isOpen={isJoinUsOpen} onClose={handleCloseJoinUs} />
    </div>
  );
}

export default App;