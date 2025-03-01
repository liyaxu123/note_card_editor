import React from "react";

type Props = {
  children: React.ReactElement;
};

const CardContent: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="p-[30px] flex flex-col gap-[30px]"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0, transparent 19px, #eee 19px, #eee 20px), linear-gradient(to right, transparent 0, transparent 19px, #eee 19px,#eee 20px)",
        backgroundSize: "20px 20px",
      }}
    >
      {children}
    </div>
  );
};

export default CardContent;
