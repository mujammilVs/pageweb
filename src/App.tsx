import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence, Transition } from "framer-motion";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RequestConsultant from "./pages/RequestConsultant";
import ScrollToTop from "./components/ScrollToTop";
import DigitalBankingServices from "./pages/services/DigitalBankingServices";
import CorePlatformModernization from "./pages/services/CorePlatformModernization";
import TransformationConsulting from "./pages/services/TransformationConsulting";
import BankingCloudServices from "./pages/services/BankingCloudServices";
import Digidox from "./pages/products/Digidox";
import Digifabric from "./pages/products/Digifabric";
import Figiflo from "./pages/products/Figiflo";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
  type: "tween",
  duration: 0.3,
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        <Navbar />
        <SubNavbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Products />
                </motion.div>
              }
            />
            <Route
              path="/products/digidox"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Digidox />
                </motion.div>
              }
            />
            <Route
              path="/products/digifabric"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Digifabric />
                </motion.div>
              }
            />{" "}
            <Route
              path="/products/figiflo"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Figiflo />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Services />
                </motion.div>
              }
            />
            <Route
              path="/services/transformation-consulting"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <TransformationConsulting />{" "}
                </motion.div>
              }
            />
            <Route
              path="/services/core-platform-modernization"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <CorePlatformModernization />{" "}
                </motion.div>
              }
            />
            <Route
              path="/services/digital-banking"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <DigitalBankingServices />
                </motion.div>
              }
            />
            <Route
              path="/services/banking-cloud"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <BankingCloudServices />
                </motion.div>
              }
            />
            <Route
              path="/services/:serviceId"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Services />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/request-consultant"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={pageTransition}
                >
                  <RequestConsultant />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
