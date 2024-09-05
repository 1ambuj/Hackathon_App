import React from 'react'
import SelectArrowIcon from '../assets/icons/select-arrow.svg'

const Select = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className="relative">
        <select {...props} className="appearance-none border border-[#B7B7B7] w-full h-[40px] px-5 py-2 rounded-[5px]">
            {children}
        </select>
        <img src={SelectArrowIcon} className="absolute top-1/2 -translate-y-1/2 right-[22px]" />
      
    </div>
  )
}

export default Select