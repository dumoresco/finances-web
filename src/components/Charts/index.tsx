import React from "react";

import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IChartsProps {
  icon: IconProp;
  title: string;
  value: number;
}

const Charts: React.FC<IChartsProps> = ({ icon, title, value }) => {
  return (
    <Container>
      <div className="chart_icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="chart_content">
        <div className="chart_title">{title}</div>
        <div className="chart_value">R$ {value}</div>
      </div>
    </Container>
  );
};

export default Charts;
