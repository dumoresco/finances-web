import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .container {
    display: flex;
    justify-content: center;

    flex-direction: column;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 2rem 0;

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

      @media (max-width: 768px) {
        flex-direction: column;

        .chart {
          margin-top: 2rem;
        }
      }
    }

    .table-container {
      margin-top: 2rem;
      width: 100%;

      overflow-x: auto;

      table {
        width: 100%;

        border: 1px solid #f2f2f2;
        border-radius: 15px;

        .deposit {
          color: #27ae60;
        }
        .withdraw {
          color: #c0392b;
        }
        th {
          border-bottom: 1px solid #f2f2f2;
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

          td {
            padding: 1rem;
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
  }
`;
