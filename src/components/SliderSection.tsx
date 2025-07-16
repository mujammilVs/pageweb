import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // or 'a' tag if not using React Router

import { heroSlides } from "../data/content";



const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0  " />
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20 text-white ">
            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-2xl font-medium mb-2 text-cyan-200 capitalize "
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>
              <motion.h1
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to={heroSlides[currentSlide].cta.href}
                  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta.text}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default SliderSection;
