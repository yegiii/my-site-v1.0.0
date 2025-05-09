import { motion } from 'framer-motion';

const MotionTypewriter = ({ text }: { text: string }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex font-mono"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={item}>
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="ml-1 inline-block h-6 w-0.5 bg-current"
      />
    </motion.div>
  );
};

export default MotionTypewriter;