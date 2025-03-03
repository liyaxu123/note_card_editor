import React from "react";
import Catalog from "./Catalog";
import Chapter1 from "./chapter1";
import Chapter2 from "./chapter2";

const PythonAutoMation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <Catalog />

      <div className="flex flex-col gap-40 p-40 rounded-3xl bg-gray-50">
        <h2 className="font-bold text-center text-7xl">第 1 章 Python基础</h2>
        <div className="flex items-start gap-40">
          <Chapter1.Card1 />
          <Chapter1.Card2 />
          <Chapter1.Card3 />
          <Chapter1.Card4 />
        </div>
      </div>

      <div className="flex flex-col gap-40 p-40 rounded-3xl bg-gray-50">
        <h2 className="font-bold text-center text-7xl">第 2 章 控制流</h2>
        <div className="flex items-start gap-40">
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
      </div>
    </div>
  );
};

export default PythonAutoMation;
