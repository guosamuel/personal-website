import React from 'react'
import './question.css'

const Question = ({ question }) => {
  return (
    <div className="talk-bubble tri-right round btm-left-in">
      <div className="talktext">
        <p>{question}</p>
      </div>
    </div>
  )
}

export default Question
