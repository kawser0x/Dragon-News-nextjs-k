import Link from "next/link";
import React from "react";

const LeftSidebar = ({ catagories, activeID }) => {
  return (
    <div>
      <h2 className="text-xl font-bold pb-4">All Catagoris</h2>
      <ul className="space-y-1">
        {catagories.news_category.map((c) => {
          return (
            <li
              key={c.category_id}
              className={`${activeID === c.category_id && "bg-purple-400 text-white"} rounded-md   font-bold text-center`}>
              <Link href={`/catagory/${c.category_id}`} className="block p-2 ">{c.category_name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
