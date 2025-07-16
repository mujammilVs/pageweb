import React from "react";
import Locate from "../../components/Locate";
import digiflo from "../../assets/digiflo-pagesolutions.webp";
import digidoxbanner from "../../assets/digiflo-features.webp";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Figiflo = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <motion.div
        className="max-w-6xl mx-auto  mb-20 mt-8 px-4 sm:px-6 text-center "
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-10 ">
          Business Process Management & Workflow
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 text-left">
          {/* Image */}
          <motion.img
            src={digiflo}
            alt="digifabric"
            className=" w-1/2 sm:w-1/5 rounded-xl shadow-xl object-cover mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />

          {/* Text */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
            An enterprise-grade{" "}
            <strong>Business Process Management & Workflow </strong>engine.
            Built on state-of-the-art technologies, to provide seamless
            integration, mobile adaptability, and business-led design and
            orchestration. <strong>A No-Code </strong>platform that empowers the
            users to <strong>design</strong> their own forms, and processes.
            Simulate, improve, and deploy on demand.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl  mx-auto mb-24 px-4 sm:px-6 lg:px-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-10">
          Salient Features
        </h2>
        <div className="flex items-center justify-center w-full mb-4">
          <div className="sm:w-1/2">
            <img src={digidoxbanner} alt="digi" className="mx-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            [
              "Intuitive and visual process modelling",

              "No-Code form builder ",
              "Design and deploy complex forms & workflows",
              "Powerful Workflow engine",
            ],
            [
              "Best-in-class security",
              "Microservices Architecture",
              "Mobility-ready",
              "Easy customization and extensibility",
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
    </section>
  );
};

export default Figiflo;
