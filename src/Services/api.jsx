// base da URL: https://api.themoviedb.org/3/
// url da api: https://api.themoviedb.org/3/movie/now_playing?api_key=274555bb401109950e516a99135f3e18

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
