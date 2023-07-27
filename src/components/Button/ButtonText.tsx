import React from "react";

// import { Container } from './styles';

interface IButtonTextProps {
  children: React.ReactNode;
}

const ButtonText: React.FC<IButtonTextProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default ButtonText;
