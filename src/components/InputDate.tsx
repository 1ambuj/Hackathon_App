import React, { useRef, useState } from 'react'
import CalendarIcon from '../assets/icons/uil_calender.svg?react'

const InputDate = (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    const [isPlaceholderVisible, setPlaceholderVisible] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
      setPlaceholderVisible(false);
    };
  
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (!event.target.value) {
        setPlaceholderVisible(true);
      }
    };

    const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
    };

    const openCalendar = () => {
        focusInput()
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    }

    return (
    <div className="relative w-full">
        <input
            ref={inputRef}
            className="appearance-none w-full h-10 pl-5 pr-6 py-2 leading-5 border placeholder:text-[#808080] border-[#B7B7B7] rounded-[5px]"
            {...props}
            type="date"
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        {isPlaceholderVisible && (
            <span onClick={focusInput} className="absolute bg-white w-[150px] top-1/2 left-5 -translate-y-1/2 text-[#808080]">
                {props.placeholder}
            </span>
        )}
        <button onClick={openCalendar} className="absolute right-5 top-1/2 -translate-y-1/2 bg-white">
            <CalendarIcon  />
        </button>
    </div>
  )
}

export default InputDate