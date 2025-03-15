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

const content1 = `## 3.1 def 语句和参数​
### 3.1.1 函数的定义与调用 —— 给魔法盒子命名
#### ⭐ 官方定义
> \`def\` 语句用于定义函数，**参数**是函数接收输入的变量。

#### 🎯 大白话理解
> 想象你有一个魔法盒子，你可以通过 \`def\` 命令给它取名为\`greet\`，然后告诉它要做什么。当你说\`greet()\`时，它就会执行你赋予的魔法。

#### 🌰 举个例子
\`\`\`python
def greet():  # 定义魔法盒子greet
    print("Hello, World!")  # 盒子里的魔法
greet()  # 施展魔法，输出：Hello, World!
\`\`\`

### ⭐ 3.1.2 参数传递 —— 给魔法盒子输入原料

#### 🎯 大白话理解
> 魔法盒子需要原料才能施展更强大的魔法。
>
> 你可以在定义盒子时告诉它需要什么原料（**形参**），然后在调用时放入实际的原料（**实参**）。

#### 🌰 举个例子
\`\`\`python
def greet(name):  # name是形参，告诉盒子需要一个名字
    print(f"Hello, {name}!")  # 使用原料施展魔法
greet("Alice")  # 放入实际原料Alice，输出：Hello, Alice!
\`\`\`
`;

const content2 = `### 3.2. 返回值和 return 语句​
#### ⭐ 官方定义
> \`return\` 语句用于函数返回结果，返回值可以是**任意数据类型**。

#### 🎯 大白话理解
> 魔法盒子不仅能执行动作，还能通过 \`return\` 吐出一个结果。就像你给它两个数字，它会返回它们的和。

#### 🌰 举个例子
\`\`\`python
def add(a, b):  # 定义一个能做加法的魔法盒子
    return a + b  # 返回计算结果
result = add(3, 5)  # 接收盒子吐出的结果
print(result)  # 输出：8
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第三章：函数_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第三章：函数"
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
