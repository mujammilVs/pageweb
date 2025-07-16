import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Target } from 'lucide-react';
import { accomplishments } from '../data/content';

const AccomplishmentsSection: React.FC = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Trophy, value: '50+', label: 'Awards Won' },
    { icon: Target, value: '1000+', label: 'Projects Completed' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Achievements
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of innovation, growth, and success
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                <stat.icon className="h-8 w-8 text-blue-600" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-cyan-300 to-blue-200"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
          <div className="space-y-12">
            {accomplishments.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ 
                  opacity: 0, 
                  x: index % 2 === 0 ? -80 : 80,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6, 
                  ease: "easeOut" 
                }}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white rounded-xl p-6 shadow-lg max-w-md ${
                      index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'
                    } border border-blue-100 hover:shadow-xl transition-shadow duration-300`}
                  >
                    <div className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <motion.div 
                  className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                ></motion.div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;