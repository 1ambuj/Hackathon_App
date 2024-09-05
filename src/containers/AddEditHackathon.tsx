import React, { useMemo, useState } from 'react'
import { IChallenge } from '../types/challenge'
import Label from '../components/Label'
import Input from '../components/Input'
import InputDate from '../components/InputDate'
import ImagePicker from '../components/ImagePicker'
import Select from '../components/Select'
import { useChallengeContext } from '../context/challenge'
import { useNavigate, useParams } from 'react-router-dom'

const levelOptions = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' }
]

type CreateChallengeT = Omit<IChallenge, 'id'>

const AddEditHackathon = () => {
  const { challenges, saveChallenge } = useChallengeContext();

  const { id } = useParams()

  let selectedChallenge: IChallenge | undefined;
  if (id) {
    selectedChallenge = challenges.find((c) => c.id === id);
  }

  const [challenge, setChallenge] = useState<CreateChallengeT>(selectedChallenge || {
    name: '',
    startDate: new Date().toLocaleDateString(),
    endDate: new Date().toLocaleDateString(),
    description: '',
    img: '',
    level: 'easy',
  } as CreateChallengeT)

  const canSave = useMemo(() => {
    let isValid = Boolean(challenge.name && challenge.startDate && challenge.endDate && challenge.level && challenge.img);

    if (isValid && new Date(challenge.startDate) > new Date(challenge.endDate)) {
        isValid = false;
    }

    return isValid;
  }, [challenge])

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { type, value, dataset } = target;
    const key = dataset.key!;
    const checked = (target as HTMLInputElement).checked;
  
    let newValue: string | boolean = value;
    if (type === 'checkbox') {
      newValue = checked;
    }

    setChallenge((prev) => ({
        ...prev,
        [key]: newValue,
    }));
  };

  const handleSave = () => {
    saveChallenge(challenge);
    navigate('/');
  }

  return (
    <div className="h-[calc(100%-64px)] overflow-auto">
        <div className="w-full h-[107px] flex items-center font-bold text-2xl leading-[30px] bg-[#F8F9FD] px-6 lg:px-[89px]">
            Challenge Details
        </div>
        <div className="p-6 lg:px-[89px] py-[33px]">
            <Label label="Challenge Name" className="max-w-[453px]">
                <Input data-key="name" value={challenge.name} onChange={handleChange} />
            </Label>
            <Label label="Start Date" className="max-w-[453px] my-[34px]">
                <InputDate data-key="startDate" placeholder="Add start date" value={challenge.startDate} onChange={handleChange} min={new Date().toLocaleDateString()} />
            </Label>
            <Label label="End Date" className="max-w-[453px]">
                <InputDate data-key="endDate" placeholder="Add end date" value={challenge.endDate} onChange={handleChange} min={challenge.startDate || new Date().toLocaleDateString()} />
            </Label>
            <Label label="Description" className="max-w-[817px] my-11">
                <textarea 
                    data-key="description" 
                    value={challenge.description}
                    onChange={handleChange}
                    className="border resize-none border-[#B7B7B7] w-full max-w-full h-[252px] max-h-[252px] px-5 py-2 rounded-[5px]" 
                />
            </Label>
            <Label label="Image" className="max-w-fit">
                <ImagePicker selectedImgae={challenge.img} onImageChange={(selecteImg) => setChallenge((prev) => ({ ...prev, img: selecteImg }))} />
            </Label>
            <Label label="Level" className="max-w-[236px] mt-10 mb-[46px]">
                <Select data-key="level" value={challenge.level} onChange={handleChange}>
                    {levelOptions.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </Select>
            </Label>
            <button onClick={handleSave} disabled={!canSave} className="w-[214px] h-[46px] flex items-center justify-center bg-[#44924C] disabled:opacity-50 text-white rounded-[10px]">
                {selectedChallenge ? 'Save Challenge' : 'Create Challenge'}
            </button>
        </div>
    </div>
  )
}

export default AddEditHackathon