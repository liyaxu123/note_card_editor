import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

/* 
  我是一名小红书博主，正在做学习笔记内容的分享，希望通过简单易懂和生动有趣的图文教程帮助零基础小白快速掌握一门知识。请你结合我的账号定位和这本书的第3章内容，按照第3章目录的先后顺序，为我详细讲解每一个知识点，然后帮我整理一份学习笔记。每一个知识点要包括它的定义、大白话理解、代码示例，如果有流程请使用markdown的语法为我画出mermaid流程图，如果使用到了系统内的函数比如 print 函数，请列出它的参数及含义，含义要尽可能的通俗易懂。
*/

const content1 = `## 4.1 列表数据类型
> 在 Python 的世界里，列表就像是一个超级 “收纳盒”，它可以把各种数据整齐地收纳起来，方便我们随时取用和管理。下面我们就来深入了解这个 “收纳盒” 的各种功能。

### 4.1.1 用索引取得列表中的单个值
#### ⭐ 官方定义
> **列表**是由一系列按**顺序排列**的值组成的数据结构，每个值都有一个对应的位置编号，这个编号就是**索引**。
>
> 通过索引，我们可以快速找到列表中特定位置的值。
> 
> 索引从 0 开始，第一个元素的索引为 0，第二个元素的索引为 1，以此类推。

#### 🎯 大白话理解
> 这就好比你有一个书架，每本书都有一个固定的位置编号。你想找哪本书，直接按照编号就能准确拿到。

#### 📊 示意图
![列表索引取值示意图](PythonAutoMation/列表索引取值.png)

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
print(spam[0])  # 输出 'cat'
print(spam[2])  # 输出 'rat'
\`\`\`
`;

const content2 = `### 4.1.2 负数索引
#### ⭐ 官方定义
> 在 Python 中，除了可以从前往后用正数索引外，还能从后往前用**负数索引**。
>
> 负数索引从 -1 开始，-1 表示列表的最后一个元素，-2 表示倒数第二个元素，以此类推。

#### 🎯 大白话理解
> 就像你从书架的末尾开始数，-1 就是最后一本书，-2 就是倒数第二本，这样即使不知道书架的总长度，也能快速找到末尾的书。

#### 📊 示意图
![列表索引取值示意图](PythonAutoMation/列表负数索引取值.png)

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
print(spam[-1])  # 输出 'elephant'
print(spam[-2])  # 输出 'rat'
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第四章：列表"
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

export default Card1;
