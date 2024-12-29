import React from "react";
import MenuPosts from "@/components/menuposts/MenuPosts";
import MenuCategories from "@/components/menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className="flex-[2] mt-[60px] hidden lg:block">
      <h2 className="text-gray-500 text-[16px] font-normal">{"What's hot"}</h2>
      <h1 className="text-[28px]">Most Popular</h1>
      <MenuPosts />
      <h2 className="text-gray-500 text-[16px] font-normal">
        Discover by topic
      </h2>
      <h1 className="text-[28px]">Categories</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;
