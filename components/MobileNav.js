import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Buttons from "./Buttons";

function MobileNav() {
  const [ddVisible, setDropdown] = useState(false);
  const [burgerVisible, setBurger] = useState(true);

  const setVisibilityOn = () => {
    setDropdown(!ddVisible);
    setBurger(!burgerVisible);
  };

  const setVisibilityOff = () => {
    setDropdown(!ddVisible);
    setTimeout(() => {
      setBurger(!burgerVisible);
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {burgerVisible && (
          <img
            src="/burger.png"
            className="w-[25px] h-[25px] absolute right-5 top-4 cursor-pointer lg:hidden"
            onClick={setVisibilityOn}
          />
        )}
        {ddVisible && (
          <motion.div
            className="absolute right-0 top-0 w-[150px] h-full bg-[#171717] z-10"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={{
              initial: {
                scale: 0,
                opacity: 0,
                translateX: 110,
              },
              animate: {
                scale: 1,
                opacity: 1,
                translateX: 0,
              },
              exit: {
                scale: 0,
                opacity: 0,
                translateX: 110,
              },
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="w-full h-[250px] flex flex-col items-center justify-between mt-10">
              <Buttons />
              <img
                src="/arrow.png"
                onClick={setVisibilityOff}
                className="w-[22px] h-[22px] mt-4 cursor-pointer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileNav;
