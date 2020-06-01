import React from "react"
import styles from "./css-modules.module.css"

const BlogIndex = ({ path, date, title, excerpt }) => {
  return (
    <>
      <h3>
        <a href={path} target="_blank" className={`${styles.blogLinkFormat} ${styles.blogTitle}`}>{title}</a>
      </h3>
      <small>Published: {date}</small>
      <br />
      <br />
      <p>
        {excerpt}
        <a href={path} target="_blank" className={`${styles.blogLinkFormat} ${styles.blogRedirect}`}>Read More...</a>
      </p>
      <br />
      <hr />
    </>
  )

}

export default BlogIndex
