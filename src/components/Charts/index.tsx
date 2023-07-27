import React from "react";

import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { currencyFormat } from "../../utils/utils";
import { selectIsFetching } from "../../redux/reducers/transactions/transaction.reducer";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import { Eye, EyeOff } from "lucide-react";
interface IChartsProps {
  icon: IconProp;
  title: string;
  value: number;
}

const Charts: React.FC<IChartsProps> = ({ icon, title, value }) => {
  const [seeValue, setSeeValue] = React.useState<boolean>(true);
  const isFetching = useSelector(selectIsFetching);

  const toggleSeeValue = () => {
    setSeeValue(!seeValue);
  };

  const Icone = seeValue ? EyeOff : Eye;

  return (
    <Container>
      {isFetching ? (
        <Skeleton width={50} height={50} />
      ) : (
        <div
          className={`chart_icon ${
            title === "Entradas"
              ? "positive-bg"
              : title === "Saídas"
              ? "negative-bg"
              : "neutral-bg"
          }`}
        >
          <FontAwesomeIcon icon={icon} color={"#FFFFFF"} />
        </div>
      )}

      <div className="chart_content">
        <div className="chart_title">
          {isFetching ? (
            <Skeleton width={50} height={20} />
          ) : (
            <>
              <div className="d-flex align-items-center">
                {title}
                <Icone
                  className="ms-1 pointer"
                  size={16}
                  onClick={toggleSeeValue}
                />
              </div>
            </>
          )}
        </div>
        <span
          className={`chart_value ${
            title === "Entradas"
              ? "positive"
              : title === "Saídas"
              ? "negative"
              : "neutral"
          }`}
        >
          {isFetching ? (
            <Skeleton width={150} />
          ) : seeValue ? (
            currencyFormat(value)
          ) : (
            "********"
          )}
        </span>
      </div>
    </Container>
  );
};

export default Charts;
