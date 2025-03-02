import React from "react";
import Catalog from "./Catalog";
import Chapter1 from "./chapter1";

const PythonAutoMation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <Catalog />

      <div className="flex flex-col gap-40 p-40 rounded-3xl bg-gray-50">
        <h2 className="font-bold text-center text-7xl">第一章</h2>
        <div className="flex items-start gap-40">
          <Chapter1.Card1 />
          <Chapter1.Card2 />
          <Chapter1.Card3 />
          <Chapter1.Card4 />
        </div>
      </div>
    </div>
  );
};

export default PythonAutoMation;
