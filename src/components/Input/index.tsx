import React from "react";

import { Container, Label, InputContainer } from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string | number;
  icon?: React.ElementType;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  name,
  value,
  className,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <InputContainer>
        {Icon && <Icon size={16} color={"#BDBDBD"} />}
        <input
          defaultValue={rest.defaultValue}
          type={rest.type}
          placeholder={rest.placeholder}
          name={name}
          value={value}
          onChange={rest.onChange}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
