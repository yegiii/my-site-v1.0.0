import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import useFlubber from "../hooks/useFlubber";

export interface BlobData {
  path: string;
}

const paths: BlobData[] = [
  {
    path: "M40.5,24C26.1,48.4,-30.2,49.2,-44,25.1C-57.7,1.1,-28.9,-47.8,-0.7,-48.2C27.5,-48.6,55,-0.5,40.5,24Z",
  },
  {
    path: "M60.2,-1C60.2,28.3,30.1,56.5,1,56.5C-28.1,56.5,-56.1,28.3,-56.1,-1C-56.1,-30.3,-28.1,-60.6,1,-60.6C30.1,-60.6,60.2,-30.3,60.2,-1Z",
  },
  {
    path: "M54.2,-43.2C68.4,-25.4,76.8,-3,73.1,18C69.3,38.9,53.4,58.4,34.6,64.7C15.8,71,-5.8,64,-27.5,54.6C-49.2,45.1,-70.9,33.1,-76.3,15.6C-81.7,-1.8,-70.8,-24.8,-55.3,-42.9C-39.9,-61,-20,-74.3,0,-74.3C20,-74.3,40,-61.1,54.2,-43.2Z",
  },
  {
    path: "M60.1,-60C76.2,-43.9,86.5,-22,81.6,-5C76.6,12.1,56.4,24.1,40.2,40.2C24.1,56.2,12.1,76.2,-3.4,79.6C-18.8,82.9,-37.5,69.6,-53,53.6C-68.4,37.5,-80.5,18.8,-81.6,-1.1C-82.7,-21,-72.8,-41.9,-57.4,-58.1C-41.9,-74.2,-21,-85.4,0.5,-85.9C22,-86.4,43.9,-76.1,60.1,-60Z",
  },
];

const colors = ["#16d1f2", "#000000", "#3b5998", "#CD201F"];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

interface BlobShapeProps {
  randomSequence?: boolean;
}

const BlobShape = ({ randomSequence = false }: BlobShapeProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const progress = useMotionValue(0);

  // Create random or sequential order
  const indexSequence = useMemo(() => {
    const indices = paths.map((_, i) => i);
    return randomSequence ? shuffleArray(indices) : indices;
  }, [randomSequence]);

  const fill = useTransform(progress, indexSequence, colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const targetIndex = indexSequence[currentStep % indexSequence.length];

    const animation = animate(progress, targetIndex, {
      duration: 4.0,
      ease: "easeInOut",
      onComplete: () => {
        setCurrentStep((prev) => (prev + 1) % indexSequence.length);
      },
    });

    return () => animation.stop();
  }, [currentStep, indexSequence, progress]);

  return (
    <svg width="500" height="500" viewBox="0 0 200 200">
      <g transform="translate(100 100)">
        <motion.path
          fill={fill}
          d={path}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </g>
    </svg>
  );
};

export default BlobShape;
