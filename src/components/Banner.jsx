import React, { useEffect } from "react";

export default function Banner({ gameBanner }) {
  useEffect(() => {
    // console.log(gameBanner);
  }, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 m-8">
        <h2 className="text-[18px] font-extrabold  text-red-600 mb-2">{gameBanner.name}</h2>
        <button className="bg-red-600 py-2 px-8 rounded-md font-bold text-[20px] text-white">Get now</button>
      </div>
      <div>
        <img
          src={gameBanner.background_image}
          className=" md:h-[400px] object-cover w-full rounded-xl"
          alt=""
        />
      </div>
    </div>
  );
}
