import React, { useEffect, useState } from "react";

type TypeWriterProps = {
  text: string;
  speed?: number;
  cursorStyle?: string;
  textStyle?: string;
};

const Typewriter: React.FC<TypeWriterProps> = ({
  text,
  speed = 100,
  cursorStyle = "_",
  textStyle = "",
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
    return () => clearInterval(typing);
  }, [text, speed]);

  return (
    <span className={textStyle}>
      {displayText}
      <span className="animate-pulse">{cursorStyle}</span>
    </span>
  );
};

export default Typewriter;
