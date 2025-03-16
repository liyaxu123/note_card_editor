import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5.1 字典数据类型
#### ⭐ 官方定义
> **字典**是 Python 中的一种数据结构，用于存储**键值对**（\`key-value pairs\`），类似于电话簿。键必须是**唯一且不可变**的，值可以是**任意类型**。
>
> 像列表一样，“字典”是许多值的集合。但不像列表的索引，字典的索引可以使用许多不同的数据类型，不只是整数。
>
> 字典的索引被称为“**键**”，键及其关联的值称为“**键-值对**”。

#### 🎯 大白话理解
> 字典就像一个超级储物柜，每个柜子有一个独特的标签（键），里面可以存放各种东西（值）。

#### 🌰 举个例子
\`\`\`python
# 创建字典
person = {'name': 'Bob', 'age': 25, 'city': 'New York'}

# 访问值
print(person['name'])  # 输出 Bob

# 修改值
person['age'] = 26

# 添加新键值对
person['job'] = 'Engineer'

# 字典可以用整数值作为键，就像列表使用整数值作为索引一样，但它们不必从0开始，可以是任何数字
spam = {12345: 'Luggage Combination', 42: 'The Answer'}
\`\`\`
`;

const content2 = `### 5.1.1 字典与列表
#### ⭐ 官方定义
> 字典是**无序的**键值对集合，而列表是**有序的**元素集合。

#### 🎯 大白话理解
> 字典像超市储物柜（按标签找东西），列表像排队（按顺序找位置）。

#### ⚖️ 字典与列表的区别
| 特性 | 字典 | 列表 |
| --- | --- | --- |
| **存储方式** | 键值对（无序） | 按顺序存储元素（有序） |
| **访问方式** | 通过键（如dict[key]） | 通过索引（如list[index]） |
| **唯一性** | 键必须唯一 | 元素可重复 |

#### 🌰 举个例子
\`\`\`python
# 字典（无序）
my_dict = {'a': 1, 'b': 2}
print(my_dict['a'])  # 输出 1

# 列表（有序）
my_list = [1, 2, 3]
print(my_list[0])    # 输出 1
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第五章：字典和结构化数据_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第五章：字典和结构化数据"
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
