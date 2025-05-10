import { SVG_SIZE } from "../utils/utils";
import { useMemo } from "react";

const useBounderies = () => {
  // Memoize viewport dimensions to avoid recalculations
  const viewportWidth = useMemo(() => window.innerWidth, []);
  const viewportHeight = useMemo(() => window.innerHeight, []);

  // Memoize random edge position calculation
  const getRandomEdgePosition = useMemo(() => {
    const padding = SVG_SIZE / 2;
    
    return () => {
      const edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: // Top edge
          return {
            x: Math.random() * viewportWidth - viewportWidth / 2,
            y: -viewportHeight + padding,
          };
        case 1: // Right edge
          return {
            x: viewportWidth - padding,
            y: Math.random() * viewportHeight - viewportHeight / 2,
          };
        case 2: // Bottom edge
          return {
            x: Math.random() * viewportWidth - viewportWidth / 2,
            y: viewportHeight - padding,
          };
        case 3: // Left edge
          return {
            x: -viewportWidth + padding,
            y: Math.random() * viewportHeight - viewportHeight / 2,
          };
        default:
          return { x: 0, y: 0 };
      }
    };
  }, [viewportWidth, viewportHeight]);

  const { x: randomInitialX, y: randomInitialY } = getRandomEdgePosition();

  // Calculate boundaries with consistent padding
  const boundaryPadding = SVG_SIZE / 2;
  const minX = -viewportWidth + boundaryPadding;
  const maxX = viewportWidth - boundaryPadding;
  const minY = -viewportHeight + boundaryPadding;
  const maxY = viewportHeight - boundaryPadding;

  const ORIGSPEED = { x: 1.5, y: -2.5 };

  return {
    minX,
    maxX,
    minY,
    maxY,
    viewportHeight,
    viewportWidth,
    randomInitialX,
    randomInitialY,
    ORIGSPEED
  };
};

export default useBounderies;