import React from "react";
import Catalog from "./Catalog";
import Chapter1 from "./chapter1";
// import Chapter2 from "./chapter2";
// import Chapter3 from "./chapter3";
import Chapter4 from "./chapter4";

const PythonAutoMation: React.FC = () => {
  return (
    <div className="flex flex-col gap-40 justify-center items-center">
      <Catalog />

      <div className="flex flex-col gap-40 p-40 bg-gray-50 rounded-3xl">
        <h2 className="text-7xl font-bold text-center">第 1 章 Python基础</h2>
        <div className="flex gap-40 items-start">
          <Chapter1.Card1 />
          <Chapter1.Card2 />
          <Chapter1.Card3 />
          <Chapter1.Card4 />
        </div>
      </div>

      {/* <div className="flex flex-col gap-40 p-40 bg-gray-50 rounded-3xl">
        <h2 className="text-7xl font-bold text-center">第 2 章 控制流</h2>
        <div className="flex gap-40 items-start">
          <Chapter2.Card1 />
          <Chapter2.Card2 />
          <Chapter2.Card3 />
          <Chapter2.Card4 />
          <Chapter2.Card5 />
          <Chapter2.Card6 />
          <Chapter2.Card7 />
          <Chapter2.Card8 />
          <Chapter2.Card9 />
          <Chapter2.Card10 />
          <Chapter2.Card11 />
          <Chapter2.Card12 />
        </div>
      </div> */}

      {/* <div className="flex flex-col gap-40 p-40 bg-gray-50 rounded-3xl">
        <h2 className="text-7xl font-bold text-center">第 3 章 函数</h2>
        <div className="flex gap-40 items-start">
          <Chapter3.Card1 />
          <Chapter3.Card2 />
          <Chapter3.Card3 />
          <Chapter3.Card4 />
          <Chapter3.Card5 />
        </div>
      </div> */}

      <div className="flex flex-col gap-40 p-40 bg-gray-50 rounded-3xl">
        <h2 className="text-7xl font-bold text-center">第 4 章 列表</h2>
        <div className="flex gap-40 items-start">
          <Chapter4.Card1 />
          <Chapter4.Card2 />
          <Chapter4.Card3 />
          <Chapter4.Card4 />
          <Chapter4.Card5 />
          <Chapter4.Card6 />
          <Chapter4.Card7 />
          <Chapter4.Card8 />
          <Chapter4.Card9 />
          <Chapter4.Card10 />
          <Chapter4.Card11 />
          <Chapter4.Card12 />
          <Chapter4.Card13 />
        </div>
      </div>
    </div>
  );
};

export default PythonAutoMation;
