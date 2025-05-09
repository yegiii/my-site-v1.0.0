import { interpolate } from "flubber";
import { useTransform } from "framer-motion";
import type { BlobData } from "../components/BlobMorpher";

const useFlubber = (progress: any, paths: BlobData[]) => {
  return useTransform(
    progress,
    paths.map((_, i) => i),
    paths.map(({ path }) => path),
    {
      mixer: (from, to) => interpolate(from, to, { maxSegmentLength: 0.5 }),
    }
  );
};

export default useFlubber;
