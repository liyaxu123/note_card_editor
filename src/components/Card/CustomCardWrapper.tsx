import React, { useRef } from "react";
import { ActionIcon } from "@ant-design/pro-editor";
import { DownloadOutlined } from "@ant-design/icons";
import domtoimage from "dom-to-image";

type Props = {
  children: React.ReactElement;
  // 导出图片的名称
  name: string;
  style?: React.CSSProperties;
  className?: string;
};

const RatioCardWrapper: React.FC<Props> = ({
  children,
  name,
  style,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const downloadBtnRef = useRef<HTMLDivElement>(null);

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
      className={`box-border overflow-hidden bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] p-9 relative group ${className}`}
      style={style}
    >
      <div
        ref={downloadBtnRef}
        className="hidden absolute top-0 right-0 group-hover:block"
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

export default RatioCardWrapper;
