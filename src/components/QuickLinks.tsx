import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Users,
  Shield,
  TrendingUp,
  MessageSquare,
  Award,
} from "lucide-react";

const quickLinks = [
  {
    title: "Our Products",
    description: "Explore our innovative solutions",
    icon: Zap,
    href: "/products",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Our Services",
    description: "Professional consulting services",
    icon: Users,
    href: "/services",
    color: "from-blue-600 to-blue-700",
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security",
    icon: Shield,
    href: "/services",
    color: "from-cyan-500 to-teal-500",
  },
  {
    title: "Success Stories",
    description: "Client achievements & case studies",
    icon: TrendingUp,
    href: "/about",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Get Support",
    description: "24/7 customer support",
    icon: MessageSquare,
    href: "/contact",
    color: "from-cyan-600 to-blue-600",
  },
  {
    title: "Awards & Recognition",
    description: "Industry recognition",
    icon: Award,
    href: "/about",
    color: "from-blue-700 to-cyan-700",
  },
];

const QuickLinks: React.FC = () => {
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
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-700 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Quick Access
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate to key sections and discover what we can do for your
            business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
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
              <Link
                to={link.href}
                className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
              >
                <div
                  className={`bg-gradient-to-r ${link.color} p-6 relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <link.icon className="h-8 w-8 text-white  relative z-10" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {link.title}
                  </h3>
                  <p className="text-white/90 text-sm">{link.description}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-600 group-hover:text-blue-600 transition-all duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <motion.svg
                      className="ml-2 h-4 w-4"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   Zap,
//   Users,
//   Shield,
//   TrendingUp,
//   MessageSquare,
//   Award,
// } from "lucide-react";

// const quickLinks = [
//   {
//     title: "Our Products",
//     description: "Explore our innovative solutions",
//     icon: Zap,
//     href: "/products",
//     color: "from-blue-100 to-cyan-100",
//   },
//   {
//     title: "Our Services",
//     description: "Professional consulting services",
//     icon: Users,
//     href: "/services",
//     color: "from-purple-100 to-indigo-100",
//   },
//   {
//     title: "Security & Compliance",
//     description: "Enterprise-grade security",
//     icon: Shield,
//     href: "/services",
//     color: "from-cyan-100 to-emerald-100",
//   },
//   {
//     title: "Success Stories",
//     description: "Client achievements & case studies",
//     icon: TrendingUp,
//     href: "/about",
//     color: "from-pink-100 to-rose-100",
//   },
//   {
//     title: "Get Support",
//     description: "24/7 customer support",
//     icon: MessageSquare,
//     href: "/contact",
//     color: "from-amber-100 to-orange-100",
//   },
//   {
//     title: "Awards & Recognition",
//     description: "Industry recognition",
//     icon: Award,
//     href: "/about",
//     color: "from-teal-100 to-sky-100",
//   },
// ];

// const QuickLinks: React.FC = () => {
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-700 to-cyan-600"
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Quick Access
//           </motion.h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Navigate to key sections and discover what we can do for your
//             business.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {quickLinks.map((link, index) => (
//             <motion.div
//               key={link.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.1,
//                 duration: 0.5,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 y: -6,
//                 scale: 1.03,
//                 transition: { type: "spring", stiffness: 250, damping: 18 },
//               }}
//               className="group"
//             >
//               <Link
//                 to={link.href}
//                 className="block rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-200"
//               >
//                 <div
//                   className={`p-6 rounded-t-2xl bg-gradient-to-r ${link.color} relative`}
//                 >
//                   <div className="absolute inset-0 opacity-10 blur-xl z-0" />
//                   <div className="relative z-10">

//                     <motion.div
//                       className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4"
//                       whileHover={{ rotate: 360, scale: 1.1 }}
//                       transition={{ duration: 0.6, ease: "easeInOut" }}
//                     >
//                       <link.icon className="h-8 w-8   relative z-10" />
//                     </motion.div>
//                     <h3 className="text-xl font-semibold  mb-1">
//                       {link.title}
//                     </h3>
//                     <p className=" text-sm">{link.description}</p>
//                   </div>
//                 </div>
//                 <div className="p-5 bg-white rounded-b-2xl flex items-center justify-between transition-all group-hover:bg-blue-50">
//                   <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">
//                     Learn More
//                   </span>
//                   <motion.svg
//                     className="h-4 w-4 text-gray-500 group-hover:text-blue-600"
//                     animate={{ x: [0, 5, 0] }}
//                     transition={{
//                       duration: 1.8,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                       repeatDelay: 1.2,
//                     }}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </motion.svg>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default QuickLinks;
