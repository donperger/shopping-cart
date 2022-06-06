import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="store-name">Spuer Random Super Store</div>
      <ul className="nav-list">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <a href="https://github.com/donperger">@donperger</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
