import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function MobileScreenIcon({ fluidData, altData, link }){
  // const [ hideIcon, setHideIcon ] = useState(false)
  //
  // const toggleHideIcon = () => {
  //   setHideIcon(!hideIcon)
  // }

  // <p
  // style={{
  //   textAlign: 'center',
  //   lineHeight: '200px',
  //   border: '1px solid black'
  // }}
  // >
  // meep
  // </p> :

  return (
    <div
      // onClick={toggleHideIcon}
      className={styles.iconLinkContainer}
    >
      <Img
        fluid={fluidData}
        alt={altData}
        className={styles.image}
      />
      {/* hideIcon ?
        <a
          href={link}
          target="_blank"
          style={{ fontSize: '1.25rem'}}
        >
          {altData}
        </a> :
        null
      */}
      <div className={styles.skillLinks}>
        <a
          href={link}
          target="_blank"
        >
          {altData}
        </a>
      </div>
    </div>
  )
}

export default MobileScreenIcon
