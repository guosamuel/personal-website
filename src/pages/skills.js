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
      allFile(filter: {relativeDirectory: {eq: "icons"}}, sort: {fields: childImageSharp___fluid___originalName, order: ASC}) {
        edges {
          node {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)

  console.log("THIS IS IN THE SKILLS FOLDER", data)

  const icons = data.allFile.edges.map( icon => {
    let metaData = icon.node.childImageSharp.fluid
    let name = metaData.originalName
    
    return (
      <div key={icon.node.childImageSharp.id}>
        <Img
          className={styles.icon}
          fluid={metaData}
          alt={name.substring(3, name.length-4)}
        />
      </div>
    )
  })
  return (
    <Layout>
      <SEO title="Skills" />
      <h1>Skills</h1>
      <p>Skills page</p>
      <div className={styles.icon_container}>
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
