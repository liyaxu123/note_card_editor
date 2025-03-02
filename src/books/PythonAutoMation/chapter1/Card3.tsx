import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5. 注释
#### ⭐ 官方定义
> ​**注释**（Comment）是为代码添加的解释性文本，对程序运行无影响，用于提高可读性。Python使用\`#\`表示单行注释。

#### 🎯 大白话理解
> 注释就像给代码写的便签，程序运行时会忽略它们，但能帮你和别人（或未来的自己）理解代码逻辑。

#### 🌰 示例
\`\`\`python
# 这是一个单行注释，解释下面代码的作用
name = input("请输入你的名字：")  # 用户输入会被存储到name变量中

# 多行注释可以用三引号包裹（通常用于文档字符串）
"""
这是一个多行注释，
可以跨越多行，
常用于函数或模块的说明。
"""
\`\`\`
`;

const content2 = `### 6. 代码格式化规范
#### ⭐ 官方定义
> Python通过缩进（Indentation）定义代码块，而非大括号。同一代码块的缩进层级必须一致。

#### 🎯 大白话理解
> 缩进就像书的章节编号，所有属于同一层级的代码必须缩进相同的空格数（通常用4个空格）。

#### 🌰 示例
\`\`\`python
if age >= 18:
    print("成年人")    # 这一行必须缩进4个空格
else:
    print("未成年人")  # 同一层级对齐
\`\`\`
`;

const Card3 = () => {
  return (
    <CardWrapper name="第一章：Python基础_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第一章：Python基础"
          />

          <CardContent>
            <>
              <MyMarkdown content={content1} />
              <MyMarkdown content={content2} />
            </>
          </CardContent>

          <CardFooter title="✨ 保持学习，持续进步 🚀" />
        </>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card3;
