import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `## 4.2 使用列表
### 4.2.1 列表用于循环
#### ⭐ 官方定义
> 可以使用 \`for\` 循环遍历列表中的每一个元素，对每个元素执行相同的操作。

#### 🎯 大白话理解
> 就像你依次查看书架上的每一本书，然后对每本书做同样的事情，比如整理书的位置。

#### 🌰 举个例子
\`\`\`python
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for item in supplies:
    print('I need to buy:', item)
\`\`\`
`;

const content2 = `### 4.2.2 in 和 not in 操作符
#### ⭐ 官方定义
> \`in\` 和 \`not in\` 操作符用于检查一个值是否存在于列表中。如果存在，\`in\` 返回 \`True\`，否则返回 \`False\`；\`not in\` 则相反。

#### 🎯 大白话理解
> 这就像是在问 “某本书是否在书架上”，如果在，就回答 “是”，否则回答 “否”。

#### 🌰 举个例子
\`\`\`python
pets = ['dog', 'cat', 'fish']
print('dog' in pets)    # 输出 True
print('bird' not in pets)  # 输出 True
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card4">
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
