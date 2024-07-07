import ShoeProps from '../../types/Shoe'
import formatCurrency from '../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'

type CarrouselItem = {
  shoe: ShoeProps
}

const CarousselItem = ({ shoe }: CarrouselItem) => {
  const navigate = useNavigate()

  const {
    shoeId,
    shoeName,
    shoeColorway,
    shoeURL,
    shoePrice,
    shoeDiscountedPrice
  } = shoe

  const handleNavigation = () => {
    navigate(`/shoe/${shoeId}`)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex-shrink-0 w-full sm:w-52 space-y-2 mb-8">
      <img
        className="cursor-pointer"
        onClick={handleNavigation}
        src={shoeURL}
        alt=""
      />
      <div>
        <h1 className="font-medium sm:text-xl">{shoeName}</h1>
        <h2 className="font-bold">{shoeColorway}</h2>
      </div>
      <p className="font-medium sm:text-lg">
        {formatCurrency(shoeDiscountedPrice ?? shoePrice)}
      </p>
    </div>
  )
}

export default CarousselItem
