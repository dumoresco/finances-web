import React from "react";

import { Container } from "./styles";
import Input from "../../components/Input";
import { Key, LogIn, MailIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const { payloadLogin, setPayloadLogin, handleLogin, isFetching } = useAuth();
  return (
    <Container>
      <div className="form_container">
        <Input
          value={payloadLogin.email}
          onChange={(e) =>
            setPayloadLogin({ ...payloadLogin, email: e.target.value })
          }
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          icon={MailIcon}
          required
        />
        <Input
          value={payloadLogin.password}
          onChange={(e) =>
            setPayloadLogin({ ...payloadLogin, password: e.target.value })
          }
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          icon={Key}
          required
        />
        <Button.Root
          className="mt-2"
          onClick={handleLogin}
          disabled={!payloadLogin.email || !payloadLogin.password || isFetching}
        >
          {isFetching ? (
            <Button.Spinner />
          ) : (
            <>
              {" "}
              <Button.Text>Entrar</Button.Text>
              <Button.Icon icon={LogIn} />
            </>
          )}
        </Button.Root>
          <Link to="/register"  className="mt-2 primary">
            <small>
              Criar uma conta
            </small>
          </Link>
      </div>
    </Container>
  );
};

export default Login;
