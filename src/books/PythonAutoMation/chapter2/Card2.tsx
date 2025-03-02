import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.3 布尔操作符（Boolean Operators）
#### ⭐ 官方定义
> 布尔操作符将多个布尔表达式组合成新的布尔值，包括**逻辑与**（and）、**逻辑或**（or）、**非**（not）。

#### 🎯 大白话理解
- \`and\`：只有两个条件都满足时，结果才是“真”（类似“而且”）。
- \`or\`：只要有一个条件满足，结果就是“真”（类似“或者”）。
- \`not\`：反转布尔值的真假（类似“不是”）。

#### 📌 优先级规则（从高到低）：
1. \`not\`
2. \`and\`
3. \`or\`

#### 🌰 举个例子
\`\`\`python
x = 5
y = 10
print(x < y and x > 0)  # 输出: True (5<10且5>0)
print(x < y or x > 15)  # 输出: True (5<10成立)
print(not x > 0)       # 输出: False (取反5>0的结果)
\`\`\`
`;

const content2 = `### 2.4 混合布尔和比较操作符​
#### ⭐ 官方定义
> 通过组合比较操作符和布尔操作符构建复杂的条件表达式。

#### 🎯 大白话理解
> 将多个“是否满足条件”的判断串联或并联，形成更复杂的逻辑规则。

#### 🌰 举个例子（判断闰年）
\`\`\`python
year = 2024
if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
    print("闰年")
else:
    print("平年")
# 输出: 闰年
\`\`\`
`;

const Card2 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card2">
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

export default Card2;
