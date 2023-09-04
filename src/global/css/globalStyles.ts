// Global styles

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html, #root{
        height: 100%;
        width: 100%;
        font-family: 'Inter', sans-serif;
        background-color: #F5F5F5;
    }


    input, button, textarea{
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        border: 0;
        outline: 0;
    }

    select{
        font-family: 'Inter', sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        border: 0;
        outline: 0;
        appearance: none;
    }

    button{
        cursor: pointer;
        font-size: 1rem;
    }
 
    main {
    overflow: hidden;
    height: 100vh;

    display: flex;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
   
    .container{
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;

    }

      .positive {
        color: #27ae60;
      }
      .negative {
        color: #c0392b;
      }
      .neutral{
        color: #525ba9;

      }
        .positive-bg {
        background-color: #27ae60;
      }
      .negative-bg {
         background-color: #c0392b;
      }

      .neutral-bg{
        background-color: #525ba9;
      }

      .pointer{
        cursor: pointer;
      }

       .type_desactive {
          filter: brightness(0.5);
        }

      .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFFFFF;
    border-bottom-color: #525ba9;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 


          .loader-btn {
    width: 22px;
    height: 22px;
    border: 5px solid #FFFFFF;
    border-bottom-color: #525ba9;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 



    .w-100 {
        width: 100%;
    }
`;
