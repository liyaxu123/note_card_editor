import { memo } from "react";
import { Markdown } from "@ant-design/pro-editor";
import MyHighlight, { themeEnum } from "@/components/MyHighlight";

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
