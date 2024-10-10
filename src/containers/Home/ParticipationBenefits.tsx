
import NotebookIcon from '../../assets/icons/carbon_notebook-reference.svg?react'
import CommunityIcon from '../../assets/icons/Vector.svg?react'
import RobotIcon from '../../assets/icons/Robot.svg?react'
import IdIcon from '../../assets/icons/IdentificationCard.svg?react'
import BenefitCard from '../../components/BenefitCard'

const benefits = [
    {
        id: '1',
        title: 'Prove your skills',
        description: 'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.',
        icon: <NotebookIcon />
    },
    {
        id: '2',
        title: 'Learn from community',
        description: 'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.',
        icon: <CommunityIcon />
    },
    {
        id: '3',
        title: 'Challenge yourself',
        description: 'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.',
        icon: <RobotIcon />
    },
    {
        id: '4',
        title: 'Earn recognition',
        description: 'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.',
        icon: <IdIcon />
    },
]

const ParticipationBenefits = () => {
  return (
    <div className="pt-[90px] pb-[123px]">
        <p className="text-center text-[24px] sm:text-[32px] leading-6 sm:leading-8 font-semibold">
            Why Participate in&nbsp; 
            <span className="text-[#0FA958]">AI Challenges?</span>
        </p>

        <div className="flex justify-center flex-wrap gap-x-8 gap-y-10 mt-[72px]">
            {benefits.map(benefit => (
                <BenefitCard key={benefit.id} {...benefit} />
            ))}
        </div>
    </div>
  )
}

export default ParticipationBenefits