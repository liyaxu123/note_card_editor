import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 🎯 总结：第一章核心要点
| 知识点 | 关键作用 | 典型场景 |
| --- | --- | --- |
| 变量与数据类型 | 存储和识别数据 | 记录用户信息（如姓名、年龄） |
| 运算符 | 执行数学和逻辑计算 | 计算商品总价、判断用户权限 |
| 输入输出 | 与用户交互 | 登录界面输入密码、显示欢迎消息 |
| 字符串操作 | 处理文本数据 | 生成个性化报告、解析文件内容 |
| 缩进规范 | 组织代码结构 | 条件语句、循环结构的代码块 |
`;

const content2 = `### 🔔 下一步行动建议
- **✍️ 动手练习**：尝试修改示例代码，观察结果变化（例如把\`5 > 3\`改成\`5 < 3\`）。
- **✨ 实战项目**：用本章知识写一个“生日祝福生成器”——输入姓名和年龄，输出定制化祝福语。
- **🔍 查漏补缺**：如果对“动态类型”或“字符串不可变”有疑问，可以通过搜索引擎查找相关解释（关键词：Python dynamic typing）。
`;

const Card4 = () => {
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

export default Card4;
