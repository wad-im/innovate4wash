import React from 'react'
import {ThemeProvider} from "styled-components"
import GlobalStyle from './src/GlobalStyles'
import Theme from './src/Theme'

export const wrapRootElement = ({element} )=> (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        {element}
    </ThemeProvider>
)