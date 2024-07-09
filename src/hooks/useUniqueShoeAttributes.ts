import { useEffect, useState } from 'react'
import ShoeProps from '../types/Shoe'

const useUniqueShoeAttributes = (shoes: ShoeProps[]) => {
  const [uniqueBrandNames, setUniqueBrandNames] = useState<string[]>([])
  const [uniqueShoeNames, setUniqueShoeNames] = useState<string[]>([])
  const [uniqueShoeCategories, setUniqueShoeCategories] = useState<string[]>([])
  const [uniqueShoeGender, setUniqueShoeGender] = useState<string[]>([])

  useEffect(() => {
    setUniqueBrandNames([
      ...new Set(shoes.map(shoe => shoe.shoeBrandName || ''))
    ])
    setUniqueShoeNames([...new Set(shoes.map(shoe => shoe.shoeName || ''))])
    setUniqueShoeCategories([
      ...new Set(shoes.map(shoe => shoe.shoeCategory || ''))
    ])
    setUniqueShoeGender([...new Set(shoes.map(shoe => shoe.shoeGender || ''))])
  }, [shoes])

  return {
    uniqueBrandNames,
    uniqueShoeNames,
    uniqueShoeCategories,
    uniqueShoeGender
  }
}

export default useUniqueShoeAttributes
