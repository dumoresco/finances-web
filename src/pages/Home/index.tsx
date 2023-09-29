/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";
import Charts from "../../components/Charts";

import { Container } from "./styles";
import {
  faArrowsDownToLine,
  faArrowsUpToLine,
  faChevronDown,
  faChevronUp,
  faEllipsisVertical,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { firstLetterToUpperCase, formatDate } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PayloadAddTransaction } from "../../redux/reducers/transactions/transaction.reducer";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Pen,
  Plus,
  PlusCircle,
} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import { Modal } from "react-bootstrap";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import { Transaction } from "../../types/transactions";
import { useTransactions } from "../../hooks/useTransactions";
import Select from "../../components/Select";
import InputSelect from "../../components/Select";

const Home: React.FC = () => {
  const {
    transactions,
    isFetching,
    toggleSort,
    sort,
    setShowModalNovaTransacao,
    showModalNovaTransacao,
    yearsMonth,
    yearMonthSelected,
    setYearMonthSelected,

    entradas,
    saidas,
    saldo,

    categories,

    setPayloadAddTransaction,
    payloadAddTransaction,
    handleAddTransaction,
  } = useTransactions();

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
            }}
          />
          <div
            className="mx-2 d-flex align-items-center justify-content-center"
            style={{
              width: "150px",
              color: isFetching ? "#ccc" : "#000",
            }}
          >
            {yearMonthSelected.month}/ {yearMonthSelected.year}
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
            }}
          />
        </div>
      </header>
      <div className="charts-container">
        <Charts icon={faWallet} title="Saldo" value={saldo} />
        <Charts icon={faArrowsDownToLine} title="Entradas" value={entradas} />
        <Charts icon={faArrowsUpToLine} title="Saídas" value={saidas} />
      </div>
      <Card className="mt-5 d-flex p-3 align-items-end gap-1 flex-wrap">
        <Input
          required
          label="Descrição"
          type={"text"}
          name="description"
          onChange={(e) => {
            setPayloadAddTransaction({
              ...payloadAddTransaction,
              description: e.target.value,
            });
          }}
          value={payloadAddTransaction.description}
          icon={Pen}
        />
        <Input
          required
          label="Valor"
          type={"number"}
          name="amount"
          onChange={(e) => {
            setPayloadAddTransaction({
              ...payloadAddTransaction,
              amount: Number(e.target.value),
            });
          }}
          value={payloadAddTransaction.amount}
          icon={DollarSign}
        />

        <InputSelect
          name="categoria"
          label="Categoria"
          options={categories}
          selectedId={payloadAddTransaction.category_id}
          onChange={(e: any) => {
            setPayloadAddTransaction({
              ...payloadAddTransaction,
              category_id: e.target.value,
            });
          }}
        />
      </Card>
      <Card className="mt-5">
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
        <div
          className={`w-100  ${
            isFetching || (!isFetching && !transactions.length)
              ? "d-flex  justify-content-center align-items-center  p-5"
              : "d-none"
          }`}
        >
          {isFetching ? (
            <div className="loader "></div>
          ) : !isFetching && !transactions.length ? (
            <span className="text-muted  fw-normal ">
              Nenhuma transação encontrada
            </span>
          ) : null}
        </div>
      </Card>
    </Container>
  );
};

export default Home;
