import React from "react"

const ProjectIndex = ({ demo, link, github, title, excerpt }) => {
  return (
    <>
    <h3>{title}</h3>
    <br />
    <br />
    <p>{excerpt}</p>
    <br />
    <a href={link} target="_blank">Link</a>
    <br />
    <a href={demo} target="_blank">YouTube Demo</a>
    <br />
    <a href={github} target="_blank">Source Code</a>
    <hr />
    </>
  )

}

export default ProjectIndex
