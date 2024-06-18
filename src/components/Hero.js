import { Link } from "react-router-dom";
import heroImage from "../images/logos/LittleLemonHero.jpg"; // Replace with actual path to your image

const Hero = () => {
  return (
    <section id="hero" className="container">
      <div className="ml-3">
        <div className="info white pd w-75">
          <h1 className="lemon-primary-lemon">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link className="txt-dec-none" to="reserve">
            <button className="reserve-btn">Reserve</button>
          </Link>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="Restaurant" className="img-fluid hero"/>
      </div>
    </section>
  );
};

export default Hero;