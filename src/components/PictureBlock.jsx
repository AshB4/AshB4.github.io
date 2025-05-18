import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import stars from '../assets/Starry Night with Cosmic Dust.png';
import bg from '../assets/forest_layer_background.png';
import mid from '../assets/forest_layer_midground.png';
import fg from '../assets/forest_layer_foreground.png';

gsap.registerPlugin(ScrollTrigger);

const ParallaxBanner = () => {
  const bgRef = useRef();
  const midRef = useRef();
  const fgRef = useRef();

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: -50,
      scrollTrigger: { trigger: bgRef.current, scrub: true },
    });
    gsap.to(midRef.current, {
      y: -100,
      scrollTrigger: { trigger: midRef.current, scrub: true },
    });
    gsap.to(fgRef.current, {
      y: -150,
      scrollTrigger: { trigger: fgRef.current, scrub: true },
    });
  }, []);

  return (
    <section className="relative h-[100vh] overflow-hidden bg-black text-white z-0">
      <div className="absolute inset-0 w-full h-full">
        {/* Stars Layer */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat z-[5]"
          style={{ backgroundImage: `url(${stars})` }}
        ></div>

        {/* Background Layer */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[10]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        {/* Sparkles */}
        <div className="absolute inset-0 z-[15] pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Midground Layer */}
        <div
          ref={midRef}
          className="absolute inset-x-0 bottom-[-10vh] h-full bg-cover bg-bottom bg-no-repeat z-[20]"
          style={{ backgroundImage: `url(${mid})` }}
        ></div>

        {/* Foreground Layer */}
        <div
          ref={fgRef}
          className="absolute inset-x-0 bottom-[-20vh] h-full bg-cover bg-bottom bg-no-repeat z-[30]"
          style={{ backgroundImage: `url(${fg})` }}
        ></div>
      </div>

      {/* Caption */}
      <div className="relative z-[50] flex justify-center items-end h-full pb-16 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold drop-shadow-md leading-snug">
          Creative Engineering.<br />
          Strategic Chaos.<br />
          <span className="italic text-blue-300">Solving Problems by Moonlight.</span>
        </h2>
      </div>
    </section>
  );
};

export default ParallaxBanner;