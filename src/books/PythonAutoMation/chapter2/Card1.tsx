import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.1 布尔值（Boolean Values）​
#### ⭐ 官方定义
> **布尔值**是表示**真**（\`True\`）或**假**（\`False\`）的数据类型，用于逻辑判断，是控制流的核心基础。

#### 🎯 大白话理解
> 布尔值就像开关，只有两种状态：
> - \`True\`：条件成立（相当于“是”或“开”）。
> - \`False\`：条件不成立（相当于“否”或“关”）。

#### 🌰 举个例子
\`\`\`python
# 直接赋值布尔值
is_raining = True    # 天在下雨？
is_weekend = False   # 不是周末？

# 布尔值的输出
print(is_raining)  # 输出: True
print(not is_weekend)  # 输出: True (取反)
\`\`\`
`;

const content2 = `### 2.2 比较操作符（Comparison Operators）​
#### ⭐ 官方定义
> 比较操作符用于比较两个值，返回布尔值，判断它们是否满足特定关系。

#### 🎯 大白话理解
> 比较操作符像“侦探”，会对两个值说：“你是大于、小于、等于……吗？”

#### 🌈 常见操作符及含义：
| 操作符 | 含义 | 示例 |
| ----- | ----- | ----- |
| \`==\` | 等于 | \`5 == 5\` → \`True\` |
| \`!=\` | 不等于 | \`5 != 5\` → \`False\` |
| \`<\` | 小于 | \`3 < 5\` → \`True\` |
| \`>\` | 大于 | \`3 > 5\` → \`False\` |
| \`<=\` | 小于或等于 | \`4 <= 5\` → \`True\` |
| \`>=\` | 大于或等于 | \`4 >= 5\` → \`False\` |

#### 🌰 举个例子
\`\`\`python
age = 18
print(age >= 18)  # 输出: True (成年)
print("apple" < "banana")  # 输出: True (字典序比较)
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第二章：控制流"
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
