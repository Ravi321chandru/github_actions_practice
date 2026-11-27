import './App.css'

const destinations = [
  { name: 'Santorini, Greece', price: 1299, img: 'photo-1570077188670-e3a8d69ac5ff' },
  { name: 'Kyoto, Japan', price: 1599, img: 'photo-1493976040374-85c8e12f0c0e' },
  { name: 'Bali, Indonesia', price: 999, img: 'photo-1537996194471-e657df975ab4' },
  { name: 'Swiss Alps', price: 1899, img: 'photo-1531366936337-7c912a4589a7' },
]

const features = [
  { icon: '✈️', title: 'Best Price Deals', text: 'We compare hundreds of offers so you always pay less.' },
  { icon: '🧭', title: 'Local Guides', text: 'Hand-picked experts who show you the real destination.' },
  { icon: '🛡️', title: 'Safe & Flexible', text: 'Free cancellation and 24/7 support on every trip.' },
]

const img = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export default function App() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">🌍 Wanderly</a>
        <nav>
          <a href="#destinations">Destinations</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)), url(${img('photo-1488646953014-85cb44e25828', 1600)})` }}>
          <h1>Make Your Dream Trip a Reality</h1>
          <p>Unforgettable trips to the world's most beautiful places.</p>
          <a className="btn" href="#destinations">Explore Destinations</a>
        </section>

        <section id="destinations" className="section">
          <h2>Popular Destinations</h2>
          <div className="grid">
            {destinations.map((d) => (
              <article className="card" key={d.name}>
                <img src={img(d.img, 600)} alt={d.name} loading="lazy" />
                <div className="card-body">
                  <h3>{d.name}</h3>
                  <p>From <strong>${d.price}</strong></p>
                  <a href="#contact" className="link">Book now →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="section alt">
          <h2>Why Travel With Us</h2>
          <div className="grid three">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <span className="icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Plan Your Trip</h2>
          <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you soon.'); e.target.reset() }}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Email address" required />
            <input type="text" placeholder="Where do you want to go?" />
            <button className="btn" type="submit">Get a Free Quote</button>
          </form>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Wanderly. All rights reserved.</footer>
    </>
  )
}
