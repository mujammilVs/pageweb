import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { teamMembers } from "../data/content";

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Meet Our Team
          </motion.h2>
          <h2 className="text-4xl bg-clip-text  mb-4">
            Our Expertise Will Help You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bookan unknown printer took a galley of type and scrambled make It
            has survived not only five centuries.
          </p>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="w-full sm:w-[47%] lg:w-[22%] group transition-all"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500 "
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <motion.a
                          href={member.social.linkedin}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Linkedin className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                      {member.social.twitter && (
                        <motion.a
                          href={member.social.twitter}
                          className="p-2 bg-white/20 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Twitter className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-medium mb-3">
                    {member.role}
                  </p>
                  {/* <p className="text-gray-600 text-sm">{member.bio}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
