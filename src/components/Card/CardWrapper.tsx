import React, { useEffect, useRef } from "react";
import { ActionIcon } from "@ant-design/pro-editor";
import { DownloadOutlined } from "@ant-design/icons";
import domtoimage from "dom-to-image";

type Props = {
  children: React.ReactElement;
  // 导出图片的名称
  name: string;
  // 宽高比，小红书一般是4:5
  ratio?: { width: number; height: number };
};

const CardWrapper: React.FC<Props> = ({
  children,
  name,
  ratio = { width: 4, height: 5 },
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const downloadBtnRef = useRef<HTMLDivElement>(null);

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

  // 导出图片
  const exportToImage = () => {
    const element = ref.current;
    const downloadBtn = downloadBtnRef.current;
    if (!element || !downloadBtn) return;

    // 隐藏下载按钮
    downloadBtn.style.display = "none";

    domtoimage
      .toPng(element)
      .then(function (dataUrl: string) {
        const link = document.createElement("a");
        link.download = `${name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error: any) {
        console.error("导出图片失败：", error);
      })
      .finally(() => {
        downloadBtn.style.display = "";
      });
  };

  return (
    <div
      ref={ref}
      className="box-border overflow-hidden bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] p-9 relative group"
    >
      <div
        ref={downloadBtnRef}
        className="absolute top-0 right-0 hidden group-hover:block"
      >
        <ActionIcon
          title={"下载图片"}
          icon={<DownloadOutlined />}
          onClick={exportToImage}
        />
      </div>

      {children}
    </div>
  );
};

export default CardWrapper;
