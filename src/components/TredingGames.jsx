import React, { useEffect } from "react";

export default function TredingGames({ allGames }) {

  return (
    <div className="hidden md:block mt-4 ">
      <h2 className="text-[24px] font-bold uppercase dark:text-white mb-2">
        Trending games
      </h2>
      <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-3 gap-4">
        {allGames.map(
          (item, index) =>
            index < 4 && (
              <div key={index} className="p-2 border rounded-xl group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                <img
                  className="rounded-lg  lg:h-[120px] w-full object-cover "
                  src={item.background_image}
                  alt={item.slug}
                />
                <p className="py-2 text-[14px] font-bold dark:text-white">
                  {item.name}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
}
