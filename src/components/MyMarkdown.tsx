import { memo, useRef, useState, useEffect } from "react";
import { Markdown } from "@ant-design/pro-editor";
import MyHighlight, { themeEnum } from "@/components/MyHighlight";
import { annotate } from "rough-notation";
import mermaid from "mermaid";
import { ActionIcon } from "@ant-design/pro-editor";
import { RetweetOutlined } from "@ant-design/icons";

const markdownComponents = {
  h3: memo((props: any) => {
    return <h3 className="!text-2xl !font-bold !mb-4">{props.children}</h3>;
  }),
  h4: memo((props: any) => {
    return <h4 className="!text-xl !font-bold !mb-3">{props.children}</h4>;
  }),
  p: memo((props: any) => (
    <p className="!text-[18px] !not-italic !mb-3">{props.children}</p>
  )),
  blockquote: memo((props: any) => {
    return (
      <blockquote className="!text-red-500 !text-3xl">
        {props.children}
      </blockquote>
    );
  }),
  pre: memo((props: any) => {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
      mermaid.initialize({
        startOnLoad: true,
        theme: "base",
        securityLevel: "loose",
      });
      mermaid.run();
    }, [flag]);

    // 绘图
    const className = props.children[0].props.className || "";
    const match = /language-(\w+)/.exec(className || "");
    if (match && match[1] === "mermaid") {
      return (
        <div className="relative">
          <div className="absolute top-0 right-0">
            <ActionIcon
              title={flag ? "转为代码" : "转为图表"}
              icon={
                <RetweetOutlined
                  style={{
                    color: flag ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.6)",
                  }}
                />
              }
              onClick={() => {
                setFlag(!flag);
              }}
            />
          </div>

          {flag ? (
            <div className={`flex justify-center ${flag ? "mermaid" : ""}`}>
              {props.node.children[0].children[0].value}
            </div>
          ) : (
            <MyHighlight
              code={props.node.children[0].children[0].value}
              lang="python"
              theme={themeEnum.andromeeda}
            />
          )}
        </div>
      );
    }

    return (
      <MyHighlight
        code={props.node.children[0].children[0].value}
        lang="python"
        theme={themeEnum.andromeeda}
      />
    );
  }),
  li: memo((props: any) => {
    return <li className="!text-[18px]">{props.children}</li>;
  }),
  code: memo((props: any) => {
    return <code className="!text-[18px]">{props.children}</code>;
  }),
  strong: memo((props: any) => {
    const annotationRef = useRef<any>(null);
    const [isHighlighted, setIsHighlighted] = useState(false);

    return (
      <strong
        className="cursor-pointer"
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          if (!annotationRef.current) {
            annotationRef.current = annotate(e.currentTarget, {
              type: "circle",
              color: "#f44336",
            });
          }

          if (isHighlighted) {
            annotationRef.current.hide();
          } else {
            annotationRef.current.show();
          }
          setIsHighlighted(!isHighlighted);
        }}
      >
        {props.children}
      </strong>
    );
  }),
};

interface MyMarkdownProps {
  content: string;
  className?: string;
}

const MyMarkdown = ({ content, className = "" }: MyMarkdownProps) => {
  return (
    <div className={`p-5 bg-[#fff5f5] rounded-2xl ${className}`}>
      <Markdown components={markdownComponents}>{content}</Markdown>
    </div>
  );
};

export default MyMarkdown;
