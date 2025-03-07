import React, { useState } from "react";
import { Button, Popover, Empty, Dropdown, Space, Select, Input } from "antd";
import type { MenuProps } from "antd";
import {
  FilterOutlined,
  PlusCircleOutlined,
  DownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  useFilterContext,
  FilterCondition,
  FormItemType,
} from "./FilterContext";
import { filterOptions, operatorOptions, OperatorEnum } from "./config";

const Filter: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // 筛选条件列表
  const { conditions, setConditions } = useFilterContext();

  // 添加筛选条件
  const handleAddFilterItem: MenuProps["onClick"] = ({ key }) => {
    // 根据key查找对应的筛选条件
    const filterOption = filterOptions.find((item) => item.key === key)!;
    const newCondition = {
      id: Date.now().toString(),
      key,
      operator: OperatorEnum.Contains,
      value: "",
      label: filterOption.label,
      formItem: filterOption.formItem,
    };
    setConditions([...conditions, newCondition]);
  };

  // 取消
  const handleCancle = () => {
    setOpen(false);
  };

  // 渲染对应的表单项
  const renderFormItem = (condition: FilterCondition) => {
    const { formItem } = condition;
    // 如果有自定义渲染函数，则直接调用
    if (formItem.render) return formItem.render();
    switch (formItem.type) {
      case FormItemType.Input:
        return (
          <Input
            placeholder={formItem.placeholder || "请输入"}
            defaultValue={formItem.defaultValue}
          />
        );
      case FormItemType.Select:
        return (
          <Select
            options={formItem.options || []}
            placeholder={formItem.placeholder || "请选择"}
            style={{ width: "100%" }}
          />
        );
      default:
        return <Input placeholder="请输入" />;
    }
  };

  const content = (
    <>
      <div className="w-[560px] flex flex-col gap-2">
        {/* 头部区域 */}
        <div className="flex justify-between items-center h-[32px]">
          <div className="font-bold">简单筛选</div>

          <div className="flex gap-4 justify-center items-center">
            <a className="text-[#1677ff]" onClick={() => setConditions([])}>
              全部清空
            </a>

            <Dropdown
              menu={{ items: filterOptions, onClick: handleAddFilterItem }}
              onOpenChange={(newOpen) => setDropdownOpen(newOpen)}
            >
              <div
                className={`flex gap-1 cursor-pointer ${
                  dropdownOpen ? "text-[#1677ff]" : ""
                }`}
              >
                <PlusCircleOutlined />
                添加条件
                <DownOutlined rotate={dropdownOpen ? 180 : 0} />
              </div>
            </Dropdown>
          </div>
        </div>

        {/* 中间筛选项 */}
        {conditions.length > 0 ? (
          conditions.map((condition) => {
            return (
              <Space.Compact block key={condition.id}>
                {/* 筛选条件名称 */}
                <Select
                  defaultValue={condition.key}
                  style={{ width: "20%" }}
                  options={filterOptions}
                  fieldNames={{
                    label: "label",
                    value: "key",
                  }}
                />

                {/* 逻辑关系选项 */}
                <Select
                  defaultValue={condition.operator}
                  style={{ width: "20%" }}
                  options={operatorOptions}
                  fieldNames={{
                    label: "label",
                    value: "key",
                  }}
                />

                {/* 渲染填值表单 */}
                <div className="flex-1">{renderFormItem(condition)}</div>

                {/* 删除按钮 */}
                <Button icon={<DeleteOutlined />} />
              </Space.Compact>
            );
          })
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="暂无筛选条件，请添加条件"
            className="my-0"
          />
        )}

        {/* 底部按钮区 */}
        <div className="flex gap-2 justify-end items-center">
          <Button onClick={handleCancle}>取消</Button>
          <Button type="primary">确认</Button>
        </div>
      </div>
    </>
  );

  return (
    <Popover
      content={content}
      placement="bottomRight"
      arrow={false}
      trigger={["click"]}
      open={open}
      onOpenChange={(newOpen) => setOpen(newOpen)}
    >
      <Button icon={<FilterOutlined />} size="small" />
    </Popover>
  );
};

export default Filter;
