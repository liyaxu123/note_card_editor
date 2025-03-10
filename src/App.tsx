import {
  Button,
  EditorLayout,
  Input,
  FreeCanvas,
} from "@ant-design/pro-editor";
import { MenuUnfoldOutlined, DownloadOutlined } from "@ant-design/icons";
import PythonAutoMation from "./books/PythonAutoMation";
import domtoimage from "dom-to-image";
// import CustomCard from "./components/CustomCard";
import { Filter, FilterInfoBar, FilterProvider } from "@/components/Filter";

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
          minWidth: 600,
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
            </div>
          ),
        }}
        bottomPannel={false}
      />
    </>
  );
}

export default App;
