import { styled } from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    h1 {
      font-size: 2rem;
      font-weight: 500;
    }

    button {
      transition: all 0.2s ease-in-out;
      background: #606ccb;
      border: none;
      border-radius: 4px;
      padding: 0.5rem 1rem;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 0.5rem;
      }

      &:hover {
        background: #525ba9;
      }
    }
  }

  .charts-container {
    width: 100%;
    display: flex;

    margin-top: 2rem;
    @media (max-width: 768px) {
      flex-direction: column;

      .chart {
        margin-top: 2rem;
      }
    }
  }
  .filter_container {
    margin-top: 2rem;
    display: flex;
    align-items: center;

    .select_group {
      margin-left: 1rem;
      select {
        padding: 0.5rem;
        border: 1px solid #e5e5e5;
        border-radius: 8px;
        background-color: #ffffff;
      }
    }

    .input_group {
      display: flex;
      align-items: center;
      border-radius: 8px;
      max-width: 320px;

      border: 1px solid #e5e5e5;

      .input_group_icon {
        margin: 0.5rem;
      }
      input {
        flex: 1;
        margin-right: 1rem;
      }
    }
  }
  .table-container {
    margin-top: 2rem;
    width: 100%;

    overflow-x: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 15px;

    table {
      background-color: #ffffff;
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 15px;

      th {
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: left;
        padding: 1rem;
        color: #828282;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          color: #000000;
        }

        svg {
          margin-left: 0.5rem;
          font-size: 0.7rem;
        }
      }

      tbody > tr {
        font-size: 0.9rem;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        // o ultimo tr , os td nao terao borda
        &:last-child {
          td {
            border-bottom: none;
          }
        }
        td {
          padding: 1rem;
          border-bottom: 1px solid #f2f2f2;
        }
        .see_more_icon {
          cursor: pointer;
          font-size: 0.8rem;

          color: #bebebe;
          &:hover {
            color: #000000;
          }
        }
      }
    }
  }
`;
