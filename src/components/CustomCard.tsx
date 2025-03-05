import React from "react";
import {
  CustomCardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "./Card";
import MyMarkdown from "./MyMarkdown";

const content1 = `### 1. 变量与数据类型
#### ⭐ 官方定义
> ​**变量​**（Variable）是存储数据的容器，每个变量都有一个名称（标识符）和一个与之关联的值。
>
> **​数据类型**​（Data Type）定义了变量可以存储的数据种类，如整数、字符串等。Python是动态类型语言，变量的类型在运行时自动确定。

#### 🎯 大白话理解
> 变量就像贴了标签的盒子，你可以往盒子里放不同东西（数据），但盒子上的标签（变量名）得自己取。
>
>不同的数据类型就像不同的盒子材质：有的装文字（字符串），有的装数字（整数/浮点数），还有的只能装“对/错”
>（布尔值）。

#### 🌰 示例
\`\`\`python
# 字符串类型：用引号包裹的文本
name = "Alice"       # 这个盒子叫"name"，里面装的是字符串"Alice"

# 整数类型：自然数或负整数
age = 25             # "age"盒子里装的是整数25

# 浮点数类型：带小数点的数字
height = 1.75        # "height"盒子里装的是浮点数1.75

# 布尔类型：只有True或False
is_student = True    # "is_student"盒子里装的是布尔值True
\`\`\`
`;

const customStyles = {
  h3: "!text-4xl",
  h4: "!text-[31px] !mb-9",
  p: "!text-[24px]",
  blockquote: "bg-blue-100 rounded-xl !py-1 !my-9 !border-l-[10px] !border-blue-500",
  li: "!text-[24px]",
  pre: "!text-[24px]",
  code: "!text-[24px]",
};

const CustomCard: React.FC = () => {
  return (
    <CustomCardWrapper
      name="xxx"
      className="w-[1240px] h-[1654px] flex flex-col"
    >
      <CardContainer className="flex flex-col flex-1">
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第一章：Python基础"
            titleClassName="text-5xl"
            subtitleClassName="text-3xl"
          />

          <CardContent className="flex-1">
            <MyMarkdown content={content1} styleConfig={customStyles} />
          </CardContent>

          <CardFooter title="✨ 保持学习，持续进步 🚀" className="text-3xl" />
        </>
      </CardContainer>
    </CustomCardWrapper>
  );
};

export default CustomCard;
