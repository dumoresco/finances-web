import React from "react";

import { Container } from "./button_root_styles";

interface IButtonRootProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "error" | "success";
  className?: string;
}

const ButtonRoot: React.FC<IButtonRootProps> = ({
  children,
  className,
  variant = "primary",
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest} className={className}>
      {children}
    </Container>
  );
};

export default ButtonRoot;
