import { useEffect, useState } from 'react'

import formatCurrency from '../../../utils/formatCurrency'

import ShoeProps from '../../../types/Shoe'
import { Link } from 'react-router-dom'

type HomeShoesProp = {
  searchParam: string
}

const HomeShoes = ({ searchParam }: HomeShoesProp) => {
  const [shoes, setShoes] = useState<ShoeProps[]>([])

  useEffect(() => {
    fetch(`http://localhost:3000/${searchParam}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText)
        }
        return response.json()
      })
      .then(data => {
        setShoes(data)
      })
      .catch(error => {
        console.error('Error message: ', error)
      })
  }, [])

  if (!shoes) return null

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {shoes.map((shoe, index) => {
        const {
          shoeId,
          shoeBrandName,
          shoeURL,
          shoeName,
          shoeGender,
          shoePrice,
          shoeColorway,
          shoeDiscountedPrice
        } = shoe
        return (
          <div key={index} className="flex flex-col">
            <Link to={`shoe/${shoeId}`}>
              <img
                src={shoeURL}
                alt={`${shoeBrandName} Shoe`}
                className="w-full"
              />
            </Link>

            <h1 className="text-md font-bold mt-4">
              {shoeBrandName} - {shoeName} {shoeColorway}
            </h1>

            <h2 className="text-md text-gray-600">{shoeGender}</h2>

            {shoeDiscountedPrice ? (
              <div>
                <p className="text-md text-red-600 line-through">
                  {formatCurrency(shoePrice)}
                </p>

                <p className="text-md text-green-600">
                  {formatCurrency(shoeDiscountedPrice)}
                </p>
              </div>
            ) : (
              <p className="text-md">{formatCurrency(shoePrice)}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default HomeShoes
