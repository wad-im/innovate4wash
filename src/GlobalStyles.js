import { createGlobalStyle} from "styled-components"

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
        font-family: 'Lato', ui-sans-serif, system-ui,-apple-system, 'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif;
        color: #fff;
        background-color: #023C3C;
    }
    
`


export default GlobalStyle