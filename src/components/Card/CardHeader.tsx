import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

const CardHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <header
      className="p-[30px] text-center"
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      }}
    >
      <h1 className="m-0 text-4xl font-bold leading-relaxed text-white whitespace-nowrap">
        {title}
        <div>学习笔记📒</div>
      </h1>
      <p className="my-6 text-2xl font-semibold">{subtitle}</p>
    </header>
  );
};

export default CardHeader;
