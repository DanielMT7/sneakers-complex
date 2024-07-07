import { useEffect, useRef, useState } from 'react'
import ShoeProps from '../../types/Shoe'
import CarousselItem from '../CorousselItem/CarousselItem'

import arrow from '../../assets/icons/arrow.svg'

type CarousselProps = {
  customSearchParams: {
    shoeId: number
    shoeName: string
    shoeBrandName: string
  }
}

const Caroussel = ({ customSearchParams }: CarousselProps) => {
  const [relatedShoes, setRelatedShoes] = useState<ShoeProps[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [carouselWidth, setCarouselWidth] = useState(0)
  const [buttonWidth, setButtonWidth] = useState(0)

  useEffect(() => {
    const fetchSimilarShoes = async () => {
      try {
        const response = await fetch('http://localhost:3000/allShoes')
        const data: ShoeProps[] = await response.json()

        const filteredShoes = data.filter(
          shoe =>
            (shoe.shoeName.includes(customSearchParams.shoeName) ||
              shoe.shoeColorway.includes(customSearchParams.shoeBrandName)) &&
            shoe.shoeId !== customSearchParams.shoeId
        )

        let finalFilteredShoes = filteredShoes

        if (filteredShoes.length === 0 && customSearchParams.shoeBrandName) {
          finalFilteredShoes = data.filter(
            shoe =>
              shoe.shoeBrandName.includes(customSearchParams.shoeBrandName) &&
              shoe.shoeId !== customSearchParams.shoeId
          )
        }

        setRelatedShoes(finalFilteredShoes)
      } catch (error) {
        console.error('Error fetching related shoes:', error)
      }
    }

    fetchSimilarShoes()
  }, [customSearchParams])

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.offsetWidth)
    }
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth)
    }
  }, [carouselRef, buttonRef])

  const scrollCarousel = (scrollOffset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset
    }
  }

  return (
    <div className="mt-4 space-y-4 border-y py-4">
      <h1 className="text-lg sm:text-xl font-bold">Sneakers Relacionados</h1>
      <div className="flex items-center space-x-2">
        <button
          ref={buttonRef}
          className="hidden bg-black rounded-full p-2 w-8 h-8 text-white text-3xl sm:flex items-center justify-center"
          onClick={() => scrollCarousel(-(carouselWidth + buttonWidth))} // Size do botao + size da imagem
        >
          <img
            src={arrow}
            className="transform scale-x-[-1]"
            alt="Seta para esquerda"
          />
        </button>
        <div
          className="flex overflow-x-auto scroll-smooth gap-8 w-full"
          ref={carouselRef}
        >
          {relatedShoes.map(shoe => (
            <CarousselItem key={shoe.shoeId} shoe={shoe} />
          ))}
        </div>

        <button
          className="hidden bg-black rounded-full p-2 w-8 h-8 text-white text-3xl sm:flex items-center justify-center"
          onClick={() => scrollCarousel(carouselWidth + buttonWidth)} // Ajuste o valor de acordo com o tamanho do item do carrossel
        >
          <img src={arrow} alt="Seta para direita" />
        </button>
      </div>
    </div>
  )
}

export default Caroussel
