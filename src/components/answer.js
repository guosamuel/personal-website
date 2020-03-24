import React from 'react'
import './answer.css'

const Answer = ({ answer }) => {
  return (
    <div className="talk-bubble tri-right round btm-right-in">
      <div className="talktext">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Answer
