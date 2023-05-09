import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className="header">
      <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
        <h1>
          <i class="fa-solid fa-shop"></i> E Store
        </h1>
      </Link>
      <Link to={"/logout"}>
        <button className="log_out">Log Out</button>
      </Link>
    </header>
  );
}

export default Header