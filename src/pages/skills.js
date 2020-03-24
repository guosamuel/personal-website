import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"
import Icon from "../components/icon"
import { websiteLinks } from "../information/icon-links"

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

  console.log("THIS IS IN THE SKILLS FOLDER", websiteLinks)

  const icons = data.allFile.edges.map( (icon,index) => {
    let metaData = icon.node.childImageSharp.fluid
    let name = metaData.originalName

    return (
      <div key={icon.node.childImageSharp.id}>
        <Icon fluidData={metaData} altData={name.substring(3, name.length-4)} link={websiteLinks[index]}/>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Skills" />
      <p
        style={{
          fontSize: '1.5rem',
          textAlign: 'center'
        }}
      >
        Not sure what the icons mean? Click on them for more information!
      </p>
      <div className={styles.icon_container}>
        {icons}
      </div>
    </Layout>
  )
}

export default Skills
