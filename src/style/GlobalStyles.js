import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body, html {
        /* font-family: 'Lato', ui-sans-serif, system-ui,-apple-system, 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif; */
        color: #fff;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background-color: #023C3C;
        font-size: clamp(17px, 1.25vw, 19px);
    }
    h1 {
        font-size: 3.052rem;
        line-height: 1.1;
        font-weight: 900;
    }
    h2 {
        font-size: 2.441rem;
        line-height: 1.3;
        font-weight: 700;
    }
    h3 {
        font-size: 1.953rem;
        line-height: 1.4;
        font-weight: 700;
    }
    h4 {
        font-size: 1.563rem;
        line-height: 1.4;
        font-weight: 700;
    }
    h5 {
        font-size: 1.25rem;
        line-height: 1.5;
        font-weight: 700;
    }
    p {
        font-size: 1rem;
        line-height: 1.5;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    button {
        font-size: 1rem;
        font-weight: 400;
        font-family: inherit;
    }
`

export default GlobalStyle
