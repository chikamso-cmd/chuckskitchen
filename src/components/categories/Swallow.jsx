import React from "react";
import { Swallow_Soup } from "../../components/Constants";
import { Link } from "react-router-dom";

export default function Jollof() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5  px-6 md:px-16">
        {Swallow_Soup.map((swallow) => (
          <div
            key={swallow.id}
            className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3 hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <Link
              to={`/productdetails/${swallow.id}`}
              state={{ product: swallow }}
              className="w-full"
            >
              <div className="w-fit rounded-md md:w-full md:h-auto">
                {swallow.image && (
                  <img
                    src={swallow.image}
                    alt={swallow.title}
                    className="w-full"
                    loading="lazy"
                  />
                )}
              </div>
            </Link>
            <div>
              <h2 className="font-bold text-[20px]">{swallow.title}</h2>
              <p>{swallow.description}</p>
              <div className="flex justify-between items-center mt-3">
                <p className="text-orange-500 font-medium">{swallow.price}</p>
                <button className="rounded-full bg-amber-500 text-white px-1.5 cursor-pointer text-center font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
