import "./styles.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import homeIcon from "../../assets/home.svg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <div className="rr-home-navigation-container">
          <div className="rr-home-links">
            <NavLink to="/home">Início</NavLink>
            <NavLink to="/products">Produtos</NavLink>
            <NavLink to="/about">Sobre nós</NavLink>
          </div>
          <div className="rr-home-icon-container">
            <Link to="/">
              <img src={homeIcon} alt="Home" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
