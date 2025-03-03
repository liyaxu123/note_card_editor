import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.7.7 continue 语句
#### ⭐ 官方定义
> 跳过当前循环的剩余代码，直接进入**下一轮循环**。

#### 🎯 大白话理解
> 就像你在吃自助餐时遇到不喜欢的食物就直接跳过去：

1. 当程序运行到某个循环时（比如遍历菜单上的每道菜）
2. 如果遇到特定条件（比如这道菜你不喜欢吃）：
    - 立刻跳过当前这轮循环的剩余步骤（不再吃这道菜）
    - 直接去检查下一道菜是否符合条件
3. 如果没有触发条件，就会正常吃完当前这道菜的所有步骤

#### 🌰 举个例子
\`\`\`python
# 打印1-10中所有奇数
for number in range(1, 11):
    if number % 2 == 0:  # 遇到偶数就跳过
        continue  # 🚀 直接跳到下一个数字
    print(f"🍀 正在吃{number}号蔬菜")
\`\`\`

#### 💡 关键特性：
- 只跳过当前这一轮循环的剩余代码
- 不会终止整个循环（这点和\`break\`完全不同）
- 如果循环有\`else\`子句，\`continue\`会导致\`else\`不执行

#### ⚠️ 常见误区对比：

| 场景 | 使用break的结果 | 使用continue的结果 |
| --- | --- | --- |
| 密码错误3次 | 直接退出整个程序 | 仍然继续提示输入密码 |
| 筛选考试及格名单 | 直接停止处理后续学生 | 跳过不及格学生的处理，继续下一个 |
| 点餐系统遇到售罄菜品 | 直接结束点餐流程 | 跳过该菜品，继续显示其他菜品 |
`;

const content2 = `### 2.7.8 for 循环和 range() 函数
#### ⭐ 官方定义
> \`for\` 循环遍历可迭代对象，\`range()\` 生成**整数序列**作为循环变量。

#### 🎯 大白话理解
> 就像你使用遥控器按页翻书一样：
> 
> \`range()\`函数相当于魔法书架上的页码生成器（自动创建数字序列）
>
> \`for\`循环就是你的手指，逐个按下这些页码按钮翻页

#### ✨ for循环语法结构：
\`\`\`python
for 变量 in 序列:
    # 需要执行的代码块（循环体）
    # （记得缩进！就像涮火锅要配蘸料一样）
\`\`\`

#### 🍲 ​range()的三个必调参数：
| 参数名 | 作用 | 默认值 |
| --- | --- | --- |
| \`start\` | 起始数字 | 0 |
| \`stop\` | 结束数字（不包含） | 无（必须写） |
| \`step\` | 步长（每次增减多少） | 1 |

#### 🌰 举个例子
\`\`\`python
# 打印1到5（含5）
for i in range(1, 6):
    print(i)

# 步长为2：1,3,5
for i in range(1, 6, 2):
    print(i)

# 倒着数3个数（5/4/3）
for num in range(5,1,-1):
    print(num)
\`\`\`
`;

const Card7 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card7">
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

export default Card7;
