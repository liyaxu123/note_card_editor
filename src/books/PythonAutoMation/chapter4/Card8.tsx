import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.4.4 用 sort() 方法将列表中的值排序
#### ⭐ 官方定义
> \`sort()\` 方法用于对列表中的元素进行排序，可以按照升序或降序排列。
> 
> 对于字符串列表，按照字母顺序排序；
> 
> 对于数字列表，按照数值大小排序。

#### 🎯 大白话理解
> 就像你把书架上的书按照书名的字母顺序或者书的厚度重新排列整齐。

#### 🌰 举个例子
\`\`\`python
spam = [3, 1, 4, 1, 5, 9, 2, 6, 5]
spam.sort()
print(spam)  # 输出 [1, 1, 2, 3, 4, 5, 5, 6, 9]

# 降序排序
spam.sort(reverse=True)
print(spam)  # 输出 [9, 6, 5, 5, 4, 3, 2, 1, 1]

# 字符串列表排序
names = ['Alice', 'Bob', 'Carol']
names.sort()
print(names)  # 输出 ['Alice', 'Bob', 'Carol']
\`\`\`
`;

const content2 = `### 4.4.5 使用 reverse() 方法反转列表中的值
#### ⭐ 官方定义
> \`reverse()\` 方法用于将列表中的元素顺序反转。

#### 🎯 大白话理解
> 就像你把书架上的书从后往前依次排列，原来的最后一本书变成第一本，原来的第一本书变成最后一本。

#### 🌰 举个例子
\`\`\`python
spam = ['cat', 'bat', 'rat', 'elephant']
spam.reverse()
print(spam)  # 输出 ['elephant', 'rat', 'bat', 'cat']
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card8">
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
