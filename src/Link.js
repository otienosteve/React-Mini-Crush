import React from 'react'

function Link({link,text}) {
    
  return (
    <a href={link}>{text}</a>
  )
}

export default Link