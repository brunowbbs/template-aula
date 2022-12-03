import React from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  function logout() {
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <Link to="/home">
        <h1>Products</h1>
      </Link>

      <ul>
        <li className={styles.link}>
          <Link to="/home">
            <a>Products</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link to="/contact">
            <a>Contato</a>
          </Link>
        </li>
        <li className={styles.btn_logout} onClick={logout}>
          Sair
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
