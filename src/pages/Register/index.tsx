import React from "react";

import { Container } from "./styles";
import Input from "../../components/Input";
import { Check, Key, LogIn, MailIcon, User } from "lucide-react";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const { payloadRegister, setPayloadRegister, handleRegister } = useAuth();
  return (
    <Container>
      <div className="form_container">
        <Input
          value={payloadRegister.name}
          onChange={(e) =>
            setPayloadRegister({ ...payloadRegister, name: e.target.value })
          }
          name="nome"
          type="text"
          placeholder="Digite seu nome"
          icon={User}
          required
        />
        <Input
          value={payloadRegister.email}
          onChange={(e) =>
            setPayloadRegister({ ...payloadRegister, email: e.target.value })
          }
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          icon={MailIcon}
          required
        />

        <Input
          value={payloadRegister.password}
          onChange={(e) =>
            setPayloadRegister({ ...payloadRegister, password: e.target.value })
          }
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          icon={Key}
          required
        />
        <Button.Root
          className="mt-2"
          onClick={handleRegister}
          disabled={
            !payloadRegister.name ||
            !payloadRegister.email ||
            !payloadRegister.password
          }
        >
          <Button.Text>Cadastrar</Button.Text>
          <Button.Icon icon={Check} />
        </Button.Root>
          <Link to="/login"  className="mt-2 primary">
            <small>
              Entrar na minha conta 
            </small>
          </Link>
      </div>
    </Container>
  );
};

export default Register;
