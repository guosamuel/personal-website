import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogIndex from "../components/blogIndex"
import Pagination from "react-js-pagination";
import styles from './css-modules.module.css'
import paginationStyle from "./pagination-source-code.css"


function Blogs({ data }){
  const [page, setPage] = useState(1)
  const BLOGS_PER_PAGE = 5
  const TOTAL_COUNT = data.allMarkdownRemark.nodes.length
  const totalPages = Math.ceil( TOTAL_COUNT / BLOGS_PER_PAGE)

  const handlePageChange = (e) => {
    setPage(e)
  }

  const allBlogIndexes = data.allMarkdownRemark.nodes.slice((page-1)*BLOGS_PER_PAGE, page*BLOGS_PER_PAGE).map( blog => {
    const { path, date, title } = blog.frontmatter
    const { id, excerpt } = blog
    return (
      <div key={id} className={styles.blogFont}>
        <BlogIndex path={path} date={date} title={title} excerpt={excerpt}/>
      </div>
    )
  })

  return (
  <Layout>
    <SEO title="Samuel Guo Blogs" />
    <div className={styles.blogContainer}>{allBlogIndexes}</div>
    <div className={styles.paginationContainer} >
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
