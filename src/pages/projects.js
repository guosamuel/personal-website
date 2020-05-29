import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectIndex from "../components/projectIndex"

function Projects({data}) {
  // console.log("I AM IN THE PROJECT PAGE", data)
  const allProjectIndexes = data.allMarkdownRemark.nodes.map( project => {
    const { link, demo, title, github, embed, tech } = project.frontmatter
    const { id, excerpt } = project
    return (
      <div key={id}>
        <ProjectIndex
          demo={demo}
          link={link}
          title={title}
          excerpt={excerpt}
          github={github}
          embed={embed}
          tech={tech}/>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Projects" />
      {/*
      <h1>Projects</h1>
      <h2>
        Note: Currently all of these projects are desktop friendly.
        Mobile friendly coming soon!
      </h2>
      */}
      <div style={{ marginTop: '1.5rem', fontFamily: "Jura" }}>{allProjectIndexes}</div>
    </Layout>
  )
}

export const projectIndexQuery = graphql`
  query projectIndexQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: fileAbsolutePath, order: ASC}) {
      nodes {
        id
        frontmatter {
          title
          demo
          github
          link
          embed
          tech
        }
        excerpt(pruneLength: 1000)
      }
    }
  }
`
export default Projects
