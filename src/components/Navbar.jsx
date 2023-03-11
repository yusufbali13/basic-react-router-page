import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md nb">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <p className="text-light h2">
            <span className="span">Clarusway It School</span> Web Design
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link" aria-current="page">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
