import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5.1.4 get() 方法
#### ⭐ 官方定义
> 通过键获取值，若键不存在则返回默认值。

#### 🧐 参数解释：
- \`key\`：要查找的键。
- \`default\`（可选）：键不存在时返回的值，默认为\`None\`。

#### 💫 返回值：
> 键对应的值，或默认值。

#### 🌰 举个例子
\`\`\`python
my_dict = {'name': 'Alice', 'age': 30}

print(my_dict.get('name', 'Unknown'))  # 输出 Alice
print(my_dict.get('city', 'Unknown'))  # 输出 Unknown（键不存在）
\`\`\`
`;

const content2 = `### 5.1.5 setdefault() 方法
#### ⭐ 官方定义
> 如果键不存在，则设置默认值并返回该值；否则返回现有值。

#### 🧐 参数解释：
- \`key\`：要查找的键。
- \`default\`（可选）：键不存在时返回的值，默认为\`None\`。

#### 💫 返回值：
> 键对应的值（现有或新设置的）。

#### 🌰 举个例子
\`\`\`python
my_dict = {'name': 'Alice'}

# 键存在，返回现有值
print(my_dict.setdefault('name', 'Guest'))  # 输出 Alice

# 键不存在，设置默认值并返回
print(my_dict.setdefault('city', 'New York'))  # 输出 New York
print(my_dict)  # 输出 {'name': 'Alice', 'city': 'New York'}
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第五章：字典和结构化数据_Card3">
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
