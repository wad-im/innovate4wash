import * as React from "react"
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import Program from '../components/Program'

// markup
const IndexPage = () => {
  return (
    <Layout>
        <Hero/>
        <Program/>
    </Layout>
  )
}

export default IndexPage
