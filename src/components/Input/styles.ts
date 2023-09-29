import styled from "styled-components";

interface InputContainerProps {
  required?: boolean;
  value?: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
`;
export const InputContainer = styled.div<InputContainerProps>`
  border: 1px solid
    ${(props) => (props.required && !props.value ? "#b9b8b8" : "#27ae60")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 4px;
  background: #f5f5f5;
  margin-bottom: 1rem;
  position: relative;

  .error {
    position: absolute;
    color: #c0392b;
    font-size: 0.6rem;
    right: 0;
    bottom: -1rem;
  }

  input {
    border: 0;
    outline: 0;
    font-size: 0.9rem;
    font-weight: 400;
    width: 100%;
    background: transparent;
    margin-left: 0.5rem;
  }
`;
