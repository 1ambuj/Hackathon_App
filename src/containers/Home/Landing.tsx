import RocketImg from '../../assets/icons/PicsArt_04-14-04.42 1.svg?react'
import AIIcon from '../../assets/icons/Group 1000002516.svg?react'
import PersonIcon from '../../assets/icons/Group 1000002516.svg?react'
import HIcon from '../../assets/icons/Group 1000002518.svg?react'
import AchievementCard from '../../components/AchievementCard'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex flex-col justify-between text-white bg-[#003145]">
        <div className="pt-8 sm:pt-[126px] flex  gap-[95px] justify-center items-center px-4">
            <div className="w-[905px]">
                <div className="text-2xl font-semibold border-l-[10px] border-[#FFCE5C] pl-5 custom:pl-6 sm:pl-12 sm:text-5xl">
                    <p>Accelerate Innovation with Global AI Challenges</p>
                </div>
                <div className="pl-4 sm:pl-[62px] mt-[38px]">
                    <p className="font-medium text-sm custom:text-lg">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <Link to="create">
                        <p className="my-9 w-fit no-underline px-[18px] py-3 custom:py-4 bg-white text-[#003145] text-sm  custom:text-lg font-semibold rounded-[10px]">Create Challenge</p>
                    </Link>
                </div>
            </div>
            <RocketImg className='hidden sm:inline'/>
        </div>
         <div className="bg-[#002A3B] py-[72px] flex justify-center items-center px-10">
            <div className="flex justify-between gap-6 lg:gap-8 xl:gap-40 flex-wrap flex-col sm:flex-row ">
               <div className='flex items-center gap-2 lg:gap-8'>
               <AchievementCard title="100K+" subtitle="AI model submissions" icon={<AIIcon />} />
               <div className="w-[1px] h-[38px] bg-[#C4C4C4] hidden sm:block" />
               </div>
               <div className='flex items-center gap-2 lg:gap-8'>
               <AchievementCard title="50K+" subtitle="Data Scientists" icon={<PersonIcon />} />
               <div className="w-[1px] h-[38px] bg-[#C4C4C4] hidden sm:block" />
               </div>
              <div className='flex items-center gap-2 lg:gap-8'>
              <AchievementCard title="100+" subtitle="AI Challenges hosted" icon={<HIcon />} />
              <div className="w-[1px] h-[38px] bg-[#C4C4C4] hidden sm:block" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Landing