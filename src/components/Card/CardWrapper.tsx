import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactElement;
  // 宽高比，小红书一般是4:5
  ratio?: { width: number; height: number };
};

const CardWrapper: React.FC<Props> = ({
  children,
  ratio = { width: 4, height: 5 },
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateWidth = () => {
      const height = el.getBoundingClientRect().height;
      const width = (height * ratio.width) / ratio.height;
      el.style.width = `${width}px`;
    };

    // 初始设置宽度
    updateWidth();

    // 监听窗口大小变化，重新计算宽度
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [ratio]);

  return (
    <div
      ref={ref}
      className="box-border overflow-hidden bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] p-9"
    >
      {children}
    </div>
  );
};

export default CardWrapper;
