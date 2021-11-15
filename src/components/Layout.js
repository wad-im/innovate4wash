import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const Layout = ({children})=>{
    return (
        <LayoutContainer>
            <Header/>
            <main className='content-container'>
                {children}
            </main>
            <Footer/>
        </LayoutContainer>
    )
}

export default Layout

const LayoutContainer = styled.div`
    
`

