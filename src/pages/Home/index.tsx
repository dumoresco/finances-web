import React, { useState } from "react";
import Charts from "../../components/Charts";

import { Container } from "./styles";
import {
  faArrowDown,
  faArrowUp,
  faArrowsDownToLine,
  faArrowsUpToLine,
  faBarsStaggered,
  faEllipsisVertical,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/utils";

const Home: React.FC = () => {
  const [sort, setSort] = useState("asc");
  const data = [
    {
      descricao: "Compra de mantimentos",
      valor: 50.25,
      categoria: "Alimentacao",
      data: "2023-07-24",
    },
    {
      descricao: "Pagamento de conta de energia",
      valor: 120.75,
      categoria: "Contas",
      data: "2023-07-25",
    },
    {
      descricao: "Compras de roupas",
      valor: 200.0,
      categoria: "Vestuario",
      data: "2023-07-26",
    },
    {
      descricao: "Gasolina para o carro",
      valor: -80.0,
      categoria: "Transporte",
      data: "2023-07-27",
    },
    {
      descricao: "Jantar em restaurante",
      valor: 75.5,
      categoria: "Alimentacao",
      data: "2023-07-28",
    },
    {
      descricao: "Assinatura de streaming",
      valor: 15.0,
      categoria: "Entretenimento",
      data: "2023-07-29",
    },
    {
      descricao: "Presente para amigo",
      valor: -30.0,
      categoria: "Outros",
      data: "2023-07-30",
    },
    {
      descricao: "Material de escritorio",
      valor: 50.0,
      categoria: "Trabalho",
      data: "2023-07-31",
    },
    {
      descricao: "Curso online",
      valor: 100.0,
      categoria: "Educacao",
      data: "2023-08-01",
    },
    {
      descricao: "Compras de frutas",
      valor: 35.0,
      categoria: "Alimentacao",
      data: "2023-08-02",
    },
  ];
  const toggleSort = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  return (
    <Container>
      <div className="container">
        <header>
          <div>
            <h1>Versonanças</h1>
          </div>
          <button>
            Novo <FontAwesomeIcon icon={faPlus} />
          </button>
        </header>
        <div className="charts-container">
          <Charts icon={faWallet} title="Saldo" value={1000} />
          <Charts icon={faArrowsDownToLine} title="Entradas" value={1500} />
          <Charts icon={faArrowsUpToLine} title="Saídas" value={500} />
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th
                  onClick={() => {
                    toggleSort();
                  }}
                >
                  Descrição
                  <FontAwesomeIcon
                    icon={sort === "asc" ? faArrowDown : faArrowUp}
                  />
                </th>
                <th
                  onClick={() => {
                    toggleSort();
                  }}
                >
                  Valor
                  <FontAwesomeIcon
                    icon={sort === "asc" ? faArrowDown : faArrowUp}
                  />
                </th>
                <th
                  onClick={() => {
                    toggleSort();
                  }}
                >
                  Categoria
                  <FontAwesomeIcon
                    icon={sort === "asc" ? faArrowDown : faArrowUp}
                  />
                </th>
                <th
                  onClick={() => {
                    toggleSort();
                  }}
                >
                  Data
                  <FontAwesomeIcon
                    icon={sort === "asc" ? faArrowDown : faArrowUp}
                  />
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.descricao}>
                  <td>{item.descricao}</td>
                  <td className={item.valor > 0 ? "deposit" : "withdraw"}>
                    R${item.valor}
                  </td>
                  <td>{item.categoria}</td>
                  <td>{formatDate(item.data)}</td>
                  <td className="see_more_icon">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Home;
