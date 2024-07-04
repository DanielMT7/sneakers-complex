//import { useShoppingCart } from '../../../context/ShoppingCartContext'
import formatCurrency from '../../../utils/formatCurrency'

type ShoeProps = {
  shoeId: number
  shoeBrandName: string
  shoeURL: string
  shoeName: string
  shoeGenre: string
  shoePrice: number
  shoeDiscountedPrice: number
}

type HomeShoesProps = {
  data: ShoeProps[]
}

// A parte comentada é a função que adiciona um item ao carrinho.

const HomeShoes = ({ data }: HomeShoesProps) => {
  //const { increaseCartQuantity } = useShoppingCart()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((shoe, index) => {
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

            <p className="text-md text-green-600">
              {formatCurrency(shoeDiscountedPrice)}
            </p>

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
