import React from "react";

export default function NewAdditionBanner() {
  return (
    <section className=""> 
      <div className="mt-10 w-full image py-20 px-5 md:px-10 text-white relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-gray-900/70 flex flex-col justify-center items-left px-10 ">
          <div>
              <h1 className="font-bold text-[32px] py-4">
                Introducing Our New Menu Additions!
              </h1>
              <p className="font-semibold">
                Explore exciting new dishes, crafted with the freshest <br />{" "}
                ingridients and authentic Nigerian flavours, limited time <br />
                offer!
              </p>
              <button className="bg-orange-500 text-white px-5 py-2 rounded mt-5 cursor-pointer hover:bg-orange-600 transition-colors ease-in-out duration-500 font-medium">
                Discover what's new
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}
