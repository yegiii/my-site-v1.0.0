// components/BlobMover.tsx
import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import BlobShape from "./BlobShape";

const ORIGSPEEDX = 1.5;
const ORIGSPEEDY = 1.5;
const SVG_SIZE = 300;

const BlobMover = () => {
  const x = useMotionValue(-SVG_SIZE / 2);
  const y = useMotionValue(-SVG_SIZE / 2);
  const velocity = useRef({ x: ORIGSPEEDX, y: ORIGSPEEDY });

  useEffect(() => {
    let animationFrame: number;

    const move = () => {
      const currentX = x.get();
      const currentY = y.get();

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const half = SVG_SIZE / 2;

      const minX = -viewportWidth / 2 + half;
      const maxX = viewportWidth / 2 - half;
      const minY = -viewportHeight / 2 + half;
      const maxY = viewportHeight / 2 - half;

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
  }, [x, y]);

  return (
    <div className="container">
      <div className="circleContainer">
        <motion.div style={{ x, y }}>
          <BlobShape />
        </motion.div>
      </div>
    </div>
  );
};

export default BlobMover;
