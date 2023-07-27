import React from "react";

import { Container } from "./styles";

interface ICardProps {
  children: React.ReactNode;
  className: string;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Card;
