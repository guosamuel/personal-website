import React from "react"

const BlogIndex = ({ path, date, title, excerpt }) => {
  return (
    <>
    <h3>
      <a href={path} target="_blank" style={{ color: 'blue', fontWeight: "bold" }}>{title}</a>
    </h3>
    <small>Published: {date}</small>
    <br />
    <br />
    <p>{excerpt}</p>

    <hr />
    </>
  )

}

export default BlogIndex
