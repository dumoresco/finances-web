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
import { firstLetterToUpperCase, formatDate } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  selectIsFetching,
  selectTransactions,
} from "../../redux/reducers/transactions/transaction.reducer";
import { AppDispatch } from "../../redux/store";
import {
  ChevronLeft,
  ChevronRight,
  DessertIcon,
  Pen,
  PenBox,
  Plus,
  Trash,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { Modal } from "react-bootstrap";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
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
  const [showModalNovaTransacao, setShowModalNovaTransacao] = useState(false);
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
    dispatch(
      fetchTransactions({
        year: yearMonthSelected.year,
        month: yearMonthSelected.month,
      })
    );
  }, []);

  const toggleSort = () => {
    if (sort === "asc") {
      setSort("desc");
    } else {
      setSort("asc");
    }
  };

  const yearsMonth = [
    {
      id: 1,
      month: "Janeiro",
      year: 2023,
    },
    {
      id: 2,
      month: "Fevereiro",
      year: 2023,
    },
    {
      id: 3,
      month: "Março",
      year: 2023,
    },
    {
      id: 4,
      month: "Abril",
      year: 2023,
    },
    {
      id: 5,
      month: "Maio",
      year: 2023,
    },
    {
      id: 6,
      month: "Junho",
      year: 2023,
    },
    {
      id: 7,
      month: "Julho",
      year: 2023,
    },
    {
      id: 8,
      month: "Agosto",
      year: 2023,
    },
    {
      id: 9,
      month: "Setembro",
      year: 2023,
    },
    {
      id: 10,
      month: "Outubro",
      year: 2023,
    },
    {
      id: 11,
      month: "Novembro",
      year: 2023,
    },
    {
      id: 12,
      month: "Dezembro",
      year: 2023,
    },
  ];

  // pega o year e mes atual do sistema

  const date = new Date();
  // month no formato long
  const monthName = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );
  const monthId = date.getMonth() + 1;

  const year = date.getFullYear();

  console.log(monthName, year);
  const [yearMonthSelected, setYearMonthSelected] = useState({
    id: monthId,
    month: monthName,
    year: year,
  });

  return (
    <Container>
      <header>
        <h1
          style={{
            width: "100%",
            maxWidth: "230px",
            fontSize: "2rem",
          }}
        >
          {isFetching ? (
            <div className="d-flex">
              <Skeleton width={150} className="me-2" />
              <Skeleton width={50} />
            </div>
          ) : (
            <div>
              <span className="fw-light fs-3">
                {firstLetterToUpperCase(yearMonthSelected.month)} /
              </span>
              <span className="fw-semi  fs-3">{yearMonthSelected.year}</span>
            </div>
          )}
        </h1>
        <div className="d-flex align-items-center yearMounthSelect">
          <ChevronLeft
            color={isFetching || yearMonthSelected.id === 1 ? "#ccc" : "#000"}
            className="pointer"
            onClick={() => {
              if (isFetching) return;
              if (yearMonthSelected.id === 1) return;

              const index = yearsMonth.findIndex(
                (item) => item.id === yearMonthSelected.id
              );
              if (index > 0) {
                setYearMonthSelected(yearsMonth[index - 1]);
              }

              dispatch(
                fetchTransactions({
                  year: yearMonthSelected.year,
                  month: yearMonthSelected.month,
                })
              );
            }}
          />
          <div
            className="mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: "120px",
              color: isFetching ? "#ccc" : "#000",
            }}
          >
            {yearMonthSelected.month + "/" + yearMonthSelected.year}
          </div>
          <ChevronRight
            color={isFetching || yearMonthSelected.id === 12 ? "#ccc" : "#000"}
            className="pointer"
            onClick={() => {
              if (isFetching) return;
              if (yearMonthSelected.id === 12) return;
              const index = yearsMonth.findIndex(
                (item) => item.id === yearMonthSelected.id
              );
              if (index < yearsMonth.length - 1) {
                setYearMonthSelected(yearsMonth[index + 1]);
              }

              dispatch(
                fetchTransactions({
                  year: yearMonthSelected.year,
                  month: yearMonthSelected.month,
                })
              );
            }}
          />
        </div>
        <div className="col-1">
          <Button.Root
            onClick={() => {
              setShowModalNovaTransacao(true);
            }}
          >
            <Button.Text>Novo</Button.Text>
            <Button.Icon icon={Plus} />
          </Button.Root>
        </div>
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
            {!isFetching &&
              !!transactions.length &&
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
              ))}
          </tbody>
        </table>

        <div className="w-100 d-flex justify-content-center align-items-center  p-5">
          {isFetching ? (
            <div className="loader "></div>
          ) : !isFetching && !transactions.length ? (
            <span className="text-muted  fw-normal ">
              Nenhuma transação encontrada
            </span>
          ) : null}
        </div>
      </div>
      {showModalNovaTransacao && (
        <ModalNovaTransacao
          show={showModalNovaTransacao}
          setShow={setShowModalNovaTransacao}
        />
      )}
    </Container>
  );
};

export default Home;

interface IModalNovaTransacaoProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalNovaTransacao: React.FC<IModalNovaTransacaoProps> = ({
  show,
  setShow,
}) => {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-center">
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />{" "}
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />{" "}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />{" "}
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Input
            label="Descrição"
            type={"text"}
            name="description"
            value=""
            icon={Pen}
          />{" "}
        </div>
        <Button.Root type="submit" className="mb-2">
          <Button.Text>Cadastrar</Button.Text>
        </Button.Root>
      </Modal.Body>
    </Modal>
  );
};
