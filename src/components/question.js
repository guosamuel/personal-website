import React from 'react'
import './text-bubble.css'

const Question = ({ question }) => {
  return (
    <div className="yours messages">
      <div className="message last">
        <p>{question}</p>
      </div>
    </div>
  )
}

export default Question
