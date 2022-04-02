import Nav from "../components/Nav";
import Projects from "../components/Projects";
import { motion, AnimatePresence } from "framer-motion";

function projects() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          animate="animate"
          initial="initial"
          exit="exit"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
              translateY: -110,
            },
            animate: {
              scale: 1,
              opacity: 1,
              translateY: 0,
            },
            exit: {
              scale: 0,
              opacity: 1,
              translateY: -110,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <Nav />
          <Projects />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default projects;
