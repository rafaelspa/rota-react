import "./styles.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div className="rr-products-navigation-container">
        <div className="rr-products-links">
          <NavLink to="computers">Computadores</NavLink>
          <NavLink to="electronics">Eletrônicos</NavLink>
          <NavLink to="books">Livros</NavLink>
        </div>
      </div>
      <section className="rr-products-body-section">
        <Outlet />
      </section>
    </>
  );
}
