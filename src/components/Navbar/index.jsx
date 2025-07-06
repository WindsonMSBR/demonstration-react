import Card from "./components/card";
import Amendoim from "./assets/Amendoim.jpg";
import Chocolate from "./assets/Chocolate.jpg";
import Chantilly from "./assets/Chantilly.jpg";

export default function App() {
  return (
    <>
      <h1>Cards</h1>
      <Card title="Bolinho de chantilly" poster={Amendoim} />
      <Card title="Bolinho de chocolate" poster={Chocolate} />
      <Card title="Bolinho de amendoim" poster={Chantilly} />
    </>
  );
}
