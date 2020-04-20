import React from "react"
import DemoVideo from './demoVideo'

const ProjectIndex = ({ demo, link, github, title, excerpt, embed }) => {
  return (
    <>
    <h3>{title}</h3>
    <p>{excerpt}</p>
    <br />
    { embed ? <DemoVideo embed={embed} /> : null}
    { link ?
    <div>
      <a href={link} target="_blank">Link</a>
      <br />
    </div> : null }
    { demo ?
      <div>
        <a href={demo} target="_blank">YouTube Demo</a>
        <br />
      </div> : null }
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
