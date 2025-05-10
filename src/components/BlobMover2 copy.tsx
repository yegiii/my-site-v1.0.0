// components/BlobMover.tsx
import { useEffect, useMemo, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import BlobShape from "./BlobShape";

const ORIGSPEEDX = -0.5;
const ORIGSPEEDY = -1.5;
const SVG_SIZE = 500;

const BlobMover2 = () => {
  // Random position within safe boundaries
  const randomInitialX = useMemo(
    () =>
      Math.random() * (window.innerWidth - SVG_SIZE) -
      (-window.innerWidth + SVG_SIZE) / 2,
    []
  );

  const randomInitialY = useMemo(
    () =>
      Math.random() * (window.innerHeight - SVG_SIZE) -
      (-window.innerHeight + SVG_SIZE) / 2,
    []
  );

  const x = useMotionValue(randomInitialX);
  const y = useMotionValue(randomInitialY);
  const velocity = useRef({ x: ORIGSPEEDX, y: ORIGSPEEDY });

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  console.log(viewportWidth, viewportHeight);

  useEffect(() => {
    let animationFrame: number;

    const move = () => {
      const currentX = x.get();
      const currentY = y.get();

      // Getting bounderies
      // Consider each side of the viewport + SVG_SIZE / 2
      const minX = -viewportWidth - SVG_SIZE / 5;
      const maxX = viewportWidth + SVG_SIZE / 5;
      const minY = -viewportHeight - SVG_SIZE / 5;
      const maxY = viewportHeight + SVG_SIZE / 5;

      if (currentX >= maxX || currentX <= minX) {
        velocity.current.x *= -1;
        x.set(Math.max(minX, Math.min(maxX, currentX)));
      }

      if (currentY >= maxY || currentY <= minY) {
        velocity.current.y *= -1;
        y.set(Math.max(minY, Math.min(maxY, currentY)));
      }

      x.set(currentX + velocity.current.x);
      y.set(currentY + velocity.current.y);

      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [x, y, viewportHeight, viewportWidth]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <motion.div style={{ x, y }}>
          <BlobShape randomSequence />
        </motion.div>
      </div>
    </div>
  );
};

export default BlobMover2;
