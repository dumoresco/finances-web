import { styled } from "styled-components";
interface ContainerProps {
  variant?: "primary" | "secondary" | "error" | "success";
}
export const Container = styled.button<ContainerProps>`
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.variant === "primary"
      ? "#525ba9"
      : props.variant === "secondary"
      ? "#f5f5f5"
      : props.variant === "error"
      ? "#f44336"
      : props.variant === "success"
      ? "#4caf50"
      : "#525ba9"};

  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
