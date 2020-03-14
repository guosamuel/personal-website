import React from 'react'

const Question = ({ question }) => {
  return (
    <div
      style={{
        float: `left`
      }}
    >
      <p>{question}</p>
    </div>
  )
}

export default Question
