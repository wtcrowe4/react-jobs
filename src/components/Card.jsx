import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        {children}
      </div>
    </div>

   
  )
}

export default Card