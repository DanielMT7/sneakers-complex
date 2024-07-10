import { useEffect } from 'react'

import close from '../../assets/icons/close.svg'

type ModalMessageProps = {
  isOpen: boolean
  onClose: () => void
  message: string
}

const ModalMessage = ({ isOpen, onClose, message }: ModalMessageProps) => {
  useEffect(() => {
    if (!isOpen) return

    const closeOnEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', closeOnEscapeKey)

    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [isOpen, onClose])

  return isOpen ? (
    <div onClick={onClose}>
      <div className="fixed inset-0 w-full h-full bg-gray-600 bg-opacity-30 backdrop-blur-sm z-30 flex justify-center items-center">
        <div className="top-0 right-0 w-56 h-56 sm:w-96 sm:h-96 bg-slate-50 z-40 flex flex-col justify-center items-center space-y-8 rounded-lg ">
          <div className="p-1 rounded-full border border-black">
            <img className="w-12 h-12 sm:w-24 sm:h-24" src={close} alt="" />
          </div>

          <div className="">
            <h1>{message}</h1>
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default ModalMessage
