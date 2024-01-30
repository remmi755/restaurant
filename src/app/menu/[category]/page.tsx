import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/types";
import { getDataCategory } from "@/utils/getDataCategory";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getDataCategory(params.category);
  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/*IMAGE CONTAINER*/}

          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}

          {/*TEXT CONTAINER*/}
          <div className="flex items-center justify-between font-bold">
            <h1 className="uppercase text-2xl p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="group-hover:block hidden uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
