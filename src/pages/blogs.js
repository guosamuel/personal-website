import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIndex from "../components/blogIndex"

function Blogs({ data }){
  const { edges } = data.allMarkdownRemark
  console.log(edges)
  const allBlogIndexes = edges.map( blog => {
    const { path, date, title } = blog.node.frontmatter
    const { id, excerpt } = blog.node
    return (
      <div key={id}>
        <BlogIndex path={path} date={date} title={title} excerpt={excerpt}/>
      </div>
    )
  })

  return (
  <Layout>
    <SEO title="Blogs" />
    <h1>Blogs</h1>
    <div>{allBlogIndexes}</div>
  </Layout>
  )
}

export const blogIndexQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
export default Blogs
