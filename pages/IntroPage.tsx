
import React, { useState, useRef, useEffect } from 'react';
import Slider from '../components/Slider';
import { introSlides } from '../constants';
import { Slide } from '../types';

const IntroPage: React.FC = () => {
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleImageClick = (slide: Slide) => {
    if (!slide.audioSrc) return;

    if (currentAudioSrc === slide.audioSrc) {
      // Toggle play/pause if clicking the same slide
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Switch track
      setCurrentAudioSrc(slide.audioSrc);
      setIsPlaying(true); // Will be handled by useEffect or autoPlay
    }
  };

  // Effect to handle source changes or initial play
  useEffect(() => {
    if (currentAudioSrc && audioRef.current) {
        audioRef.current.src = currentAudioSrc;
        if (isPlaying) {
            audioRef.current.play().catch(e => console.log("Playback failed:", e));
        }
    }
  }, [currentAudioSrc]);

  return (
    <section className="space-y-16 animate-fade-in pb-12">
      
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Decorative Background Element */}
        <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-jazz-gold/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="w-full md:w-3/5 order-2 md:order-1">
           <Slider
                slides={introSlides}
                heightClass="h-[300px] sm:h-[400px] md:h-[450px]"
                imageFit="contain" 
                onImageClick={handleImageClick}
                maxWidthClass="max-w-full"
            />
        </div>

        <div className="w-full md:w-2/5 order-1 md:order-2 space-y-6 text-center md:text-left z-10">
           <div className="inline-block border-b-4 border-jazz-gold pb-2">
              <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-jazz-accent">
                The Rhythm of Play
              </span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-serif font-black text-jazz-dark leading-[0.9]">
             Jazz <br/>
             <span className="text-4xl md:text-5xl font-normal italic text-jazz-dark/80">in Video Games</span>
           </h1>
           
           <p className="font-sans text-sm leading-6 text-jazz-dark/70 max-w-sm mx-auto md:mx-0">
             From the energetic swing of Cuphead to the smoky noir of L.A. Noire, explore how syncopation shapes our digital adventures.
           </p>

           {/* Vinyl Record Visualizer (Decoration) */}
           <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <div 
                className={`relative w-16 h-16 rounded-full bg-jazz-dark border-2 border-jazz-dark shadow-md flex items-center justify-center transition-all duration-1000 ${isPlaying ? 'animate-spin-slow' : ''}`}
                style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
              >
                 {/* Record Label */}
                 <div className="w-6 h-6 rounded-full bg-jazz-gold flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                 </div>
                 {/* Grooves */}
                 <div className="absolute inset-0 rounded-full border border-white/10 scale-90"></div>
                 <div className="absolute inset-0 rounded-full border border-white/10 scale-75"></div>
              </div>
              <div className="text-left">
                  <span className="block font-serif italic text-sm text-jazz-dark">
                      {isPlaying ? "Now Playing..." : "Click images to listen"}
                  </span>
                  {isPlaying && currentAudioSrc && (
                      <span className="text-[10px] font-sans uppercase tracking-widest text-jazz-accent">
                          Track {currentAudioSrc.match(/S(\d+)/)?.[1]}
                      </span>
                  )}
              </div>
           </div>
        </div>
      </div>

      {/* Content Article with "Drop Cap" */}
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-jazz-gold/30 hidden md:block"></div>
        
        <div className="md:pl-12 space-y-8">
          <div className="prose prose-stone prose-lg max-w-none font-serif text-jazz-dark">
            <p className="leading-8">
              <span className="float-left text-7xl font-black text-jazz-accent pr-4 mt-[-10px] font-serif">J</span>
              azz has been used in video games since the late 1980s and early 1990s, when developers began incorporating swing rhythms
              and upbeat melodies to create playful, energetic atmospheres within technological limits. Early titles such as <span className="font-bold text-jazz-dark decoration-jazz-gold underline decoration-2 underline-offset-2">Mario Kart 64</span> (1996) and <em>SimCity 3000</em> (1999) used jazz-inspired cues to give their game worlds a lively, character-driven feel.
            </p>
            
            <div className="my-8 p-6 bg-white border border-jazz-dark/10 shadow-[4px_4px_0px_#d4af37] rotate-1">
              <p className="font-sans text-sm font-bold tracking-widest text-jazz-dark/60 uppercase mb-2">Did you know?</p>
              <p className="italic font-serif text-xl text-jazz-dark">
                "Video game jazz isn't just background noise; it's a narrative device that tells the player how to feel about the world they inhabit."
              </p>
            </div>

            <p className="leading-8">
              As game technology improved in the 2000s, fully scored jazz soundtracks became possible in games like <em>Persona</em>, <em>Grim Fandango</em>, and <em>L.A. Noire</em>, where jazz helped shape narrative tone and emotional atmosphere. By the 2010s, jazz had become a
              deliberate aesthetic choice. Within this trend, <strong className="text-jazz-accent">Cuphead (2017)</strong> stands out as a landmark example, showing how jazz can define both a game’s visual world and its moment-to-moment gameplay experience.
            </p>
          </div>
        </div>
      </div>
      
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        onEnded={() => setIsPlaying(false)}
        className="hidden" 
      />
    </section>
  );
};

export default IntroPage;
