import { useState, useEffect } from "react";
import {
  PayloadAddTransaction,
  addTransaction,
  fetchTransactions,
  selectIsFetching,
  selectTransactions,
} from "../redux/reducers/transactions/transaction.reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";

export const useTransactions = () => {
  const [showModalNovaTransacao, setShowModalNovaTransacao] = useState(false);
  const [sort, setSort] = useState("asc");
  const transactions = useSelector(selectTransactions);
  const isFetching = useSelector(selectIsFetching);

  const [payloadAddTransaction, setPayloadAddTransaction] =
    useState<PayloadAddTransaction>({
      description: "",
      amount: 0,
      due_date: "",
    });

  const date = new Date();
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);
  const monthId = date.getMonth() + 1;
  const year = date.getFullYear();
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
  const handleFetchTransactions = () => {
    dispatch(
      fetchTransactions({
        year: yearMonthSelected.year,
        month: yearMonthSelected.id,
      })
    );
  };

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

  const [yearMonthSelected, setYearMonthSelected] = useState({
    id: monthId,
    month: monthName,
    year: year,
  });

  const handleAddTransaction = () => {
    dispatch(addTransaction(payloadAddTransaction));

    setShowModalNovaTransacao(false);
  };

  // quando o yearMonthSelected mudar, chama o fetchTransactions
  useEffect(() => {
    handleFetchTransactions();
  }, [yearMonthSelected]);

  return {
    transactions,
    isFetching,
    handleFetchTransactions,
    toggleSort,
    sort,
    setShowModalNovaTransacao,
    showModalNovaTransacao,
    yearsMonth,
    handleAddTransaction,
    yearMonthSelected,
    setYearMonthSelected,

    payloadAddTransaction,
    setPayloadAddTransaction,

    saldo,
    entradas,
    saidas,
  };
};
