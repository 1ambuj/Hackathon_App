type TimerTickerPropsT = {
    time: number;
    title: string;
    align?: string;
}

const TimerTicker = ({ time, title, align }: TimerTickerPropsT) => {
  return (
    <div className={`w-fit flex flex-col gap-0.5 ${align}`}>
        <p className="text-lg leading-7 text-[#454545] font-semibold">{time < 10 ? `0${time}` : time}</p>
        <p className="text-[10px] leading-[10px] text-[#4F4F4F] font-medium">{title}</p>
    </div>
  )
}

export default TimerTicker