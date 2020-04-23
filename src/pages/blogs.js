import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIndex from "../components/blogIndex"

function Blogs({ data }){
  // console.log("I AM IN THE BLOG PAGE", data)
  // const { edges } = data.allMarkdownRemark
  const [page, setPage] = useState(0)
  // const [ leftHover, setLeftHover ] = useState(false)
  // const [ rightHover, setRightHover ] = useState(false)
  const [hover, setHover] = useState(false)
  const BLOGSPERPAGE = 5
  const totalPages = Math.ceil(data.allMarkdownRemark.nodes.length / BLOGSPERPAGE)
  const leftArrows = "<<"
  const rightArrows = ">>"

  const toggleHover = () => {
    if (page === 0 || page === totalPages - 1) {
      setHover(true)
    } else {
      setHover(!hover)
    }
  }
  // const toggleLeftHover = () => {
  //   setLeftHover(!leftHover)
  // }
  //
  // const toggleRightHover = () => {
  //   setRightHover(!rightHover)
  // }

  const allBlogIndexes = data.allMarkdownRemark.nodes.slice(page*BLOGSPERPAGE, (page+1)*BLOGSPERPAGE).map( blog => {
    const { path, date, title } = blog.frontmatter
    const { id, excerpt } = blog
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
    <div>
      { page === 0 ?
        null :
        <span
          onClick={() => setPage(page-1)}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          style={{cursor: hover ? `pointer` : null, marginRight: '1rem'}}
        >
          {leftArrows}
        </span>
      }
      <span>Page {page+1} of {totalPages}</span>
      { page === totalPages - 1 ?
        null :
        <span
          onClick={() => setPage(page+1)}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          style={{cursor: hover ? `pointer` : null, marginLeft: '1rem'}}
        >
          {rightArrows}
        </span>
      }
    </div>
  </Layout>
  )
}

// export const blogIndexQuery = graphql`
//   query blogIndexQuery {
//     allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//       edges {
//         node {
//           id
//           frontmatter {
//             date(formatString: "MM-DD-YYYY")
//             path
//             title
//           }
//         excerpt(pruneLength: 1000)
//         }
//       }
//     }
//   }
// `

export const blogIndexQuery = graphql`
  query blogIndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/blogsFromMedium/"}}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MM-DD-YYYY")
          path
        }
        excerpt(pruneLength: 1000)
      }
    }
  }
`

export default Blogs
