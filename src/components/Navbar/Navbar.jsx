//Navegação com link
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ marginBottom: 20 }}>
            <Link to="/" style={{ marginRight: 10 }}>Home</Link>
            <Link to="/bolinhos" style={{ marginRight: 10 }}>Bolinhos</Link>
            <Link to="/form" style={{ marginRight: 10 }}>Novo Bolinho</Link>
            <Link to="/card" style={{ marginRight: 10 }}>Card</Link>
            <Link to="/candies">Candies</Link>
        </nav>
    );
}