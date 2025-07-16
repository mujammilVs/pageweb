import { motion } from "framer-motion";
import logo1 from "../../src/assets/page-images/cliet1.jpg";
import logo2 from "../../src/assets/page-images/client8.jpg";
import logo3 from "../../src/assets/page-images/client9.jpg";
import logo4 from "../../src/assets/page-images/cliet2.jpg";
import logo5 from "../../src/assets/page-images/cliet3.jpg";
import logo6 from "../../src/assets/page-images/cliet4.jpg";
import logo7 from "../../src/assets/page-images/cliet5.jpg";
import logo8 from "../../src/assets/page-images/cliet7.jpg";
import logo9 from "../../src/assets/page-images/cliet1.jpg";
import logo10 from "../../src/assets/page-images/client8.jpg";
import logo11 from "../../src/assets/page-images/client9.jpg";
import logo12 from "../../src/assets/page-images/cliet2.jpg";
import logo13 from "../../src/assets/page-images/cliet3.jpg";
import logo14 from "../../src/assets/page-images/cliet4.jpg";
import logo15 from "../../src/assets/page-images/cliet5.jpg";
import logo16 from "../../src/assets/page-images/cliet7.jpg";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
];

export default function ClientSlider() {
  return (
    <div className="overflow-hidden w-full  py-8">
      <motion.div
        className="flex w-max gap-6 "
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 30, 
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`client-logo-${i}`}
            className="h-20 w-auto object-contain "
          />
        ))}
      </motion.div>
    </div>
  );
}
