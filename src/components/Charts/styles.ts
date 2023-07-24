import { styled } from "styled-components";

export const Container = styled.div`
  border: 1px solid #dadada;
  border-radius: 10px;
  width: 100%;
  padding: 15px 10px;

  display: flex;
  align-items: center;

  & + & {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    & + & {
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  .chart_icon {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #f4f4f4;
  }

  .chart_content {
    margin-left: 10px;

    .chart_title {
      color: #828282;
      font-size: 0.8rem;
      font-weight: 500;
    }
    .chart_value {
      color: #000000;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }
`;
