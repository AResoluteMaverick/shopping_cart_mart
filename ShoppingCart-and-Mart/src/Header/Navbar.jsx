import { Link } from "react-router-dom";

export default function Navbar () {
    return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/collection">Collection</Link></li>
        <li><Link to="/contact">About Us</Link></li>
      </ul>
    </nav>
    )
}