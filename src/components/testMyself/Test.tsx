
// Blob.tsx
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const blobPaths = [
  "M47,-65.6C59.8,-54.6,67.8,-39.1,71.1,-23.4C74.4,-7.8,73.1,8.1,66.3,20.9C59.4,33.7,47.1,43.3,34,51.6C20.8,59.9,6.9,66.8,-7.6,71.2C-22.2,75.6,-37.3,77.5,-48.2,69.7C-59.2,61.9,-65.9,44.3,-66.2,28.4C-66.5,12.6,-60.4,-1.6,-54.1,-16.3C-47.9,-31.1,-41.5,-46.3,-30.1,-58.2C-18.8,-70.1,-2.4,-78.6,13.8,-82.4C29.9,-86.2,45.7,-85.3,47,-65.6Z",
  "M38.7,-59.4C47.4,-51.2,49.2,-34.5,55.2,-19.8C61.2,-5,71.3,7.9,70.8,20.7C70.3,33.4,59.2,46,45.9,50.4C32.7,54.9,17.3,51.1,3.2,46.7C-10.9,42.4,-21.8,37.4,-34.2,31.3C-46.6,25.2,-60.4,18.1,-67.2,5.8C-74,-6.5,-73.7,-23,-64.4,-33.2C-55,-43.5,-36.6,-47.4,-21.1,-52.2C-5.5,-57.1,7.1,-62.9,20.8,-66.4C34.5,-69.9,49.1,-71.2,38.7,-59.4Z",
  "M32.3,-49.2C44.8,-39.4,60.8,-33.7,66.1,-23.1C71.4,-12.5,66.1,2.9,59.5,15.8C52.9,28.7,45.1,39.1,35.1,48.2C25,57.3,12.5,65,-1.8,67.5C-16.1,70,-32.2,67.3,-45.1,59.2C-58.1,51.1,-68,37.5,-70.1,23.1C-72.1,8.7,-66.3,-7.4,-60.1,-23.6C-53.9,-39.8,-47.3,-56.1,-35.4,-66.1C-23.4,-76,-6.2,-79.6,7.4,-70.9C21,-62.1,31.5,-41.7,32.3,-49.2Z"
];

const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomColor = () => `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;

export default function AnimatedBlob() {
  const [path, setPath] = useState(getRandomItem(blobPaths));
  const [color, setColor] = useState(getRandomColor());
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPath = getRandomItem(blobPaths);
      const nextColor = getRandomColor();

      controls.start({
        d: nextPath,
        fill: nextColor,
        transition: { duration: 4, ease: "easeInOut" }
      });

      setPath(nextPath);
      setColor(nextColor);
    }, 6000); // every 6 seconds

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <svg
      viewBox="0 0 200 200"
      width="600"
      height="600"
      style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
        zIndex: -1,
        opacity: 0.4,
        filter: "blur(60px)",
        transform: "scale(1.5)"
      }}
    >
      <motion.path
        initial={{ d: path, fill: color }}
        animate={controls}
        transform="translate(100 100)"
      />
    </svg>
  );
}
