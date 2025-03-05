import React from "react";

type Props = {
  children: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};

const CardContent: React.FC<Props> = ({ children, style, className }) => {
  return (
    <div
      className={`flex flex-col p-[30px] gap-[30px] ${className}`}
      style={{
        background:
          "linear-gradient(to bottom, transparent 0, transparent 19px, #eee 19px, #eee 20px), linear-gradient(to right, transparent 0, transparent 19px, #eee 19px,#eee 20px)",
        backgroundSize: "20px 20px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
