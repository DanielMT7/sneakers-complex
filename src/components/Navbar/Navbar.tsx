import { useShoppingCart } from '../../context/ShoppingCartContext'
import { Link, useNavigate } from 'react-router-dom'

import NavbarItem from '../NavbarItem/NavbarItem'

import Logo from '../../assets/icons/sneaker.svg'
import Bag from '../../assets/icons/bag.svg'
import Burguer from '../../assets/icons/burguer.svg'

import { NavbarBrandOptions, menuOptions } from '../../data/consts'
import SidebarMenu from '../SideBarMenu/SideBarMenu'
import { useState } from 'react'

const Navbar = () => {
  const navigate = useNavigate()
  const { openCart, cartQuantity } = useShoppingCart()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (url: string) => {
    navigate(url)
  }

  const handleShowModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <div className="w-full h-24 bg-neutral-50 fixed flex items-center place-content-evenly z-10">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
        </Link>
      </div>

      <div className="text-xl font-bold">
        <Link to="/">
          <h1>Sneaker Complex</h1>
        </Link>
      </div>

      <nav className="hidden lg:block">
        <ul className="space-x-6 flex">
          <li>
            <button onClick={() => handleNavigation('/offer')}>Promoção</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/offer')}>Ofertas</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/offer/gender/masculino')}>
              Masculino
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/offer/gender/feminino')}>
              Feminino
            </button>
          </li>
          <li>
            <NavbarItem label="Marcas" options={NavbarBrandOptions} />
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <div
          onClick={openCart}
          className="p-2 flex items-center hover:bg-slate-200 hover:rounded-full cursor-pointer"
        >
          <img src={Bag} alt="Bag" className="w-6 w-6 md:w-8 md:h-8" />
          {cartQuantity > 0 && (
            <div className="absolute w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs translate-x-3 translate-y-2 md:translate-x-4 md:translate-y-3 border border-slate-950">
              {cartQuantity}
            </div>
          )}
        </div>

        <div className="p-2 hover:rounded-full hover:bg-slate-200 lg:hidden cursor-pointer">
          <img
            onClick={handleShowModal}
            src={Burguer}
            alt=""
            className="w-6 w-6 md:w-8 md:h-8"
          />
          {isOpen && (
            <SidebarMenu options={menuOptions} onClose={handleShowModal} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
