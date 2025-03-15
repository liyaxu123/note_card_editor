import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.1.5 用索引改变列表中的值
#### ⭐ 官方定义
> 通过索引可以直接修改列表中对应位置的值，这是列表的一个重要特性，因为列表是**可变的**数据结构。

#### 🎯 大白话理解
> 你可以把书架上某本书的位置直接替换成另一本书，而其他书的位置不变。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
spam[1] = 'dog'
print(spam)  # 输出 ['cat', 'dog', 'rat', 'elephant']
\`\`\`
`;

const content2 = `### 4.1.6 列表连接和列表复制
#### ⭐ 官方定义
> 使用 \`+\` 运算符可以将两个列表**连接**成一个新列表，使用 \`*\` 运算符可以将一个列表**重复**多次，生成一个新列表。

#### 🎯 大白话理解
> 列表连接就像是把两个书架合并成一个更大的书架，而列表复制则像是把一个书架复制出多个相同的书架。

#### 🌰 举个例子
\`\`\`python
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
print(list1 + list2)  # 输出 [1, 2, 3, 'a', 'b', 'c']
print(list1 * 3)      # 输出 [1, 2, 3, 1, 2, 3, 1, 2, 3]
\`\`\`
`;

const content3 = `### 4.1.7 用 del 语句从列表中删除值
#### ⭐ 官方定义
> \`del\` 语句用于**删除**列表中指定索引位置的元素，删除后列表的长度会相应减少。

#### 🎯 大白话理解
> 就像从书架上拿走一本书，这本书就从书架上消失了，后面的书会自动往前移动填补空缺。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
del spam[2]
print(spam)  # 输出 ['cat', 'bat', 'elephant']
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card3">
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
