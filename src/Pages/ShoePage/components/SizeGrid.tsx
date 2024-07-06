type SizeGridProps = {
  selectedSize: number | string
  onChange: (size: number) => void
  onToggle: () => void
  shoeSizes: number[]
}

const SizeGrid = ({
  onChange,
  onToggle,
  selectedSize,
  shoeSizes
}: SizeGridProps) => {
  const sizes = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
  const sizesAvailable = shoeSizes

  const handleOptionClick = (size: number, isAvailable: boolean) => {
    if (!isAvailable) return

    onChange(size)
    onToggle()
  }

  return (
    <div className="p-2 grid grid-cols-2 lg:grid-cols-3 lg:h-full  gap-4 border-x border-b rounded-b-lg border-gray-300 overflow-y-auto bg-white">
      {sizes.map((size, index) => {
        const isAvailable = sizesAvailable.includes(size)

        return (
          <button
            onClick={() => handleOptionClick(size, isAvailable)}
            className={`relative p-2 border font-medium ${
              selectedSize === size
                ? 'text-green-600 border-2 border-green-600'
                : ''
            }  ${!isAvailable ? 'text-black/50 cursor-not-allowed' : ''}`}
            key={index}
            disabled={!isAvailable}
          >
            BR {size}
            <span
              className={`absolute left-0 top-0 h-full w-1  ${
                isAvailable ? 'bg-green-600' : 'bg-red-600'
              }`}
            ></span>
          </button>
        )
      })}
    </div>
  )
}

export default SizeGrid
