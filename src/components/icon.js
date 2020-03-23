import React, { useState } from "react"
import Img from "gatsby-image"
import styles from "./css-modules.module.css"

function Icon({ fluidData, altData }){
  const [ hideIcon, setHideIcon ] = useState(false)

  const toggleHideIcon = () => {
    setHideIcon(!hideIcon)
  }

  return (
    <div
      onClick={toggleHideIcon}
      className={styles.icon}
    >
      { hideIcon ?
        <p
          style={{
            textAlign: 'center',
            lineHeight: '200px',
            border: '1px solid black'
          }}
        >
          meep
        </p> :
      <Img
        fluid={fluidData}
        alt={altData}
      />
      }
    </div>
  )
}

export default Icon
