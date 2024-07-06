import { useShoppingCart } from '../../context/ShoppingCartContext'

import CartItem from '../CartItem/CartItem'

import cart from './../../assets/icons/cart.svg'
import close from './../../assets/icons/close.svg'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart()

  if (!isOpen) return null

  return (
    <div>
      <div
        onClick={() => closeCart()}
        className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-2"
      />

      <div className="fixed top-0 right-0 w-full md:w-3/5 sm:w-96 lg:w-3/5 xl:w-2/5 h-full bg-slate-50 z-3 flex flex-col animate-slideInRight">
        <div className="w-full h-24 flex items-center border-b border-slate-300">
          <div className="ml-4">
            <img className="w-8 h-8" src={cart} alt="Ícone do carrinho" />
          </div>

          <div className="ml-4 basis-4/5">
            <h1 className="text-md font-bold md:text-xl">
              Seu carrinho de compras
            </h1>
          </div>

          <div className="p-1 hover:rounded-full hover:bg-slate-200">
            <img
              onClick={closeCart}
              className="w-8 h-8"
              src={close}
              alt="Botão de fechar"
            />
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-8">
          {cartItems.map((item, index) => (
            <CartItem key={index} {...item} handleCloseCart={closeCart} />
          ))}
        </div>

        <div className="p-4 flex flex-col justify-center w-full h-36 text-center font-bold">
          <div className="h-16 p-2">
            <button className="bg-red-600 w-full h-full text-white hover:bg-red-700">
              Ir para compra
            </button>
          </div>

          <div className="h-16 p-2">
            <button
              onClick={() => closeCart()}
              className="w-full h-full border hover:border-4 border-black"
            >
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
