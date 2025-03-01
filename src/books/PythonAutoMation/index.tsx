import React from "react";
import Catalog from "./Catalog";
import Chapter1 from "./chapter1";

const PythonAutoMation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-40">
      <Catalog />
      <Chapter1.Card1 />
    </div>
  );
};

export default PythonAutoMation;
