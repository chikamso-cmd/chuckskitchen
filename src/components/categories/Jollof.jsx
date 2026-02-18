import React from 'react'
import {
  JollofRices,
} from "../../components/Constants";

import {Link} from 'react-router-dom'

export default function Jollof() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {JollofRices.map((jollof) => (
          <Link to="/productdetails" key={jollof.id}>
            <div className="bg-white rounded-lg p-2 flex md:flex-col md:p-5 items-center gap-5 py-3 hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out">
              <div className="w-fit rounded-md md:w-full md:h-auto">
                {jollof.image && (
                  <img
                    src={jollof.image}
                    alt={jollof.title}
                    className="w-full"
                  />
                )}
              </div>
              <div>
                <h2 className="font-bold text-[20px]">{jollof.title}</h2>
                <p>{jollof.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-medium">{jollof.price}</p>
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
