import {
  Button,
  EditorLayout,
  Input,
  FreeCanvas,
} from "@ant-design/pro-editor";
import { MenuUnfoldOutlined, DownloadOutlined } from "@ant-design/icons";
import PythonAutoMation from "./books/PythonAutoMation";

function App() {
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
              onClick={() => {
                alert("导出");
              }}
            >
              导出
            </Button>
          ),
        }}
        footer={false}
        leftPannel={{
          children: <div>Left Pannel</div>,
        }}
        centerPannel={{
          children: (
            <div style={{ height: "calc(100vh - 68px)" }}>
              <FreeCanvas>
                <PythonAutoMation />
              </FreeCanvas>
            </div>
          ),
        }}
        rightPannel={{
          minWidth: 200,
          children: <div>Right Pannel</div>,
        }}
        bottomPannel={false}
      />
    </>
  );
}

export default App;
