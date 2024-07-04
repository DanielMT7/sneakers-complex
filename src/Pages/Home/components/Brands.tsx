import Nike from '../../../assets/images/Logos/Nike.jpg'
import Adidas from '../../../assets/images/Logos/Adidas.jpg'
import NewBalance from '../../../assets/images/Logos/NewBalance.jpg'
import Asics from '../../../assets/images/Logos/Asics.jpg'

const brands = [Nike, Adidas, NewBalance, Asics]

const Brands = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-center">Marcas parceiras</h1>
      </div>

      <div className="grid grid-cols-2 justify-items-center sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {brands.map((brand, index) => (
          <div key={index} className="flex flex-col">
            <img src={brand} alt="Brand Logo" className="w-24 sm:w-48" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
