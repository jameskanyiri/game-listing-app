import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import GenreList from "../components/GenreList";
import Banner from "../components/Banner";
import TredingGames from "../components/TredingGames";
import GamesByGenresId from "../components/GamesByGenresId";

function HomePage() {
  const [games, setGames] = useState([]);
  const [gamesByGenresId, setGamesByGenresId] = useState([]);
  useEffect(() => {
    getAllGameList();
    getGameListByGenreId(4);
  }, []);

  const getAllGameList = () => {
    GlobalApi.getGameList.then((response) => {
      setGames(response.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
      GlobalApi.getGameListByGenreId(id).then((response)=>{
        setGamesByGenresId(response.data.results);
      });
  }

  return (
    <>
      <div className="grid grid-cols-4 px-3 gap-2 md:px-4">
        <div className=" hidden md:block">
          <GenreList generId={(generId) =>getGameListByGenreId(generId)} />
        </div>
        <div className="col-span-4  md:col-span-3">
          {games?.length > 0 && gamesByGenresId?.length >0 ? 
          <div>
             <Banner gameBanner={games[0]} /> 
             <TredingGames allGames={games}/>
             <GamesByGenresId gamesByGenresId={gamesByGenresId}/>
          </div> 
         

          : null}
         
        </div>
      </div>
    </>
  );
}

export default HomePage;
