import React from "react";

type Props = {
  children: React.ReactElement;
  style?: React.CSSProperties;
  className?: string;
};

const CardContainer: React.FC<Props> = ({ children, style, className }) => {
  return (
    <div
      className={`overflow-hidden bg-white rounded-[25px] ${className}`}
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
