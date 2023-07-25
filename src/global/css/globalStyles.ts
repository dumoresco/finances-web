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
    }


    input, button, textarea{
        font-family: 'Inter', sans-serif;
        border: 0;
        outline: 0;
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


`;
