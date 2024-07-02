// Icons
import Logo from '../../assets/icons/sneaker.svg'
import Bag from '../../assets/icons/bag.svg'
import Burguer from '../../assets/icons/burguer.svg'

function Navbar() {
  return (
    <div className="w-full h-24 bg-neutral-50 fixed flex items-center place-content-evenly">
      <div>
        <img src={Logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="text-xl font-bold sm:hidden">
        <h1>Sneaker Complex</h1>
      </div>

      <nav className="hidden sm:block">
        <ul className="space-x-6 flex">
          <li>Promoção</li>
          <li>Lançamentos</li>
          <li>Ofertas</li>
          <li>Marcas</li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="p-2 flex items-center hover:bg-slate-200 hover:rounded-full">
          <img src={Bag} alt="Bag" className="w-6 w-6 md:w-8 md:h-8" />
          <div className="absolute w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs translate-x-3 translate-y-2 md:translate-x-4 md:translate-y-3 border border-slate-950">
            3
          </div>
        </div>

        <div className="p-2 hover:rounded-full hover:bg-slate-200 sm:hidden">
          <img src={Burguer} alt="" className="w-6 w-6 md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
