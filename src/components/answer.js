import React from 'react'
import styles from "./css-modules.module.css"

const Answer = ({ answer }) => {
  return (
    <div className={styles.answer}>
      <p>{answer}</p>
    </div>
  )
}

export default Answer
