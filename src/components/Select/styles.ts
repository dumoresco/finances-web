import styled from "styled-components";

interface SelectContainerProps {
  required?: boolean;
  value?: any;
  open?: boolean;
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
`;

export const Select = styled.div<SelectContainerProps>`
  border: 1px solid #b9b8b8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 4px;
  background: #f5f5f5;
  position: relative;

  font-size: 0.9rem;

  .error {
    position: absolute;
    color: #c0392b;
    font-size: 0.6rem;
    right: 0;
    bottom: -1rem;
  }
`;

export const Options = styled.div<SelectContainerProps>`
  position: absolute;
  border: 1px solid #b9b8b8;
  overflow: scroll;
  display: ${(props) => (props.open ? "block" : "none")};
  border: 1px solid "#b9b8b8";
  background-color: #f5f5f5;
  top: 50px;
  left: 0;
  border-radius: 4px;
  width: 100%;
  max-height: 300px;
`;

export const Option = styled.div<SelectContainerProps>`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #b9b8b850;
  }
`;
