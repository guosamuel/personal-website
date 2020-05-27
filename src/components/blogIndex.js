import React from "react"

const BlogIndex = ({ path, date, title, excerpt }) => {
  return (
    <>
    <h3>
      <a href={path} target="_blank" style={{ color: 'blue', fontWeight: "bold", textDecoration: "none" }}>{title}</a>
    </h3>
    <small>Published: {date}</small>
    <br />
    <br />
    <p>
      {excerpt}
      <a href={path} target="_blank" style={{ color: 'blue', textDecoration: "none", marginLeft: "3px" }}>Read More...</a>
    </p>
    {/*
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
    */}
    <br />
    <hr />
    </>
  )

}

export default BlogIndex
