import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(limit: 1) {
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
  return (
    <Layout>
      <SEO title="Skills" />
      <h1>Skills</h1>
      <p>Skills page</p>
      <Img
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
        alt="Gatsby icon"
      />
    </Layout>
  )
}

export default Skills
