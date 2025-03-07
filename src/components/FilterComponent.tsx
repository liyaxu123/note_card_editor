import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  Checkbox,
  Space,
  Dropdown,
  Menu,
  Divider,
  Tag,
  Row,
  Col,
} from "antd";
import {
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
  CloseOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const { Option } = Select;

// 筛选条件类型
interface FilterCondition {
  id: string;
  type: string;
  operator: string;
  value: any;
  label: string;
}

// 组件属性定义
interface FilterComponentProps {
  onFilterChange?: (conditions: FilterCondition[]) => void;
}

// 筛选条件选项
const filterOptions = [
  { key: "title", label: "标题" },
  { key: "workItem", label: "工作项目" },
  { key: "status", label: "状态" },
  { key: "priority", label: "优先级" },
  { key: "tag", label: "标签" },
  { key: "iteration", label: "迭代" },
  { key: "statusPhase", label: "状态阶段" },
  { key: "creator", label: "创建人" },
  { key: "handler", label: "处理人" },
];

// 逻辑关系选项
const operatorOptions = [
  { key: "contains", label: "包含" },
  { key: "notContains", label: "不包含" },
  { key: "equals", label: "等于" },
  { key: "notEquals", label: "不等于" },
  { key: "startsWith", label: "开头是" },
  { key: "endsWith", label: "结尾是" },
];

// 添加条件菜单项
const additionalOptions = [
  {
    key: "basic",
    label: "基础字段",
    children: [
      { key: "space", label: "空间" },
      { key: "project", label: "项目" },
      { key: "relatedSpace", label: "关联空间" },
      { key: "relatedProject", label: "关联项目" },
      { key: "parentId", label: "父ID" },
    ],
  },
  { key: "personnel", label: "人员" },
  { key: "date", label: "日期" },
  { key: "team", label: "团队规范" },
  { key: "workTime", label: "工时" },
  { key: "schedule", label: "排期" },
  { key: "other", label: "其它条件" },
];

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange,
}) => {
  const [conditions, setConditions] = useState<FilterCondition[]>([
    { id: "1", type: "title", operator: "contains", value: "", label: "标题" },
    {
      id: "2",
      type: "workItem",
      operator: "contains",
      value: "",
      label: "工作项目",
    },
    { id: "3", type: "status", operator: "equals", value: [], label: "状态" },
    {
      id: "4",
      type: "priority",
      operator: "equals",
      value: [],
      label: "优先级",
    },
    {
      id: "5",
      type: "handler",
      operator: "equals",
      value: "李亚旭",
      label: "处理人",
    },
  ]);

  // 添加筛选条件
  const addCondition = (type: string, label: string) => {
    const newCondition: FilterCondition = {
      id: Date.now().toString(),
      type,
      operator: "contains",
      value: "",
      label,
    };
    setConditions([...conditions, newCondition]);
  };

  // 删除筛选条件
  const removeCondition = (id: string) => {
    setConditions(conditions.filter((condition) => condition.id !== id));
  };

  // 更新筛选条件值
  const updateConditionValue = (id: string, value: any) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id ? { ...condition, value } : condition
      )
    );
  };

  // 更新筛选条件类型
  const updateConditionType = (id: string, type: string, label: string) => {
    setConditions(
      conditions.map((condition) =>
        condition.id === id
          ? { ...condition, type, label, value: "" }
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

  // 提交筛选条件
  const submitFilters = () => {
    if (onFilterChange) {
      onFilterChange(conditions);
    }
  };

  // 渲染添加条件下拉菜单
  const renderAddConditionMenu = () => {
    const menuItems = additionalOptions.map((option) => {
      if (option.children) {
        return {
          key: option.key,
          label: option.label,
          children: option.children.map((child) => ({
            key: child.key,
            label: child.label,
            onClick: () => addCondition(child.key, child.label),
          })),
        };
      }
      return {
        key: option.key,
        label: option.label,
        onClick: () => addCondition(option.key, option.label),
      };
    });

    return <Menu items={menuItems} />;
  };
  // 渲染筛选条件
  const renderCondition = (condition: FilterCondition) => {
    switch (condition.type) {
      case "title":
      case "workItem":
      case "tag":
      case "statusPhase":
      case "creator":
      case "space":
      case "project":
      case "relatedSpace":
      case "relatedProject":
        return (
          <Input
            placeholder={`请选择或输入关键字查询`}
            value={condition.value}
            onChange={(e) => updateConditionValue(condition.id, e.target.value)}
            style={{ width: "100%" }}
          />
        );
      case "status":
        return (
          <div className="filter-value-container">
            <Space>
              <Checkbox>待开始</Checkbox>
              <Checkbox>进行中</Checkbox>
              <Checkbox checked>正常结束</Checkbox>
              <Checkbox>异常结束</Checkbox>
            </Space>
          </div>
        );
      case "priority":
        return (
          <div className="filter-value-container">
            <Space>
              <Checkbox>
                <Tag color="red">紧急</Tag>
              </Checkbox>
              <Checkbox checked>
                <Tag color="orange">高</Tag>
              </Checkbox>
              <Checkbox>
                <Tag color="gold">中</Tag>
              </Checkbox>
              <Checkbox>
                <Tag color="blue">低</Tag>
              </Checkbox>
            </Space>
          </div>
        );
      case "handler":
        return (
          <div className="filter-value-container">
            <Space>
              <Tag
                closable
                onClose={() => updateConditionValue(condition.id, "")}
              >
                {condition.value}
              </Tag>
            </Space>
          </div>
        );
      case "iteration":
        return (
          <Select
            placeholder="请选择迭代"
            style={{ width: "100%" }}
            value={condition.value}
            onChange={(value) => updateConditionValue(condition.id, value)}
          >
            <Option value="current">当前迭代</Option>
            <Option value="next">下一迭代</Option>
            <Option value="previous">上一迭代</Option>
          </Select>
        );
      default:
        return (
          <Input
            placeholder={`请输入${condition.label}`}
            value={condition.value}
            onChange={(e) => updateConditionValue(condition.id, e.target.value)}
            style={{ width: "100%" }}
          />
        );
    }
  };

  return (
    <div
      className="filter-component"
      style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
    >
      <style>
        {`
          .filter-condition-row {
            margin-bottom: 12px;
            display: flex;
            align-items: center;
          }
          .filter-label-select .ant-select-selector,
          .filter-operator-select .ant-select-selector {
            text-align: left !important;
          }
          .filter-value-container {
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            padding: 4px 11px;
            min-height: 32px;
            display: flex;
            align-items: center;
            background-color: #fff;
          }
          .filter-value-container:hover {
            border-color: #40a9ff;
          }
          .filter-value-container .ant-tag {
            margin-right: 4px;
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Space>
          <FilterOutlined />
          <span>简单筛选</span>
          <DownOutlined />
        </Space>
        <Space>
          <Button type="link" onClick={() => setConditions([])}>
            全部清空
          </Button>
          <Dropdown overlay={renderAddConditionMenu()} trigger={["click"]}>
            <Button type="primary" ghost icon={<PlusOutlined />}>
              添加条件 <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </div>

      <div className="filter-conditions">
        {conditions.map((condition) => (
          <div key={condition.id} className="filter-condition-row">
            <div style={{ width: "100px", marginRight: "8px" }}>
              <Select
                className="filter-label-select"
                value={condition.type}
                style={{ width: "100px" }}
                onChange={(value) => {
                  const selectedOption = filterOptions.find(
                    (opt) => opt.key === value
                  );
                  if (selectedOption) {
                    updateConditionType(
                      condition.id,
                      value,
                      selectedOption.label
                    );
                  }
                }}
              >
                {filterOptions.map((option) => (
                  <Option key={option.key} value={option.key}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div style={{ width: "100px", marginRight: "8px" }}>
              <Select
                className="filter-operator-select"
                value={condition.operator}
                style={{ width: "100px" }}
                onChange={(value) =>
                  updateConditionOperator(condition.id, value)
                }
              >
                {operatorOptions.map((option) => (
                  <Option key={option.key} value={option.key}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </div>
            <div style={{ flex: 1 }}>{renderCondition(condition)}</div>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={() => removeCondition(condition.id)}
              style={{ marginLeft: "8px" }}
            />
          </div>
        ))}
      </div>

      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <Space>
          <Button>取消</Button>
          <Button type="primary" onClick={submitFilters}>
            确定
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default FilterComponent;
