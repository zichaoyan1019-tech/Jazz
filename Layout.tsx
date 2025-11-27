import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path) 
      ? 'text-jazz-dark font-black bg-jazz-gold shadow-[2px_2px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]' 
      : 'text-jazz-dark/70 hover:text-jazz-dark hover:bg-jazz-gold/20 hover:font-bold';
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-jazz-dark overflow-x-hidden">
      <div className="paper-texture min-h-screen flex flex-col relative">
        {/* Decorative Top Border */}
        <div className="h-2 w-full bg-jazz-dark"></div>
        
        {/* Sticky Header with Art Deco Vibes */}
        <header className="sticky top-0 z-50 border-b-2 border-jazz-dark bg-[#fdf6e3]/95 backdrop-blur-sm shadow-md transition-all duration-300">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            
            {/* Logo Area */}
            <Link to="/intro" className="group relative">
              <div className="absolute -inset-1 rounded-sm bg-jazz-gold opacity-0 blur transition duration-500 group-hover:opacity-75"></div>
              <h1 className="relative font-serif text-xl md:text-2xl font-black uppercase tracking-[0.15em] text-jazz-dark border-2 border-jazz-dark px-2 py-1 bg-[#fdf6e3]">
                Jazz <span className="text-jazz-accent italic normal-case font-serif tracking-normal">in</span> Games
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2 md:gap-4 font-sans text-xs md:text-sm uppercase tracking-widest">
              <Link 
                className={`px-4 py-2 border border-jazz-dark transition-all duration-200 ${isActive('intro')}`} 
                to="/intro"
              >
                Intro
              </Link>
              <Link 
                className={`px-4 py-2 border border-jazz-dark transition-all duration-200 ${isActive('cuphead')}`} 
                to="/cuphead"
              >
                Cuphead
              </Link>
              <Link 
                className={`px-4 py-2 border border-jazz-dark transition-all duration-200 ${isActive('references')}`} 
                to="/references"
              >
                Refs
              </Link>
            </nav>
          </div>
          
          {/* Decorative small squares under header */}
          <div className="flex w-full overflow-hidden h-1">
             {Array.from({ length: 100 }).map((_, i) => (
               <div key={i} className={`w-2 h-1 ${i % 2 === 0 ? 'bg-jazz-dark' : 'bg-transparent'}`}></div>
             ))}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow mx-auto w-full max-w-7xl px-4 pb-20 pt-12 md:pt-16">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="relative border-t-2 border-jazz-dark bg-jazz-dark text-jazz-cream py-10 mt-auto">
          <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
             <div className="bg-jazz-gold border-2 border-jazz-dark rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-jazz-dark">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
             </div>
          </div>
          <div className="text-center font-serif tracking-widest space-y-2">
            <p className="text-lg">Jazz in Video Games</p>
            <p className="text-xs font-sans opacity-60">Cuphead Focus · Educational Project © 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;