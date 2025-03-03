import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set the wedding date - change this to your actual date
  const weddingDate = new Date('2025-06-15T16:00:00');

  useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black bg-opacity-80 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-primary-color text-xl font-bold font-cinzel">
            Wedding Is Coming
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link activeClass="active" className="nav-link cursor-pointer" to="home" spy={true} smooth={true} duration={500}>Home</Link>
            <Link activeClass="active" className="nav-link cursor-pointer" to="story" spy={true} smooth={true} duration={500}>Our Story</Link>
            <Link activeClass="active" className="nav-link cursor-pointer" to="details" spy={true} smooth={true} duration={500}>Details</Link>
            <Link activeClass="active" className="nav-link cursor-pointer" to="schedule" spy={true} smooth={true} duration={500}>Schedule</Link>
            <Link activeClass="active" className="nav-link cursor-pointer" to="rsvp" spy={true} smooth={true} duration={500}>RSVP</Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link activeClass="active" className="nav-link cursor-pointer" to="home" spy={true} smooth={true} duration={500} onClick={closeMenu}>Home</Link>
              <Link activeClass="active" className="nav-link cursor-pointer" to="story" spy={true} smooth={true} duration={500} onClick={closeMenu}>Our Story</Link>
              <Link activeClass="active" className="nav-link cursor-pointer" to="details" spy={true} smooth={true} duration={500} onClick={closeMenu}>Details</Link>
              <Link activeClass="active" className="nav-link cursor-pointer" to="schedule" spy={true} smooth={true} duration={500} onClick={closeMenu}>Schedule</Link>
              <Link activeClass="active" className="nav-link cursor-pointer" to="rsvp" spy={true} smooth={true} duration={500} onClick={closeMenu}>RSVP</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Element name="home" className="hero-section h-screen flex items-center justify-center relative">
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl mb-4" data-aos="fade-down">Wedding Is Coming</h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-primary-color" data-aos="fade-up">John Snow & Daenerys Targaryen</h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">June 15, 2025 • King's Landing</p>
          
          {/* Countdown */}
          <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="300">
            <div className="countdown-item">
              <span className="countdown-number">{days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-number">{seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
          
          <Link to="story" spy={true} smooth={true} duration={500} className="cursor-pointer">
            <div className="scroll-down text-white">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </Link>
        </div>
      </Element>

      {/* Our Story Section */}
      <Element name="story" className="py-20 bg-secondary-color border-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16" data-aos="fade-up">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="bg-background-color p-8 rounded-lg shadow-lg">
                <div className="house-sigil mb-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L9.5 7 3 9.5 9.5 12 12 18 14.5 12 21 9.5 14.5 7z" stroke="#c9a66b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl mb-4 text-center">House Stark</h3>
                <p className="mb-4">Born in Winterfell, John Snow was raised as the bastard son of Lord Eddard Stark. His journey took him to the Wall where he joined the Night's Watch, eventually becoming Lord Commander.</p>
                <p className="quote mb-6">Winter is coming.</p>
                <p>Through trials and tribulations, he discovered his true heritage as a Targaryen, making him the rightful heir to the Iron Throne.</p>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-background-color p-8 rounded-lg shadow-lg">
                <div className="house-sigil mb-6">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L14 9H21L16 13L18 19L12 15L6 19L8 13L3 9H10L12 3Z" stroke="#c9a66b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl mb-4 text-center">House Targaryen</h3>
                <p className="mb-4">The last known Targaryen, Daenerys was born during a storm on Dragonstone. Exiled to Essos, she rose from nothing to become the Mother of Dragons and the Breaker of Chains.</p>
                <p className="quote mb-6">Fire and Blood.</p>
                <p>Her quest to reclaim the Iron Throne led her across the Narrow Sea to Westeros, where destiny awaited.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl mb-6">How We Met</h3>
            <p className="max-w-2xl mx-auto mb-8">Our paths crossed at Dragonstone, where ice met fire. Despite initial tensions and the weight of our houses' histories, we found in each other something unexpected - a shared vision for a better world and a love that transcends ancient rivalries.</p>
            <p className="quote max-w-2xl mx-auto">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</p>
          </div>
        </div>
      </Element>

      {/* Wedding Details Section */}
      <Element name="details" className="py-20 bg-background-color">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16" data-aos="fade-up">Wedding Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 border border-primary-color rounded-lg" data-aos="fade-up">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">When</h3>
              <p className="mb-1">Sunday, June 15, 2025</p>
              <p>Ceremony begins at 4:00 PM</p>
            </div>
            
            <div className="text-center p-6 border border-primary-color rounded-lg" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Where</h3>
              <p className="mb-1">The Great Sept of Baelor</p>
              <p>King's Landing, Westeros</p>
            </div>
            
            <div className="text-center p-6 border border-primary-color rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-primary-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-xl mb-2">Reception</h3>
              <p className="mb-1">The Red Keep</p>
              <p>Immediately following the ceremony</p>
            </div>
          </div>
          
          <div className="bg-secondary-color p-8 rounded-lg" data-aos="fade-up">
            <h3 className="text-2xl mb-4 text-center">Accommodation</h3>
            <p className="text-center mb-6">For our guests traveling from distant lands, we have arranged special rates at the following inns:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-primary-color rounded-lg">
                <h4 className="text-lg mb-2">The Inn at the Crossroads</h4>
                <p className="mb-2">Located just outside the city gates, this historic inn offers comfortable rooms and excellent food.</p>
                <p className="text-sm">Use code "WEDDINGISCOMING" for special rates</p>
              </div>
              
              <div className="p-4 border border-primary-color rounded-lg">
                <h4 className="text-lg mb-2">Littlefinger's Establishment</h4>
                <p className="mb-2">For those seeking luxury, this establishment in the heart of King's Landing offers the finest accommodations.</p>
                <p className="text-sm">Use code "WEDDINGISCOMING" for special rates</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16" data-aos="fade-up">
            <h3 className="text-2xl mb-6 text-center">Location</h3>
            <div className="map-container">
              {/* This would be replaced with an actual map in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-secondary-color">
                <p className="text-center">Interactive map would be displayed here<br/>The Great Sept of Baelor, King's Landing</p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* Schedule Section */}
      <Element name="schedule" className="py-20 bg-secondary-color border-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16" data-aos="fade-up">Wedding Schedule</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="timeline-item" data-aos="fade-up">
              <h3 className="text-xl mb-2">3:30 PM - Arrival of Guests</h3>
              <p>Please arrive at the Great Sept of Baelor for seating. Representatives from both Houses will be present to guide you.</p>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl mb-2">4:00 PM - Ceremony</h3>
              <p>The wedding ceremony will be conducted according to the traditions of the Old Gods and the New, officiated by the High Septon.</p>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl mb-2">5:00 PM - Cocktail Hour</h3>
              <p>Join us in the gardens of the Red Keep for drinks and hors d'oeuvres while the wedding party takes photographs.</p>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl mb-2">6:00 PM - Grand Entrance & Feast</h3>
              <p>The wedding feast will begin with the grand entrance of the newlyweds, followed by a seven-course meal featuring dishes from across the Seven Kingdoms.</p>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl mb-2">8:00 PM - Toasts & Speeches</h3>
              <p>Representatives from both Houses will offer toasts to the newlyweds.</p>
            </div>
            
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl mb-2">9:00 PM - Dancing</h3>
              <p>The celebration continues with music and dancing until the early hours.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl mb-6">Dress Code</h3>
            <p className="max-w-2xl mx-auto">Formal attire is requested. Guests are encouraged to wear the colors of their House or colors of gold, silver, and black.</p>
          </div>
        </div>
      </Element>

      {/* RSVP Section */}
      

      {/* Footer */}
      <footer className="py-12 bg-black text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">John & Daenerys</h2>
          <p className="mb-8">June 15, 2025 • King's Landing</p>
          
          <div className="mb-8">
            <p className="quote max-w-2xl mx-auto">Love is the death of duty.</p>
          </div>
          
          <p className="text-sm text-gray-500">© 2025 Wedding Is Coming | Designed with fire and ice</p>
        </div>
      </footer>
    </div>
  );
}

export default App;