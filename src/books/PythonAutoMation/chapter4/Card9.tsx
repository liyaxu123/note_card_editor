import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.5 例子程序：神奇 8 球和列表
#### ⭐ 官方定义
> 通过列表来存储可能的答案，随机选择一个答案作为回答，模拟神奇 8 球的功能。

#### 🎯 大白话理解
> 就像你有一个装满各种答案的盒子，每次摇晃盒子，随机从中取出一个答案。

#### 🌰 举个例子
\`\`\`python
import random

messages = ['It is certain', 'It is decidedly so', 'Yes definitely',
            'Reply hazy try again', 'Ask again later', 
            'Concentrate and ask again', 'My reply is no',
            'Outlook not so good', 'Very doubtful']

print(messages[random.randint(0, len(messages) - 1)])
\`\`\`
`;

const content2 = `## 4.6 序列数据类型

### 4.6.1 可变和不可变数据类型
#### ⭐ 官方定义
> 可变数据类型的值可以在**原地修改**，比如列表；不可变数据类型的值一旦创建就**不能修改**，比如字符串和元组。

#### 🎯 大白话理解
> 可变数据类型就像是一块可以随意擦写的黑板，你可以随时修改上面的内容；
>
> 不可变数据类型就像是一张写好字的纸，一旦写上去就不能再更改，如果你想修改，只能重新写一张。

#### 🌰 举个例子
\`\`\`python
# 列表是可变的
spam = [1, 2, 3]
spam[0] = 4
print(spam)  # 输出 [4, 2, 3]

# 字符串是不可变的
text = 'Hello'
text[0] = 'h'  # 会报错
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card9">
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
