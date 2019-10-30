import React from "react"
import { Link } from "gatsby"
import { Character } from "../components/character"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Character />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
