import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import gitHubIcon from '../img/github-icon-svgrepo-com.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="store-name">Spuer Random Super Store</div>
      <ul className="nav-list">
        <li className="nav-elem">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-elem">
          <Link to="/store">Store</Link>
        </li>
        <li className="nav-elem">
          <a href="https://github.com/donperger">@donperger</a>
          <img className="github-icon" src={gitHubIcon} alt="GitHub icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
