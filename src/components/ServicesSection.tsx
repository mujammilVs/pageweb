import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../data/content";
import { Link } from "react-router-dom";

const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Explore our wide range of digital transformation solutions
          </p>
        </div>

        {/* Tabs */}
        {/* Modern Tabs */}
        <div className="relative flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border 
        ${
          index === activeIndex
            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {service.title}
              {index === activeIndex && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full ring-2 ring-blue-300"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Content */}
        {/* <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {activeService.title}
            </h3>
            <p className="text-gray-600 mb-6 text-base">
              {activeService.description}
            </p>

            <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              {activeService.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <Link
              to={activeService.path}
              className="inline-flex items-center text-blue-600 hover:text-cyan-600 font-medium transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </AnimatePresence> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-xl max-w-5xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {activeService.title}
            </h3>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {activeService.description}
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Key Features:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 pl-2 text-base">
              {activeService.features.map((feature, idx) => (
                <li key={idx} className="pl-1">
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to={activeService.path}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
