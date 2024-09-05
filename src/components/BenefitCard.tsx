import React from 'react'

interface IBenefitCardProps {
    title: string
    description: string
    icon: React.ReactNode
}

const BenefitCard = ({ title, description, icon }: IBenefitCardProps) => {
  return (
    <div className="w-full max-w-[542px] min-h-fit h-[276px] bg-[#F8F9FD] rounded-[20px] px-[30px] py-[60px]">
        {icon}
        <p className="my-[5px] font-semibold text-2xl">{title}</p>
        <p className="font-medium text-[#64607D]">{description}</p>
    </div>
  )
}

export default BenefitCard