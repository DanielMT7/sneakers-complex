import { useEffect, useState } from 'react'
import ShoeProps from '../types/Shoe'

const useSortedShoes = (
  filteredShoes: ShoeProps[],
  selectedOption: string,
  options: string[]
) => {
  const [sortedShoes, setSortedShoes] = useState<ShoeProps[]>([])

  useEffect(() => {
    const sortShoes = () => {
      const sorted = [...filteredShoes]
      switch (selectedOption) {
        case options[1]:
          return sorted.sort(
            (a, b) =>
              (a.shoeDiscountedPrice ?? a.shoePrice) -
              (b.shoeDiscountedPrice ?? b.shoePrice)
          )
        case options[2]:
          return sorted.sort(
            (a, b) =>
              (b.shoeDiscountedPrice ?? b.shoePrice) -
              (a.shoeDiscountedPrice ?? a.shoePrice)
          )
        default:
          return sorted
      }
    }

    setSortedShoes(sortShoes())
  }, [filteredShoes, selectedOption])

  return sortedShoes
}

export default useSortedShoes
