import React, { useMemo } from "react";
import { Tag, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useFilterContext, FilterCondition } from "./FilterContext";
import { operatorOptions } from "./config";

interface Props {
  onFilterChange?: (conditions: FilterCondition[]) => void;
}

const FilterInfoBar: React.FC<Props> = ({ onFilterChange }) => {
  const { conditions, setConditions } = useFilterContext();

  const submitConditions = useMemo(() => {
    return conditions.filter((item) => item.isSubmit);
  }, [conditions]);

  // 删除筛选条件
  const removeCondition = (id: string) => {
    const resConditions = conditions.filter((condition) => condition.id !== id);
    setConditions(resConditions);
    onFilterChange?.(resConditions);
  };

  if (submitConditions.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-2 p-2 bg-gray-50 rounded border-b">
      <span className="text-sm font-bold text-gring-gray-500">筛选条件:</span>

      <div className="flex flex-wrap flex-1 gap-1 items-center h-full">
        {submitConditions.map((condition) => (
          <Tag
            key={condition.id}
            closable
            onClose={(e) => {
              e.preventDefault();
              removeCondition(condition.id);
            }}
          >
            <div className="inline-flex gap-1 items-center text-sm">
              <span className="text-gray-400">{condition.label}</span>
              <span className="text-gray-400">
                {
                  operatorOptions.find(
                    (item) => item.key === condition.operator
                  )!.label
                }
              </span>
              <span className="font-semibold">
                {condition.valueLabel || "未设置"}
              </span>
            </div>
          </Tag>
        ))}

        <Button
          size="small"
          icon={<DeleteOutlined />}
          className="ml-2"
          onClick={() => {
            setConditions([]);
            onFilterChange?.([]);
          }}
        >
          清空
        </Button>
      </div>
    </div>
  );
};

export default FilterInfoBar;
