import React from "react";

type Size = "sm" | "md" | "lg";
type Props = {
  size?: Size;
  className?: string;
};

const Monitor: React.FC<Props> = ({ size = "md", className = "" }) => {
  const sizeMap: Record<Size, { width: string; height: string }> = {
    sm: { width: "16", height: "16" },
    md: { width: "32", height: "32" },
    lg: { width: "64", height: "64" },
  };

  const { width, height } = sizeMap[size];

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.5,4h-25C2.673,4,2,4.673,2,5.5v14C2,20.327,2.673,21,3.5,21h23c0.276,0,0.5-0.224,0.5-0.5S26.776,20,26.5,20h-23C3.225,20,3,19.775,3,19.5v-14C3,5.225,3.225,5,3.5,5h25C28.775,5,29,5.225,29,5.5v19c0,0.275-0.225,0.5-0.5,0.5h-25C3.225,25,3,24.775,3,24.5v-1C3,23.224,2.776,23,2.5,23S2,23.224,2,23.5v1C2,25.327,2.673,26,3.5,26H15v2h-4c-0.276,0-0.5,0.224-0.5,0.5S10.724,29,11,29h9c0.276,0,0.5-0.224,0.5-0.5S20.276,28,20,28h-4v-2h12.5c0.827,0,1.5-0.673,1.5-1.5v-19C30,4.673,29.327,4,28.5,4z" />
      <circle cx="15.5" cy="23" r="0.5" />
    </svg>
  );
};

export default Monitor;