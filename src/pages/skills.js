import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "icons"}}) {
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
    }
  `)

  console.log("THIS IS IN THE SKILLS FOLDER", data)

  const icons = data.allFile.edges.map( icon => {
    return (
      <div key={icon.node.id}>
        <Img
          className={styles.icon}
          fluid={icon.node.childImageSharp.fluid}
          alt="Portfolio picture on the index page"
        />
      </div>
    )
  })
  return (
    <Layout>
      <SEO title="Skills" />
      <h1>Skills</h1>
      <p>Skills page</p>
      <div className={styles.user}>
        {icons}
      </div>
      {/*<Img
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        alt="Gatsby icon"
      />*/}
    </Layout>
  )
}

export default Skills
