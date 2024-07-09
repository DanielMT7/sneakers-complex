import { useEffect, useState } from 'react'
import ShoeProps from '../types/Shoe'

const useFilteredShoes = (shoes: ShoeProps[], selectedFilters: string[]) => {
  const [filteredShoes, setFilteredShoes] = useState<ShoeProps[]>([])

  useEffect(() => {
    const applyFilters = () => {
      if (selectedFilters.length === 0) return shoes

      return shoes.filter(shoe =>
        selectedFilters.every(
          filter =>
            shoe.shoeBrandName.includes(filter) ||
            shoe.shoeName.includes(filter) ||
            shoe.shoeCategory?.includes(filter) ||
            shoe.shoeGender.includes(filter)
        )
      )
    }

    setFilteredShoes(applyFilters())
  }, [shoes, selectedFilters])

  return filteredShoes
}

export default useFilteredShoes
