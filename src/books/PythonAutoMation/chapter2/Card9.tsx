import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.8 导入模块
#### ⭐ 官方定义
> 使用 \`import\` 语句引入其他**模块**的功能（如 \`sys\` 模块的 \`exit()\` 函数）。

#### 🎯 大白话理解
> 模块就是程序员的"工具箱"，用来装各种可以重复使用的"小工具"。我们来用生活中的例子理解：
- 你有一个专门计算数学的工具箱（\`math\`模块）
- 有一个处理字符串的工具箱（\`string\`模块）
- 还有画图用的工具箱（\`turtle\`模块）

#### 🔧 ​模块使用三步曲：
1. 导入模块：\`import 模块名\`（就像打开工具箱）
2. 查看内容：\`dir(模块名)\`（看看工具箱里有什么工具）
3. 使用工具：\`模块名.工具名()\`（拿出特定工具使用）

#### 🌰 示例（导入最常用的math模块）
\`\`\`python
# 打开数学工具箱
import math

# 使用平方根工具
print(math.sqrt(9))  # 输出3.0

# 使用圆周率常量
print("圆的周长公式：" + str(2 * math.pi * r))
\`\`\`

#### 💡 ​常见模块举例：
- \`random\`：生成随机数（猜数字游戏必备）
- \`datetime\`：处理日期时间（自动记录日志）
- \`requests\`：发送网络请求（爬虫必备工具）
`;

const content2 = `### 2.9 用 sys.exit() 提前结束程序
#### ⭐ 官方定义
> 通过 \`sys.exit()\` 函数**强制终止**程序运行。

#### 🌰 举个例子（错误检查）
\`\`\`python
try:
    age = int(input("请输入年龄: "))
    if age < 0:
        print("年龄不能为负数！")
        sys.exit()
    print(f"您的年龄是 {age} 岁。")
except ValueError:
    print("请输入有效数字！")
    sys.exit()
\`\`\`
`;

const Card9 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card9">
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

export default Card9;
