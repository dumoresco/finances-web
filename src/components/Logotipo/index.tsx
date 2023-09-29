import React from "react";

import { BadgeDollarSign } from "lucide-react";
import { Container } from "./styles";

const Logotipo: React.FC = () => {
  return (
    <Container>
      <BadgeDollarSign />
      <span>Meu dinheirinho</span>
    </Container>
  );
};

export default Logotipo;
