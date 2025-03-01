import {
  Button,
  EditorLayout,
  Input,
  FreeCanvas,
} from "@ant-design/pro-editor";
import { Space } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import type { Viewport } from "reactflow";

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
              addonBefore="选项"
              placeholder="请输入"
              style={{ width: 250 }}
            />
          ),
          extra: (
            <Space>
              <Button type="primary">保存</Button>
              <Button type="dashed">导出</Button>
            </Space>
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
                <Button>按钮</Button>
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
