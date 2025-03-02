import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 3. 输入与输出
#### ⭐ 官方定义
> ​**输入**​（Input）是从用户或外部设备获取数据的过程，Python通过\`input()\`函数实现。
>
> **输出**​（Output）是将程序结果展示给用户，通过\`print()\`函数实现。

#### 🎯 大白话理解
> 输入就是让程序“听你说话”（比如输入密码），输出是程序“回答你”（比如显示计算结果）。

#### 🌰 示例
\`\`\`python
# 输入：用户输入的内容会被当作字符串返回
name = input("请输入你的名字：")  # 用户输入"张三" → name="张三"

# 输出：在屏幕上打印内容
print(f"你好，{name}！")         # 屏幕显示：你好，张三！
\`\`\`
`;

const content2 = `### 4. 字符串操作
#### ⭐ 官方定义
> 字符串（String）是由字符（字母、数字、符号）组成的不可变序列，支持拼接、切片、格式化等操作。

#### 🎯 大白话理解
> 字符串就像一本固定页码的书，你不能修改某一页的内容，但可以重新排列页码顺序或合并多本书。

#### 🌰 示例
\`\`\`python
# 字符串拼接
greeting = "Hello, " + name + "!"  # 如果name="Alice" → greeting="Hello, Alice!"

# f-string格式化（动态插入变量）
age = 25
print(f"I am {age} years old.")  # 输出：I am 25 years old.

# 获取字符串长度
s = "Python"
print(len(s))                   # 输出：6
\`\`\`
`;

const Card2 = () => {
  return (
    <CardWrapper name="第一章：Python基础_Card1">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第一章：Python基础"
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
