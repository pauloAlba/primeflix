import { useEffect, useState } from "react";
import api from "../../Services/api"

function Home() {

  const [filmes, setFilmes] = useEffect()

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params:{
          api_key: "274555bb401109950e516a99135f3e18" ,
          language: "pt-BR",
          page: 1,
        }
      })
      console.log(response.data.results)
    }
    loadFilmes()
  }, [])
  return (
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  );
}

export default Home;
