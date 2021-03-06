import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"
import Seo from "./Seo"

const Layout = ({ children, pageTitle, pageDescription, pageMetaImage }) => {
  return (
    <LayoutContainer>
      <Seo
        title={pageTitle}
        description={pageDescription}
        metaImage={pageMetaImage}
      />
      <Header />
      <main className="content-container">{children}</main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(12, minmax(auto, 4rem)) 1fr;
  grid-column-gap: 2rem;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  .content-container {
    grid-column: 2 / span 12;
  }
  @media screen and (max-width: 588px) {
    grid-template-columns: 1rem repeat(6, minmax(auto, 4rem)) 1rem;
    grid-column-gap: 1rem;
    .content-container {
      grid-column: 2 / span 6;
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 398px) {
    grid-template-columns: 0.5rem repeat(6, minmax(auto, 4rem)) 0.5rem;
    grid-column-gap: 0.5rem;
  }
`
