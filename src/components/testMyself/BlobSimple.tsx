import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useMemo } from "react";
import useFlubber from "../hooks/useFlubber";
import { SVG_SIZE } from "../utils/utils";

// Simplified paths (reduced points where possible)
const paths: string[] = [
  // Path 1 (simplified)
  "M40.5,24C26.1,48.4,-30.2,49.2,-44,25.1C-57.7,1.1,-28.9,-47.8,-0.7,-48.2C27.5,-48.6,55,-0.5,40.5,24Z",
  // Path 2 (simplified)
  "M60.2,-1C60.2,28.3,30.1,56.5,1,56.5C-28.1,56.5,-56.1,28.3,-56.1,-1C-56.1,-30.3,-28.1,-60.6,1,-60.6C30.1,-60.6,60.2,-30.3,60.2,-1Z",
];

// Single color per blob (remove transforms)
const colors = ["#a2d2ff", "#AFD189", "#cdb4db", "#ffafcc"];

const BlobShape = ({ blobIndex = 0 }: { blobIndex?: number }) => {
  const progress = useMotionValue(0);
  const path = useFlubber(progress, paths);

  // Memoized animation sequence
  const sequence = useMemo(() => [0, 1], []);

  useEffect(() => {
    const animation = animate(progress, sequence, {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    });

    return () => animation.stop();
  }, [progress, sequence]);
  
  return (
    <svg width={SVG_SIZE} height={SVG_SIZE} viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <motion.path
          fill={colors[blobIndex % colors.length]} // Static color
          // d={path}
          animate={{
            d: [paths[0], paths[1]],
            transition: { duration: 4, repeat: Infinity },
          }}
        />
      </g>
    </svg>
  );
};

export default BlobShape;
