import React from 'react'

const Container = ({children}) => {
  return (
    <div className='xl:w-[1146px] w-full mx-auto'>
      {children}
    </div>
  )
}

export default Container