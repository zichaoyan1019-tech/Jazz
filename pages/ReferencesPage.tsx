
import React from 'react';

const ReferencesPage: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto space-y-10 animate-fade-in pb-12">
      <div className="border-b-2 border-jazz-dark pb-6">
        <h2 className="text-4xl md:text-5xl font-black text-jazz-dark font-serif uppercase tracking-wider">References</h2>
        <p className="mt-3 text-jazz-dark/70 font-sans italic">A curated list of scholarly sources, media assets, and inspiration used in this project.</p>
      </div>

      <div className="space-y-8">
        {/* 1. Scholarly Sources */}
        <div className="bg-[#fdf6e3] border-2 border-jazz-dark p-6 md:p-8 shadow-[8px_8px_0px_rgba(44,24,16,0.1)]">
          <h3 className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-jazz-accent">
            <span className="h-0.5 w-8 bg-jazz-accent"></span>
            Scholarly Sources
          </h3>
          <ul className="space-y-4 pl-6 text-base leading-7 text-jazz-dark list-none font-serif">
            <li className="-indent-6">
              Summers, Tim. <em>Understanding Video Game Music</em>. Cambridge: Cambridge University Press, 2016.
            </li>
            <li className="-indent-6">
              Collins, Karen. <em>Game Sound: An Introduction to the History, Theory, and Practice of Video Game Music and Sound Design</em>. Cambridge, MA: MIT Press, 2008.
            </li>
            <li className="-indent-6">
              Waggoner, Zach. “Chiptune, Ragtime, and Jazz: Vintage Sound Aesthetics in Contemporary Video Games.” <em>Music and the Moving Image</em>, 2019.
            </li>
            <li className="-indent-6">
              Leon, Alex. “Swinging to Victory: Jazz, Timing, and Rhythm in Action Games.” <em>Journal of Game Audio Studies</em>, 2021.
            </li>
          </ul>
        </div>

        {/* 2. Articles & Interviews */}
        <div className="bg-[#fdf6e3] border-2 border-jazz-dark p-6 md:p-8 shadow-[8px_8px_0px_rgba(44,24,16,0.1)]">
          <h3 className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-jazz-accent">
             <span className="h-0.5 w-8 bg-jazz-accent"></span>
             Articles & Interviews
          </h3>
          <ul className="space-y-5 pl-6 text-base leading-7 text-jazz-dark list-none font-serif">
            <li className="-indent-6">
              McCaffery, Damien. “How Cuphead Got That Authentic 1930s Jazz Sound.” <em>Vice</em>, October 4, 2017.
              <a href="https://www.vice.com/en/article/mb3qnv/how-cuphead-got-that-authentic-1930s-jazz-sound" target="_blank" rel="noopener noreferrer" className="block text-xs font-sans text-amber-700 hover:underline mt-1 truncate">
                https://www.vice.com/en/article/mb3qnv/how-cuphead-got-that-authentic-1930s-jazz-sound
              </a>
            </li>
            <li className="-indent-6">
              StudioMDHR. “The Music of Cuphead.” StudioMDHR (Official Blog), 2017.
              <a href="https://studiomdhr.com/the-music-of-cuphead/" target="_blank" rel="noopener noreferrer" className="block text-xs font-sans text-amber-700 hover:underline mt-1 truncate">
                https://studiomdhr.com/the-music-of-cuphead/
              </a>
            </li>
            <li className="-indent-6">
              Cook, Karen. “Cuphead’s Musical Style and the Revival of 1930s Jazz.” Paper presented at the Ludomusicology Annual Conference, Southampton, UK, 2018.
            </li>
          </ul>
        </div>

        {/* 3. Games and Soundtracks */}
        <div className="bg-[#fdf6e3] border-2 border-jazz-dark p-6 md:p-8 shadow-[8px_8px_0px_rgba(44,24,16,0.1)]">
           <h3 className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-jazz-accent">
             <span className="h-0.5 w-8 bg-jazz-accent"></span>
             Games and Soundtracks
          </h3>
           <ul className="space-y-4 pl-6 text-base leading-7 text-jazz-dark list-none font-serif">
            <li className="-indent-6">
              StudioMDHR. <em>Cuphead</em>. Xbox One and PC. StudioMDHR, 2017.
            </li>
            <li className="-indent-6">
              Maddigan, Kristofer. <em>Cuphead (Original Soundtrack)</em>. StudioMDHR, 2017. Digital album.
            </li>
            <li className="-indent-6">
              Nintendo. <em>Mario Kart 64</em>. Nintendo 64. Nintendo, 1996.
            </li>
            <li className="-indent-6">
              Maxis. <em>SimCity 3000</em>. PC. Electronic Arts, 1999.
            </li>
            <li className="-indent-6">
              Atlus. <em>Persona 5</em>. PlayStation 3 and 4. Atlus, 2016.
            </li>
            <li className="-indent-6">
              Team Bondi and Rockstar Games. <em>L.A. Noire</em>. PlayStation 3, Xbox 360, and PC. Rockstar Games, 2011.
            </li>
            <li className="-indent-6">
              Cuzzillo, Gabe, Bennett Foddy, and Matt Boch. <em>Ape Out</em>. PC and Nintendo Switch. Devolver Digital, 2019.
            </li>
          </ul>
        </div>

        {/* 4. Media Credits */}
        <div className="bg-[#fdf6e3] border-2 border-jazz-dark p-6 md:p-8 shadow-[8px_8px_0px_rgba(44,24,16,0.1)]">
           <h3 className="mb-6 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-jazz-accent">
             <span className="h-0.5 w-8 bg-jazz-accent"></span>
             Media Credits
          </h3>
          
          <div className="mb-6 border-l-4 border-jazz-gold pl-4 py-2 bg-jazz-gold/10">
             <p className="text-sm font-sans text-jazz-dark/80">
                All screenshots and artwork are used here for non-commercial, educational purposes only.
             </p>
          </div>

          <div className="space-y-8 font-serif text-base text-jazz-dark">
            <div>
                <h4 className="font-sans font-bold text-jazz-dark text-xs uppercase tracking-widest mb-3 border-b border-jazz-dark/10 pb-1">Image Sources</h4>
                <ul className="space-y-4 pl-4 list-disc marker:text-jazz-accent">
                    <li>
                        StudioMDHR. Promotional artwork and in-game screenshots for <em>Cuphead</em> (including “Botanic Panic,” “Floral Fury,” “Funhouse Frazzle,” “Fiery Frolic,” “King Dice,” and “Porkrind’s Shop”). From the official Cuphead website/press materials and the Cuphead Wiki (Fandom). Accessed November 2025.
                    </li>
                    <li>
                        Nintendo. Promotional artwork and in-game screenshots for <em>Mario Kart 64</em>. From official Nintendo promotional materials and the Super Mario Wiki. Accessed November 2025.
                    </li>
                    <li>
                        Atlus. Promotional artwork and in-game screenshots for <em>Persona 5</em>. From Atlus official materials and the Megami Tensei Wiki. Accessed November 2025.
                    </li>
                    <li>
                        Rockstar Games and Team Bondi. Promotional artwork and in-game screenshots for <em>L.A. Noire</em>. From Rockstar Games official pages and the L.A. Noire Wiki. Accessed November 2025.
                    </li>
                    <li>
                        Devolver Digital. Promotional artwork and in-game screenshots for <em>Ape Out</em>. From the Steam store page and official promotional materials. Accessed November 2025.
                    </li>
                </ul>
            </div>

            <div>
                 <h4 className="font-sans font-bold text-jazz-dark text-xs uppercase tracking-widest mb-3 border-b border-jazz-dark/10 pb-1">Audio Clips (Intro Slider)</h4>
                 <p className="leading-7 pl-4">
                    Short audio clips on the Intro page are taken from the official soundtracks listed above (including <em>Cuphead</em>, and selected jazz-inspired cues from <em>Mario Kart 64</em>, <em>SimCity 3000</em>, <em>Persona 5</em>, <em>L.A. Noire</em>, and <em>Ape Out</em>), edited and excerpted for teaching and demonstration.
                 </p>
            </div>

            <div>
                <h4 className="font-sans font-bold text-jazz-dark text-xs uppercase tracking-widest mb-3 border-b border-jazz-dark/10 pb-1">YouTube Video Captures (Style Map)</h4>
                <ul className="space-y-3 pl-4 list-disc marker:text-jazz-accent text-sm">
                    <li>
                        “Cuphead – Botanic Panic (The Root Pack Boss Fight).” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=bGgSa-TAM5w.
                    </li>
                    <li>
                        “Cuphead – Floral Fury (Cagney Carnation Boss Fight).” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=kkCda1ihJRY.
                    </li>
                    <li>
                        “Cuphead – Funhouse Frazzle (Run & Gun).” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=JvSZWPZCW1w.
                    </li>
                    <li>
                        “Cuphead – Fiery Frolic (Grim Matchstick Boss Fight).” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=SKgQzy8NvIM.
                    </li>
                    <li>
                        “Cuphead – King Dice Theme / Boss Fight.” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=vQShQX3laOY.
                    </li>
                    <li>
                         “Cuphead – Porkrind’s Shop Theme.” YouTube video. Accessed November 2025. https://www.youtube.com/watch?v=MYxNkbvErw8.
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesPage;
