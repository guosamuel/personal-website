import React from 'react'
import Img from 'gatsby-image'
import styles from "./css-modules.module.css"

const FooterIconLink = ({ fluidData, link}) => {
  return (
    <div className={styles.footerContent}>
      <Img fluid={fluidData} className={styles.footerIcon} />
      { link === "guosamuel1114@gmail.com" ?
      <div className={styles.linkFormat}>{link}</div> :
      <a
        href={link}
        target="_blank"
        className={`${styles.linkFormat} ${styles.socialMediaLink}`}
        rel="noreferrer"
      >{link}
      </a>
    }
    </div>
  )
}

export default FooterIconLink
