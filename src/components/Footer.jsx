import { Link } from "react-router-dom";
import logo from "../assets/clarusway_logo.png";

function Footer() {
  return (
    <div>
      <div className="footer">
        <p>Clarusway Web Design, Copyright {new Date().getFullYear()}</p>
        <Link to="https://clarusway.com" target="_blank">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
