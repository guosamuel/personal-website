import React from 'react'
import styles from './css-modules.module.css'

const Question = ({ question }) => {
  return (
    <div className={`${styles.yours} ${styles.messages}`}>
      <div className={`${styles.message} ${styles.last}`}>
        <p>{question}</p>
      </div>
    </div>
  )
}

export default Question
