import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
  const cardElements = data.map(card => {
    return <Card
      key={card.id}
      card={card}
    // img={card.coverImg}
    // rating={card.stats.rating}
    // reviewCount={card.stats.reviewCount}
    // location={card.location}
    // title={card.title}
    // price={card.price}
    // openSpots={card.openSpots}
    />
  })

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>

    </div>
  )
}

export default App