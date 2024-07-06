import formatCurrency from '../../../utils/formatCurrency'

import cartIcon from '../../../assets/icons/cart2.svg'
import { useShoppingCart } from '../../../context/ShoppingCartContext'
import { useState } from 'react'
import ModalMessage from '../../../components/ModalMessage/ModalMessage'

type AboutInfoProps = {
  shoeId: number
  shoePrice: number
  shoeDiscountedPrice?: number
  shoeDescription?: string
  selectedSize: number
}

const About = ({
  shoeId,
  shoePrice,
  shoeDiscountedPrice,
  shoeDescription,
  selectedSize
}: AboutInfoProps) => {
  const { increaseCartQuantity, openCart } = useShoppingCart()
  const [showModal, setShowModal] = useState(false)

  const handleAddToCart = (shoeId: number, selectedSize: number) => {
    // 0 é o estado inicial do selectedSize
    if (selectedSize === 0) {
      setShowModal(true)
    } else {
      increaseCartQuantity(shoeId, selectedSize)
      openCart()
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div
      className={`w-full flex flex-col p-4 space-y-2 border border-gray-400 mt-4 rounded-b-lg ${
        !shoeDescription ? 'h-40' : 'h-full'
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-sm font-medium">Compre agora por</h1>
        {shoeDiscountedPrice ? (
          <div className="flex flex-row items-center space-x-2 text-md sm:text-lg md:text-xl font-medium">
            <p className="text-red-600 line-through">
              {formatCurrency(shoePrice)}
            </p>
            <span>-</span>
            <p>{formatCurrency(shoeDiscountedPrice)}</p>
          </div>
        ) : (
          <p className="text-lg md:text-xl font-medium">
            {formatCurrency(shoePrice)}
          </p>
        )}
      </div>
      {shoeDescription && (
        <div className="p-2">
          <p className="h-32 sm:flex sm:items-center lg:h-60 overflow-y-auto text-center">
            {shoeDescription}
          </p>
        </div>
      )}

      <div className="w-full h-full flex justify-center items-center p-2 font-bold font-medium">
        <button className="h-12 lg:w-36 p-2 border border-black transition duration-300 hover:bg-gray-200">
          Comprar
        </button>

        <button
          onClick={() => handleAddToCart(shoeId, selectedSize)}
          className="h-12 lg:w-48 p-2 text-sm lg:text-base text-white flex justify-center items-center border transition duration-300 hover:bg-black ml-2 bg-gray-900"
        >
          Adicionar
          <img
            className="w-5 h-5 ml-1"
            src={cartIcon}
            alt="Icone de carrinho de compras"
          />
        </button>
      </div>

      {showModal && (
        <ModalMessage
          onClose={closeModal}
          isOpen={showModal}
          message="Escolha um tamanho!"
        />
      )}
    </div>
  )
}

export default About
