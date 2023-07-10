import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


function App() {
  const cardElements = data.map(card => {
    return <Card
      key={card.id}
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      country={card.location}
      title={card.title}
      price={card.price}
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