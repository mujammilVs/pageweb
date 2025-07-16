import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const SubNavbar: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      className=" text-white py-1 mt-16 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* <motion.div
            className="flex items-center space-x-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Mail className="h-4 w-4" />
            <span className="text-lg">info@www.pagesolutions.co.uk</span>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              to="/request-consultant"
              className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              <span className="text-sm font-medium">Request a Consultant</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default SubNavbar;
