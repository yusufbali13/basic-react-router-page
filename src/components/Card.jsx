import { Link } from "react-router-dom";
import img1 from "../assets/logo_brush.png";
import img2 from "../assets/logo_css.png";
import img3 from "../assets/logo_html.png";

const Card = () => {
  return (
    <div className="cont">
      <div className="cart">
        <Link to="/html">
          <img className="img" src={img3} alt="html" />
        </Link>
        <h5>HTML5 Markup</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="cart">
        <Link to="/css">
          <img className="img" src={img2} alt="css" />
        </Link>
        <h5>CSS3 Styling</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="cart">
        <Link to="/logo">
          <img className="img" src={img1} alt="design" />
        </Link>
        <h5>Graphic Design</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </div>
  );
};

export default Card;
