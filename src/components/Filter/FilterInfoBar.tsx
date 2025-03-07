import React from "react";
import { Tag } from "antd";
import { useFilterContext } from "./FilterContext";

const FilterInfoBar: React.FC = () => {
  const { conditions } = useFilterContext();

  if (conditions.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 items-center p-2 bg-gray-50 border-b">
      <span className="text-gray-500">筛选条件:</span>
      {conditions.map((condition) => (
        <Tag key={condition.id} color="blue">
          {condition.label}: {condition.value || "未设置"}
        </Tag>
      ))}
    </div>
  );
};

export default FilterInfoBar;
