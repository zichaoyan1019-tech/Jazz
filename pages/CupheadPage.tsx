
import React, { useState } from 'react';
import Slider from '../components/Slider';
import { cupheadSlides, styleMap } from '../constants';
import { StyleMapItem } from '../types';

const CupheadPage: React.FC = () => {
  const [videoItem, setVideoItem] = useState<StyleMapItem | null>(null);
  const [hoveredNode, setHoveredNode] = useState<StyleMapItem | null>(null);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getToneColor = (tone: string) => {
    switch (tone) {
      case 'fast': return 'text-orange-700 border-orange-700 bg-orange-50';
      case 'medium': return 'text-amber-700 border-amber-700 bg-amber-50';
      case 'slow': return 'text-teal-700 border-teal-700 bg-teal-50';
      default: return 'text-stone-700 border-stone-700';
    }
  };

  // Helper to render different node icons based on type
  const renderMapNode = (item: StyleMapItem) => {
    const isHovered = hoveredNode?.id === item.id;
    let shapeClass = "shadow-[2px_2px_0px_rgba(0,0,0,0.5)] transition-all duration-300";

    // Icons designed to pop against the illustrated map
    switch (item.mapType) {
        case 'boss':
            return (
                <div className={`w-10 h-10 rounded-full bg-red-600 border-[3px] border-white ring-2 ring-jazz-dark flex items-center justify-center ${shapeClass} ${isHovered ? 'scale-125 z-50 bg-red-500' : 'animate-float'}`}>
                    <div className="w-4 h-4 rounded-full bg-white border border-jazz-dark flex items-center justify-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                    </div>
                </div>
            );
        case 'run-gun':
            return (
                 <div className={`w-9 h-9 bg-blue-600 border-[3px] border-white ring-2 ring-jazz-dark rotate-45 flex items-center justify-center ${shapeClass} ${isHovered ? 'scale-125 rotate-[225deg] z-50 bg-blue-500' : 'animate-float'}`}>
                     <div className="w-3 h-3 border border-white/80"></div>
                 </div>
            );
        case 'dice':
            return (
                <div className={`w-10 h-10 bg-purple-700 border-[3px] border-white ring-2 ring-jazz-dark rounded-md flex items-center justify-center ${shapeClass} ${isHovered ? 'scale-125 z-50 bg-purple-600' : 'animate-float'}`}>
                     <div className="grid grid-cols-2 gap-1">
                        <div className="w-1 h-1 rounded-full bg-white"></div>
                        <div className="w-1 h-1 rounded-full bg-white"></div>
                        <div className="w-1 h-1 rounded-full bg-white"></div>
                        <div className="w-1 h-1 rounded-full bg-white"></div>
                     </div>
                </div>
            );
        case 'shop':
            return (
                <div className={`w-10 h-8 bg-amber-700 border-[3px] border-white ring-2 ring-jazz-dark rounded-t-full flex flex-col items-center justify-end pb-1 ${shapeClass} ${isHovered ? 'scale-125 z-50 bg-amber-600' : 'animate-float'}`}>
                     <div className="w-6 h-4 border-t-2 border-dashed border-white/50"></div>
                </div>
            );
        default: return null;
    }
  };

  return (
    <section id="cuphead" className="space-y-20">
      
      {/* 1. Overview (Slider) */}
      <div id="cuphead-overview" className="grid gap-12 lg:grid-cols-2 items-center">
         <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-black text-jazz-dark mb-4">
              <span className="block text-xl font-sans font-bold text-jazz-accent uppercase tracking-widest mb-2">Case Study</span>
              Cuphead
            </h2>
            <div className="p-6 border-l-4 border-jazz-dark bg-white shadow-lg">
               <p className="font-serif text-lg leading-relaxed text-jazz-dark">
                 A run-and-gun masterpiece inspired by 1930s cartoons. <strong>Kristofer Maddigan’s</strong> soundtrack doesn't just accompany the action—it <em>is</em> the action.
               </p>
            </div>
            
             {/* Quick Nav Buttons */}
             <div className="flex gap-3 flex-wrap">
                {['Overview', 'Tracklist', 'Style Map'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToId(`cuphead-${item.toLowerCase().replace(' ', '-')}`)}
                    className="px-4 py-2 border border-jazz-dark text-xs uppercase font-bold hover:bg-jazz-dark hover:text-jazz-gold transition-colors"
                  >
                    {item}
                  </button>
                ))}
             </div>
         </div>
         <div className="order-1 lg:order-2">
            <div className="rotate-2 transition-transform hover:rotate-0 duration-500">
               <Slider slides={cupheadSlides} heightClass="h-[300px] sm:h-[400px]" />
            </div>
         </div>
      </div>

      <hr className="border-jazz-dark/20" />

      {/* 2. Tracklist */}
      <div id="cuphead-tracklist" className="max-w-5xl mx-auto bg-[#fdf6e3] p-10 md:p-16 shadow-[0_0_20px_rgba(0,0,0,0.1)] border-2 border-jazz-dark relative">
         <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-8 bg-white/40 rotate-1 shadow-sm border border-white/20 backdrop-blur-sm"></div>

         <div className="text-center border-b-4 border-double border-jazz-dark pb-8 mb-10">
            <h3 className="font-serif font-black uppercase text-4xl md:text-5xl text-jazz-dark tracking-[0.1em] mb-3">Cuphead Tracklist</h3>
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-jazz-accent font-bold">Music by Kristofer Maddigan</p>
         </div>

         <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 font-serif text-jazz-dark">
            <div className="space-y-10">
                <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">I. Main Titles & Map</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>Don’t Deal with the Devil <span className="opacity-60 text-sm ml-1">(Opening)</span></li>
                        <li>Don’t Deal with the Devil <span className="opacity-60 text-sm ml-1">(Instrumental)</span></li>
                        <li>Inkwell Isle One / Two / Three</li>
                        <li>Inkwell Hell</li>
                        <li>Introduction Cutscene</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">II. Boss Battles (Isle I)</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>Botanic Panic — <span className="italic opacity-80">The Root Pack</span></li>
                        <li>Floral Fury — <span className="italic opacity-80">Cagney Carnation</span></li>
                        <li>Clip Joint Calamity — <span className="italic opacity-80">Ribby & Croaks</span></li>
                        <li>Ruse of an Ooze — <span className="italic opacity-80">Goopy Le Grande</span></li>
                        <li>Forest Follies / Treetop Trouble <span className="opacity-60 text-sm ml-1">(R&G)</span></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">II. Boss Battles (Isle II)</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>Sugarland Shimmy — <span className="italic opacity-80">Baroness Von Bon Bon</span></li>
                        <li>Aviary Action — <span className="italic opacity-80">Wally Warbles</span></li>
                        <li>Carnival Kerfuffle — <span className="italic opacity-80">Beppi the Clown</span></li>
                        <li>Fiery Frolic — <span className="italic opacity-80">Grim Matchstick</span></li>
                        <li>Funfair Fever / Funhouse Frazzle <span className="opacity-60 text-sm ml-1">(R&G)</span></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-10">
                <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">II. Boss Battles (Isle III)</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>Shootin’ N’ Lootin’ — <span className="italic opacity-80">Captain Brineybeard</span></li>
                        <li>High Seas Hi-Jinx! — <span className="italic opacity-80">Cala Maria</span></li>
                        <li>Honeycomb Herald — <span className="italic opacity-80">Rumor Honeybottoms</span></li>
                        <li>Railroad Wrath — <span className="italic opacity-80">Phantom Express</span></li>
                        <li>Perilous Piers / Rugged Ridge <span className="opacity-60 text-sm ml-1">(R&G)</span></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">II. Inkwell Hell</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>The King’s Court — <span className="italic opacity-80">King Dice Fight</span></li>
                        <li>One Hell of a Time — <span className="italic opacity-80">The Devil</span></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-sans font-bold uppercase text-xl border-b-2 border-jazz-gold mb-4 pb-1 tracking-wider text-jazz-dark/80">III. Special Themes</h4>
                    <ul className="space-y-2 text-base md:text-lg leading-8">
                        <li>All Bets Are Off! <span className="opacity-60 text-sm ml-1">(King Dice Theme)</span></li>
                        <li>The King’s Court – Short Cuts</li>
                        <li>Victory Tune</li>
                        <li>Shop Theme – Porkrind’s Emporium</li>
                    </ul>
                </div>
            </div>
         </div>
      </div>

      <hr className="border-jazz-dark/20" />

      {/* 3. Interactive Style Map */}
      <div id="cuphead-style-map" className="relative scroll-mt-24 pb-24">
        <div className="mb-10 text-center">
            <h3 className="text-5xl font-serif font-black text-jazz-dark">Inkwell Isle Jazz Map</h3>
            <p className="font-sans text-sm text-jazz-dark/60 tracking-widest uppercase mt-4">
                Explore the island • Hover to inspect • Click to play
            </p>
        </div>

        {/* Map Container */}
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] bg-[#b8d8e0] rounded-3xl border-[6px] border-jazz-dark shadow-[10px_10px_0px_#2c1810] group/map select-none overflow-hidden">
            
            {/* 
              Background Image Layer with CSS Filters 
              NOTE: The user needs to save their map image as 'map.jpg' in the public folder.
            */}
            <div className="absolute inset-0 w-full h-full bg-[#fdf6e3]">
                 <img 
                    src="/map.jpg" 
                    alt="Inkwell Isle Map" 
                    className="w-full h-full object-cover"
                    // CSS Filter Magic:
                    // sepia(0.6) -> Adds the vintage brown tone
                    // hue-rotate(-15deg) -> Shifts remaining blues slightly towards teal/green
                    // contrast(0.9) -> Softens the harsh digital colors
                    // saturate(0.8) -> Reduces vividness to look more like old print
                    style={{ filter: 'sepia(0.4) hue-rotate(-10deg) contrast(0.95) saturate(0.8)' }}
                 />
                 {/* Overlay to further tint the blue water to paper color */}
                 <div className="absolute inset-0 bg-[#fdf6e3] mix-blend-multiply opacity-30 pointer-events-none"></div>
            </div>

            {/* Interactive Nodes Layer */}
            {styleMap.map((item) => (
                <div
                    key={item.id}
                    className="absolute cursor-pointer"
                    style={{ left: `${item.mapPosition.x}%`, top: `${item.mapPosition.y}%`, transform: 'translate(-50%, -50%)', zIndex: 30 }}
                    onMouseEnter={() => setHoveredNode(item)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => item.video && setVideoItem(item)}
                >
                    {renderMapNode(item)}
                    
                    {/* Node Label */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-jazz-cream/90 backdrop-blur-sm px-2 py-0.5 rounded border border-jazz-dark text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-sm pointer-events-none z-40">
                        {item.track}
                    </div>
                </div>
            ))}

             {/* Central Overlay Tooltip - NON-INTERACTIVE & LARGE TYPOGRAPHY */}
            <div className={`absolute inset-0 z-[60] flex items-center justify-center pointer-events-none transition-opacity duration-300 ${hoveredNode ? 'opacity-100' : 'opacity-0'}`}>
                {hoveredNode && (
                    <div className="w-[85%] max-w-4xl h-[480px] bg-[#fdf6e3] border-4 border-jazz-dark shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex relative animate-scale-in">
                        
                        {/* Left: Text Content */}
                        <div className="w-[45%] p-8 flex flex-col justify-center border-r-2 border-jazz-dark/10 relative overflow-hidden bg-white">
                           {/* Watermark Number */}
                           <span className="absolute -bottom-10 -left-6 text-[12rem] font-black text-jazz-dark/5 font-serif leading-none select-none">
                              {styleMap.findIndex(s => s.id === hoveredNode.id) + 1}
                           </span>

                           <span className="font-sans text-sm uppercase tracking-[0.25em] font-bold text-jazz-accent mb-4 relative z-10 block">
                               {hoveredNode.style}
                           </span>
                           <h4 className="font-serif font-black text-4xl md:text-6xl text-jazz-dark mb-6 relative z-10 leading-[0.9]">
                               {hoveredNode.track}
                           </h4>
                           
                           <p className="font-serif italic text-xl md:text-2xl text-jazz-dark/90 leading-relaxed relative z-10 mb-8 line-clamp-5">
                              "{hoveredNode.note}"
                           </p>

                            <div className={`self-start px-4 py-2 border-2 rounded-full font-bold uppercase text-xs tracking-widest ${getToneColor(hoveredNode.tone)}`}>
                                {hoveredNode.feel}
                            </div>
                           
                           {/* Instruction Label */}
                           <div className="mt-auto pt-3 flex items-center gap-2 text-jazz-dark/50 font-bold uppercase text-[10px] tracking-widest">
                               <span className="animate-pulse">Click node to play video</span>
                           </div>
                        </div>

                        {/* Right: Full Bleed Image */}
                        <div className="w-[55%] h-full bg-stone-800 relative overflow-hidden">
                           <img 
                                src={hoveredNode.img} 
                                alt={hoveredNode.track} 
                                className="w-full h-full object-cover grayscale-[20%] sepia-[30%]" 
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-jazz-dark/80 via-transparent to-transparent opacity-60"></div>
                           
                           {/* Location Stamp */}
                           <div className="absolute top-6 right-6 border-4 border-white/80 text-white/90 px-4 py-2 rotate-6 font-black font-sans uppercase tracking-[0.2em] text-sm shadow-lg backdrop-blur-sm">
                               {hoveredNode.scene}
                           </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
      </div>

      {/* Cinema Modal */}
      {videoItem && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-jazz-dark/95 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setVideoItem(null)}
        >
          <div className="relative w-full max-w-5xl border-8 border-double border-jazz-gold bg-black shadow-[0_0_50px_rgba(212,175,55,0.3)] p-2" onClick={(e) => e.stopPropagation()}>
            <button 
                className="absolute -top-12 right-0 text-white hover:text-jazz-gold font-sans uppercase font-bold tracking-widest text-sm flex items-center gap-2"
                onClick={() => setVideoItem(null)}
              >
                Close [X]
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${videoItem.video}?autoplay=1`}
                title={videoItem.track}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-jazz-dark p-4 border-t border-jazz-gold/30 flex justify-between items-center text-jazz-cream">
                <div>
                   <h4 className="font-serif text-xl">{videoItem.track}</h4>
                   <span className="font-sans text-xs uppercase tracking-widest text-jazz-gold">{videoItem.style}</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CupheadPage;
