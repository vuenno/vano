import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
          <Head>
            <title>V U E N N O</title>
            <link rel="icon" type="image/x-icon" href="va.ico" />
          </Head>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
