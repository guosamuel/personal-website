import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectIndex from "../components/projectIndex"

function Projects({data}) {
  // console.log("I AM IN THE PROJECT PAGE", data)
  const allProjectIndexes = data.allMarkdownRemark.nodes.map( project => {
    const { link, demo, title, github, embed } = project.frontmatter
    const { id, excerpt } = project
    return (
      <div key={id}>
        <ProjectIndex
          demo={demo}
          link={link}
          title={title}
          excerpt={excerpt}
          github={github}
          embed={embed}/>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>
      <h2>
        Note: Currently all of these projects are desktop friendly.
        Mobile friendly coming soon!
      </h2>
      <div>{allProjectIndexes}</div>
    </Layout>
  )
}

export const projectIndexQuery = graphql`
  query projectIndexQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
      nodes {
        id
        frontmatter {
          title
          demo
          github
          link
          embed
        }
        excerpt(pruneLength: 1000)
      }
    }
  }
`
export default Projects
