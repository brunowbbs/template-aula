import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

const Auth = () => {
  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    navigate("/home");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>

        <p>Entre com seus dados corretamente para acessar o sistema</p>

        <form onSubmit={submitForm}>
          <input placeholder="Digite seu e-mail" type="email" />
          <input placeholder="Digite sua senha" />

          <button className={styles.button}>Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
