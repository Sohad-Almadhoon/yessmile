import React from "react";

const Tab = ({
  text,
  onClick,
  icon,
}: {
  text?: string;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onClick}
      className="border-primary border px-2 py-1 rounded-lg font-[600] text-primary hover:bg-primary hover:text-white my-3 focus:bg-primary focus:text-white">
      {icon ? icon : text}
    </button>
  );
};

export default Tab;
