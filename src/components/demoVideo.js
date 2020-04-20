import React from 'react'

const DemoVideo = ({ embed }) => {
  return (
    <div className="iframe-container">
      <iframe
        width="560"
        height="315"
        src={embed}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
      >
      </iframe>
    </div>
  )
}

export default DemoVideo
