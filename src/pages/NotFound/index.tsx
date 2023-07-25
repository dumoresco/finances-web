import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <p>Página em desenvolvimento...</p>
      <Link
        style={{
          textDecoration: "underline",
          color: "#0a28d1",
        }}
        to="/"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};
