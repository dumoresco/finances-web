import React from "react";

import { Container, Label, InputContainer } from "./styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  icon?: React.ElementType;
}

const Input: React.FC<IInputProps> = ({
  label,
  name,
  value,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        {Icon && <Icon size={16} color={"#BDBDBD"} />}
        <input
          type="text"
          placeholder={rest.placeholder}
          name={name}
          value={value}
          {...rest}
          onChange={rest.onChange}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
