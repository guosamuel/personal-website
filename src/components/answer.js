import React from 'react'
import './text-bubble.css'

const Answer = ({ answer }) => {
  return (
    <div className="mine messages">
      <div className="message last">
        <p>{answer}</p>
      </div>
    </div>
  )
}

export default Answer
