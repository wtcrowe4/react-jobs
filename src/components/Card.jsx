import React from 'react'

const Card = ({ children, bg, background = 'rgb(4, 3, 8)' }) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md text-white`} style={{background: `${background}`}}>
      {children}
    </div>
  )
}

export default Card