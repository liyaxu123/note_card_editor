import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.7.5 恼人的循环
#### ⭐ 官方定义
> 无限循环需通过手动设置终止条件（如\`break\`）退出。

#### 🌰 举个例子
\`\`\`python
while True:
    user_input = input("输入'exit'退出循环: ")
    if user_input == 'exit':
        break
    print("继续...")
\`\`\`
`;

const content2 = `### 2.7.6 break 语句
#### ⭐ 官方定义
> 立即终止当前循环，跳出到循环外执行后续代码。

#### 🎯 大白话理解
> 就像你在玩捉迷藏时突然听见"抓到啦！"的喊声：
>
> 当你在某个循环里反复做某事时（比如一直找躲起来的人）
>
> 如果遇到特殊情况（比如找到目标），立刻停止所有动作
>
> 直接跳到循环外的下一条指令

#### 🌰 举个例子（while循环找密码）
\`\`\`python
attempt = 0  # 初始化尝试次数
while attempt < 3:  # 最多尝试3次
    password = input("请输入密码：")  # 提示用户输入
    if password == "password123":  # 检查是否正确
        print("🎉 密码正确！成功解锁！")
        break  # ✨ 找到正确密码立刻跳出循环
    else:
        print("💔 密码错误，请重新输入")
        attempt += 1  # 错误次数+1
    print(f"\\n当前是第{attempt}次尝试")  # 🔍 显示当前尝试次数
else:
    print("⚠️ 达到最大尝试次数，账户被锁定！")  # 🚨 循环正常结束后的提醒
\`\`\`

#### 💡 关键特性：
- 总是跳出**最近的循环**（优先跳出当前所在的循环）
- 如果循环被多层嵌套，\`break\`只退出当前这一层
- 和\`continue\`不同（\`continue\`是跳过本次循环继续下一次，而\`break\`是彻底终止整个循环）

`;

const Card6 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card6">
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

export default Card6;
