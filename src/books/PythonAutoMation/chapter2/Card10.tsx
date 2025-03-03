import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.10 小程序: 猜数字
#### 🎲 功能描述
> 用户输入一个1-10之间的整数，程序随机生成数字并提示“高了”、“低了”或“猜对了”。

#### 🧩 代码逻辑拆解（大白话版）
1. ​准备阶段：
    - 打开"随机数工具箱"（\`import random\`）
    - 从1-100中随机选一个"魔法数字"（\`target\`）
    - 设置一个计数器（\`guess_count\`）记录试错次数
2. ​核心玩法：
    - 进入无限循环（\`while True:\`）像捉迷藏一样持续提问
    - 用户输入数字（\`input()\`）就像猜谜语
    - 每次猜测后：
        - ✅ 猜中就报喜并统计次数
        - ❌ 猜错提示大小方向
    - 循环直到用户答对为止

#### 🌰 代码示例：
\`\`\`python
import random  # 导入随机数工具包

# 1. 生成1-100之间的随机整数作为答案
target = random.randint(1, 100)
guess_count = 0  # 记录尝试次数

while True:  # 无限循环直到猜中为止
    guess = int(input("🔍 请输入1-100之间的整数："))  # 用户输入猜测
    guess_count += 1  # 尝试次数+1
    
    if guess == target:
        print(f"🎉 猜对了！答案是{target}，你用了{guess_count}次尝试")
        break  # 成功后跳出循环
    elif guess < target:
        print("💔 数字太小了，再试试更大的！")
    else:
        print("💔 数字太大了，再试试更小的！")
\`\`\`
`;

const content2 = `### 2.11 小程序: 石头、纸、剪刀
#### ✊ 功能描述
> 用户输入手势（石头/剪刀/布），程序随机生成手势并判定胜负。

#### 🧩 代码逻辑拆解（大白话版）
1. ​准备工作：
    - 打开"随机数工具箱"（\`import random\`）
    - 准备好三个选项：石头、剪刀、布（用列表存储）
2. ​核心玩法：
    - 电脑每次随机选一个武器（\`random.randint(0,2)\`）
    - 用户输入选择（支持数字序号或中文名称）
    - 比较双方选择：
        - 相同 → 平局
        - 用户序号比电脑大1 → 用户赢（石头→布）
        - 用户序号比电脑小1 → 用户输（布→剪刀）
3. ​游戏延续：
    - 每次结束后问"要不要再来"
    - 输入'y'继续，其他任意键结束

#### 🌰 代码示例：
\`\`\`python
import random  # 导入随机数工具包

# 定义三种选项的对应关系
options = ["🪨 石头", "✂️ 剪刀", "📄 布"]

while True:
    # 1. 电脑随机出拳（0=石头，1=剪刀，2=布）
    computer_choice = random.randint(0, 2)
    
    # 2. 用户输入选择
    user_choice = input("\\n请选择你的出拳：\\n" + "\\n".join(options) + "\\n（输入序号0/1/2或直接输入名称）")
    
    # 处理用户输入（支持数字序号或中文名称）
    if user_choice.isdigit():
        user_choice = int(user_choice)
    else:
        user_choice = options.index(user_choice.strip())
    
    # 3. 显示双方出拳
    print(f"\\n👤 你选择了：{options[user_choice]}")
    print(f"\\n🤖 电脑选择了：{options[computer_choice]}\n")
    
    # 4. 判断胜负
    if user_choice == computer_choice:
        print("⚡️ 平局！再来一局！")
    elif (user_choice - computer_choice) % 3 == 1:
        print("🏆 你赢了！")
    else:
        print("💔 你输了...")
    
    # 5. 是否继续游戏
    play_again = input("😊 要再来一局吗？(y/n)").lower()
    if play_again != 'y':
        print("👋 游戏结束，下次再见！")
        break
\`\`\`
`;

const Card10 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card10">
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

export default Card10;
