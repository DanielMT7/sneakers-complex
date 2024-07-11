import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE_BASE_URL } from '../../../config/config'

import BannerProps from '../../../types/Banner'

type BannerSearchProps = {
  searchParams: {
    searchParam: string
    searchId: number
  }
}

function Banner({ searchParams }: BannerSearchProps) {
  const { searchParam, searchId } = searchParams
  const [banner, setBanner] = useState<BannerProps | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/${searchParam}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText)
        }
        return response.json()
      })
      .then(data => {
        const foundBanner = data.find(
          (item: BannerProps) => item.bannerId === searchId
        )
        if (foundBanner) {
          setBanner(foundBanner)
        } else {
          console.error(`Banner with id ${searchId} not found.`)
        }
      })
      .catch(error => {
        console.error('Error message: ', error)
      })
  }, [])

  const handleNavigate = (url: string) => {
    navigate(url)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!banner) return null

  const {
    bannerURL,
    bannerALT,
    smallBannerURL,
    hasButton,
    buttonText,
    hasBannerText,
    bannerText,
    bannerCallText,
    bannerButtonUrl
  } = banner

  return (
    <div className="space-y-6">
      <img
        className="hidden sm:block"
        src={`${IMAGE_BASE_URL}${bannerURL}`}
        alt={bannerALT}
      />
      <img
        className="sm:hidden"
        src={`${IMAGE_BASE_URL}${smallBannerURL}`}
        alt={bannerALT}
      />

      {hasBannerText && (
        <div>
          <h1 className="text-sm sm:text-md text-center font-bold">
            {bannerText}
          </h1>
          <h2 className="text-md md:text-3xl text-center font-black">
            {bannerCallText}
          </h2>
        </div>
      )}

      {hasButton && bannerButtonUrl && (
        <div className="flex justify-center">
          <button
            onClick={() => handleNavigate(bannerButtonUrl)}
            className="text-sm font-bold text-slate-50 p-4 bg-slate-950 rounded-full"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  )
}

export default Banner
