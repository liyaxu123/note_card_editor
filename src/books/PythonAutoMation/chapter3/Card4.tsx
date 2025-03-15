import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 3.7 global 语句
#### ⭐ 官方定义
> \`global\`语句用于在函数内部**修改全局变量**。

#### 🎯 大白话理解
> 就像在函数内部给全局变量 “开后门”。

#### 🌰 举个例子
\`\`\`python
x = 10

def change_global():
    global x  # 声明x是全局变量
    x = 20

change_global()
print(x)  # 输出20
\`\`\`
`;

const content2 = `### 3.8 异常处理
#### ⭐ 官方定义
> 使用 \`try-except\` 捕获和处理程序运行时的错误。

#### 🎯 大白话理解
> 就像给程序穿上 “防护服”，防止错误让程序崩溃。

#### 🌰 举个例子
\`\`\`python
try:
    num = 10 / 0
except ZeroDivisionError:
    print("不能除以零！")
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第三章：函数_Card4">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第三章：函数"
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
