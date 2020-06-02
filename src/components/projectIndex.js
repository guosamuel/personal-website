import React from "react"

import DemoVideo from './demoVideo'
import styles from './css-modules.module.css'
import SEO from './seo'

const ProjectIndex = ({ demo, link, github, title, excerpt, embed, tech }) => {
  const formattedExcerpt = excerpt.split(`\n\n`).map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`).join(``)
  const formattedTech = tech.map(tech => <span className={styles.roundedRectangle}>{tech}</span>)
  return (
    <div>
      <SEO title={title} description={excerpt} />
      <h3>
        {link ? <a href={link} target="_blank" className={styles.title} rel="noreferrer">{title}</a> : title}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: formattedExcerpt }} />
      { embed ? <DemoVideo embed={embed} /> : null}
      <br />
        <div className={styles.madeWith}>Made with:</div>
        <div className={styles.techContainer}>
          {formattedTech}
        </div>
        <div className={styles.projectLinksContainer}>
          { link ? <a href={link} target="_blank" rel="noreferrer">Website</a>: null }
          { github ? <a href={github} target="_blank" rel="noreferrer">Source Code</a>: null}
          { demo ? <a href={demo} target="_blank" rel="noreferrer">Youtube</a> : null}
        </div>
        <br />
      <hr />
    </div>
  )

}

export default ProjectIndex
