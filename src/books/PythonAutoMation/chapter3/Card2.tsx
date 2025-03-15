import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 3.3 None 值
#### ⭐ 官方定义
> \`None\` 表示没有值，是\`NoneType\`数据类型的**唯一值**。

#### 🎯 大白话理解
> 有时候魔法盒子可能没有任何输出，就像一个空盒子。这时候它会返回\`None\`。

#### 🌰 举个例子
\`\`\`python
def greet(name):
    print(f"Hello, {name}!")  # 没有return语句，默认返回None
result = greet("Bob")
print(result is None)  # 输出：True
\`\`\`
`;

const content2 = `### 3.4 关键字参数和 print () 函数
#### ⭐ 官方定义
> **关键字**参数通过参数名传递值，\`print()\` 的 \`end\` 和 \`sep\` 参数用于控制输出格式。

#### 🎯 大白话理解
> 你可以给魔法盒子的原料槽指定名字，这样在放入原料时就可以按名字来，而不必在意顺序。

#### 🌰 举个例子
\`\`\`python
def greet(name, message="Hello"):  # message有默认值
    print(f"{message}, {name}!")
greet(message="Hi", name="Charlie")  # 输出：Hi, Charlie!
\`\`\`

#### 🌰 print () 函数的例子：
\`\`\`python
print("Hello", "World", sep="-", end="!")  # 输出Hello-World!
\`\`\`

#### ✨ print () 函数参数：
| 参数 | 含义 |
| --- | --- |
| \`sep\` | 分隔符，默认是空格。例如 \`sep="-"\` 会用 \`-\` 分隔多个输出内容。 |
| \`end\` | 行结束符，默认是换行符\`\\n\`。例如 \`end="!"\` 会在末尾添加 \`!\` 而不是换行。 |
`;

const Card1 = () => {
  return (
    <CardWrapper name="第三章：函数_Card2">
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
