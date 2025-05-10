// components/BlobMover.tsx
import { useCallback, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import BlobShape from "./BlobShape";
import useBounderies from "../hooks/useBounderies";


const BlobMover2 = () => {
  const { minX, maxX, minY, maxY, randomInitialX, randomInitialY, ORIGSPEED } = useBounderies();

  // Use spring physics for smoother movement
  const x = useMotionValue(randomInitialX);
  const y = useMotionValue(randomInitialY);
  const velocity = useRef(ORIGSPEED);
  const lastPos = useRef({ x: randomInitialX, y: randomInitialY });
  const frameCount = useRef(0);

  // Throttled boundary checking (every 3 frames)
  const checkBoundaries = useCallback((currentX: number, currentY: number) => {
    frameCount.current += 1;
    if (frameCount.current % 3 !== 0) return velocity.current;
    
    let newVx = velocity.current.x;
    let newVy = velocity.current.y;
    
    if (currentX >= maxX || currentX <= minX) {
      newVx *= -0.98; // Add slight damping
      lastPos.current.x = Math.max(minX, Math.min(maxX, currentX));
    }
    
    if (currentY >= maxY || currentY <= minY) {
      newVy *= -0.98;
      lastPos.current.y = Math.max(minY, Math.min(maxY, currentY));
    }
    
    return { x: newVx, y: newVy };
  }, [maxX, minX, maxY, minY]);

  useEffect(() => {
    let animationFrame: number;
    const move = () => {
      const currentX = x.get();
      const currentY = y.get();
      
      // Only update velocity every 3 frames
      velocity.current = checkBoundaries(currentX, currentY);
      
      // Apply movement using last cached position
      x.set(lastPos.current.x + velocity.current.x);
      y.set(lastPos.current.y + velocity.current.y);
      lastPos.current = { x: x.get(), y: y.get() };
      
      animationFrame = requestAnimationFrame(move);
    };
    
    // Start with setTimeout to allow initial render to complete
    const startTimeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(move);
    }, 50);
    
    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [x, y, checkBoundaries]);

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden filter blur-3xl">
      <motion.div style={{ x, y }}>
        <BlobShape randomSequence />
      </motion.div>
    </div>
  );
};

export default BlobMover2;
