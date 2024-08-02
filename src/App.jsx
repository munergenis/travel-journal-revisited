import Header from 'components/Header.jsx'
import Article from 'components/Article.jsx'
import data from 'src/data/data.js'

const App = () => {
  const articles = data.map((el) => (
    <Article
      key={el.id}
      title={el.title}
      location={el.location}
      mapsUrl={el.googleMapsUrl}
      startDate={el.startDate}
      endDate={el.endDate}
      description={el.description}
      imgUrl={el.img.url}
      imgPos={el.img.pos}
    />
  ))
  return (
    <>
      <Header />
      <main className='pt-24 pb-16 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto gap-8 font-inter'>
        {articles}
      </main>
    </>
  )
}

export default App
