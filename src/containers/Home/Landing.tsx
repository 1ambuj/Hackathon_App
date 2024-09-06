import RocketImg from '../../assets/icons/PicsArt_04-14-04.42 1.svg?react'
import AIIcon from '../../assets/icons/Group 1000002516.svg?react'
import PersonIcon from '../../assets/icons/Group 1000002516.svg?react'
import HIcon from '../../assets/icons/Group 1000002518.svg?react'
import AchievementCard from '../../components/AchievementCard'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex flex-col justify-between text-white bg-[#003145]">
        <div className="pt-[126px] flex gap-[95px] justify-center px-4">
            <div className="w-[705px]">
                <div className="text-5xl font-semibold border-l-[10px] border-[#FFCE5C] pl-[52px]">
                    <p>Accelerate Innovation with Global AI Challenges</p>
                </div>
                <div className="pl-[62px] mt-[38px]">
                    <p className="font-medium text-lg">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <Link to="create">
                        <p className="mt-[38px] w-fit no-underline px-[18px] py-3.5 bg-white text-[#003145] text-lg font-semibold rounded-[10px]">Create Challenge</p>
                    </Link>
                </div>
            </div>
            <RocketImg />
        </div>
        <div className="bg-[#002A3B] py-[72px]">
            <div className="flex items-center justify-center gap-4">
                <AchievementCard title="100K+" subtitle="AI model submissions" icon={<AIIcon />} />
                <div className="w-[1px] h-[38px] bg-[#C4C4C4] lg:ml-[62px] lg:mr-[115px]" />
                <AchievementCard title="50K+" subtitle="Data Scientists" icon={<PersonIcon />} />
                <div className="w-[1px] h-[38px] bg-[#C4C4C4] lg:ml-[88px] lg:mr-[90px]" />
                <AchievementCard title="100+" subtitle="AI Challenges hosted" icon={<HIcon />} />
            </div>
        </div>
    </div>
  )
}

export default Landing