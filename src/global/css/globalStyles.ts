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
        background-color: #f5f5f5;
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


`;
