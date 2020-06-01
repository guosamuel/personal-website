import React from 'react'
import styles from './css-modules.module.css'

const Answer = ({ answer }) => {
  return (
    <div className={`${styles.mine} ${styles.messages}`}>
      <div className={`${styles.message} ${styles.last}`}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Answer
