import React from 'react'
import styles from "./css-modules.module.css"

const Question = ({ question }) => {
  return (
    <div className={styles.question}>
      <p>{question}</p>
    </div>
  )
}

export default Question
