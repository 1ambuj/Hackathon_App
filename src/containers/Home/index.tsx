
import HackathonList from './HackathonList'
import Landing from './Landing'
import ParticipationBenefits from './ParticipationBenefits'

const Home = () => {
  return (
    <div className="h-[calc(100%-64px)]">
        <div className="w-full h-full">
            <Landing />
        </div>
        <ParticipationBenefits />
        <HackathonList />
    </div>
  )
}

export default Home