import React from 'react'
import styles from './css-modules.module.css'

const DemoVideo = ({ embed, title }) => {
  return (
    <div className={styles.iframeContainer}>
      <iframe
        width='100%'
        height='100%'
        src={embed}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        title={title}
      >
      </iframe>
    </div>
  )
}

export default DemoVideo
