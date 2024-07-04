import Banner from './components/Banner'
import HomeShoes from './components/HomeShoes'
import Brands from './components/Brands'

import {
  adidasBanner,
  nikeBanner,
  nikeBannerTwo,
  nikeShoesHighlight,
  adidasShoesHighlight
} from './../../data/data'

const Home = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Nike</h1>
      </div>

      <Banner data={nikeBanner} />

      {/* Componente de lista de tênis em destaque (promocional, separado por marca) (Sempre 4 itens!) */}
      <HomeShoes data={nikeShoesHighlight} />

      <Banner data={nikeBannerTwo} />

      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Adidas</h1>
      </div>

      <Banner data={adidasBanner} />

      {/* Componente de lista de tênis em destaque (promocional, separado por marca) (Sempre 4 itens!) */}
      <HomeShoes data={adidasShoesHighlight} />

      {/*Marcas disponíveis no site*/}
      <Brands />
    </div>
  )
}

export default Home
