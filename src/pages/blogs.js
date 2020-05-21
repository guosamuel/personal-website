import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIndex from "../components/blogIndex"
import Pagination from "react-js-pagination";
import styles from './pagination-source-code.css'
// require("bootstrap/less/bootstrap.less");


function Blogs({ data }){
  // console.log("I AM IN THE BLOG PAGE", data)
  // const { edges } = data.allMarkdownRemark
  const [page, setPage] = useState(1)
  /*obsolete
  // const [ leftHover, setLeftHover ] = useState(false)
  // const [ rightHover, setRightHover ] = useState(false)
  */
  // const [hover, setHover] = useState(false)
  const BLOGS_PER_PAGE = 5
  const TOTAL_COUNT = data.allMarkdownRemark.nodes.length
  const totalPages = Math.ceil( TOTAL_COUNT / BLOGS_PER_PAGE)
  // const leftArrows = "<<"
  // const rightArrows = ">>"

  // const toggleHover = () => {
  //   if (page === 0 || page === totalPages - 1) {
  //     setHover(true)
  //   } else {
  //     setHover(!hover)
  //   }
  // }

  /*obsolete
  // const toggleLeftHover = () => {
  //   setLeftHover(!leftHover)
  // }
  //
  // const toggleRightHover = () => {
  //   setRightHover(!rightHover)
  // }
  */

  const handlePageChange = (e) => {
    console.log(e)
    setPage(e)
  }

  const allBlogIndexes = data.allMarkdownRemark.nodes.slice((page-1)*BLOGS_PER_PAGE, page*BLOGS_PER_PAGE).map( blog => {
    const { path, date, title } = blog.frontmatter
    const { id, excerpt } = blog
    return (
      <div key={id} style={{ fontFamily: "sans-serif" }}>
        <BlogIndex path={path} date={date} title={title} excerpt={excerpt}/>
      </div>
    )
  })

  return (
  <Layout>
    <SEO title="Blogs" />
    <div style={{ marginTop: '1.5rem' }}>{allBlogIndexes}</div>
    {/*
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
    */}
    <div style={{ display: 'flex', justifyContent: 'center'}} className={styles}>
      <Pagination
        hideDisabled
        activePage={page}
        itemsCountPerPage={BLOGS_PER_PAGE}
        totalItemsCount={TOTAL_COUNT}
        onChange={handlePageChange}
        pageRangeDisplayed={5}
      />
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
