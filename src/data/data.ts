// Images
// Nike Banners
import nikeBanner1 from './../assets/images/NikeBanners/BannerPromo.jpg'
import nikeBannerVertical1 from './../assets/images/NikeBanners/BannerPromoVertical.jpg'
import nikeBanner2 from './../assets/images/NikeBanners/NikeBanner3.avif'
import nikeBannerVertical2 from './../assets/images/NikeBanners/NikeBannerVertical3.avif'

// Adidas Banners
import adidasBanner1 from './../assets/images/AdidasBanners/AdidasBanner.avif'
import adidasBannerVertical1 from './../assets/images/AdidasBanners/AdidasBannerVertical.jpg'

// Nike Shoes
import NikePhotonDust from './../assets/images/NikeShoes/NikePhotonDust.avif'
import NikeMetallicSilver from './../assets/images/NikeShoes/NikeMetallicSilver.avif'
import NikeTeamRed from './../assets/images/NikeShoes/NikeTeamRed.avif'
import NikeMethodOfMake from './../assets/images/NikeShoes/NikeMethodOfMake.avif'

// Adidas Shoes
import AdidasAdizeroPrime from './../assets/images/AdidasShoes/AdidasAdizeroPrime.avif'
import AdidasAEBestOfAdi from './../assets/images/AdidasShoes/AdidasAEBestOfAdi.avif'
import AdidasSamba from './../assets/images/AdidasShoes/AdidasSamba.avif'
import AdidasSuperStar from './../assets/images/AdidasShoes/AdidasSuperStart.avif'

export const nikeBanner = {
  brandName: 'Nike',
  bannerURL: nikeBanner1,
  bannerALT: 'Nike Banner',
  smallBannerURL: nikeBannerVertical1,
  hasButton: true,
  buttonText: 'Ver Ofertas',
  hasText: false,
  bannerText: '',
  bannerCallText: ''
}

export const nikeBannerTwo = {
  brandName: 'Nike',
  bannerURL: nikeBanner2,
  bannerALT: 'Nike Banner',
  smallBannerURL: nikeBannerVertical2,
  hasButton: true,
  buttonText: 'Ver Coleção',
  hasText: true,
  bannerText: 'Desbloqueie seu potêncial máximo para as corridas',
  bannerCallText: 'COM A TECNOLOGIA NIKE'
}

export const nikeShoesHighlight = [
  {
    shoeId: 1,
    shoeBrandName: 'Nike',
    shoeURL: NikePhotonDust,
    shoeName: 'Dunk Photon Dust',
    shoeGenre: 'Feminino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 829.99
  },
  {
    shoeId: 2,
    shoeBrandName: 'Nike',
    shoeURL: NikeMetallicSilver,
    shoeName: 'V2k Metallic Silver',
    shoeGenre: 'Feminino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 799.99
  },
  {
    shoeId: 3,
    shoeBrandName: 'Jordan',
    shoeURL: NikeTeamRed,
    shoeName: 'Air Jordan 1 Retro High Og Team Red',
    shoeGenre: 'Masculino',
    shoePrice: 1599.99,
    shoeDiscountedPrice: 1499.99
  },
  {
    shoeId: 4,
    shoeBrandName: 'Jordan',
    shoeURL: NikeMethodOfMake,
    shoeName: 'Air Jordan 1 Low Method Of Make',
    shoeGenre: 'Feminino',
    shoePrice: 1199.99,
    shoeDiscountedPrice: 999.99
  }
]

export const adidasBanner = {
  brandName: 'Adidas',
  bannerURL: adidasBanner1,
  bannerALT: 'Adidas Banner',
  smallBannerURL: adidasBannerVertical1,
  hasButton: true,
  buttonText: 'Ver Lançamento',
  hasText: true,
  bannerText: 'Conheça o mais novo lançamento da Adidas por Anthony Edwards',
  bannerCallText: 'PERFEITAMENTE DESENVOLVIDO PARA AS QUADRAS'
}

export const adidasShoesHighlight = [
  {
    shoeId: 5,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasAEBestOfAdi,
    shoeName: 'AE 1 Best Of Adi',
    shoeGenre: 'Masculino',
    shoePrice: 1999.99,
    shoeDiscountedPrice: 1799.99
  },
  {
    shoeId: 6,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasAdizeroPrime,
    shoeName: 'Adizero Prime X 2.0 STRUNG',
    shoeGenre: 'Masculino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 649.99
  },
  {
    shoeId: 7,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasSamba,
    shoeName: 'Samba',
    shoeGenre: 'Feminino',
    shoePrice: 1299.99,
    shoeDiscountedPrice: 1190.99
  },
  {
    shoeId: 8,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasSuperStar,
    shoeName: 'Super Star',
    shoeGenre: 'Masculino',
    shoePrice: 900.0,
    shoeDiscountedPrice: 750.0
  }
]

export const AllShoes = [
  {
    shoeId: 1,
    shoeBrandName: 'Nike',
    shoeURL: NikePhotonDust,
    shoeName: 'Dunk Photon Dust',
    shoeGenre: 'Feminino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 829.99
  },
  {
    shoeId: 2,
    shoeBrandName: 'Nike',
    shoeURL: NikeMetallicSilver,
    shoeName: 'V2k Metallic Silver',
    shoeGenre: 'Feminino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 799.99
  },
  {
    shoeId: 3,
    shoeBrandName: 'Jordan',
    shoeURL: NikeTeamRed,
    shoeName: 'Air Jordan 1 Retro High Og Team Red',
    shoeGenre: 'Feminino',
    shoePrice: 1599.99,
    shoeDiscountedPrice: 1499.99
  },
  {
    shoeId: 4,
    shoeBrandName: 'Jordan',
    shoeURL: NikeMethodOfMake,
    shoeName: 'Air Jordan 1 Low Method Of Make',
    shoeGenre: 'Feminino',
    shoePrice: 1199.99,
    shoeDiscountedPrice: 999.99
  },
  {
    shoeId: 5,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasAEBestOfAdi,
    shoeName: 'AE 1 Best Of Adi',
    shoeGenre: 'Masculino',
    shoePrice: 1999.99,
    shoeDiscountedPrice: 1799.99
  },
  {
    shoeId: 6,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasAdizeroPrime,
    shoeName: 'Adizero Prime X 2.0 STRUNG',
    shoeGenre: 'Masculino',
    shoePrice: 899.99,
    shoeDiscountedPrice: 649.99
  },
  {
    shoeId: 7,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasSamba,
    shoeName: 'Samba',
    shoeGenre: 'Feminino',
    shoePrice: 1299.99,
    shoeDiscountedPrice: 1190.99
  },
  {
    shoeId: 8,
    shoeBrandName: 'Adidas',
    shoeURL: AdidasSuperStar,
    shoeName: 'Super Star',
    shoeGenre: 'Masculino',
    shoePrice: 900.0,
    shoeDiscountedPrice: 750.0
  }
]
