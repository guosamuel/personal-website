import React from 'react'

const Question = ({ question }) => {
  return (
    <div
      style={{
        float: `left`,
        paddingRight: `1rem`,
      }}
    >
      <p>{question}</p>
    </div>
  )
}

export default Question
