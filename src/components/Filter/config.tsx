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
      options: [
        {
          label: "项目1",
          value: "project1",
        },
        {
          label: "项目2",
          value: "project2",
        },
      ],
    },
  },
  {
    key: "status",
    label: "状态",
    formItem: {
      type: FormItemType.CheckboxGroup,
      options: [
        {
          label: "待办",
          value: "todo",
        },
        {
          label: "进行中",
          value: "inProgress",
        },
        {
          label: "已完成",
          value: "done",
        },
      ],
    },
  },
  {
    key: "priority",
    label: "优先级",
    formItem: {
      type: FormItemType.RadioGroup,
      options: [
        {
          label: "紧急",
          value: "urgent'",
        },
        {
          label: "高",
          value: "high",
        },
        {
          label: "中",
          value: "medium",
        },
        {
          label: "低",
          value: "low",
        },
      ],
    },
  },
  {
    key: "tag",
    label: "标签",
    formItem: {
      type: FormItemType.SelectMultiple,
      options: [
        {
          label: "标签1",
          value: "tag1",
        },
        {
          label: "标签2",
          value: "tag2",
        },
        {
          label: "标签3",
          value: "tag3",
        },
      ],
    },
  },
  {
    key: "iteration",
    label: "迭代",
    formItem: {
      type: FormItemType.Select,
      options: [
        {
          label: "迭代1",
          value: "iteration1",
        },
        {
          label: "迭代2",
          value: "iteration2",
        },
        {
          label: "迭代3",
          value: "iteration3",
        },
      ],
    },
  },
  {
    key: "statusPhase",
    label: "状态阶段",
    formItem: {
      type: FormItemType.Select,
      options: [
        {
          label: "计划",
          value: "plan",
        },
        {
          label: "进行中",
          value: "inProgress",
        },
        {
          label: "已完成",
          value: "done",
        },
      ],
    },
  },
  {
    key: "creator",
    label: "创建人",
    formItem: {
      type: FormItemType.UserSelect,
      options: [
        {
          label: "张三",
          value: "zs",
        },
        {
          label: "李四",
          value: "ls",
        },
        {
          label: "王五",
          value: "ww",
        },
      ],
    },
  },
  {
    key: "handler",
    label: "处理人",
    formItem: {
      type: FormItemType.UserSelect,
      options: [
        {
          label: "张三",
          value: "zs",
        },
        {
          label: "李四",
          value: "ls",
        },
        {
          label: "王五",
          value: "ww",
        },
      ],
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
