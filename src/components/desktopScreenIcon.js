import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function DesktopScreenIcon({ fluidData, altData, link }){
  // const [ hideIcon, setHideIcon ] = useState(false)
  const [ hover, setHover ] = useState(false)

  // const toggleHideIcon = () => {
  //   setHideIcon(!hideIcon)
  // }

  const toggleHover = () => {
    setHover(!hover)
  }

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
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      className={styles.icon}
    >
      <Img
        fluid={fluidData}
        alt={altData}
        className={styles.image}
      />

        <a
          href={link}
          target="_blank"
          style={{ fontSize: '1.25rem', backgroundColor: "white" }}
        >
          {altData}
        </a>

    </div>
  )
}

export default DesktopScreenIcon
