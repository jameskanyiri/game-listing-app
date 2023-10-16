import React, { useEffect } from "react";

export default function GamesByGenresId({ gamesByGenresId }) {
  useEffect(() => {
    console.log(gamesByGenresId);
  });
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white my-3">
        Popular Games
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {gamesByGenresId.map((item) => (
          <div className="bg-gray-300 dark:bg-gray-600 p-3 rounded-lg group hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <img
              src={item.background_image}
              className="w-full h-[70%] object-cover rounded-md "
            />
            <h2 className="text-[20px] font-bold dark:text-white">
              {item.name}{" "}
              <span className="text-[10px] bg-red-100 p-1 rounded-sm text-red-700">
                {item.metacritic}
              </span>
            </h2>
            <div className="flex justify-between py-2 dark:text-white">
              <h2 className="">⭐ {item.rating} </h2>
              <h2 className=""> 💬 {item.reviews_count} </h2>
              <h2 className="">🔥 {item.suggestions_count}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
