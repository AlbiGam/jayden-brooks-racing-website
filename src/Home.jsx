import { useState } from 'react'
import './App.css'
import './About.css'

function Home() {
  const baseAssetPath = import.meta.env.BASE_URL
  const [openRaceId, setOpenRaceId] = useState(null)
  const [isCalendarExpanded, setIsCalendarExpanded] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isBioExpanded, setIsBioExpanded] = useState(false)
  const previewRaceCount = 6

  const calendarRaces = [
    {
      id: 1,
      date: 'January 6th',
      event: 'K1 Speed Teen Challenge GP Round 1',
      result: '2nd: 23 Points',
    },
    {
      id: 2,
      date: 'January 31st',
      event: 'K1 Speed Teen Florida State Championship',
      result: '2nd',
    },
    {
      id: 3,
      date: 'February 3rd',
      event: 'K1 Speed Teen Challenge GP Round 2',
      result: '1st: 29 Points',
    },
    {
      id: 4,
      date: 'March 3rd',
      event: 'K1 Speed Teen Challenge GP Round 3',
      result: '3rd: 24 Points',
    },
    {
      id: 5,
      date: 'April 7th',
      event: 'K1 Speed Teen Challenge GP Round 4',
      result: '2nd: 20 Points',
    },
    {
      id: 6,
      date: 'May 2nd',
      event: 'K1 Speed Teen Nationals',
      result: null,
    },
    {
      id: 7,
      date: 'May 2nd',
      event: 'K1 Speed Teen World Championship (If qualified)',
      result: null,
    },
    {
      id: 8,
      date: 'May 5th',
      event: 'K1 Speed Teen Challenge GP Round 5',
      result: null,
    },
    {
      id: 9,
      date: 'June 2nd',
      event: 'K1 Speed Teen Challenge GP Round 6',
      result: null,
    },
    {
      id: 10,
      date: 'July 7th',
      event: 'K1 Speed Teen Challenge GP Round 7',
      result: null,
    },
    {
      id: 11,
      date: 'August 4th',
      event: 'K1 Speed Teen Challenge GP Round 8',
      result: null,
    },
    {
      id: 12,
      date: 'September 1st',
      event: 'K1 Speed Teen Challenge GP Round 9',
      result: null,
    },
    {
      id: 13,
      date: 'October 6th',
      event: 'K1 Speed Teen Challenge GP Round 10',
      result: null,
    },
    {
      id: 14,
      date: 'November 10th',
      event: 'K1 Speed Teen Challenge GP Round 11',
      result: null,
    },
    {
      id: 15,
      date: 'December 1st',
      event: 'K1 Speed Teen Challenge GP Round 12',
      result: null,
    },
  ]

  const visibleCalendarRaces = isCalendarExpanded
    ? calendarRaces
    : calendarRaces.slice(0, previewRaceCount)
  const hasHiddenRaces = calendarRaces.length > previewRaceCount

  const toggleRaceResult = (raceId, hasResult) => {
    if (!hasResult) {
      return
    }

    setOpenRaceId((currentRaceId) => (currentRaceId === raceId ? null : raceId))
  }

  return (
    <div className="page-shell">
      <header className="top-nav-wrap">
        <nav className="top-nav" aria-label="Primary">
          <div className="brand">
            <img className="brand-logo" src={`${baseAssetPath}logo.png`} alt="Jayden Brooks logo" />
            <span>JAYDEN BROOKS</span>
          </div>
          <ul className="menu-list">
            <li><a className="active" href="#hero">About</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="mobile-top-bar" aria-label="Mobile header">
          <div className="mobile-brand">
            <img className="mobile-brand-logo" src={`${baseAssetPath}logo.png`} alt="Jayden Brooks logo" />
            <span>JAYDEN BROOKS</span>
          </div>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Open menu"
            aria-expanded={isSidebarOpen}
            aria-controls="mobile-sidebar"
            onClick={() => setIsSidebarOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-overlay ${isSidebarOpen ? 'is-open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden={!isSidebarOpen}
      />
      <aside
        id="mobile-sidebar"
        className={`mobile-sidebar ${isSidebarOpen ? 'is-open' : ''}`}
        aria-hidden={!isSidebarOpen}
      >
        <div className="mobile-sidebar-header">
          <div className="mobile-sidebar-brand">
            <img className="mobile-sidebar-logo" src={`${baseAssetPath}logo.png`} alt="Jayden Brooks logo" />
            <span>Navigation</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul className="mobile-menu-list">
            <li>
              <a className="active" href="#hero" onClick={() => setIsSidebarOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#calendar" onClick={() => setIsSidebarOpen(false)}>
                Calendar
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsSidebarOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ── Hero ── */}
      <main className="editorial-stage" id="hero">
        <section className="collage" aria-label="Featured photos">
          <figure className="main-shot">
            <img src={`${baseAssetPath}main_page.jpeg`} alt="Jayden Brooks in karting gear" />
          </figure>
          <p className="vertical-title" aria-hidden="true">BROOKS</p>
        </section>

        <section className="hero-copy" aria-label="Driver summary">
          <h1>
            <span className="hero-name-main">JAYDEN</span>
            <br />
            <span className="hero-name-accent">BROOKS</span>
          </h1>
          <p className="subcopy">Racing driver from USA</p>
          <div className="hero-tags">
            <a href="#driver-bio" className="learn-more-btn">Learn More</a>
          </div>
        </section>
      </main>

      <div className="backdrop-shape" aria-hidden="true" />

      {/* ── Bio section ── */}
      <section className="about-stage" id="driver-bio">
        <div className="about-text">
          <p className="about-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            The Driver
          </p>
          <h2 className="about-heading">Behind the Wheel</h2>

          <div className={`about-body ${isBioExpanded ? 'is-expanded' : 'is-collapsed'}`}>
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

          <button
            type="button"
            className="about-read-more-btn"
            aria-expanded={isBioExpanded}
            onClick={() => setIsBioExpanded((prev) => !prev)}
          >
            {isBioExpanded ? 'Show Less' : 'Read More'}
          </button>

        </div>

        <aside className="driver-card">
          <div className="driver-card-photo">
            <img src={`${baseAssetPath}second_pictureJPG.JPG`} alt="Jayden Brooks racing" />
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
      </section>

      <section className="simracing-stage" id="simracing" aria-label="SimRacing section">
        <div className="simracing-copy">
          <p className="about-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            SimRacing
          </p>
          <h2 className="about-heading">Built On The Simulator</h2>
          <div className="about-body simracing-body">
            <p>
              I'm an active sim racer who also contributes to product development by providing
              detailed feedback. For example, I've been collaborating with AiMotor as a testing
              driver, helping refine their AI system. I receive updated builds daily and provide
              structured feedback to support continuous improvement.
            </p>
          </div>
        </div>

        <div className="simracing-media">
          <img
            className="simracing-video"
            src={`${baseAssetPath}image_3.jpeg`}
            alt="Jayden Brooks sim racing session"
          />
        </div>
      </section>

      <section className="calendar-stage" id="calendar" aria-label="2026 racing calendar">
        <div className="calendar-header">
          <p className="about-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            2026 Season
          </p>
          <h2 className="about-heading">2026 Racing Calendar</h2>
          <p className="calendar-note">
            Click completed races to reveal results. Use View All Races to open the full schedule.
          </p>
        </div>

        <ol className="calendar-list">
          {visibleCalendarRaces.map((race) => {
            const isCompleted = Boolean(race.result)
            const isOpen = openRaceId === race.id

            return (
              <li
                key={race.id}
                className={`calendar-item ${isCompleted ? 'is-completed' : 'is-upcoming'} ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="calendar-trigger"
                  onClick={() => toggleRaceResult(race.id, isCompleted)}
                  aria-expanded={isCompleted ? isOpen : false}
                  aria-label={`${race.date} - ${race.event}${isCompleted ? ', click to show result' : ''}`}
                >
                  <span className="calendar-date">{race.date}</span>
                  <span className="calendar-event">{race.event}</span>
                  <span className="calendar-status">{isCompleted ? 'Completed' : 'Upcoming'}</span>
                </button>

                {isCompleted && isOpen && (
                  <p className="calendar-result">Result: {race.result}</p>
                )}
              </li>
            )
          })}
        </ol>

        {hasHiddenRaces && (
          <div className="calendar-actions">
            <button
              type="button"
              className="calendar-view-all-btn"
              onClick={() => {
                setIsCalendarExpanded((prev) => !prev)
                setOpenRaceId(null)
              }}
            >
              {isCalendarExpanded ? 'Show Less' : 'View All Races'}
            </button>
          </div>
        )}
      </section>

      <section className="contact-stage" id="contact" aria-label="Contact section">
        <div className="contact-media">
          <img src={`${baseAssetPath}contact.JPG`} alt="Jayden Brooks contact" />
        </div>

        <div className="contact-copy">
          <p className="about-eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Contact
          </p>
          <h2 className="about-heading">Get In Touch</h2>
          <p className="contact-text">
            For partnerships, race opportunities, and media requests, send an email.
          </p>
          <a className="contact-email" href="mailto:jaydenbrooksracing@gmail.com">
            jaydenbrooksracing@gmail.com
          </a>
        </div>
      </section>

      <div className="grain" aria-hidden="true" />
    </div>
  )
}

export default Home
