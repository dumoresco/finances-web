import React, { useState } from "react";

import { Container, Label, Select, Options, Option } from "./styles";
import { ChevronDown } from "lucide-react";
import { Category } from "../../types/category";
import * as Icons from "lucide-react"; // Importe todos os ícones disponíveis
interface IInputProps {
  label?: string;
  name?: string;
  className?: string;
  options?: Category[];
  selectedId?: number;
  onChange?: (event: any) => void;
}
interface IconProps {
  name: keyof typeof Icons; // Defina o tipo de índice como as chaves do objeto Icons
  size?: number;
  color?: string;
}
const InputSelect: React.FC<IInputProps> = ({
  name,
  label,
  className,
  options,
  selectedId,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Category | null>(
    options?.find((option) => option.id === selectedId) || null
  );

  return (
    <Container className={className}>
      <Label>{label}</Label>
      <Select
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span>{selectedOption?.description || "Selecione"}</span>
        <ChevronDown size={16} color="#b9b8b8" />
        <Options open={open}>
          {options?.map((option) => (
            <Option
              color={option.color}
              key={option.id}
              onClick={(e) => {
                onChange && onChange(e);
                setSelectedOption(option);
                setOpen(false);
              }}
            >
              <div>
                <DynamicIcon
                  name={option.icon}
                  size={16}
                  color={option.color}
                />
                {option.description}
              </div>

              {selectedOption?.id === option.id && (
                <Icons.Check size={16} color={"#5aa75a"} />
              )}
            </Option>
          ))}
        </Options>
      </Select>
    </Container>
  );
};
const DynamicIcon: React.FC<IconProps> = ({
  name,
  size = 16,
  color = "#000",
}) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.error(`Ícone '${name}' não encontrado.`);
    return null;
  }

  return (
    <span className="me-2">
      <IconComponent size={size} color={color} />
    </span>
  );
};

export default InputSelect;
