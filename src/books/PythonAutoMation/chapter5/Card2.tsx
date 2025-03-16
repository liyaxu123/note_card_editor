import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5.1.2 keys()､values() 和 items() 方法
#### ⭐ 官方定义
> 这三个方法用于获取字典的键、值或键值对。

#### 🧐 参数解释：
- \`keys()\`：无参数，返回所有键。
- \`values()\`：无参数，返回所有值。
- \`items()\`：无参数，返回所有键值对。

#### 💫 返回值：
> 这些方法返回的值**不是真正的列表**，它们**不能被修改**，没有\`append()\`方法。
> 
> 但这些数据类型（分别是\`dict_keys\`、\`dict_values\`和\`dict_items\`）可以用于\`for\`循环。
> 
> - \`keys()\`：类似列表的视图对象，可迭代。
> - \`values()\`：类似列表的视图对象，可迭代。
> - \`items()\`：元组列表。

#### 🌰 举个例子
\`\`\`python
my_dict = {'name': 'Alice', 'age': 30}

# 获取所有键
print(list(my_dict.keys()))  # 输出 ['name', 'age']

# 获取所有值
print(list(my_dict.values()))  # 输出 ['Alice', 30]

# 获取所有键值对
for key, value in my_dict.items():
    print(f"{key}: {value}")  # 输出 name: Alice 和 age: 30
\`\`\`
`;

const content2 = `### 5.1.3 检查字典中是否存在键或值
#### ⭐ 官方定义
> 使用 \`in\` 或 \`not in\` 检查键或值是否存在。

#### 🎯 大白话理解
> 就像检查电话簿里是否有某个号码（键）或某个名字（值）。

#### 🌰 举个例子
\`\`\`python
my_dict = {'name': 'Alice', 'age': 30}

print('name' in my_dict)       # 输出 True（检查键）
print('Alice' in my_dict.values())  # 输出 True（检查值）
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第五章：字典和结构化数据_Card2">
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
