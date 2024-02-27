import React from 'react'

function Button({text}) {
  return (
   <button className='bg-blue-500 text-white w-[80px] h-[40px] rounded-md'>
    {text}
   </button>
  )
}

export default Button