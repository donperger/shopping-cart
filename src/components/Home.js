import '../styles/Home.css';
import homeImg from '../img/jomjakkapat-parrueng-qaUMOLJwb48-unsplash.jpg';

const Home = () => {
  return (
    <div className="home-comp">
      <div className="welcome-text">
        Welcome to Super Random Super Store! Check out our deals, and grab what you need!
      </div>
      <div className="home-img-cont">
        <img className="home-img" src={homeImg} alt="Man in a shopping cart" />
        <div className="photo-credit">Photo by Jomjakkapat Parrueng on Unsplash</div>
      </div>
    </div>
  );
};

export default Home;
