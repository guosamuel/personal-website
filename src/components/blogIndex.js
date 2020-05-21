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
    <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
      <button
        onClick={() => {window.open(path)}}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          fontFamily: 'sans-serif'
        }}
      >
        Read More
      </button>
    </div>
    <br />
    <hr />
    </>
  )

}

export default BlogIndex
