import { useNavigate } from 'react-router-dom'
import { IMAGE_BASE_URL } from '../../../config/config'

import formatCurrency from '../../../utils/formatCurrency'
import getPercentage from '../../../utils/getPercentage'

import ShoeProps from '../../../types/Shoe'

type OfferShoeProps = {
  shoe: ShoeProps
}

const OfferShoe = ({ shoe }: OfferShoeProps) => {
  const navigate = useNavigate()

  const {
    shoeId,
    shoeURL,
    shoeName,
    shoeColorway,
    shoeGender,
    shoeCategory,
    shoePrice,
    shoeDiscountedPrice
  } = shoe

  const handleNavigation = () => {
    navigate(`/shoe/${shoeId}`)
  }

  return (
    <div>
      <img
        onClick={handleNavigation}
        className="cursor-pointer"
        src={`${IMAGE_BASE_URL}${shoeURL}`}
        alt={`${shoeName} - ${shoeColorway}`}
      />

      <h1 className="text-sm font-medium truncate whitespace-nowrap overflow-hidden">
        {shoeName} - {shoeColorway}
      </h1>

      <div className="flex space-x-2">
        <p className="text-sm text-gray-600">{shoeGender}</p>
        <p>-</p>
        <p className="text-sm text-gray-600">{shoeCategory}</p>
      </div>

      <div className="flex space-x-1 text-sm xl:text-base">
        <p
          className={`${
            shoeDiscountedPrice ? 'line-through text-red-600' : ''
          }`}
        >
          {formatCurrency(shoePrice)}
        </p>
        {shoeDiscountedPrice && (
          <div className="flex items-center space-x-2 truncate whitespace-nowrap overflow-hidden">
            <p>- {formatCurrency(shoeDiscountedPrice)}</p>
            <p className="text-sm text-green-600">
              {getPercentage(shoePrice, shoeDiscountedPrice)}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default OfferShoe
