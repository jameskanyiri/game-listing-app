import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

export default function GenreList({generId}) {
  const [genres, setGenres] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((response) => {
    //   console.log(response.data.results);
      setGenres(response.data.results);
    });
  };


  return (
    <div>
      <h2 className="text-[30px] font-extrabold dark:text-white">Genres</h2>
      <div>
        {genres.map((item, index) => (
          <div
            onClick={() => {setActiveIndex(index); generId(item.id)}}
            key={item.id}
            className={`flex items-center mb-2 p-2 gap-2 cursor-pointer hover:bg-gray-300 rounded-md hover:dark:bg-gray-600
            group ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}>
            <img
              src={item.image_background}
              alt={item.slug}
              className={`w-[40px] h-[40px] object-cover rounded-md group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`}
            />
            <p className={`text-[18px] px-2 dark:text-white group-hover:font-bold transition-all ease-out duration-300 ${activeIndex == index ? "font-bold" : null}`}>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
