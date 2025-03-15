import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 3.5 调用栈
#### ⭐ 官方定义
> 调用栈记录函数调用顺序，确保函数返回后能继续执行后续代码。

#### 🎯 大白话理解
> 就像多层蛋糕，每次调用函数就像叠一层，返回时就像从上往下吃。

#### 🌰 举个例子
\`\`\`python
def a():
    print("A starts")
    b()
    print("A ends")

def b():
    print("B starts")
    c()
    print("B ends")

def c():
    print("C runs")

a()
\`\`\`
`;

const content2 = `### 3.6 局部和全局作用域
#### ⭐ 官方定义
> 局部作用域是函数内部的变量空间，全局作用域是函数外部的变量空间。

#### 🎯 大白话理解
> 局部变量是函数的 “私有财产”，全局变量是整个程序的 “公共财产”。

#### 🌰 举个例子
\`\`\`python
x = 10  # 全局变量

def func():
    y = 20  # 局部变量
    print(x)  # 可以访问全局变量
    print(y)

func()
print(x)  # 可以访问全局变量
print(y)  # 报错，y是局部变量
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第三章：函数_Card3">
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
