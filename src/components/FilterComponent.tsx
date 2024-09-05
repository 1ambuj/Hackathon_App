import React from "react";
import CaertIcon from "../assets/icons/Caret.svg?react";

export type FilterOptions = {
  label: string;
  value: string;
  id: string;
};

type FilterGroup = {
  id: string;
  title: string;
  options: FilterOptions[];
};

type FilterComponentProps = {
  filter: FilterGroup[];
  selectedFilters: FilterOptions[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterOptions[]>>
};

type RenderFilterProps = {
  options: FilterOptions[];
  selectedOptions: FilterOptions[];
  onChange: (value: FilterOptions) => void;
};

const renderFilters = ({
  options,
  selectedOptions,
  onChange,
}: RenderFilterProps) => {
  return options.map((option) => (
    <div
      key={option.id}
      className="mb-2 last-of-type:mb-0 flex items-center gap-[9px]"
    >
      <input
        className="appearance-none custom-checkbox w-4 h-4 rounded border border-[#003145]"
        type="checkbox"
        id={option.id}
        onChange={() => onChange(option)}
        checked={selectedOptions.some((so) => so.id === option.id)}
      />
      <label htmlFor={option.id} className="text-sm text-[#858585]">
        {option.label}
      </label>
    </div>
  ));
};

const FilterComponent = ({ filter, selectedFilters, setSelectedFilters }: FilterComponentProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (value: FilterOptions) => {
    setSelectedFilters((prev) => {
      if (prev.some((o) => o.id === value.id)) {
        return prev.filter((option) => option.id !== value.id);
      }
      return [...prev, value];
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`h-[50px] bg-white text-lg pl-6 pr-4 text-black border border-[#EAEAEA] flex items-center justify-between gap-5 rounded-[10px] ${isOpen ? 'w-[290px] rounded-b-none border-b-0' : ''}`}
      >
        <span>Filter</span>
        <CaertIcon className={!isOpen ? 'rotate-180' : ''} />
      </button>
      {isOpen ? (
        <div className="absolute top-[50px] right-0 w-[290px] bg-white pt-3.5 pb-2.5 px-3 max-h-[338px] overflow-y-auto rounded-b-[10px]">
          {filter.map((group) => (
            <div
              key={group.id}
              className="py-3.5 border-t border-[#ECECEC] mb-4"
            >
              <p className="leading-5 text-[#666666] mb-4">{group.title}</p>
              {renderFilters({
                options: group.options,
                selectedOptions: selectedFilters,
                onChange: handleChange,
              })}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FilterComponent;
