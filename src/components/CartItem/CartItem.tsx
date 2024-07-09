import { useEffect, useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Link } from 'react-router-dom'

import { IMAGE_BASE_URL } from '../../config/config'

import formatCurrency from '../../utils/formatCurrency'

import deleteIcon from './../../assets/icons/delete.svg'
import addIcon from './../../assets/icons/add.svg'
import removeIcon from './../../assets/icons/remove.svg'

import ShoeProps from '../../types/Shoe'

type CartItemProps = {
  id: number
  quantity: number
  size: number
  handleCloseCart: () => void
}

const CartItem = ({ id, quantity, size, handleCloseCart }: CartItemProps) => {
  const [shoe, setShoe] = useState<ShoeProps | null>(null)
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart()

  useEffect(() => {
    fetch('http://localhost:3000/allShoes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText)
        }
        return response.json()
      })
      .then(data => {
        const foundShoe = data.find((item: ShoeProps) => item.shoeId === id)
        if (foundShoe) {
          setShoe(foundShoe)
        } else {
          console.error(`Banner with id ${id} not found.`)
        }
      })
      .catch(error => {
        console.error('Error message: ', error)
      })
  }, [])

  if (!shoe) return null

  const {
    shoeId,
    shoeURL,
    shoeName,
    shoePrice,
    shoeColorway,
    shoeDiscountedPrice
  } = shoe

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center place-content-between space-x-4">
      <div>
        <Link to={`shoe/${shoeId}`} onClick={handleCloseCart}>
          <img
            className="w-48 h-48 sm:w-32 sm:h-32"
            src={`${IMAGE_BASE_URL}${shoeURL}`}
          />
        </Link>
      </div>

      <div className="basis-2/5 md:flex-grow">
        <h1 className="font-bold">{shoeName}</h1>
        <h1 className="font-medium">{shoeColorway}</h1>
        <p className="text-sm">Tamanho: {size}</p>
        {shoeDiscountedPrice ? (
          <div>
            <p className="text-sm line-through opacity-70">
              {formatCurrency(shoePrice * quantity)}
            </p>
            <p>{formatCurrency(shoeDiscountedPrice * quantity)}</p>
          </div>
        ) : (
          <p>{formatCurrency(shoePrice * quantity)}</p>
        )}
      </div>

      <div className="flex flex-row">
        <div className="flex items-center space-x-4">
          <button onClick={() => decreaseCartQuantity(id, size)}>
            <img className="w-6 h-6" src={removeIcon} alt="" />
          </button>
          <h1>{quantity}</h1>
          <button onClick={() => increaseCartQuantity(id, size)}>
            <img className="w-6 h-6" src={addIcon} alt="" />
          </button>
        </div>

        <div className="flex items-center ml-4">
          <button onClick={() => removeFromCart(id, size)}>
            <img className="w-6 h-6" src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
