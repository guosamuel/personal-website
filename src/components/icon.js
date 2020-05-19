import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function Icon({ fluidData, altData, link }){
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
      className={styles.icon}
    >
      <Img
        fluid={fluidData}
        alt={altData}
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
      <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem'}}>
        <a
          href={link}
          target="_blank"
          style={{ fontSize: '1.5rem', textDecoration: 'underline', color: 'black'}}
        >
          {altData}
        </a>
      </div>
    </div>
  )
}

export default Icon
