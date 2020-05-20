import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"
import MobileScreenIcon from "../components/mobileScreenIcon"
import DesktopScreenIcon from "../components/desktopScreenIcon"
import { websiteLinks } from "../information/icon-links"
import MediaQuery from 'react-responsive'

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

    if (window.innerWidth >= 960) {
      return (
        <div key={icon.node.childImageSharp.id}>
          <DesktopScreenIcon fluidData={metaData} altData={name.substring(3, name.length-4)} link={websiteLinks[index]}/>
        </div>
      )
    } else {
      return (
        <div key={icon.node.childImageSharp.id}>
          <MobileScreenIcon fluidData={metaData} altData={name.substring(3, name.length-4)} link={websiteLinks[index]}/>
        </div>
      )
    }
  })

  return (
    <Layout>
      <SEO title="Skills" />
      {/*
      <MediaQuery minDeviceWidth={960}>
        <div className={styles.icon_container}>
          {icons}
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={959}>
        <div className={styles.icon_container}>
          {icons}
        </div>
      </MediaQuery>
      */}
      <div className={styles.icon_container}>
        {icons}
      </div>
    </Layout>
  )
}

export default Skills
