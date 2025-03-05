import React from "react";

type Props = {
  title: string;
  style?: React.CSSProperties;
  className?: string;
};

const CardFooter: React.FC<Props> = ({ title, className, style }) => {
  return (
    <footer
      className={`bg-[#fff5f5] p-5 text-center border-t-1 border-[#eee] text-xl py-9 ${className}`}
      style={style}
    >
      {title}
    </footer>
  );
};

export default CardFooter;
