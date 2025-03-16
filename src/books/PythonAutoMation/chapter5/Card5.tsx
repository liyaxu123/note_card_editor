import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5.3.1 嵌套的字典和列表
#### ⭐ 官方定义
> 字典中包含列表或其他字典，用于表示更复杂的数据结构。

#### 🌰 举个例子
\`\`\`python
# 嵌套字典
people = {
    'Alice': {'age': 30, 'city': 'New York'},
    'Bob': {'age': 25, 'city': 'Los Angeles'}
}

# 嵌套列表
grades = [
    {'name': 'Alice', 'score': 90},
    {'name': 'Bob', 'score': 85}
]
\`\`\`
`;

const content2 = `### 本章知识点总结
> 在本章中，你学习了字典的所有相关知识。列表和字典可以包含多个值，当然，可以
包括其他列表和字典，它们本身也是一个值。字典是有用的，因为你可以把一些项（键）
映射到另一些项（值），不像列表只包含一系列有序的值。字典中的值是通过方括号访问
的，像列表一样。字典不使用整数索引，而是用各种数据类型如整型、浮点型、字符串或
元组作为键。通过将程序中的值组织成数据结构，你可以创建真实世界事物的模型，井字
棋盘就是这样一个例子。

1. 字典：键值对集合，无序，键唯一且不可变。
2. 常用方法：\`keys()\`、\`values()\`、\`items()\`、\`get()\`、\`setdefault()\`。
3. 结构化数据：用字典和列表模拟现实对象，如井字棋棋盘。
4. 嵌套结构：字典中包含其他字典或列表，处理复杂数据。


#### 💭 思维导图
\`\`\`mermaid
mindmap
  root((第五章：字典和结构化数据))
    字典基础
      定义：键值对集合
      特点：无序、键唯一
      与列表对比
    核心方法
      keys方法：获取所有键
      values方法：获取所有值
      items方法：获取键值对
      get方法：安全取值
      setdefault方法：设置默认值
    常用操作
      访问值
      修改值
      添加键值对
      检查存在性
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第五章：字典和结构化数据_Card5">
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
