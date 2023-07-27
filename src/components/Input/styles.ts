import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-left: 1rem;
  }
`;
export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
`;
export const InputContainer = styled.label`
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 4px;
  background: #f5f5f5;
  margin-bottom: 1rem;

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
