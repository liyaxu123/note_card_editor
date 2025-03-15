import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.6.2 元组数据类型
#### ⭐ 官方定义
> 元组和列表类似，但元组使用圆括号 \`()\`，并且元组是**不可变**的，一旦创建就不能修改其中的元素。

#### 🎯 大白话理解
> 元组就像是一个密封的盒子，里面的东西一旦放进去就不能再拿出来或更换，只能整体使用。

#### 🌰 举个例子
\`\`\`python
t = ('apple', 'banana', 'cherry')
print(t[0])  # 输出 'apple'

# 尝试修改元组会报错
t[0] = 'grape'
\`\`\`
`;

const content2 = `### 4.6.3 用 list() 和 tuple() 函数来转换类型
#### ⭐ 官方定义
> \`list()\` 函数用于将其他数据类型转换为列表；
>
> \`tuple()\` 函数用于将其他数据类型转换为元组。

#### 🎯 大白话理解
> \`list()\` 就像是一个 “列表制造机”，可以把其他东西变成列表；
>
> \`tuple()\` 就像是一个 “元组制造机”，可以把其他东西变成元组。

#### 🌰 举个例子
\`\`\`python
# 将元组转换为列表
t = ('apple', 'banana', 'cherry')
lst = list(t)
print(lst)  # 输出 ['apple', 'banana', 'cherry']

# 将列表转换为元组
lst = [1, 2, 3]
t = tuple(lst)
print(t)  # 输出 (1, 2, 3)

# 将字符串转换为元组
t = list('hello')
print(t)  # 输出 ['h', 'e', 'l', 'l', 'o']
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card10">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第四章：列表"
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
