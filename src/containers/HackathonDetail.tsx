import  { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChallengeContext } from "../context/challenge";
import { formatChallengeDate, formatDateString } from "../utils/date";
import ClockIcon from "../assets/icons/clock.svg?react";
import SkillLevelIcon from "../assets/icons/carbon_skill-level-basic.svg?react";

const HackathonDetail = () => {
  const { id } = useParams();
  const { challenges, deleteChallenge } = useChallengeContext();
  console.log(challenges)
  const navigate = useNavigate();  
  const challenge = useMemo(() => challenges.find((c) => c.id === id), []);

  const challengeStatus = formatChallengeDate(
    challenge!.startDate,
    challenge!.endDate
  );
  const startsOn = formatDateString(challenge!.startDate);
  const timeZoneName = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    timeZoneName: "long",
  })
    .formatToParts()
    .find((part) => part.type === "timeZoneName")?.value;

  
    const handleEdit = () => {
      if (id) {
        navigate(`/challenges/${id}/edit`);
      } else {
        console.error("ID is undefined");
      }
    };
    
    const handleDelete = () => {
      if (id) {
        deleteChallenge(id);
        navigate("/");
      } else {
        console.error("ID is undefined");
      }
    };
    
  return (
    <div className="h-[calc(100%-64px)] overflow-auto">
      <div className="p-6 lg:px-[127px] lg:py-[96px] bg-[#003145] text-white">
        {challengeStatus.status === 'upcoming' ? <div className="bg-[#FFCE5C] text-black w-[464px] flex items-center gap-3 px-[22px] py-2.5 rounded-[5px]">
          <ClockIcon />
          <p className="text-sm font-semibold leading-3">
            Starts on {startsOn} ({timeZoneName})
          </p>
        </div> : ''}
        <p className="text-[40px] font-semibold mt-6 mb-8">{challenge?.name}</p>
        <p className="text-lg text-[#F8F9FD] font-medium mb-6 leading-6">
          {challenge?.description}
        </p>
        <div className="flex items-center gap-2 bg-[#F8F9FD] text-black w-fit pl-5 pr-4 h-[34px] rounded-[5px]">
          <SkillLevelIcon />
          <p className="text-sm font-semibold leading-3 capitalize">
            {challenge?.level}
          </p>
        </div>
      </div>
      <div className="px-6 lg:pl-[127px] lg:pr-[119px] h-[66px] shadow-[0px_6px_12px_0px_#DDE6ED] flex justify-between items-center">
        <div className="text-lg font-bold self-end pb-2 px-5 border-b-4 rounded border-[#44924C]">
          Overview
        </div>
        <div className="flex items-center gap-[18px]">
          <button onClick={handleEdit} className="w-[91px] h-[37px] rounded-[10px] bg-[#44924C] text-white text-sm leading-[18px] font-semibold">
            Edit
          </button>
          <button onClick={handleDelete} className="w-[91px] h-[37px] rounded-[10px] border border-[#DC1414] text-[#DC1414] text-sm leading-[18px] font-semibold">
            Delete
          </button>
        </div>
      </div>
      <div className="py-[46px] pl-[127px] pr-[119px] text-[#64607D] text-lg font-medium whitespace-pre-wrap">
        Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.
        <br />
        An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.
        <br />
        Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.
      </div>
    </div>
  );
};

export default HackathonDetail;
