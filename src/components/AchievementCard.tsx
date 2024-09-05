import React from 'react'

interface IAchievementCardProps {
    title: string
    subtitle: string
    icon: React.ReactNode
}

const AchievementCard = ({ title, subtitle, icon }: IAchievementCardProps) => {
  return (
    <div className="flex items-center gap-[22px]">
        {icon}
        <div>
            <p className="text-2xl font-bold leading-5">{title}</p>
            <p className="font-medium mt-2 leading-5">{subtitle}</p>
        </div>
    </div>
  )
}

export default AchievementCard