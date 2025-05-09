import React from "react";

export interface GridBoxItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function GridBox({ items }: { items: GridBoxItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:w-[60%] gap-10 -ml-7 mx-auto" >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-neutral-900 rounded-md p-6 shadow shadow-neutral-800 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{item.icon}</span>
            <span className="font-semibold text-lg text-neutral-200">{item.title}</span>
          </div>
          <div className="text-neutral-400">{item.description}</div>
          
        </div>
      ))}
    </div>
  );
}
