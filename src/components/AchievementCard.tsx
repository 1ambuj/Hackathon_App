import React from 'react'

interface IAchievementCardProps {
    title: string
    subtitle: string
    icon: React.ReactNode
}

const AchievementCard = ({ title, subtitle, icon }: IAchievementCardProps) => {
  return (
    <div className="flex items-center justify-center gap-4 ">
        {icon}
        <div>
            <p className="text-xl custom:text-2xl font-bold leading-5">{title}</p>
            <p className="font-medium text-l mt-2 leading-5">{subtitle}</p>
        </div>
    </div>
  )
}

export default AchievementCard