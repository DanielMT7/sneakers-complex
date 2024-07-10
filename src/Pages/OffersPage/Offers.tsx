import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import useUniqueShoeAttributes from '../../hooks/useUniqueShoeAttributes'
import useFilteredShoes from '../../hooks/useFilteredShoes'
import useSortedShoes from '../../hooks/useSortedShoes'

import OffersFilter from './components/OffersFilter'
import OffersGrid from './components/OffersGrid'
import OfferRouteInfo from './components/OfferRouteInfo'
import Dropdown from '../../components/Dropdown/Dropdown'

import ShoeProps from '../../types/Shoe'

const options = ['Lançamento', 'Menor preço', 'Maior preço']

const Offers = () => {
  const { gender, brand, category } = useParams()
  const [shoes, setShoes] = useState<ShoeProps[]>([])
  const [selectedOption, setSelectedOption] = useState<string>(options[0])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [isFiltersOpen, setIsFiltersOpen] = useState(true)

  const filteredShoes = useFilteredShoes(shoes, selectedFilters)
  const sortedShoes = useSortedShoes(filteredShoes, selectedOption, options)
  const {
    uniqueBrandNames,
    uniqueShoeNames,
    uniqueShoeCategories,
    uniqueShoeGender
  } = useUniqueShoeAttributes(shoes)

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch('http://localhost:3000/allShoes')
        const data: ShoeProps[] = await response.json()

        let filteredOffersByRoute = data

        if (gender) {
          filteredOffersByRoute = filteredOffersByRoute.filter(
            shoe => shoe.shoeGender.toLowerCase() === gender.toLowerCase()
          )
        }

        if (brand) {
          filteredOffersByRoute = filteredOffersByRoute.filter(
            shoe => shoe.shoeBrandName.toLowerCase() === brand.toLowerCase()
          )
        }

        if (category) {
          filteredOffersByRoute = filteredOffersByRoute.filter(
            shoe => shoe.shoeCategory?.toLowerCase() === category.toLowerCase()
          )
        }

        setShoes(filteredOffersByRoute)
      } catch (error) {
        console.error('Error fetching shoes:', error)
      }
    }

    fetchShoes()
  }, [gender, brand, category])

  const handleSortChange = (option: string) => {
    setSelectedOption(option)
  }

  const handleSelectedFilters = (filtersList: string[]) => {
    setSelectedFilters(filtersList)
  }

  const handleFiltersToggle = () => {
    setIsFiltersOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <div className="space-y-4">
      <div className="flex place-content-between">
        <OfferRouteInfo
          gender={gender}
          brand={brand}
          category={category}
          shoesQuantity={filteredShoes.length}
        />

        <div className="flex items-end space-x-4">
          <button
            className="text-sm sm:text-base"
            onClick={handleFiltersToggle}
          >
            Filtros
          </button>

          <Dropdown
            options={options}
            label="Ordernar por"
            onSelectOption={handleSortChange}
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <OffersFilter
          onSelectFilters={handleSelectedFilters}
          brandFilter={uniqueBrandNames}
          nameFilter={uniqueShoeNames}
          categoryFilter={uniqueShoeCategories}
          genderFilter={uniqueShoeGender}
          isFiltersOpen={isFiltersOpen}
          onClose={handleFiltersToggle}
        />

        <OffersGrid
          shoes={sortedShoes}
          isFiltersOpen={isFiltersOpen}
          hasNoShoesToShow={filteredShoes.length === 0}
        />
      </div>
    </div>
  )
}

export default Offers
