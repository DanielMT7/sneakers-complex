import { useState } from 'react'

import OfferShoe from './OfferShoe'

import ShoeProps from '../../../types/Shoe'

type OffersGridProps = {
  shoes: ShoeProps[]
  isFiltersOpen: boolean
  hasNoShoesToShow: boolean
}

const OffersGrid = ({
  shoes,
  isFiltersOpen,
  hasNoShoesToShow
}: OffersGridProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentShoes = shoes.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className={`${isFiltersOpen ? 'basis-3/5 lg:basis-3/4' : 'w-full'} `}>
      {hasNoShoesToShow ? (
        <h1 className="font-bold">
          Não encontramos nenhum sneaker com essa(s) especificação(ões)...
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentShoes.map(shoe => (
            <OfferShoe key={shoe.shoeId} shoe={shoe} />
          ))}
        </div>
      )}

      {shoes.length > 12 ? (
        <ul className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(shoes.length / itemsPerPage) },
            (_, index) => (
              <li key={index} className="mx-1">
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 my-4 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      ) : null}
    </div>
  )
}

export default OffersGrid
