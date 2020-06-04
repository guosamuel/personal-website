import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./css-modules.module.css"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "404"}}, sort: {order: ASC, fields: name}) {
        edges {
          node {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`)

  const cakeID = data.allFile.edges[0].node.childImageSharp.fluid.id
  const cakeImage = data.allFile.edges[0].node.childImageSharp.fluid
  const wheatlyID = data.allFile.edges[1].node.childImageSharp
  const wheatlyImage = data.allFile.edges[1].node.childImageSharp.fluid


  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={styles.errorContainer}>
        <div className={styles.errorNumberContainer}>
          <span>4</span>
          <Img id={wheatlyID} className={styles.errorImage} fluid={wheatlyImage} />
          <span>4</span>
        </div>
        <br/>
        <p className={styles.errorText}>The page is a lie!</p>
        <Img id={cakeID} className={styles.cakeImage} fluid={cakeImage} />
        <p className={styles.errorText}>But good thing this cake isn't!</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
