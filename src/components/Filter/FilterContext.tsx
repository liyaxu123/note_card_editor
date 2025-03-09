import React, { createContext, useState, useContext, ReactNode } from "react";

// 表单类型枚举
export enum FormItemType {
  Input = "Input",
  Select = "Select",
  CheckboxGroup = "CheckboxGroup",
  RadioGroup = "RadioGroup",
  SelectMultiple = "SelectMultiple",
  UserSelect = "UserSelect",
}

// 表单项配置
export interface FormItem {
  type: FormItemType; // 表单项类型
  placeholder?: string; // 表单项占位符
  defaultValue?: any; // 表单项默认值
  options?: Array<{ label: string; value: any }>; // 表单项选项，用于Select类型
  render?: () => JSX.Element; // 表单项渲染函数
}

// 筛选条件类型
export interface FilterCondition {
  id: string;
  key: string; // 筛选条件名称对应的key
  operator: string; // 逻辑关系
  value: any; // 筛选条件值
  label: string; // 筛选条件名称
  formItem: FormItem; // 表单项类型
  isSubmit: boolean; // 是否已提交
}

interface FilterContextType {
  conditions: FilterCondition[];
  setConditions: React.Dispatch<React.SetStateAction<FilterCondition[]>>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [conditions, setConditions] = useState<FilterCondition[]>([]);

  return (
    <FilterContext.Provider value={{ conditions, setConditions }}>
      {children}
    </FilterContext.Provider>
  );
};
