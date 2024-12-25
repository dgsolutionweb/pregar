import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Locations from './components/Locations'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('bg-black');
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => {
      document.body.classList.remove('bg-black');
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gold/40 border-t-gold rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-gray-200 relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(197,165,114,0.05)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
      <Hero />
      <Locations />
      <Footer />
    </main>
  )
}

export default App
