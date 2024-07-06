import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShoeProps from '../../types/Shoe'
import MoreInfo from './components/MoreInfo'

const Shoe = () => {
  const [shoe, setShoe] = useState<ShoeProps | null>(null)
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  // Tive que fazer uma conversão de tipo porque o valor que vem do params(string) é diferente do id que coloquei no json-server(number)

  useEffect(() => {
    if (!id) {
      navigate('/')
      return
    }

    const numericId = parseInt(id, 10)
    if (isNaN(numericId)) {
      console.error(`Invalid id: ${id}`)
      navigate('/')
      return
    }

    fetch('http://localhost:3000/allShoes')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText)
        }
        return response.json()
      })
      .then(data => {
        const foundShoe = data.find(
          (item: ShoeProps) => item.shoeId === numericId
        )
        if (foundShoe) {
          setShoe(foundShoe)
        } else {
          console.error(`Banner with id ${id} not found.`)
          navigate('/')
        }
      })
      .catch(error => {
        console.error('Error message: ', error)
      })
  }, [id])

  if (!shoe) return null

  const {
    shoeId,
    shoeBrandName,
    shoeName,
    shoeColorway,
    shoeURL,
    shoeGender,
    shoePrice,
    shoeDiscountedPrice,
    shoeDescription,
    shoeSizes
  } = shoe

  return (
    <div>
      <div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{shoeBrandName}</h1>
          <p className="text-md sm:text-lg text-gray-600 font-medium -mt-2">
            {shoeGender}
          </p>
        </div>
        <div className="sm:mt-4 sm:pl-8">
          <h2 className="text-lg sm:text-2xl font-bold mt-2">{shoeName}</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-medium -mt-2">
            {shoeColorway}
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-x-2 lg:space-x-4 sm:space-y-0 lg:h-128 sm:px-8 flex flex-col sm:flex-row mt-4 lg:mt-0">
        <div className="sm:w-1/2 h-full">
          <img className="w-full h-full object-contain" src={shoeURL} alt="" />
        </div>

        <div className="h-96 lg:h-128 sm:w-1/2 sm:h-full lg:p-1">
          <MoreInfo
            shoeId={shoeId}
            shoePrice={shoePrice}
            shoeDiscountedPrice={shoeDiscountedPrice}
            shoeDescription={shoeDescription}
            shoeSizes={shoeSizes}
          />
        </div>
      </div>

      <div className="h-24">related products</div>
    </div>
  )
}

export default Shoe
