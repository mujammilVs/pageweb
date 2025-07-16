import React from "react";
import { motion } from "framer-motion";
import Locate from "../../components/Locate";
import digifabricai from "../../assets/digifabric-ai-new.webp";
import digiflo from "../../assets/digiflo-pagesolutions.webp";
import digidox from "../../assets/digidox-pagesolutions.webp";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Digifabric = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Hero Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-20 mt-8 px-4 sm:px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-10">
          Digifabric.ai
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 text-left">
          {/* Image */}
          <motion.img
            src={digifabricai}
            alt="digifabric"
            className=" w-1/2 sm:w-1/5 rounded-xl shadow-xl object-cover mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />

          {/* Text */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
            <strong>digifabric.ai</strong> is a powerful digital transformation
            platform combining intuitive business process management with
            enterprise-grade document archival to simplify and elevate business
            operations.
          </p>
        </div>
      </motion.div>

      {/* Platform Components */}
      <motion.div
        className="max-w-6xl mx-auto mb-20 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
          Platform Components
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
          Our no-code, microservices-based platform reduces IT dependency and
          supports enterprise-wide transformation — from visualization to
          orchestration.
        </p>
      </motion.div>

      {/* Sub-Modules */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        {[
          {
            img: digiflo,
            label: "Business Process Management & Workflow System",
          },
          { img: digidox, label: "Enterprise Document Management System" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center transition-transform"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            whileHover={{ scale: 1.03, y: -6 }}
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-1/4  object-contain mb-6"
            />
            <h1 className="text-2xl  text-gray-800">{item.label}</h1>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.div
        className="max-w-6xl mx-auto mb-24 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-10">
          Salient Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            [
              "Microservices-based Multi-System Integration",
              "Cloud-based Architecture",
              "Mobility Enabled",
              "Access Control",
            ],
            [
              "Advanced Analytics",
              "Collaboration Tools",
              "Inbuilt strong Security",
              "Easily Customizable",
            ],
          ].map((features, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6"
            >
              <ul className="space-y-4 list-disc list-inside text-gray-700 leading-relaxed text-base">
                {features.map((feature, i) => (
                  <li key={i} className="relative pl-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Location CTA */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 flex items-center justify-center">
          <div className="bg-gradient-to-r to-cyan-600 from-cyan-500 backdrop-blur-md shadow-xl rounded-xl p-8 w-full max-w-2xl border border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-200 text-center sm:text-left">
                Schedule a Demo
              </h2>
              <button className="bg-white hover:scale-105 transition-transform duration-300 text-cyan-500 px-6 py-3 rounded-full font-medium shadow flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <Locate />
      </motion.div>
    </section>
  );
};

export default Digifabric;
