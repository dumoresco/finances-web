import React from "react";
import Charts from "../../components/Charts";

import { Container } from "./styles";
import {
  faArrowUpRightFromSquare,
  faArrowsDownToLine,
  faArrowsUpToLine,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <Charts icon={faWallet} title="Saldo" value={1000} />
        <Charts icon={faArrowsDownToLine} title="Entradas" value={1500} />
        <Charts icon={faArrowsUpToLine} title="Saídas" value={500} />
      </div>
    </Container>
  );
};

export default Home;
