import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.3 增强的赋值操作
#### ⭐ 官方定义
> 增强的赋值操作符是一种简化的赋值方式，它将算术运算和赋值操作结合在一起。例如，\`+=\` 可以将右边的值加到左边的变量上，并将结果赋给左边的变量。

#### 🎯 大白话理解
> 就像你有一个存钱罐，每次往里面加钱，直接说 “存钱罐 += 5 元”，而不用写成 “存钱罐 = 存钱罐 + 5 元”。

#### 💪 增强的赋值操作符
| 增强的赋值语句 | 等价的赋值语句 |
| --- | --- |
| \`spam += 1\` | \`spam = spam + 1\` |
| \`spam -= 1\` | \`spam = spam - 1\` |
| \`spam *= 1\` | \`spam = spam * 1\` |
| \`spam /= 1\` | \`spam = spam / 1\` |
| \`spam %= 1\` | \`spam = spam % 1\` |

#### 🌰 举个例子
\`\`\`python
spam = 42
spam += 1  # 等同于 spam = spam + 1
print(spam)  # 输出 43

text = 'Hello'
text *= 3  # 等同于 text = text * 3
print(text)  # 输出 'HelloHelloHello'
\`\`\`
`;

const content2 = `## 4.4 方法
### 4.4.1 用 index() 方法在列表中查找值
#### ⭐ 官方定义
> \`index()\` 方法用于在列表中查找指定值的**索引**，如果值不存在则会**报错**。
>
> 如果列表中存在**重复**的值，就返回它**第一次**出现的索引。

#### 🎯 大白话理解
> 就像你在书架上找某本书的位置编号，如果找到了就告诉你编号，找不到就会发脾气说 “找不到这本书”。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
print(spam.index('bat'))  # 输出 1

# 列表中存在重复的值
spam = ['Zophie', 'Pooka', 'Fat-tail', 'Pooka']
spam.index('Pooka') # 输出 1 而不是 3
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card6">
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
