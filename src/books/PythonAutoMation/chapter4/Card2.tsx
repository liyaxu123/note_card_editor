import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.1.3 利用切片取得子列表
#### ⭐ 官方定义
> **切片**操作可以从列表中获取一个子列表，通过指定**起始索引**和**结束索引**（不包含结束索引），可以截取列表中的一部分元素。

#### 🎯 大白话理解
> 这类似于在一大段文字中选取其中的一部分，比如从第 3 个字到第 8 个字，而不改变原文的其他部分。
> 
> 作为**快捷方法**，你可以省略切片中冒号两边的一个索引或两个索引：
> - 省略第一个索引，相当于使用索引 0 或从列表的开始处开始。
> - 省略第二个索引相当于使用列表的长度，意味着切片直至列表的末尾。

#### 📊 示意图
![列表索引取值示意图](PythonAutoMation/列表切片.png)

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
print(spam[1:3])  # 输出 ['bat', 'rat']
print(spam[:2])   # 输出 ['cat', 'bat']
print(spam[2:])   # 输出 ['rat', 'elephant']
print(spam[0:-1])   # 输出 ['cat', 'bat', 'rat']
print(spam[:])   # 输出 ['cat', 'bat', 'rat', 'elephant']
\`\`\`
`;

const content2 = `### 4.1.4 用 len() 函数取得列表的长度
#### ⭐ 官方定义
> \`len()\` 函数用于计算列表中元素的**个数**，返回一个整数。

#### 🎯 大白话理解
> 就像你数书架上一共有多少本书一样，\`len()\` 函数能快速告诉你列表里有多少个元素。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
print(len(spam))  # 输出 4
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card2">
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
