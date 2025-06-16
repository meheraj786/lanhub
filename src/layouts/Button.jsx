import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`px-5 py-3 font-primary text-[14px] font-semibold rounded-md cursor-pointer ${className}`}>{children}</button>
  )
}

export default Button