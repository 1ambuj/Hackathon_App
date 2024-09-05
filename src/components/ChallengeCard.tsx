import React, { useEffect, useState } from 'react'
import { ChallengeStatusT, formatChallengeDate } from '../utils/date';
import TimerTicker from './TimerTicker';
import CircleTickIcon from '../assets/icons/charm_circle-tick.svg?react'
import { IChallenge } from '../types/challenge';
import { useNavigate } from 'react-router-dom';

type ChallengeCardPropsT = {
    challenge: IChallenge;
}

const statusMetaData = {
    active: {
        title: 'Ends in',
        color: 'text-[#44924C] bg-[#44924C3D]',
    },
    upcoming: {
        title: 'Starts in',
        color: 'text-[#000000] bg-[#F2C94C40]',
    },
    past: {
        title: 'Ended on',
        color: 'text-[#666666] bg-[#FF3C002B]',
    }
}

const ChallengeCard = ({ challenge }: ChallengeCardPropsT) => {
  const [challengeStatus, setChallengeStatus] = useState<ChallengeStatusT>(formatChallengeDate(challenge.startDate, challenge.endDate));

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setChallengeStatus(formatChallengeDate(challenge.startDate, challenge.endDate));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, [challenge.startDate, challenge.endDate]);

  const openChallenge = () => {
    navigate(`/challenges/${challenge.id}`);
  }

  return (
    <div className="w-full max-w-[354px] rounded-2xl overflow-hidden">
        <img src={challenge.img} alt={challenge.name} className="w-full h-[174px] object-cover"/>
        <div className="px-[54px] py-6 bg-white flex flex-col items-center">
            <p className={`capitalize w-[87px] h-[21px] rounded-[5px] text-xs font-semibold leading-4 flex items-center justify-center ${statusMetaData[challengeStatus.status].color}`}>{challengeStatus.status}</p>
            <p className="text-center font-semibold mt-[19px] mb-[26px]">{challenge.name}</p>
            <p className="text-sm font-medium text-[#444444">{statusMetaData[challengeStatus.status].title}</p>
            <div className="mt-2 mb-8">
                {challengeStatus.status === 'past' ? (
                    <p>{challengeStatus.time}</p>
                ) : (
                    <div className="flex">
                        <TimerTicker title="Days" time={challengeStatus.timeIn!.days} />
                        <span className="mx-1">:</span>
                        <TimerTicker title="Hours"align="items-center" time={challengeStatus.timeIn!.hours} />
                        <span className="mx-1">:</span>
                        <TimerTicker title="Mins" time={challengeStatus.timeIn!.minutes} />
                    </div>
                )}
            </div>
            <button onClick={openChallenge} className="w-[182px] flex justify-self-end items-center gap-[14px] px-4 py-3 leading-[18px] bg-[#44924C] text-white text-sm font-semibold rounded-[10px]">
                <CircleTickIcon />
                Participate now
            </button>
        </div>
    </div>
  )
}

export default ChallengeCard