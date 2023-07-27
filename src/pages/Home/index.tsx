import React, { useEffect, useState } from "react";
import Charts from "../../components/Charts";

import { Container } from "./styles";
import {
  faArrowsDownToLine,
  faArrowsUpToLine,
  faChevronDown,
  faChevronUp,
  faEllipsisVertical,
  faPlus,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  selectIsFetching,
  selectTransactions,
} from "../../redux/reducers/transactions/transaction.reducer";
import { AppDispatch } from "../../redux/store";

export interface Transaction {
  id: number;
  description: string;
  amount: number;
  due_date: string;
  is_recurring: boolean;
  total_installments: number;
  category?: string;
  installments?: {
    id: number;
    transaction_id: number;
    installment_number: number;
    installment_amount: string;
    due_date: string;
    paid: boolean;
  }[];
}
const Home: React.FC = () => {
  const [sort, setSort] = useState("asc");
  const transactions = useSelector(selectTransactions);
  const isFetching = useSelector(selectIsFetching);
  console.log(transactions);

  const saldo = transactions.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const entradas = transactions.reduce(
    (acc, item) => {
      if (item.amount > 0) {
        return acc + item.amount;
      }
      return acc;
    },

    0
  );

  const saidas = transactions.reduce(
    (acc, item) => {
      if (item.amount < 0) {
        return acc + item.amount;
      }
      return acc;
    },

    0
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const toggleSort = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  return (
    <Container>
      <header>
        <button>
          Novo <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <div className="charts-container">
        <Charts icon={faWallet} title="Saldo" value={saldo} />
        <Charts icon={faArrowsDownToLine} title="Entradas" value={entradas} />
        <Charts icon={faArrowsUpToLine} title="Saídas" value={saidas} />
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
                  icon={sort === "asc" ? faChevronDown : faChevronUp}
                />
              </th>
              <th
                onClick={() => {
                  toggleSort();
                }}
              >
                Valor
                <FontAwesomeIcon
                  icon={sort === "asc" ? faChevronDown : faChevronUp}
                />
              </th>
              <th
                onClick={() => {
                  toggleSort();
                }}
              >
                Categoria
                <FontAwesomeIcon
                  icon={sort === "asc" ? faChevronDown : faChevronUp}
                />
              </th>
              <th
                onClick={() => {
                  toggleSort();
                }}
              >
                Data
                <FontAwesomeIcon
                  icon={sort === "asc" ? faChevronDown : faChevronUp}
                />
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {isFetching ? (
              <>
                <td />
                <td />
                <div className="loader m-5"></div>
                <td />
                <td />
              </>
            ) : !isFetching && !transactions.length ? (
              <tr>
                <td />
                <td />
                <td colSpan={5} className="text-muted fw-normal">
                  Nenhuma transação cadastrada
                </td>
                <td />
                <td />
              </tr>
            ) : (
              transactions.map((item: Transaction) => (
                <tr>
                  <td>{item.description}</td>
                  <td className={item.amount < 0 ? "negative" : "positive"}>
                    {item.amount}
                  </td>
                  <td>{item.category}</td>
                  <td>{formatDate(item.due_date)}</td>
                  <td>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Home;
