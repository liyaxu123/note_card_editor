import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 3.9 实践项目：Zigzag 动画
#### ⭐ 功能
> 生成往返的锯齿形图案，直到用户中断。

#### 🎯 大白话理解
> 使用 \`while\` 循环和 \`time.sleep()\` 控制动画效果，通过 \`try-except\` 捕获 \`Ctrl+C\` 中断。

#### 🌰 举个例子
\`\`\`python
import time, sys

indent = 0
increasing = True

try:
    while True:
        print(' ' * indent, end='')
        print('********')
        time.sleep(0.1)

        if increasing:
            indent += 1
            if indent == 20:
                increasing = False
        else:
            indent -= 1
            if indent == 0:
                increasing = True
except KeyboardInterrupt:
    sys.exit()
\`\`\`
`;

const content2 = `### 3.10 本章小结
1. 函数定义：用 \`def\` 语句，参数是输入，\`return\` 是输出。
2. 作用域：局部变量只能在函数内使用，全局变量可在任意位置使用。
3. 异常处理：用 \`try-except\` 防止程序崩溃。
4. 关键字参数：用 \`sep\` 和 \`end\` 控制 \`print()\` 的输出格式。
5. 调用栈：函数调用的顺序记录，确保程序正确返回。

#### 💭 思维导图
\`\`\`mermaid
mindmap
  root((第三章：函数))
    函数的定义与调用
      定义：def关键字
      调用：函数名加括号
    参数传递
      形参：定义时的变量名
      实参：调用时传入的值
    返回值
      return语句
      无返回值时默认返回None
    关键字参数
      用参数名指定值
      顺序不重要
    作用域
      局部作用域：函数内部
      全局作用域：函数外部
    异常处理
      try-except块
      捕获并处理错误
    实践项目
      Zigzag动画
      动手实践
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第三章：函数_Card5">
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
