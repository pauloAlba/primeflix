import "./favoritos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes); //atualiza lista de filmes
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes)); //atualiza localStorage
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Voce não possui nenhum filme salvo</span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
