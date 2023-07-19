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
    main{
        height: 100%;
        width: 100%;
        padding: 20px;
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

    .container{
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 20px;

    }


`;
