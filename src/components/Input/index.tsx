import React from "react";

import { Container, Label, InputContainer } from "./styles";
import { Check } from "lucide-react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: React.ElementType;
  className?: string;
}

const Input: React.FC<IInputProps> = ({
  name,
  label,
  className,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <InputContainer required={rest.required} value={rest.value}>
        {Icon && <Icon size={16} color={"#b9b8b8"} />}
        <input
          required={rest.required}
          defaultValue={rest.defaultValue}
          type={rest.type}
          placeholder={rest.placeholder}
          name={name}
          value={rest.value}
          onChange={rest.onChange}
          {...rest}
        />
      </InputContainer>
    </Container>
  );
};

export default Input;
