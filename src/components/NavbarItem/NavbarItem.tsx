import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type NavbarItemProps = {
  label: string
  options: {
    option: string
    url: string
    subOptions: {
      subLabel: string
      options: {
        subOption: string
        subUrl: string
      }[]
    }[]
  }[]
}

const NavbarItem = ({ options, label }: NavbarItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (url: string) => {
    navigate(url)
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

  return (
    <div ref={dropdownRef}>
      <div>
        <button
          className="text-sm sm:text-base flex items-center"
          onClick={toggleDropdown}
        >
          {label}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-9 w-screen shadow-lg bg-neutral-50 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="my-8 mx-8 lg:mx-64 p-4 grid grid-cols-3 lg:grid-cols-4 gap-4">
            {options.map((option, index) => (
              <div key={index}>
                <div className="space-y-2">
                  <button
                    onClick={() => handleOptionClick(option.url)}
                    className="block font-bold text-2xl text-left"
                  >
                    {option.option}
                  </button>
                  {option.subOptions.map((subOption, subIndex) => (
                    <div key={subIndex} className="space-y-2">
                      <div className="font-semibold">{subOption.subLabel}</div>

                      {subOption.options.map((subSubOption, subSubIndex) => (
                        <button
                          key={subSubIndex}
                          onClick={() => handleOptionClick(subSubOption.subUrl)}
                          className="block text-sm text-gray-600 hover:text-black text-left"
                        >
                          {subSubOption.subOption}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default NavbarItem
