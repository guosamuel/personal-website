import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function Icon({ fluidData, altData, link }){
  const [ hideIcon, setHideIcon ] = useState(false)

  const toggleHideIcon = () => {
    setHideIcon(!hideIcon)
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
      onClick={toggleHideIcon}
      className={styles.icon}
    >
      <Img
        fluid={fluidData}
        alt={altData}
      />
      { hideIcon ?
        <a
          href={link}
          target="_blank"
          style={{ fontSize: '1.25rem'}}
        >
          {altData}
        </a> :
        null
      }
    </div>
  )
}

export default Icon
