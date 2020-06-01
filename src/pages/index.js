import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./css-modules.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {childImageSharp: {fluid: {originalName: {eq: "portfolio_picture_shorter.jpg"}}}}) {
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

  return(
    <Layout>
      <SEO title="Home" />
      <div className={styles.user}>
        <Img
          className={styles.picture}
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          alt="Portfolio picture on the home page"
        />
        <div className={styles.description}>
          <p className={styles.username}>Hi, Samuel here!</p>
          <p className={styles.excerpt}>
            You came here looking for something. Let’s help you find it.
          </p>
          <br />
          <p>
            Is it my work?
            <Link
              to="/projects"
              className={styles.link}
            >
              Click here!
            </Link>
          </p>
          <p>
            Or is it my skills?
            <Link
              to="/skills"
              className={styles.link}
            >
              Check them out!
            </Link>
          </p>
          <p>
            Perhaps you’re curious about the insight I gathered?
            <Link
              to="/blogs"
              className={styles.link}
            >
              Here are some of my blogs!
            </Link>
          </p>
          <p>
            Maybe more details about me?
            <Link
              to="/about"
              className={styles.link}
            >
              Right this way!
            </Link>
          </p>
          <p>
            Can’t find what you’re looking for? Let’s get in touch so I can help!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
