import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h2>📺 Catálogo de Séries</h2>
      <div className="links">
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/listagem">Listagem</Link>
      </div>
    </nav>
  );
}

export default NavBar;
