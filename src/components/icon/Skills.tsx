import React from "react";

type Size = "sm" | "md" | "lg";

type Props = {
  size?: Size;
  className?: string;
};

const Skills: React.FC<Props> = ({ size = "md", className }) => {
  const sizeMap: Record<Size, { width: string; height: string }> = {
    sm: { width: "16", height: "16" },
    md: { width: "32", height: "32" },
    lg: { width: "64", height: "64" },
  };

  const { width, height } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      {/* Left code bracket */}
      <path d="M8.5 7 3.5 12l5 5 1.4-1.4L6.3 12l3.6-3.6L8.5 7Z" />

      {/* Right code bracket */}
      <path d="m15.5 7-1.4 1.4 3.6 3.6-3.6 3.6 1.4 1.4 5-5-5-5Z" />

      {/* Slash */}
      <path d="M13.2 4.5 9.2 19.5h1.7l4-15h-1.7Z" />
    </svg>
  );
};

export default Skills;