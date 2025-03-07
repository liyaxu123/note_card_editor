import { FormItemType, FormItem } from "./FilterContext";

export interface FilterOption {
  key: string; // 筛选条件名称对应的key
  label: string; // 筛选条件名称
  formItem: FormItem; // 表单项类型
}

// 逻辑关系枚举
export enum OperatorEnum {
  Contains = "contains",
  NotContains = "notContains",
  Equals = "equals",
  NotEquals = "notEquals",
  StartsWith = "startsWith",
  EndsWith = "endsWith",
}

export interface OperatorOption {
  key: OperatorEnum;
  label: string;
}

// 筛选条件选项
export const filterOptions: FilterOption[] = [
  {
    key: "title",
    label: "标题",
    formItem: {
      type: FormItemType.Input,
      placeholder: "请输入标题",
    },
  },
  {
    key: "workItem",
    label: "工作项目",
    formItem: {
      type: FormItemType.Select,
    },
  },
  {
    key: "status",
    label: "状态",
    formItem: {
      type: FormItemType.CheckboxGroup,
    },
  },
  {
    key: "priority",
    label: "优先级",
    formItem: {
      type: FormItemType.RadioGroup,
    },
  },
  {
    key: "tag",
    label: "标签",
    formItem: {
      type: FormItemType.SelectMultiple,
    },
  },
  {
    key: "iteration",
    label: "迭代",
    formItem: {
      type: FormItemType.Select,
    },
  },
  {
    key: "statusPhase",
    label: "状态阶段",
    formItem: {
      type: FormItemType.Select,
    },
  },
  {
    key: "creator",
    label: "创建人",
    formItem: {
      type: FormItemType.UserSelect,
    },
  },
  {
    key: "handler",
    label: "处理人",
    formItem: {
      type: FormItemType.UserSelect,
    },
  },
];

// 逻辑关系选项
export const operatorOptions: OperatorOption[] = [
  { key: OperatorEnum.Contains, label: "包含" },
  { key: OperatorEnum.NotContains, label: "不包含" },
  { key: OperatorEnum.Equals, label: "等于" },
  { key: OperatorEnum.NotEquals, label: "不等于" },
  { key: OperatorEnum.StartsWith, label: "开头是" },
  { key: OperatorEnum.EndsWith, label: "结尾是" },
];
