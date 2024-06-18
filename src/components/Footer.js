import FooterImg from "../images/logos/littleLemonfooterLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="pd lemon-primary-dark white">
        <div className="d-flex">
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <img className="footer-logo" src={FooterImg} alt="Little lemon footer pic" />
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>SITEMAP</h4>
            <Link className="block" to="/">
              Home
            </Link>
            <Link className="block" to="/">
              About
            </Link>
            <Link className="block" to="/">
              Menu
            </Link>
            <Link className="block" to="/reserve">
              Reservations
            </Link>
            <Link className="block" to="/">
              Order online
            </Link>
            <Link className="block" to="/">
              Login
            </Link>
          </div>
          <div className="col-full col-half col-3rd mb-5 foot-center">
            <h4>CONTACT US</h4>
            <address>
              123 Where Am I Street
              <br />
              No Where, NW 00001
            </address>
            <a className="footer-block" href="tel:+11234567890">
              123&#41;&nbsp;456&#45;7890
            </a>
            <br />
            <a className="footer-block" href="mailto: CSR@littlelemon.com">
              CSR@littlelemon.com
            </a>
          </div>
        </div>
        <div className="col-full foot-center">
          <p>&copy; 2023 Coursera Meta Front-End Developer by Yoon.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;