import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/style/GlobalStyles"
import Theme from "./src/style/Theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
