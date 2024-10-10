import React, { useMemo } from 'react'
import SearchInput from '../../components/SearchInput'
import FilterComponent, { FilterOptions } from '../../components/FilterComponent'
import Tag from '../../components/Tag'
import { useChallengeContext } from '../../context/challenge'
import ChallengeCard from '../../components/ChallengeCard'

const options =  [
    {
        id: '1',
        title: 'Status',
        options: [
            { id: '11', value: 'active', label: 'Active' },
            { id: '12', value: 'upcoming', label: 'Upcoming' },
            { id: '13', value: 'past', label: 'Past' }
        ]
    },
    {
        id: '2',
        title: 'Level',
        options: [
            { id: '21', value: 'easy', label: 'Easy' },
            { id: '22', value: 'medium', label: 'Medium' },
            { id: '23', value: 'hard', label: 'Hard' }
        ]
    }
]

const HackathonList = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<FilterOptions[]>([]);
  const [search, setSearch] = React.useState('');

  const { challenges } = useChallengeContext();
  console.log("filter",selectedFilters)

  const handleRemoveFilter = (id: string) => {
    setSelectedFilters((prev) => prev.filter((f) => f.id !== id));
  }

  const filteredChallenges = useMemo(() => {
    return challenges.filter(challenge => {
      const matchesSearch = search ? challenge.name.toLowerCase().includes(search.toLowerCase()) : true
      const matchesFilters = selectedFilters.length ? selectedFilters.some(filter => {
        if (filter.value === challenge.level) {
          return true
        }

        if (filter.value === 'active' && new Date(challenge.endDate) > new Date() && new Date(challenge.startDate) < new Date()) {
          return true
        }

        if (filter.value === 'upcoming' && new Date(challenge.startDate) > new Date()) {
            return true
        }

        if (filter.value === 'past' && new Date(challenge.endDate) < new Date()) {
            return true
        }

        return false
      }) : true

      return matchesSearch && matchesFilters
    })
  }, [search, selectedFilters, challenges])

  return (
    <div>
        <div className="w-full bg-[#002A3B] pt-[72px] pb-[98px] px-4">
            <p className="font-semibold text-[28px] text-white text-center">Explore Challenges</p>
            <div className="w-full sm:w-[67%] flex max-w-[964px] mx-auto mt-7 sm:mt-14 gap-3 sm:gap-6 flex-col sm:flex-row">
                <SearchInput placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <FilterComponent filter={options} selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            </div>
            <div className="w-[80%] sm:w-[67%] max-w-[964px] mx-auto mt-6 sm:mt-10 flex flex-wrap items-center gap-[30px]">
                {selectedFilters.map((filter) => <Tag key={filter.id} title={filter.label} onRemove={() => handleRemoveFilter(filter.id)} />)}
            </div>  
        </div>
        <div className="bg-[#003145] p-4 lg:py-[75px] lg:px-[134px] min-h-[300px] flex flex-wrap items-center gap-x-[55px] gap-y-[50px]">
            {filteredChallenges.length ? (
                <>
                    {filteredChallenges.map((challenge) => (
                        <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                </>
            ) : (
                <p className="text-white">No hackathon found</p>    
            )}
        </div>
    </div>
  )
}

export default HackathonList