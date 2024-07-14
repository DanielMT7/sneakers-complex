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

      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">New Balance</h1>
      </div>

      <Banner
        searchParams={{ searchParam: 'newBalanceBanners', searchId: 4 }}
      />

      <HomeShoes searchParam={'newBalanceHomeShoes'} />

      <div>
        <h1 className="text-2xl sm:text-4xl font-bold">Asics</h1>
      </div>

      <Banner searchParams={{ searchParam: 'asicsBanners', searchId: 5 }} />

      <HomeShoes searchParam={'asicsHomeShoes'} />

      <Brands />
    </div>
  )
}

export default Home
