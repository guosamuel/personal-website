import React from "react"

const ProjectIndex = ({ demo, link, github, title, excerpt }) => {
  return (
    <>
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <br />
    { link ?
    <div>
    <a href={link} target="_blank">Link</a>
    <br />
    </div>: null }
    { demo ?
      <div>
    <a href={demo} target="_blank">YouTube Demo</a>
    <br />
    </div>: null }
    { github ?
      <div>
    <a href={github} target="_blank">Source Code</a>
    <br />
    </div> : null }
    <hr />
    </>
  )

}

export default ProjectIndex
