import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function DesktopScreenIcon({ fluidData, altData, link }){
  // const [ hideIcon, setHideIcon ] = useState(false)
  // const [ hover, setHover ] = useState(false)

  // const toggleHideIcon = () => {
  //   setHideIcon(!hideIcon)
  // }

  // const toggleHover = () => {
  //   setHover(!hover)
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

  // onMouseEnter={toggleHover}
  // onMouseLeave={toggleHover}

  return (
    <div

      className={styles.iconLinkContainer}
    >
      <Img
        fluid={fluidData}
        alt={altData}
        className={styles.image}
      />
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

export default DesktopScreenIcon
