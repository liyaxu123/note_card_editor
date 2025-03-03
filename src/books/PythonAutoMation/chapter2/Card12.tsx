import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 🌟 ​给每一位坚持到这里的你：
此刻的你，可能刚为了一行代码的报错调试到深夜，也可能正为终于写出第一个小游戏而兴奋不已。无论是哪种状态，请记住：
1. 错误是勋章
    - 每个红红的报错提示，都是程序在向你悄悄说："嘿，我发现了一个可以改进的地方！"（就像游戏里的关卡提示）
2. 重复是力量
    - 别害怕反复练习\`while\`循环和\`if\`条件，编程就像学骑自行车——前期看起来笨拙的重复，终将变成行云流水的肌肉记忆。
3. 想象即创造
    - 当你看着石头剪刀布游戏的代码时，有没有想过把它改造成"剪刀石头布蜥蜴人"？那个让你觉得"哇"的时刻，就是编程最迷人的地方。
4. 你比自己想象的更优秀
    - 能坚持学到这里，说明你具备：
      - 🧠 抽象思维能力（把现实问题转化为代码逻辑）
      - 💪 持续突破舒适区的勇气
      - 🎯 追求完美的工匠精神

---

#### 💪 为什么值得坚持？
- 你正在悄悄“超车”​​
    - 很多人以为编程是天赋，但其实它是“训练出来的技能”。你现在流的汗、卡的壳、调的bug，都在悄悄锻造一项未来十年都吃香的硬实力。
- ​代码是“思想的画笔”​​
    - 当你觉得累了，不妨想想：那些曾经让你头疼的循环、条件，其实是你正在学习用代码“画”出逻辑世界的规则。就像小时候学骑车，摔跤的次数越多，反而越能找到平衡的窍门。
- 每一个bug都是彩蛋​
    - 调试代码的过程像一场侦探游戏——你顺着报错的线索抽丝剥茧，最后找到问题的根源。这种“破解谜题”的成就感，比游戏通关更真实！
`;

const Card12 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card12">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第二章：控制流"
          />

          <CardContent>
            <>
              <MyMarkdown content={content1} />
            </>
          </CardContent>

          <CardFooter title="✨ 保持学习，持续进步 🚀" />
        </>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card12;
