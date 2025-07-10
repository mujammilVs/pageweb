import { motion } from "framer-motion";
import logo1 from "../../src/assets/page-images/cliet1.jpg";
import logo2 from "../../src/assets/page-images/client8.jpg";
import logo3 from "../../src/assets/page-images/client9.jpg";
import logo4 from "../../src/assets/page-images/cliet2.jpg";
import logo5 from "../../src/assets/page-images/cliet3.jpg";
import logo6 from "../../src/assets/page-images/cliet4.jpg";
import logo7 from "../../src/assets/page-images/cliet5.jpg";
import logo8 from "../../src/assets/page-images/cliet7.jpg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function ClientSlider() {
  return (
    <div className="overflow-hidden w-full bg-white py-8">
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 30, // total scroll time
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`client-logo-${i}`}
            className="h-20 w-auto object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
}
