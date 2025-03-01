import React from "react";

type Props = {
  children: React.ReactElement;
};

const CardContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="bg-white rounded-[25px] overflow-hidden"
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
