import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.4.2 用 append() 方法和 insert() 方法在列表中添加值
#### ⭐ 官方定义
> \`append()\` 方法用于在列表的**末尾添加**一个元素；
> 
> \`insert()\` 方法用于在列表的**指定索引位置插入**一个元素。

#### 🎯 大白话理解
> \`append()\` 就像是在书架的最后面添加一本书；
>
> \`insert()\` 就像是在书架的某个指定位置（比如第 3 本的位置）插入一本书，后面的书会自动往后移动。

#### ✨ 语法格式
> \`列表.append(要添加到列表末尾的值)\`
>
> \`列表.insert(新值的索引, 新值)\`

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat']
spam.append('elephant')
print(spam)  # 输出 ['cat', 'bat', 'rat', 'elephant']

spam.insert(1, 'dog')
print(spam)  # 输出 ['cat', 'dog', 'bat', 'rat', 'elephant']
\`\`\`
`;

const content2 = `### 4.4.3 用 remove() 方法从列表中删除值
#### ⭐ 官方定义
> \`remove()\` 方法用于**删除**列表中指定的值，如果值不存在则会**报错**。
>
> 如果该值在列表中**出现多次**，只有**第一次**出现的值会被删除。

#### 🎯 大白话理解
> 就像你从书架上拿走某本特定的书，如果这本书不存在，就会报错说 “这本书不存在”。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('bat')
print(spam)  # 输出 ['cat', 'rat', 'elephant']

# 如果删除列表中不存在的值
spam = ['cat', 'bat', 'rat', 'elephant']
spam.remove('chicken') # 报错

# 如果该值在列表中出现多次
spam = ['cat', 'bat', 'rat', 'cat', 'hat', 'cat']
spam.remove('cat')
print(spam)  # 输出 ['bat', 'rat', 'cat', 'hat', 'cat']
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card7">
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
