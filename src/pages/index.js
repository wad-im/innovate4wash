import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Program from "../components/Program"
import SponsorsAndPartners from "../components/SponsorsAndPartners"
import CovidNotice from "../components/CovidNotice"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <CovidNotice />
      <SponsorsAndPartners />
      <Program />
    </Layout>
  )
}

export default IndexPage
