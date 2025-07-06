//Rota aninhada
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import BolinhoForm from "../BolinhoForm/BolinhoForm";

export default function BolinhoList() {
  const [bolinhos, setBolinhos] = useState([
    { id: 1, title: "Bolinho de chantilly", img: "/imagens/chantilly.jpg" },
    { id: 2, title: "Bolinho de chocolate", img: "/imagens/chocolate.jpg" },
    { id: 3, title: "Bolinho de amendoim", img: "/imagens/amendoim.jpg" },
  ]);

  function adicionarBolinho({ nome, sabor }) {
    setBolinhos([
      ...bolinhos,
      { id: Date.now(), title: `${nome} (${sabor})` }
    ]);
  }

  const { bolinhoId } = useParams();

  return (
    <div>
      <h2>Lista de Bolinhos</h2>
      <BolinhoForm onAdd={adicionarBolinho} />
      <ul>
        {bolinhos.map(bolinho => (
          <li key={bolinho.id}>
            {bolinhoId
              ? <span style={{ color: "gray", cursor: "default" }}>{bolinho.title}</span>
              : <Link to={`${bolinho.id}`}>{bolinho.title}</Link>
            }
          </li>
        ))}
      </ul>
      <Outlet context={[bolinhos]} />
    </div>
  );
}