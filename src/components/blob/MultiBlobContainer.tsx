import { useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import BlobShape from "../BlobShape";

// const BLOB_COUNT = 4;
const SVG_SIZE = 500;
const PHYSICS_UPDATE_INTERVAL = 2;

function useBlobAnimations() {
  // Initialize all motion values at the top level
  const x1 = useMotionValue(0);
  const y1 = useMotionValue(0);
  const x2 = useMotionValue(0);
  const y2 = useMotionValue(0);
  const x3 = useMotionValue(0);
  const y3 = useMotionValue(0);
  const x4 = useMotionValue(0);
  const y4 = useMotionValue(0);

  // Store in ref for mutable access
  const blobs = useRef([
    { x: x1, y: y1, velocity: { x: 1.5, y: 2.5 } },
    { x: x2, y: y2, velocity: { x: -1.5, y: 2.5 } },
    { x: x3, y: y3, velocity: { x: 1.5, y: -2.5 } },
    { x: x4, y: y4, velocity: { x: -1.5, y: -2.5 } },
  ]);

  return blobs;
}

export default function MultiBlobContainer() {
  const blobs = useBlobAnimations();
  const boundaries = useRef({
    minX: -window.innerWidth + SVG_SIZE / 2,
    maxX: window.innerWidth - SVG_SIZE / 2,
    minY: -window.innerHeight + SVG_SIZE / 2,
    maxY: window.innerHeight - SVG_SIZE / 2,
  });

  useEffect(() => {
    let frameCount = 0;
    let animationFrame: number;
    let lastTime = performance.now();

    const updatePhysics = (deltaTime: number) => {
      const { minX, maxX, minY, maxY } = boundaries.current;

      for (let i = 0; i < blobs.current.length; i++) {
        const blob = blobs.current[i];
        const currentX = blob.x.get();
        const currentY = blob.y.get();

        if (currentX <= minX || currentX >= maxX) {
          blob.velocity.x *= -0.95;
          blob.x.set(currentX <= minX ? minX : maxX);
        }

        if (currentY <= minY || currentY >= maxY) {
          blob.velocity.y *= -0.95;
          blob.y.set(currentY <= minY ? minY : maxY);
        }

        blob.x.set(currentX + blob.velocity.x * deltaTime);
        blob.y.set(currentY + blob.velocity.y * deltaTime);
      }
    };

    const animate = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastTime, 100) / 16;
      lastTime = currentTime;

      if (frameCount % PHYSICS_UPDATE_INTERVAL === 0) {
        updatePhysics(deltaTime);
      }

      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize positions
    blobs.current.forEach((blob) => {
      blob.x.set(
        Math.random() * (boundaries.current.maxX - boundaries.current.minX) +
          boundaries.current.minX
      );
      blob.y.set(
        Math.random() * (boundaries.current.maxY - boundaries.current.minY) +
          boundaries.current.minY
      );
    });

    const startTimeout = setTimeout(() => {
      lastTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {blobs.current.map((blob, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            x: blob.x,
            y: blob.y,
            willChange: "transform",
            filter: "blur(50px)",
          }}
        >
          <BlobShape
            randomSequence
            reducedPerformance={true} // Add this prop
          />
        </motion.div>
      ))}
    </>
  );
}

