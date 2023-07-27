// formata data para o formato dd/mm/yyyy
export const formatDate = (date: string) => {
  // a data vem no formato yyyy-mm-dd
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
};

export const currencyFormat = (value: number) => {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
