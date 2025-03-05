import React from "react";

type Props = {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const CardHeader: React.FC<Props> = ({
  title,
  subtitle,
  style,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <header
      className={`text-center p-[30px] ${className}`}
      style={{
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        ...style,
      }}
    >
      <h1
        className={`m-0 text-4xl font-bold leading-relaxed text-white whitespace-nowrap ${titleClassName}`}
      >
        {title}
        <div>学习笔记📒</div>
      </h1>
      <p className={`my-6 text-2xl font-semibold ${subtitleClassName}`}>
        {subtitle}
      </p>
    </header>
  );
};

export default CardHeader;
