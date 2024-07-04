import { useShoppingCart } from '../../context/ShoppingCartContext'

import formatCurrency from '../../utils/formatCurrency'

import deleteIcon from './../../assets/icons/delete.svg'
import addIcon from './../../assets/icons/add.svg'
import removeIcon from './../../assets/icons/remove.svg'

import { AllShoes } from '../../data/data'

type CartItemProps = {
  id: number
  quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart()
  const item = AllShoes.find(item => item.shoeId === id)

  if (!item) return null

  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center place-content-between space-x-4">
      <div>
        <img className="w-48 h-48 sm:w-32 sm:h-32" src={item.shoeURL} />
      </div>

      <div className="basis-2/5 md:flex-grow">
        <h1 className="font-bold">{item.shoeName}</h1>
        <p className="text-sm">Tamanho: 38</p>
        <p className="text-sm">{formatCurrency(item.shoePrice)}</p>
      </div>

      <div className="flex flex-row">
        <div className="flex items-center space-x-4">
          <button onClick={() => decreaseCartQuantity(id)}>
            <img className="w-6 h-6" src={removeIcon} alt="" />
          </button>
          <h1>{quantity}</h1>
          <button onClick={() => increaseCartQuantity(id)}>
            <img className="w-6 h-6" src={addIcon} alt="" />
          </button>
        </div>

        <div className="flex items-center ml-4">
          <button onClick={() => removeFromCart(id)}>
            <img className="w-6 h-6" src={deleteIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
