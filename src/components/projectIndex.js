import React from "react"
import DemoVideo from './demoVideo'
import styles from './css-modules.module.css'

const ProjectIndex = ({ demo, link, github, title, excerpt, embed }) => {
  console.log(excerpt)
  const formattedExcerpt = excerpt.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``)
  // console.log(formattedExcerpt)
  return (
    <>
      <h3>
        {link ? <a href={link} target="_blank" className={styles.titleLink}>{title}</a> : title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: formattedExcerpt }} />
      {/*<p>{excerpt}</p>*/}
      { embed ? <DemoVideo embed={embed} /> : null}
      <br />
      {/*
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
        */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          { link ? <a href={link} target="_blank">Website</a>: null }
          { github ? <a href={github} target="_blank">Source Code</a>: null}
          { demo ? <a href={demo} target="_blank">Youtube</a> : null}
        </div>
        <br />
      <hr />
    </>
  )

}

export default ProjectIndex
