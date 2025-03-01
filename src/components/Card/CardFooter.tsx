import React from "react";

type Props = {
  title: string;
};

const CardFooter: React.FC<Props> = ({ title }) => {
  return (
    <footer className="bg-[#fff5f5] p-5 text-center border-t-1 border-[#eee]">
      <p className="py-4 text-xl">{title}</p>
    </footer>
  );
};

export default CardFooter;
