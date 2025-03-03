import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.7.9 等价的 while 循环
#### ⭐ 官方定义
> \`for\` 循环可转换为 \`while\` 循环实现相同功能。

#### 🌰 示例对比：
\`\`\`python
# for循环
for i in range(3):
    print("i =", i)

# 等价while循环
i = 0
while i < 3:
    print("i =", i)
    i += 1
\`\`\`
`;

const content2 = `### 2.7.10 range() 的开始、停止和步长参数
#### ⭐ 官方定义
> 通过调整 \`start\`、\`stop\`、\`step\` 参数生成自定义序列。

#### ✨ range() 参数回顾：
- \`start\`: 起始值（默认0）。
- \`stop\`: 终止值（不包含）。
- \`step\`: 步长（默认1）。

#### 🌰 举个例子
\`\`\`python
# 包含负数：-2, -1, 0, 1 (stop=2不包含)
print(range(-2, 2))  # 输出: range(-2, 2)

# 反向序列：5,3,1
print(range(5, 0, -2))  # 输出: range(5, 0, -2)
\`\`\`
`;

const Card8 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card8">
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

export default Card8;
