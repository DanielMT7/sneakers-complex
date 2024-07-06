import { createContext, useContext, ReactNode, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  size: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number, size: number) => number
  increaseCartQuantity: (id: number, size: number) => void
  decreaseCartQuantity: (id: number, size: number) => void
  removeFromCart: (id: number, size: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({
  children
}: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    'shopping-cart',
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number, size: number) => {
    return (
      cartItems.find(item => item.id === id && item.size === size)?.quantity ||
      0
    )
  }

  const increaseCartQuantity = (id: number, size: number) => {
    setCartItems(currItems => {
      if (
        currItems.find(item => item.id === id && item.size === size) == null
      ) {
        return [...currItems, { id, quantity: 1, size: size }]
      } else {
        return currItems.map(item => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id: number, size: number) => {
    setCartItems(currItems => {
      const existingItem = currItems.find(
        item => item.id === id && item.size === size
      )

      if (!existingItem) {
        return currItems
      }

      if (existingItem.quantity === 1) {
        return currItems.filter(item => !(item.id === id && item.size === size))
      } else {
        return currItems.map(item => {
          if (item.id === id && item.size === size) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const removeFromCart = (id: number, size: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => !(item.id === id && item.size === size))
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  )
}
