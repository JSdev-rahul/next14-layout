import React from "react";
import TitleCard from "../../components/TitleCard";
import PageCard from "../../components/PageCard";

const Products = () => {
  const PageTitle = "Products";

  return (
    <PageCard>
      <TitleCard {...{ PageTitle }} />
      <div className="grid grid-cols-1 gap-1 gap-y-2 xs:grid xs:grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4">
        {[0, 1, 2, 3, 45, 5, 6, 0,2,3,2,3,2,3,8]?.map((item) => {
          return (
            <div key={item} className="card w-50 h-56 bg-base-100 shadow-xl ">
              <figure className="">
                <img
                  width={200}
                  height={10}
                  src="https://media.istockphoto.com/id/1436061606/photo/flying-colorful-womens-sneaker-isolated-on-white-background-fashionable-stylish-sports-shoe.jpg?s=1024x1024&w=is&k=20&c=anQJwG2c4-ZEqf9BgeIm3ph76JZWSU2-GbOE7b_OzcA="
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="ml-1 line-clamp-1">
                <h2 className="card-title">Shoes!</h2>
                <span className="text-xs">
                  If a dog chews shoes whose shoes does he choose?
                </span>
              </div>
              <div className="flex justify-end items-center mr-2 my-1">
                <button className="text-xs bg-[#22c1c3] text-[#ffffff] p-1 rounded-md">
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </PageCard>
  );
};

export default Products;
