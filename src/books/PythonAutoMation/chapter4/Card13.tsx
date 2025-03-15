import {
  CardWrapper,
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/Card";
import MyMarkdown from "@/components/MyMarkdown";

const content1 = `### 4.9 本章小结
在本章中，我们学习了 Python 中非常重要的数据结构 —— 列表。列表就像是一个强大的 “收纳盒”，可以方便地存储、访问和修改各种数据。我们学习了列表的索引、切片、各种方法（如 \`append\`、\`insert\`、\`remove\`、\`sort\` 等），以及列表与其他序列数据类型（如元组）的区别。同时，我们还了解了引用的概念，以及如何使用 \`copy\` 模块的函数来创建列表的拷贝。最后，通过一个小程序 Conway 的生命游戏，我们将所学的知识应用到了实际项目中，展示了列表在复杂程序中的强大作用。希望大家通过本章的学习，能够熟练掌握列表的使用方法，为后续的 Python 学习打下坚实的基础。

#### 💭 思维导图
\`\`\`mermaid
mindmap
  root((第四章：列表))
    4.1 列表数据类型
      用索引取得单个值
      负数索引
      切片操作
      len函数
      修改列表值
      连接与复制
      del语句
    4.2 使用列表
      循环遍历
      in和not in
      多重赋值
      enumerate函数
      随机操作
    4.3 增强赋值操作
    4.4 方法
      index方法
      append方法
      insert方法
      remove方法
      sort方法
      reverse方法
    4.5 例子程序：神奇8球
    4.6 序列数据类型
      可变 vs 不可变
      元组
      类型转换
    4.7 引用
      id函数
      传递引用
      copy模块
\`\`\`
`;

const content2 = `### 4.10 习题
> 1. 什么是列表？它和元组有什么区别？
> 2. 如何用索引获取列表中的元素？负数索引有什么作用？
> 3. 列表的切片操作如何使用？请举例说明。
> 4. 如何使用 len() 函数获取列表的长度？
> 5. 如何修改列表中的元素？请举例说明。
> 6. 如何连接两个列表？如何复制一个列表多次？
> 7. 如何删除列表中的元素？请至少列举两种方法。
> 8. 如何使用 in 和 not in 操作符检查一个值是否存在于列表中？
> 9. 多重赋值技巧如何使用？请举例说明。
> 10. enumerate() 函数有什么作用？请举例说明。
`;

const Card1 = () => {
  return (
    <CardWrapper name="第四章：列表_Card13">
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
