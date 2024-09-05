import React from 'react'


const Input = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input className="w-full h-10 pl-5 pr-6 py-2 leading-5 border placeholder:text-[#808080] border-[#B7B7B7] rounded-[5px]" {...props} />
  )
}

export default Input