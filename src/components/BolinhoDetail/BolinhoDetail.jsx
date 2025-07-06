//Rota dinãmica
import { useParams, useNavigate } from "react-router-dom";
import chantillyImg from '../../assets/chantilly.jpg';
import chocolateImg from '../../assets/chocolate.jpg';
import amendoimImg from '../../assets/amendoim.jpg';

const bolinhos = [
  { id: 1, title: "Bolinho de chantilly", img: chantillyImg },
  { id: 2, title: "Bolinho de chocolate", img: chocolateImg },
  { id: 3, title: "Bolinho de amendoim", img: amendoimImg },
];

export default function BolinhoDetail() {
  const { bolinhoId } = useParams();
  const navigate = useNavigate();
  const bolinho = bolinhos.find(b => b.id === Number(bolinhoId));

  if (!bolinho) return <div>Bolinho não encontrado.</div>;

  return (
    <div>
      <h2>{bolinho.title}</h2>
      <img src={bolinho.img} alt={bolinho.title} style={{maxWidth: 300}} />
      <br />
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}