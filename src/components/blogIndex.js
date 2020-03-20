import React from "react"

const BlogIndex = ({ path, date, title, excerpt }) => {
  return (
    <>
    <h2>{title}</h2>
    <small>Published: {date}</small>
    <br />
    <br />
    <p>{excerpt}</p>
    <a href={path} target="_blank">Read More</a>
    <hr />
    </>
  )

}

export default BlogIndex
