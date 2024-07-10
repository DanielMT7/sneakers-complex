type OfferRouteInfoProps = {
  gender?: string
  brand?: string
  category?: string
  shoesQuantity: number
}

const OfferRouteInfo = ({
  gender,
  brand,
  category,
  shoesQuantity
}: OfferRouteInfoProps) => {
  return (
    <div>
      <div className="flex space-x-2">
        {gender && (
          <div className="flex space-x-2 text-sm opacity-75 capitalize">
            <p>{gender}</p>
            {(brand || category) && <p>/</p>}
          </div>
        )}
        {brand && (
          <div className="flex space-x-2 text-sm opacity-75 capitalize">
            <p>{brand}</p>
            {category && <p>/</p>}
          </div>
        )}
        {category && (
          <p className="text-sm opacity-75 capitalize">{category}</p>
        )}
      </div>
      <h1 className="text-sm sm:text-xl font-medium">
        Sneakers ({shoesQuantity})
      </h1>
    </div>
  )
}

export default OfferRouteInfo
