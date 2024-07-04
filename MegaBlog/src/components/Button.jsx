import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props

}) {
  return (
    <button className={`px-4 py2 rounded-lg ${bgColor} ${textColor} ${className} `}  >{children} {...props} </button>
  )
}

export default Button