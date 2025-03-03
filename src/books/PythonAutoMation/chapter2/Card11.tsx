import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 2.12 本章小结
#### 🎖️ 核心要点
- ​布尔值是逻辑判断的基础。
- ​比较操作符和布尔操作符组合成复杂条件。
- ​控制流语句​（\`if\`/\`else\`/\`elif\`/\`while\`/\`for\`）决定程序执行路径。
- ​循环需谨慎设计终止条件，避免**死循环**。
- ​模块导入​（如 sys）扩展程序功能。

---

#### 🛠️ 技能树梳理

\`\`\`mermaid
graph TD
    A[基础语法] --> B(循环控制)
    B --> C1{while循环}
    B --> C2{for循环}
    C1 --> D1[条件跳转break]
    C1 --> D2[跳过本次continue]
    C2 --> E1(range函数用法)
    E1 --> F1[数字序列生成]
    E1 --> F2[倒序遍历技巧]
    A --> G(模块使用)
    G --> H1(random模块)
    H1 --> I1[随机数生成]
    
    classDef 经典案例 fill:#4CAF50,stroke:#388E3C;
    classDef 实战技巧 fill:#FFC107,stroke:#FFA07A;
    classDef 未来延伸 fill:#2196F3,stroke:#1976D2;
    
    classDef 经典案例 C1,C2,E1;
    classDef 实战技巧 D1,D2,F1,F2,I1;
    classDef 未来延伸 G,H1;
\`\`\`
`;

const content2 = `### 2.13 习题
1. 编写一个程序，判断输入的年份是否为闰年。
2. 创建猜数字游戏，允许用户最多猜3次。
3. 打印斐波那契数列前20项。

---

**学习建议：**
- 先理解每个概念的官方定义，再通过大白话加深直觉，最后通过代码示例和流程图动手实践。
- 对于循环和条件语句，建议先用 \`print()\` 调试代码逻辑，确保流程符合预期。
`;

const Card11 = () => {
  return (
    <CardWrapper name="第二章：Python基础_Card11">
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

export default Card11;
