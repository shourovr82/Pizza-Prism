import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const DiscoverMenuSection = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.4,
        duration: 0.75,
      }}
    >
      <div className="pt-20 responsive-section">
        <div>
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-[#f9a246] font-semibold uppercase">Our menu</h3>
            <h2 className="text-3xl font-bold">Discover Our Menu</h2>
          </div>
          <div className="bg-red-900">
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring}>
                shafin
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoverMenuSection;
