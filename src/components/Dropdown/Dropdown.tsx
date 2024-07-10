import { useEffect, useRef, useState } from 'react'

import arrowDown from '../../assets/icons/arrowDown.svg'
import arrowUp from '../../assets/icons/arrowUp.svg'

type DropdownProps = {
  options: string[]
  label: string
  onSelectOption: (sortBy: string) => void
}

const Dropdown = ({ options, label, onSelectOption }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (selectedOption) onSelectOption(selectedOption)
  }, [selectedOption])

  return (
    <div className="relative" ref={dropdownRef}>
      <div>
        <button
          className="text-sm sm:text-base flex items-center"
          onClick={toggleDropdown}
        >
          {selectedOption || label}{' '}
          {isOpen ? (
            <img className="w-4 h-4" src={arrowUp} />
          ) : (
            <img className="w-4 h-4" src={arrowDown} />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`block px-4 py-2 text-sm border-b hover:bg-gray-200 w-full text-center ${
                  option === selectedOption ? 'font-medium bg-gray-200' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
