import React from 'react'
import SearchIcon from '../assets/icons/carbon_search.svg?react'

const SearchInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full relative">
        <SearchIcon className="absolute left-[38px] top-1/2 -translate-y-1/2" />
        <input {...props} className="w-full pl-[67px] rounded-xl pr-4 h-[50px] text-xl leading-5 border-none outline-none placeholder:text-[#858585]" />
    </div>
  )
}

export default SearchInput