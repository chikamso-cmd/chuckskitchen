import React from "react";
import { popularproducts } from "../../components/Constants";
import { Link } from "react-router-dom";

export default function Popular() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularproducts.map((popularproduct) => (
          <Link to="/productdetails" key={popularproduct.id}>
            <div className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3 hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
              <div className="w-fit rounded-md md:w-full md:h-auto">
                {popularproduct.image && (
                  <img
                    src={popularproduct.image}
                    alt={popularproduct.title}
                    className=" rounded-md md:w-full md:h-auto h-40 w-fit"
                  />
                )}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">
                  {popularproduct.title}
                </h2>
                <p>{popularproduct.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-medium">
                    {popularproduct.price}
                  </p>
                  <button className="rounded-full bg-amber-500 text-white px-1.5 cursor-pointer text-center font-medium">
                    +
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
