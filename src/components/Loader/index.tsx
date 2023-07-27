import React from "react";
interface LoaderProps {
  isFetching: boolean;
}
const Loader: React.FC<LoaderProps> = ({ isFetching }) => {
  return (
    isFetching && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255, 255, 255)",
          color: "#000",
        }}
      >
        Carregando
      </div>
    )
  );
};

export default Loader;
