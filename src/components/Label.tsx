import React from 'react'

interface ILabelProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string
}

const Label = ({ label, children, className, ...props }: ILabelProps) => {
  return (
    <div className={`w-full ${className}`} {...props}>
        <p className="font-medium text-[#333333] mb-[19px] leading-5">{label}</p>
        {children}
    </div>
  )
}

export default Label