type BannerProps = {
  data: {
    brandName: string
    bannerURL: string
    bannerALT: string
    smallBannerURL: string
    hasButton: boolean
    buttonText?: string
    hasText: boolean
    bannerText?: string
    bannerCallText?: string
  }
}

function Banner({ data }: BannerProps) {
  const {
    bannerALT,
    bannerURL,
    smallBannerURL,
    hasButton,
    buttonText,
    hasText,
    bannerText,
    bannerCallText
  } = data

  return (
    <div className="space-y-6">
      <img className="hidden sm:block" src={bannerURL} alt={bannerALT} />
      <img className="sm:hidden" src={smallBannerURL} alt={bannerALT} />

      {hasText && (
        <div>
          <h1 className="text-sm sm:text-md text-center font-bold">
            {bannerText}
          </h1>
          <h2 className="text-md md:text-3xl text-center font-black">
            {bannerCallText}
          </h2>
        </div>
      )}

      {hasButton && (
        <div className="flex justify-center">
          <button className="text-sm font-bold text-slate-50 p-4 bg-slate-950 rounded-full">
            {buttonText}
          </button>
        </div>
      )}
    </div>
  )
}

export default Banner
