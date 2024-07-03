import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

const App = () => {
  return (
    <ShoppingCartProvider>
      <div>
        <Navbar />
        <main className="pt-24 px-8 max-w-6xl m-auto">
          <Outlet />
        </main>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
