import React from "react"

import SEO from "./seo"
import styles from "./css-modules.module.css"

const BlogIndex = ({ path, date, title, excerpt }) => {
  return (
    <>
      <SEO title={title} description={excerpt} />
      <h3>
        <a
          href={path}
          target="_blank"
          className={`${styles.title} ${styles.blogTitle}`}
          rel="noreferrer"
        >
            {title}
        </a>
      </h3>
      <small>Published: {date}</small>
      <br />
      <br />
      <p>
        {excerpt}
        <a
          href={path}
          target="_blank"
          className={`${styles.title} ${styles.blogRedirect}`}
          rel="noreferrer"
        >
          Read More...
        </a>
      </p>
      <br />
      <hr />
    </>
  )

}

export default BlogIndex
