import React, { useState, useEffect } from "react";
import {
  Button,
  Popover,
  Empty,
  Dropdown,
  Space,
  Select,
  Input,
  Checkbox,
  Radio,
} from "antd";
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
import {
  filterOptions,
  operatorOptions,
  OperatorEnum,
  FilterOption,
} from "./config";

// 组件属性定义
interface FilterComponentProps {
  onFilterChange?: (conditions: FilterCondition[]) => void;
}

const Filter: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // 筛选条件列表
  const { conditions, setConditions } = useFilterContext();
  // 添加初始状态存储
  const [initialConditions, setInitialConditions] = useState<FilterCondition[]>(
    []
  );

  // 当 Popover 打开时，保存初始状态
  useEffect(() => {
    if (open) {
      setInitialConditions([...conditions]);
    }
  }, [open]);

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
      isSubmit: false, // 默认未提交
    };
    setConditions([...conditions, newCondition]);
  };

  // 删除筛选条件
  const removeCondition = (id: string) => {
    setConditions(conditions.filter((condition) => condition.id !== id));
  };

  // 更新筛选条件类型
  const updateConditionType = (id: string, selectedOption: FilterOption) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id
          ? { ...condition, ...selectedOption, value: "" }
          : condition
      )
    );
  };

  // 更新筛选条件操作符
  const updateConditionOperator = (id: string, operator: string) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id ? { ...condition, operator } : condition
      )
    );
  };

  // 更新筛选条件值
  const updateConditionValue = (id: string, value: any) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id ? { ...condition, value } : condition
      )
    );
  };

  // 渲染对应的表单项
  const renderFormItem = (condition: FilterCondition) => {
    const { formItem, value } = condition;
    // 如果有自定义渲染函数，则直接调用
    if (formItem.render) return formItem.render();
    switch (formItem.type) {
      case FormItemType.Input:
        return (
          <Input
            placeholder={formItem.placeholder || "请输入"}
            defaultValue={value || formItem.defaultValue}
            onChange={(e) => updateConditionValue(condition.id, e.target.value)}
          />
        );
      case FormItemType.Select:
        return (
          <Select
            defaultValue={value || formItem.defaultValue}
            options={formItem.options || []}
            placeholder={formItem.placeholder || "请选择"}
            style={{ width: "100%" }}
            onChange={(value) => updateConditionValue(condition.id, value)}
          />
        );
      case FormItemType.CheckboxGroup:
        return (
          <div className="flex items-center h-full px-[7px] bg-[rgba(0,0,0,0.02)] hover:border-[#4096ff] hover:border">
            <Checkbox.Group
              defaultValue={value || formItem.defaultValue}
              options={formItem.options || []}
              onChange={(value) => updateConditionValue(condition.id, value)}
            />
          </div>
        );
      case FormItemType.RadioGroup:
        return (
          <div className="flex items-center h-full px-[7px] bg-[rgba(0,0,0,0.02)] hover:border-[#4096ff] hover:border">
            <Radio.Group
              defaultValue={value || formItem.defaultValue}
              options={formItem.options || []}
              onChange={(e) =>
                updateConditionValue(condition.id, e.target.value)
              }
            />
          </div>
        );
      case FormItemType.SelectMultiple:
        return (
          <Select
            defaultValue={value || formItem.defaultValue}
            mode="multiple"
            options={formItem.options || []}
            placeholder={formItem.placeholder || "请选择"}
            style={{ width: "100%" }}
            onChange={(value) => updateConditionValue(condition.id, value)}
          />
        );
      case FormItemType.UserSelect:
        return (
          <Select
            defaultValue={value || formItem.defaultValue}
            showSearch
            mode="multiple"
            options={formItem.options || []}
            placeholder={formItem.placeholder || "请选择"}
            style={{ width: "100%" }}
            onChange={(value) => updateConditionValue(condition.id, value)}
          />
        );
      default:
        return (
          <Input
            placeholder="请输入"
            defaultValue={value || formItem.defaultValue}
            onChange={(e) => updateConditionValue(condition.id, e.target.value)}
          />
        );
    }
  };

  // 取消，需要恢复到之前的版本
  const handleCancle = () => {
    // 恢复到初始状态
    setConditions(initialConditions);
    setOpen(false);
  };

  // 提交筛选条件
  const submitFilters = () => {
    // 将所有的筛选条件的 isSubmit 置为 true
    const resConditions = conditions.map((condition) => ({
      ...condition,
      isSubmit: true,
    }));
    console.log(resConditions);
    setConditions(resConditions);
    onFilterChange?.(resConditions);
    setOpen(false);
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
                  onChange={(value) => {
                    const selectedOption = filterOptions.find(
                      (opt) => opt.key === value
                    )!;
                    updateConditionType(condition.id, selectedOption);
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
                  onChange={(value) =>
                    updateConditionOperator(condition.id, value)
                  }
                />

                {/* 渲染填值表单 */}
                <div className="flex-1">{renderFormItem(condition)}</div>

                {/* 删除按钮 */}
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => removeCondition(condition.id)}
                />
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
          <Button type="primary" onClick={submitFilters}>
            确认
          </Button>
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
