import React from 'react'
import styles from './css-modules.module.css'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { links } from '../information/footer-links'
import FooterIconLink from './footerIconLink'

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {relativeDirectory: {eq: "footer"}}, sort: {fields: childImageSharp___fluid___originalName, order: ASC}) {
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
  // console.log(data)
  const content = data.allFile.edges.map( (icon,index) => {
    let metaData = icon.node.childImageSharp.fluid

    return (
      <div key={icon.node.childImageSharp.id}>
        <FooterIconLink fluidData={metaData} link={links[index]} />
      </div>
    )

  })

  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerIntro}>Let's Connect!</p>
        {content}
      </div>
    </div>
  )
}

export default Footer
