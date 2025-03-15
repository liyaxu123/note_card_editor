import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.2.3 多重赋值技巧
#### ⭐ 官方定义
> 可以在一行代码中，将列表中的多个值分别赋给多个变量，变量的数量和列表中的元素数量必须一致。

#### 🎯 大白话理解
> 就像你有多个杯子和多个水果，把每个水果对应地放进每个杯子里。

#### 🌰 举个例子
\`\`\`python
cat = ['fat', 'black', 'loud']
size, color, disposition = cat
print(size)       # 输出 'fat'
print(color)      # 输出 'black'
print(disposition)  # 输出 'loud'
\`\`\`
`;

const content2 = `### 4.2.4 enumerate() 函数与列表一起使用
#### ⭐ 官方定义
> \`enumerate()\` 函数用于遍历列表，同时获取每个元素的索引和值。

#### 🎯 大白话理解
> 就像你在查看书架上的书时，不仅知道书的内容，还能知道它在书架上的位置编号。

#### 🌰 举个例子
\`\`\`python
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for index, item in enumerate(supplies):
    print('Index', index, 'in supplies is:', item)
\`\`\`
`;

const content3 = `### 4.2.5 random.choice() 和 random.shuffle() 函数与列表一起使用
#### ⭐ 官方定义
> \`random.choice()\` 函数用于从列表中随机选择一个元素；
>
> \`random.shuffle()\` 函数用于随机打乱列表中元素的顺序。

#### 🎯 大白话理解
> \`random.choice()\` 就像是从一个装满各种颜色球的盒子里随机摸出一个球；
> 
> \`random.shuffle()\` 就像是把盒子里的球全部倒出来，然后随意打乱它们的顺序再放回去。

#### 🌰 举个例子
\`\`\`python
import random
pets = ['dog', 'cat', 'fish']
print(random.choice(pets))  # 随机输出 'dog'、'cat' 或 'fish'
random.shuffle(pets)
print(pets)  # 输出打乱顺序后的列表，例如 ['fish', 'dog', 'cat']
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card5">
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
              <MyMarkdown content={content3} />
            </>
          </CardContent>

          <CardFooter title="✨ 保持学习，持续进步 🚀" />
        </>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card1;
