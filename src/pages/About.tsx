import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import TeamSection from "../components/TeamSection";
// import AccomplishmentsSection from "../components/AccomplishmentsSection";
import Locate from "../components/Locate";
import { aboutus1 } from "../data/content";
import info5 from "../../src/assets/page-images/About-Us-Image.webp";
import ClientSlider from "../components/clientsSlider";
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-20 mt-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              About PAGE Solutions
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Your Advantage Digital partner - passionate about transforming
              businesses through innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-6">
                Get to Know Us ___
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Page Solutions incorporated in 2007, is a 15-year young,
                boutique Technology, Services & Consulting Company with a global
                footprint.
              </p>
              <div className="flex flex-wrap  gap-8">
                {aboutus1.map((each, index) => (
                  <div key={index} className="flex  items-center  gap-8">
                    <img
                      src={each.logo}
                      alt=""
                      className="h-8 w-8 object-contain mb-4"
                    />
                    <p className="text-sm text-gray-600">{each.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <motion.img
                src={info5}
                alt="Our office"
                className="rounded-lg  h-[600px] w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "To empower businesses with innovative technology solutions that drive growth, efficiency, and sustainable success.",
                color:
                  "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "To be the leading catalyst for digital transformation, shaping the future of business through technology.",
                color:
                  "bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600",
              },
              {
                icon: Heart,
                title: "Values",
                description:
                  "Innovation, integrity, collaboration, and client success form the core of our organizational culture.",
                color:
                  "bg-gradient-to-br from-blue-100 to-teal-100 text-teal-600",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                >
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4">
              Why Choose PAGE Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We bring unique value to every partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Expertise",
                description:
                  "Our team brings decades of combined experience in digital transformation and technology consulting.",
              },
              {
                icon: Target,
                title: "Client-Centric Approach",
                description:
                  "We prioritize your success above all else, tailoring solutions to meet your specific needs and goals.",
              },
              {
                icon: Eye,
                title: "Innovation Focus",
                description:
                  "We stay ahead of technology trends to provide cutting-edge solutions that future-proof your business.",
              },
              {
                icon: Heart,
                title: "Long-term Partnerships",
                description:
                  "We build lasting relationships, providing ongoing support and optimization for continued success.",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Our work has been recognized by leading industry publications and organizations.",
              },
              {
                icon: Target,
                title: "Measurable Results",
                description:
                  "We deliver quantifiable outcomes that directly impact your bottom line and operational efficiency.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-3 w-fit mb-4 shadow-md"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                >
                  <item.icon className="h-6 w-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Accomplishments Section */}
      {/* <AccomplishmentsSection /> */}
      <ClientSlider />
      <Locate />
    </div>
  );
};

export default About;
