//import { useShoppingCart } from '../../../context/ShoppingCartContext'
import { useEffect, useState } from 'react'

import formatCurrency from '../../../utils/formatCurrency'

import ShoeProps from '../../../types/Shoe'

type HomeShoesProp = {
  searchParam: string
}

// A parte comentada é a função que adiciona um item ao carrinho.

const HomeShoes = ({ searchParam }: HomeShoesProp) => {
  //const { increaseCartQuantity } = useShoppingCart()
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
          //shoeId,
          shoeBrandName,
          shoeURL,
          shoeName,
          shoeGenre,
          shoePrice,
          shoeDiscountedPrice
        } = shoe
        return (
          <div key={index} className="flex flex-col">
            <img
              src={shoeURL}
              alt={`${shoeBrandName} Shoe`}
              className="w-full"
            />

            <h1 className="text-md font-bold mt-4">
              {shoeBrandName} - {shoeName}
            </h1>

            <h2 className="text-md text-gray-600">{shoeGenre}</h2>

            <p className="text-md text-red-600 line-through">
              {formatCurrency(shoePrice)}
            </p>

            {shoeDiscountedPrice && (
              <p className="text-md text-green-600">
                {formatCurrency(shoeDiscountedPrice)}
              </p>
            )}

            {/*<button onClick={() => increaseCartQuantity(shoeId)}>
              add Cart
            </button>*/}
          </div>
        )
      })}
    </div>
  )
}

export default HomeShoes
