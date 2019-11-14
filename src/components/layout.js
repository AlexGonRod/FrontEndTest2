import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import List from "./list"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
        <List />
        <footer style={{
          width: '100%',
          backgroundColor:'white',
          textAlign:'center',
          padding: '5px',
          height: '40px',
          position: 'fixed',
          bottom: 0
        }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </div>
  )
}

export default Layout
