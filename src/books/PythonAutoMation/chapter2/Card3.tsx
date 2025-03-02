import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.5 控制流的元素
#### ⭐ 官方定义
> 控制流语句的开始部分通常是**条件**；接下来是一个**代码块**，称为**子句**。在开始学习具体的Python控制流语句之前，我先介绍条件和代码块。


#### 🎯 条件
> 你前面看到的布尔表达式可以看成条件，它和表达式是一回事。**条件**只是在控制流语句的上下文中更具体的名称。
>
> 条件总是求值为一个布尔值：\`True\`或\`False\`。
>
> 控制流语句根据条件是\`True\`还是\`False\`，来决定做什么。几乎所有的控制流语句都使用条件。

#### 📌 代码块
> 一些代码行可以作为一组，放在**代码块**中。可以根据代码行的缩进判断代码块的开始和结束。代码块有以下3条规则：
> - 缩进增加时，代码块开始。
> - 代码块可以包含其他代码块。
> - 缩进减少为零，或与外面包围代码块对齐，代码块就结束了。

#### 🌰 举个例子
\`\`\`python
name = 'Mary'
password = 'swordfish'
if name == 'Mary':
    print('Hello, Mary')
    if password == 'swordfish':
      print('Access granted.')
    else:
      print('Wrong password.')
\`\`\`
`;

const content2 = `### 2.6 程序执行
#### ⭐ 官方定义
> 程序从上到下逐行执行，遇到控制流语句时会改变执行顺序。

#### 🎯 大白话理解
> 默认情况下，程序像火车一样按轨道行驶；遇到条件或循环时，轨道会分岔或绕圈。
`;

const Card2 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card3">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第二章：控制流"
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

export default Card2;
