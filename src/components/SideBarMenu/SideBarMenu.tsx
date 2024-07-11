import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import closeIcon from '../../assets/icons/close.svg'
import arrow from '../../assets/icons/arrow2.svg'

type MenuOption = {
  option: string
  url?: string
  subOptions?: MenuOption[]
}

type SidebarMenuProps = {
  options: MenuOption[]
  onClose: () => void
}

const SidebarMenu = ({ options, onClose }: SidebarMenuProps) => {
  const [currentOptions, setCurrentOptions] = useState<MenuOption[]>(options)
  const [history, setHistory] = useState<MenuOption[][]>([])
  const navigate = useNavigate()

  const handleOptionClick = (option: MenuOption) => {
    if (option.subOptions) {
      setHistory(prevHistory => [...prevHistory, currentOptions])
      setCurrentOptions(option.subOptions)
    } else if (option.url) {
      navigate(option.url)
      onClose()
    }
  }

  const handleBackClick = () => {
    const previousOptions = history.pop()
    if (previousOptions) {
      setCurrentOptions(previousOptions)
      setHistory([...history])
    }
  }

  return (
    <div className="absolute">
      <div
        onClick={onClose}
        className="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-30 backdrop-blur-sm z-30 flex justify-center items-center"
      />

      <div className="fixed top-0 right-0 w-64 h-screen z-40 bg-white p-2">
        <div className="p-4">
          <button onClick={onClose} className="w-full flex justify-end">
            <img className="w-8 h-8" src={closeIcon} alt="" />
          </button>
        </div>
        <div>
          {history.length > 0 && (
            <button
              className="flex items-center text-left w-full mb-4 text-black font-bold gap-2 py-1 px-4"
              onClick={handleBackClick}
            >
              <img
                className="transform -scale-x-100 w-4 h-4"
                src={arrow}
                alt=""
              />
              Voltar
            </button>
          )}
          {currentOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="flex justify-between items-center w-full text-left py-2 px-8 text-black hover:bg-gray-200 font-bold"
            >
              {option.option}
              <img className="w-4 h-4" src={arrow} alt="" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
