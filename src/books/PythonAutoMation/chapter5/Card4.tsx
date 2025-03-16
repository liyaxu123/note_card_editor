import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 5.2 美观地输出
#### ⭐ 官方定义
> 使用 \`pprint\` 模块美化字典的打印格式。

#### 🌰 举个例子
\`\`\`python
import pprint

my_dict = {'a': 1, 'b': 2, 'c': 3}
pprint.pprint(my_dict)  # 输出更易读的格式：{'a': 1, 'b': 2, 'c': 3}
\`\`\`
`;

const content2 = `### 5.3 使用数据结构对真实世界建模
#### ⭐ 官方定义
> 用字典和列表组合表示复杂数据，如井字棋棋盘。

#### 🎯 大白话理解
> 用代码模拟现实中的对象，比如用字典表示棋盘每个位置的状态。

#### 📊 示意图
![列表索引取值示意图](PythonAutoMation/井字棋盘.png)

#### 🌰 举个例子
\`\`\`python
# 井字棋棋盘
board = {
    'top-L': ' ', 'top-M': ' ', 'top-R': ' ',
    'mid-L': ' ', 'mid-M': ' ', 'mid-R': ' ',
    'low-L': ' ', 'low-M': ' ', 'low-R': ' '
}

# 更新棋盘状态
board['mid-M'] = 'X'
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第五章：字典和结构化数据_Card4">
      <CardContainer>
        <>
          <CardHeader
            title="《Python编程快速上手—让繁琐工作自动化第2版》"
            subtitle="第五章：字典和结构化数据"
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
