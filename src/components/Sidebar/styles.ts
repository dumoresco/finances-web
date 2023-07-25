import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100vh;
  border-right: 1px solid #e5e5e5;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 1.2rem;
      font-weight: 400;
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;
  a {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    align-self: stretch;
    font-weight: 400;
    padding: 1rem 0.5rem;
    color: #000000;
    &:hover {
      color: #0000008a;
    }
    span {
      margin-left: 0.5rem;
    }
  }

  .disabled {
    opacity: 0.3;
  }
  .active {
    color: #606ccb;
    border-right: 1px solid #606ccb;

    &:hover {
      color: #524ba9;
    }
  }

  @media (max-width: 768px) {
    .active {
      border-right: none;
    }
  }
`;

export const BtnSair = styled.button`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c1c1c1;
  padding: 0.2rem;
  background-color: transparent;
  &:hover {
    color: #c0392b;
  }
  span {
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;

  border-bottom: 1px solid #e5e5e5;
`;

export const MobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid #e5e5e5;
  }
`;
