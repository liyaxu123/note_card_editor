import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `## 2.7 控制流语句
### 2.7.1 if 语句
#### ⭐ 官方定义
> 根据布尔表达式的结果决定是否执行代码块。

#### 🚥 流程图
\`\`\`mermaid
graph LR
    A[开始] --> B{条件是否成立?}
    B -->|True| C[执行代码块]
    B -->|False| D[跳过代码块]
    C --> E[结束]
\`\`\`

#### 🌰 举个例子
\`\`\`python
score = 90
if score >= 90:
    print("优秀")
\`\`\`
`;

const content2 = `### 2.7.2 else 语句
#### ⭐ 官方定义
> 当\`if\`的条件不成立时，执行\`else\`代码块。

#### 🚥 流程图
\`\`\`mermaid
graph LR
    A-->B
    A[开始] --> B{条件是否成立?}
    B -->|True| C[执行 if 代码块]
    B -->|False| D[执行 else 代码块]
    C --> E[结束]
    D --> E[结束]
\`\`\`

#### 🌰 举个例子
\`\`\`python
score = 70
if score >= 90:
    print("优秀")
else:
    print("及格")
\`\`\`
`;

const Card2 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card4">
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
