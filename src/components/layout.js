/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import styles from "./css-modules.module.css"

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
  // style={{
  //   margin: `0 auto`,
  //   maxWidth: window.innerWidth < 2000 ? 960 : 0.8*window.innerWidth,
  //   padding: `0 1.0875rem 1.45rem`,
  //   paddingBottom: '13rem'
  // }}
  return (
    <div style={{ position: 'relative', minHeight: '100vh'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.layout}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
