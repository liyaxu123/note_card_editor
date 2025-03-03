import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.7.3 elif 语句
#### ⭐ 官方定义
> 在多个条件中依次检查，找到第一个成立的执行对应代码块。

#### 🚥 流程图
\`\`\`mermaid
graph TD
    A[开始] --> B{条件1?}
    B -->|True| C[执行条件1代码块]
    B -->|False| D{条件2?}
    D -->|True| E[执行条件2代码块]
    D -->|False| F[继续检查后续条件...]
    C --> G[结束]
    E --> G[结束]
\`\`\`

#### 🌰 举个例子
\`\`\`python
grade = 'B'
if grade == 'A':
    print("奖学金")
elif grade == 'B':
    print("鼓励奖")
else:
    print("加油")
\`\`\`
`;

const content2 = `### 2.7.4 while 循环语句
#### ⭐ 官方定义
> 当条件为真时重复执行代码块，直到条件变为假。

#### 🚥 流程图
\`\`\`mermaid
graph TD
    A[开始] --> B{条件?}
    B -->|True| C[执行循环体]
    B -->|False| D[结束]
    C --> B
\`\`\`

#### 🌰 举个例子（打印数字）
\`\`\`python
count = 1
while count <= 3:
    print(count)
    count += 1
# 输出: 1, 2, 3
\`\`\`

---

#### ⚠️ 特别注意：
> 如果条件**永远成立**（比如\`while True:\`），就会进入**无限循环**，就像卡在电梯里上下不停，这时候需要用\`break\`来跳出循环。
`;

const Card5 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card5">
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

export default Card5;
