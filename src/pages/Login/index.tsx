import React from "react";

import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <div className="form_container">
        <div className="input_group">
          <input type="text" placeholder="Email" />
        </div>
        <div className="input_group">
          <input type="password" placeholder="Senha" />
        </div>
        <button type="submit" className="btn_login">
          Entrar
        </button>
      </div>
    </Container>
  );
};

export default Login;
