import { useEffect, useState } from 'react'

import useWindowSize from '../../../hooks/useWindowSize'

import closeIcon from '../../../assets/icons/close.svg'

type OffersFilterProps = {
  onSelectFilters: (filtersList: string[]) => void
  brandFilter: string[]
  nameFilter: string[]
  categoryFilter?: string[]
  genderFilter?: string[]
  isFiltersOpen: boolean
  onClose: () => void
}

const OffersFilter = ({
  onSelectFilters,
  brandFilter,
  nameFilter,
  categoryFilter,
  genderFilter,
  isFiltersOpen,
  onClose
}: OffersFilterProps) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const windowSize = useWindowSize()

  const handleFilterChange = (filter: string) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(filter)
        ? prevFilters.filter(item => item !== filter)
        : [...prevFilters, filter]
    )
  }

  useEffect(() => {
    onSelectFilters(selectedFilters)
  }, [selectedFilters, onSelectFilters])

  if (!isFiltersOpen) {
    return null
  }

  return (
    <div
      className={`${
        windowSize.width < 640
          ? 'fixed inset-0 z-50 overflow-y-auto'
          : 'basis-2/5 lg:basis-1/4 w-64'
      }`}
    >
      <div className="min-h-screen">
        <div className="bg-white md:rounded-lg shadow-2xl w-full min-h-screen p-4">
          {windowSize.width < 640 ? (
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={onClose}
            >
              <p>Fechar</p>
              <img className="w-8 h-8" src={closeIcon} alt="" />
            </div>
          ) : null}

          {Object.entries({
            Marca: brandFilter,
            Gênero: genderFilter,
            Categoria: categoryFilter,
            Modelo: nameFilter
          }).map(([label, filters]) => (
            <div key={label}>
              <h1 className="py-2 font-medium">{label}</h1>
              <div className="border-t-2 p-4">
                <ul className="space-y-2">
                  {filters?.map(filter => (
                    <li key={filter}>
                      <label className="cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          value={filter}
                          checked={
                            filters.length <= 1 ||
                            selectedFilters.includes(filter)
                          }
                          onChange={() => handleFilterChange(filter)}
                          className="cursor-pointer mr-2 accent-black"
                        />
                        {filter}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              {}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OffersFilter
