import {
  Button,
  EditorLayout,
  Input,
  FreeCanvas,
} from "@ant-design/pro-editor";
import { Input as AntdInput } from "antd";
import { MenuUnfoldOutlined, DownloadOutlined } from "@ant-design/icons";
import PythonAutoMation from "./books/PythonAutoMation";
import domtoimage from "dom-to-image";
// import CustomCard from "./components/CustomCard";
import { Filter, FilterInfoBar, FilterProvider } from "@/components/Filter";

const { TextArea } = AntdInput;

function App() {
  const exportToImage = () => {
    const element = document.querySelector("#export-container");
    if (!element) return;

    domtoimage
      .toPng(element)
      .then(function (dataUrl: string) {
        const link = document.createElement("a");
        link.download = "笔记.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error: any) {
        console.error("oops, something went wrong!", error);
      });
  };

  const onFilterChange = (conditions: any) => {
    console.log("筛选条件：", conditions);
  };

  return (
    <>
      <EditorLayout
        style={{
          width: "100%",
          height: "100vh",
        }}
        header={{
          iconConfig: {
            icon: <MenuUnfoldOutlined />,
            title: "卡片笔记编辑器",
          },
          children: (
            <Input
              addonBefore="搜索"
              placeholder="请输入关键词"
              style={{ width: 250 }}
            />
          ),
          extra: (
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={exportToImage}
            >
              导出
            </Button>
          ),
        }}
        footer={false}
        leftPannel={false}
        centerPannel={{
          children: (
            <div
              className="flex-1 h-full"
              style={{
                height: "calc(100vh - 68px)",
              }}
            >
              <FreeCanvas>
                <div id="export-container">
                  <PythonAutoMation />
                </div>
              </FreeCanvas>
            </div>
          ),
        }}
        rightPannel={{
          minWidth: 300,
          children: (
            <div
              className="overflow-auto"
              style={{
                height: "calc(100vh - 68px)",
              }}
            >
              <div className="">Right Panel</div>
              <FilterProvider>
                <Filter onFilterChange={onFilterChange} />
                <FilterInfoBar onFilterChange={onFilterChange} />
              </FilterProvider>

              <TextArea
                autoSize
                value="我是一名小红书博主，正在做学习笔记内容的分享，希望通过简单易懂和生动有趣的图文教程帮助零基础小白快速掌握一门知识。请你结合我的账号定位和这本书的第3章内容，按照第3章目录的先后顺序，为我详细讲解每一个知识点，然后帮我整理一份学习笔记。每一个知识点要包括它的定义、大白话理解、代码示例，如果有流程请使用markdown的语法为我画出mermaid流程图，如果使用到了系统内的函数比如 print 函数，请列出它的参数及含义，含义要尽可能的通俗易懂。"
              />
            </div>
          ),
        }}
        bottomPannel={false}
      />
    </>
  );
}

export default App;
