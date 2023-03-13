import { useNavigate } from "react-router-dom";
import error from "../assets/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>PLEASE ENTER VALID PAGE URL!!!</h1>
      <img src={error} alt="" />
      <button className="buton" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default NotFound;
