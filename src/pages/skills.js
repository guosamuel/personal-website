import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./css-modules.module.css"
import SkillIcon from "../components/skillIcon"
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

  const icons = data.allFile.edges.map( (icon,index) => {
    let metaData = icon.node.childImageSharp.fluid
    let name = metaData.originalName

    return (
      <div key={icon.node.childImageSharp.id}>
        <SkillIcon fluidData={metaData} altData={name.substring(3, name.length-4)} link={websiteLinks[index]}/>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Samuel Guo Skills" />
      <div className={styles.skillIconContainer}>
        {icons}
      </div>
    </Layout>
  )
}

export default Skills
