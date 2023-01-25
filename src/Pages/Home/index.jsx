import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link} from "react-router-dom"
import "./home.css"

// URL DA API: /movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          page: 1,
        },
      });

      //console.log(response.data.results.slice(0, 10));
      setFilmes(response.data.results.slice(0, 10));
    }

    loadFilmes();
  }, []);

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme)=> {
          return(
            <article key={filme.id}>
              <img width={100} src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
              <br />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
              <br />
              <strong>{filme.title}</strong>
              <br />
              <strong>Data de lançamento: {filme.release_date}</strong>
              <br />             
              <strong>{filme.overview}</strong>
              <hr />
            </article>
          )
        })}
      </div>
      
    </div>
  );
}

export default Home;
