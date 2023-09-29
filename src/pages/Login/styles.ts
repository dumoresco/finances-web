import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  .form_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 320px;

    .input_group {
      width: 100%;
      input {
        width: 100%;
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid #e5e5e5;
        margin-bottom: 1rem;
      }
    }
    .btn_login {
      width: 100%;
      padding: 1rem;
      border-radius: 4px;
      color: #ffffff;
      background-color: #606ccb;
    }
  }
`;
