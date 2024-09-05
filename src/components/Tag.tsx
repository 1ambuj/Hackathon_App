import XCircleIcon from '../assets/icons/gridicons_cross-circle@2x.svg?react'

type TagProps = {
    title: string
    onRemove: () => void
}

const Tag = ({ title, onRemove }: TagProps) => {

  return (
    <div className="flex items-center gap-3 h-10 px-5 bg-[#F8F9FD7D] rounded-[30px]">
        <span className="text-white">{title}</span>
        <XCircleIcon className="cursor-pointer" onClick={onRemove} />
    </div>
  )
}

export default Tag