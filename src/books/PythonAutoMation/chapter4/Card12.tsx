import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.7.3 copy 模块的 copy() 和 deepcopy() 函数
#### ⭐ 官方定义
> \`copy()\` 函数用于创建列表的**浅拷贝**，即只复制列表本身，而不复制列表中包含的子列表；
>
> \`deepcopy()\` 函数用于创建列表的**深拷贝**，即不仅复制列表本身，还会复制列表中包含的所有子列表。

#### 🎯 大白话理解
> \`copy()\` 就像是给书架拍了一张照片，然后按照照片重新搭建了一个一模一样的书架，但如果书架里还有小书架（子列表），小书架里的东西还是原来的；
>
> \`deepcopy()\` 则像是把整个书架，包括里面的小书架和小书架里的东西，全部复制了一份，完全独立。

#### 🌰 举个例子
\`\`\`python
import copy

a = [1, 2, [3, 4]]
b = copy.copy(a)
c = copy.deepcopy(a)

a[2][0] = 5
print(b)  # 输出 [1, 2, [5, 4]]，因为浅拷贝会受子列表修改的影响
print(c)  # 输出 [1, 2, [3, 4]]，因为深拷贝不受子列表修改的影响
\`\`\`
`;

const content2 = `### 4.8 小程序：Conway 的生命游戏
#### ⭐ 官方定义
> 这是一个基于规则的细胞自动机模拟程序，通过列表来表示细胞的状态，根据周围细胞的状态来更新每个细胞的状态。

#### 🎯 大白话理解
> 就像一个由细胞组成的世界，每个细胞的生死取决于周围细胞的状态，程序会根据规则自动更新这个世界的状态，形成各种有趣的图案。

#### 🌰 举个例子
\`\`\`python
参考代码：略
\`\`\`
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card12">
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
