import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `## 4.7 引用
> 核心概念：变量保存的不是值本身，而是值的 “内存地址”，就像便利贴上写着某个物品的存放位置，你可以通过这个地址找到对应的物品。
### 4.7.1 标识和 id() 函数

#### ⭐ 官方定义
> \`id()\` 函数用于获取对象在内存中的**唯一标识**，每个对象的 id 在其生命周期内是**唯一**的。

#### 🎯 大白话理解
> 就像每个人都有一个唯一的身份证号码，\`id()\` 函数就是用来获取这个 “身份证号码” 的，它能帮助我们区分不同的对象。

#### 🌰 举个例子
\`\`\`python
a = [1, 2, 3]
b = a
print(id(a))  # 输出 a 的内存地址
print(id(b))  # 输出与 a 相同的内存地址，因为 b 是 a 的引用
\`\`\`
`;

const content2 = `### 4.7.2 传递引用
#### ⭐ 官方定义
> 在 Python 中，当将一个列表赋值给另一个变量时，实际上是传递了列表的引用，而不是创建一个新的列表。
> 
> 这意味着两个变量指向同一个列表，对其中一个变量的修改会影响另一个变量。

#### 🎯 大白话理解
> 就像你有一张便利贴，上面写着书架的位置。当你把这张便利贴给别人时，别人也能通过这张便利贴找到同一个书架，对书架的任何改动，两个人都能看到。

#### 🌰 举个例子
\`\`\`python
a = [1, 2, 3]
b = a
b[0] = 4
print(a)  # 输出 [4, 2, 3]，因为 a 和 b 指向同一个列表
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card11">
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
