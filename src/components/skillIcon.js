import React from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function SkillIcon({ fluidData, altData, link }){
  return (
    <div className={styles.iconLinkContainer}>
      <Img
        fluid={fluidData}
        alt={altData}
        className={styles.image}
      />
      <div className={styles.skillLinks}>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {altData}
        </a>
      </div>

    </div>

  )

}

export default SkillIcon
