import { motion } from 'framer-motion';

const PageLoader = () => {
  return (
    <motion.div 
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="loader"></div>
    </motion.div>
  );
};

export default PageLoader;
