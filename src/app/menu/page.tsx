import React from "react";
import Link from "next/link";
import { MenuType } from "@/types/types";
import { getDataCategories } from "@/utils/getDataCategories";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const MenuPage = async () => {
  const menu: MenuType = await getDataCategories();

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          key={category.id}
          href={`/menu/${category.slug}`}
          style={{ backgroundImage: `url(${category.img}` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-6">{category.desc}</p>
            <button
              className={`hidden 2xl:block bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
              style={{ backgroundColor: `${category.color}` }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
