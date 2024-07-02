import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

// Images
//import Banner from './assets/images/BannerPromo.jpg'
// import Banner2 from './assets/images/BannerPromo2.jpg'

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <main className="pt-24 max-w-6xl m-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default App
