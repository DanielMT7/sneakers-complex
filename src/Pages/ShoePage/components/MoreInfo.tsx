import { useEffect, useRef, useState } from 'react'

import arrowDown from '../../../assets/icons/arrowDown.svg'
import arrowUp from '../../../assets/icons/arrowUp.svg'
import About from './About'
import SizeGrid from './SizeGrid'
import { useParams } from 'react-router-dom'

type MoreInfoProps = {
  shoeId: number
  shoePrice: number
  shoeDiscountedPrice?: number
  shoeDescription?: string
  shoeSizes: number[]
}

const MoreInfo = ({
  shoeId,
  shoeSizes,
  shoePrice,
  shoeDiscountedPrice,
  shoeDescription
}: MoreInfoProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState<number>(0)
  const { id } = useParams<{ id: string }>()
  const ref = useRef<HTMLDivElement>(null)

  const handleSize = (size: number) => {
    setSelectedSize(size)
  }

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setSelectedSize(0)
  }, [id])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={ref} className="h-full flex flex-col">
      <div
        onClick={handleToggle}
        className="p-2 flex items-center justify-between border border-b border-gray-400 rounded-t-lg font-bold cursor-pointer"
      >
        <div>Tamanhos:</div>

        <div className="flex items-center">
          <div>{selectedSize > 0 ? selectedSize : 'Todos'}</div>
          {isOpen ? (
            <img className="w-8 h-8" src={arrowUp} alt="Seta pra baixo" />
          ) : (
            <img className="w-8 h-8" src={arrowDown} alt="Seta pra cima" />
          )}
        </div>
      </div>

      {isOpen && (
        <SizeGrid
          onChange={handleSize}
          onToggle={handleToggle}
          selectedSize={selectedSize}
          shoeSizes={shoeSizes}
        />
      )}

      {!isOpen && (
        <About
          shoeId={shoeId}
          selectedSize={selectedSize}
          shoePrice={shoePrice}
          shoeDescription={shoeDescription}
          shoeDiscountedPrice={shoeDiscountedPrice}
        />
      )}
    </div>
  )
}

export default MoreInfo
