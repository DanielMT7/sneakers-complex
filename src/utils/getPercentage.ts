const getPercentage = (
  originalPrice: number,
  discountedPrice: number
): string => {
  const difference = originalPrice - discountedPrice
  const discountedPercentage = (difference / originalPrice) * 100

  return discountedPercentage.toFixed(0) + '% off'
}

export default getPercentage
