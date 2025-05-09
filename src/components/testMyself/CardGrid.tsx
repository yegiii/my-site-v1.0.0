import React from "react";
// import Computer from "../icon/Computer";

type ColorScheme = "earthy" | "sophisticated" | "vibrant" | "warm" | "cool" | "desert" | "nordic" | "jewel" | "clay" | "tropical";

const SkillCard = ({ 
  item,
  scheme = "earthy"
}: {
  item: { title: string };
  scheme?: ColorScheme;
}) => {
  // New color schemes designed specifically for bg-amber-50
  const schemes = {
      desert: {
    bg: "bg-orange-100",
    border: "border-orange-300",
    text: "text-orange-900",
    icon: "text-amber-700",
    shadow: "shadow-orange-300/50",
    badge: "bg-amber-600 text-amber-50"
  },
    jewel: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-900",
    icon: "text-amber-600", // Amber icon for contrast
    shadow: "shadow-purple-300/30",
    badge: "bg-amber-500 text-purple-900"
  },
    earthy: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-900",
      icon: "text-emerald-600",
      shadow: "shadow-emerald-200"
    },
    sophisticated: {
      bg: "bg-stone-100",
      border: "border-stone-200",
      text: "text-stone-800",
      icon: "text-amber-600",
      shadow: "shadow-stone-200"
    },
    vibrant: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-900",
      icon: "text-blue-600",
      shadow: "shadow-blue-200"
    },
    warm: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-900",
      icon: "text-amber-600",
      shadow: "shadow-orange-200"
    },
    cool: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-900",
      icon: "text-teal-600",
      shadow: "shadow-teal-200"
    }
    ,
     nordic: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-900",
    icon: "text-sky-600",
    shadow: "shadow-sky-200/40",
    badge: "bg-amber-500 text-white"
  }
  , clay: {
    bg: "bg-stone-100",
    border: "border-stone-300",
    text: "text-stone-800",
    icon: "text-amber-700",
    shadow: "shadow-stone-300/20",
    badge: "bg-amber-600 text-stone-100"
  },
  tropical: {
    bg: "bg-lime-50",
    border: "border-lime-300",
    text: "text-lime-900",
    icon: "text-amber-600",
    shadow: "shadow-lime-300/40",
    badge: "bg-amber-500 text-lime-900"
  }
  };

  const colors = schemes[scheme];

  return (
    <div className={`w-full flex flex-col items-center justify-center gap-4 p-6 rounded
      ${colors.bg} border ${colors.border} ${colors.text}
      shadow-md ${colors.shadow} hover:scale-102 
      transition-all duration-300 ease-in-out`}>
      
      {/* <Computer size="sm" className={`${colors.icon} mb-2`} /> */}
      <p className="text-center font-medium">{item.title}</p>
    </div>
  );
};

// Example usage with amber-50 background
const SkillGrid = () => {
  const skills = [
    { title: "Frontend", scheme: "earthy" },
    { title: "Backend", scheme: "sophisticated" },
    { title: "Design", scheme: "vibrant" },
    { title: "DevOps", scheme: "warm" },
    { title: "Mobile", scheme: "cool" },
    { title: "Mobile", scheme: "desert" },
    { title: "Mobile", scheme: "nordic" },
    { title: "Mobile", scheme: "jewel" },
    { title: "Mobile", scheme: "clay" },
    { title: "Mobile", scheme: "tropical" },
  ];

  return (
    <div className="bg-amber-50 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index} 
            item={{ title: skill.title }} 
            scheme={skill.scheme as ColorScheme} 
          />
        ))}
      </div>
    </div>
  );
};

