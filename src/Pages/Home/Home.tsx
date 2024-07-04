import Banner from './components/Banner'
import HomeShoes from './components/HomeShoes'
import Brands from './components/Brands'

const Home = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Nike</h1>
      </div>

      <Banner searchParams={{ searchParam: 'nikeBanners', searchId: 1 }} />

      <HomeShoes searchParam={'nikeHomeShoes'} />

      <Banner searchParams={{ searchParam: 'nikeBanners', searchId: 2 }} />

      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Adidas</h1>
      </div>

      <Banner searchParams={{ searchParam: 'adidasBanners', searchId: 3 }} />

      <HomeShoes searchParam={'adidasHomeShoes'} />

      <Brands />
    </div>
  )
}

export default Home
