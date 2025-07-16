import React, { useState, useEffect } from "react";
import { heroSlides } from "../data/content";

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full  ">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-20 flex items-center h-full px-6 max-w-3xl">
              <div className="text-white space-y-6">
                <p className="text-xl text-cyan-200 capitalize">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                  {slide.title}
                </h1>
                <a
                  href={slide.cta.href}
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300"
                >
                  {slide.cta.text}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
