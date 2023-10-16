import axios from "axios";

const key = '2e49aa87ca3a4f69b91e0ed124d267c4';

const axiosCreate = axios.create({
    baseURL :  'https://api.rawg.io/api'
});

const getGenreList = axiosCreate.get('/genres?key='+key);
const getGameList = axiosCreate.get('/games?key='+key);
const getGameListByGenreId = (id) => axiosCreate.get('/games?key='+key+'&genres='+id);

export default{
    getGenreList,
    getGameList,
    getGameListByGenreId,
}