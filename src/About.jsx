import { Link } from 'react-router-dom'
import './App.css'
import './About.css'

function About() {
  return (
    <div className="page-shell about-shell">
      <header className="top-nav-wrap">
        <nav className="top-nav" aria-label="Primary">
          <div className="brand">
            <img className="brand-logo" src="/logo.png" alt="Jayden Brooks logo" />
            <span>JAYDEN BROOKS</span>
          </div>
          <ul className="menu-list">
            <li><Link to="/">About</Link></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="about-stage">
        <section className="about-text">
          <p className="about-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            The Driver
          </p>
          <h2 className="about-heading">Behind the Wheel</h2>

          <div className="about-body">
            <p>
              My name is Jayden Brooks, and I found my love for racing at the age of 11. I have
              always loved racing but never even got behind the sim until 2022. With more months
              of experience, I finally figured out what karting was. In 2023, I started rental
              karting for fun occasionally but always topped the leaderboards with my sim-racing
              experience.
            </p>
            <p>
              In 2024, I started racing in the <strong>K1 Speed Challenge GP</strong> in
              Hollywood, Florida, USA. This was my first time going against other fast drivers
              like me. I started the season with a podium but the next few races were a little
              unlucky. This was the ultimate wake-up call for me to step up my game. With
              consistency for the rest of the season, I was able to finish the championship in
              3rd - which reserved me a spot in the K1 Speed Florida State Championship race.
              I finished 7th out of 21, but it was the learning experience of a lifetime.
            </p>
            <p>
              In 2025, I started taking sim-racing to a more serious level than before to
              maximise my skills on track. I continued the K1 Speed Challenge GP, just at a
              different track. This season started like last year with a podium but struggled
              for a few months. In June 2025, I finally won my first league race - and it
              did not just stop there. I also won in July, August, September, November, and
              December, which claimed me my first ever championship win. Again, I was headed
              to the K1 Speed Florida State Championship. This time I did not settle for less:
              I qualified 5th but finished <strong>2nd</strong>. For the first time in my
              racing career, I am going to compete at a National level in the{' '}
              <strong>K1 Speed USA National Championship</strong>!
            </p>
            <p>
              Currently, I am still racing in the K1 Speed Challenge GP, leading the
              championship, but also preparing my Nationals race set in May. I am still hard
              at work on the sim perfecting my craft despite some injuries from other sports.
              I am aiming to finally drive an owner kart this year and maybe even buy my own
              to compete with. I have never felt hungrier - but I am only just getting started.
            </p>
          </div>

        </section>

        <aside className="driver-card">
          <div className="driver-card-photo">
            <img src="/second_pictureJPG.JPG" alt="Jayden Brooks racing" />
          </div>
          <div className="driver-card-info">
            <h3 className="driver-name">
              <span className="name-first">JAYDEN&nbsp;</span>
              <span className="name-last">BROOKS</span>
            </h3>
            <p className="driver-class">K1 Speed Challenge GP</p>
            <div className="driver-divider" />
            <div className="driver-stats">
              <div className="stat">
                <span className="stat-value">USA</span>
                <span className="stat-label">Nationality</span>
              </div>
              <div className="stat">
                <span className="stat-value">#1</span>
                <span className="stat-label">Championship</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <div className="grain" aria-hidden="true" />
    </div>
  )
}

export default About
