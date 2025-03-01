import React, { Fragment, useEffect, useRef } from "react";
import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import { annotate } from "rough-notation";

const catalog = [
  {
    title: "第一部分：Python编程基础",
    chapters: [
      {
        number: "01",
        title: "Python基础",
      },
      {
        number: "02",
        title: "控制流",
      },
      {
        number: "03",
        title: "函数",
      },
      {
        number: "04",
        title: "列表",
      },
      {
        number: "05",
        title: "字典和结构化数据",
      },
      {
        number: "06",
        title: "字符串操作",
      },
    ],
  },
  {
    title: "第二部分：自动化任务",
    chapters: [
      {
        number: "07",
        title: "模式匹配与正则表达式",
      },
      {
        number: "08",
        title: "输入验证",
      },
      {
        number: "09",
        title: "读写文件",
      },
      {
        number: "10",
        title: "组织文件",
      },
      {
        number: "11",
        title: "调试",
      },
      {
        number: "12",
        title: "Web抓取",
      },
      {
        number: "13",
        title: "处理Excel电子表格",
      },
      {
        number: "14",
        title: "处理Google电子表格",
      },
      {
        number: "15",
        title: "处理PDF和Word文档",
      },
      {
        number: "16",
        title: "处理CSV文件和JSON数据",
      },
      {
        number: "17",
        title: "保持时间、计划任务和启动程序",
      },
      {
        number: "18",
        title: "发送电子邮件和短信",
      },
      {
        number: "19",
        title: "操作图像",
      },
      {
        number: "20",
        title: "用GUI自动化控制键盘和鼠标",
      },
    ],
  },
];

// 当前高亮的章节
const curChapter = "01";

const Catalog: React.FC = () => {
  const curChapterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = curChapterRef.current;
    if (!el) return;

    const annotation = annotate(el, { type: "highlight", color: "#ffd54f" });
    annotation.show();
  }, [curChapterRef.current]);

  return (
    <CardWrapper>
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="目录"
          />

          <CardContent>
            {/* 目录卡片 */}
            <div
              className="bg-white rounded-2xl p-[30px] flex-1"
              style={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
            >
              {catalog.map((part, index) => {
                return (
                  <Fragment key={index}>
                    {/* 分组 */}
                    <div className="text-[#ff6b6b] text-[28px] border-b-2 border-[#ff9a9e] pb-[10px] mb-5">
                      {part.title}
                    </div>

                    {/* 目录列表 */}
                    <div className="gap-x-10 columns-2">
                      {part.chapters.map((chapter, i) => {
                        return (
                          <div
                            key={`${index}-${i}`}
                            className="py-2 text-xl break-inside-avoid"
                          >
                            <span className="text-[#4ecdc4] font-bold mr-4">
                              {chapter.number}
                            </span>
                            <span
                              ref={
                                chapter.number === curChapter
                                  ? curChapterRef
                                  : null
                              }
                            >
                              {chapter.title}
                            </span>
                            ​
                          </div>
                        );
                      })}
                    </div>

                    {/* 分割线 */}
                    {index === catalog.length - 1 ? null : (
                      <div
                        className="my-[30px]"
                        style={{ borderTop: "1px dashed #eee" }}
                      ></div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </CardContent>

          <CardFooter title="✨ 保持学习，持续进步 🚀" />
        </>
      </CardContainer>
    </CardWrapper>
  );
};

export default Catalog;
