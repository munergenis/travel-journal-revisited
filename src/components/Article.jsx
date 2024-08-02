import locationIcon from 'assets/location-icon.png'

const Article = ({ title, location, mapsUrl, startDate, endDate, description, imgUrl, imgPos }) => {
  return (
    <article className='grid grid-cols-1 grid-rows-2 shadow-lg rounded-lg'>
      <div className='max-h-72 overflow-hidden pb-4 rounded-t-lg'>
        <img
          className={`h-full object-cover object-${imgPos} min-h-full min-w-full`}
          src={imgUrl}
          alt={`${title} image`}
        />
      </div>

      <div className='flex flex-col gap-5 px-8 text-sm'>
        <header className='flex flex-col gap-1'>
          <div className='flex gap-2 items-center text-neutral-600 flex-wrap'>
            <img className='h-4' src={locationIcon} alt="Location icon" />
            <h3 className='tracking-[.125rem]'>{location.toUpperCase()}</h3>
            <a className='underline text-neutral-400 hover:text-neutral-500' href={mapsUrl} target='_blank'>View on Google Maps</a>
          </div>
          <h2 className='text-3xl font-bold'>{title}</h2>
        </header>

        <main className='flex flex-col gap-2'>
          <p className='font-bold'>{startDate} - {endDate}</p>
          <p className='text-gray-600'>{description}</p>
        </main>
      </div>
    </article>
  )
}

export default Article
