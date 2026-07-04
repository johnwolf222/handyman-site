import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

import heroImage from './assets/handyman-site-images/hero-home.png'
import electricalImage from './assets/handyman-site-images/electrical.png'
import detailFinishImage from './assets/handyman-site-images/detail-finish.png'
import repairWorkImage from './assets/handyman-site-images/repair-work.png'
import wallRepairImage from './assets/handyman-site-images/wall-repair.png'
import kitchenRemodelingImage from './assets/handyman-site-images/kitchen-remodeling.png'
import renovationImage from './assets/handyman-site-images/renovation.png'
import wallInstallationImage from './assets/handyman-site-images/wall-installation.png'
import drywallImage from './assets/handyman-site-images/drywall.png'
import plumbingImage from './assets/handyman-site-images/plumbing.png'
import finishedKitchenImage from './assets/handyman-site-images/finished-kitchen.png'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const services = [
  {
    title: 'Drywall repair',
    image: drywallImage,
  },
  {
    title: 'Wall repair',
    image: wallRepairImage,
  },
  {
    title: 'Plumbing help',
    image: plumbingImage,
  },
  {
    title: 'Kitchen updates',
    image: kitchenRemodelingImage,
  },
  {
    title: 'Fixture installation',
    image: finishedKitchenImage,
  },
  {
    title: 'Home repairs',
    image: repairWorkImage,
  },
  {
    title: 'Wall installation',
    image: wallInstallationImage,
  },
  {
    title: 'Electrical Work',
    image: electricalImage,
  },
]

const trustPoints = [
  'Reliable scheduling',
  'Clean work areas',
  'Clear communication',
  'Quality-focused repairs',
]

const galleryItems = [
  {
    title: 'Electrical Work',
    image: electricalImage,
  },
  {
    title: 'Drywall finishing',
    image: drywallImage,
  },
  {
    title: 'Plumbing repairs',
    image: plumbingImage,
  },
  {
    title: 'Kitchen results',
    image: finishedKitchenImage,
  },
]

function App() {
  const bookingFormRef = useRef(null)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleBookingSubmit = async (event) => {
    event.preventDefault()

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS environment values.')
      setSubmitStatus('error')
      return
    }

    try {
      setSubmitStatus('sending')

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        bookingFormRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )

      bookingFormRef.current.reset()
      setSubmitStatus('success')
    } catch (error) {
      console.error('EmailJS booking request failed:', error)
      setSubmitStatus('error')
    }
  }

  return (
    <main className="site-shell">
      <header
        className="hero hero-image-ready"
        id="home"
        style={{ '--hero-image': `url(${heroImage})` }}
      >
        <nav className="nav">
          <a className="brand" href="#home" aria-label="Handyman home">
            <span className="brand-mark">H</span>
            <span>Handyman Services</span>
          </a>

          <div className="nav-links" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#booking">Book</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-call" href="tel:+14040000000">
            Call Now
          </a>
        </nav>

        <section className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Trusted local handyman help</p>
            <h1>Reliable repairs, installs, and home projects done with care.</h1>
            <p className="hero-text">
              Professional handyman service for homeowners who want clear communication,
              clean work, and dependable results without the confusion.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#booking">
                Request a Booking
              </a>
              <a className="button secondary" href="#services">
                View Services
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Service highlights">
            <p className="card-label">Available for</p>
            <h2>Small repairs, punch lists, installs, and maintenance.</h2>
            <p>
              Tell us what needs to be fixed, installed, assembled, or improved.
              We will follow up to confirm the details.
            </p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Why customers trust us">
          {trustPoints.map((point) => (
            <div className="trust-item" key={point}>
              <span aria-hidden="true">●</span>
              <p>{point}</p>
            </div>
          ))}
        </section>
      </header>

      <section className="section about-section">
        <div className="image-stack" aria-label="Handyman project photos">
          <div
            className="photo-card photo-card-large has-image"
            style={{ '--card-image': `url(${repairWorkImage})` }}
          >
            <span>Roofing Work</span>
          </div>
          <div
            className="photo-card photo-card-small has-image"
            style={{ '--card-image': `url(${detailFinishImage})` }}
          >
            <span>Leak Repair</span>
          </div>
          <div className="experience-badge">
            <strong>Quality</strong>
            <span>first service</span>
          </div>
        </div>

        <div className="section-copy">
          <p className="eyebrow">About the service</p>
          <h2>Professional help for the home projects you need handled.</h2>
          <p>
            From quick fixes to detailed punch-list work, this service is built around
            making the process simple. You explain the issue, we confirm the scope,
            and your appointment is handled with respect for your home and time.
          </p>

          <ul className="check-list">
            <li>Simple booking request with no online payment required</li>
            <li>Clear service categories so customers know what to ask for</li>
            <li>Trust-focused copy that feels professional, not pushy</li>
            <li>Mobile-friendly design for fast contact and booking</li>
          </ul>
        </div>
      </section>

      <section className="services-banner" id="services">
        <div className="services-banner-copy">
          <p className="eyebrow">Services</p>
          <h2>Clear handyman solutions for everyday home needs.</h2>
          <p>
            Choose the service area that fits your request. For anything not listed,
            use the booking form and describe the project.
          </p>
        </div>
      </section>

      <section className="service-panel" aria-label="Service list">
        {services.map((service) => (
          <article
            className="service-card has-service-image"
            key={service.title}
            style={{ '--service-image': `url(${service.image})` }}
          >
            <div className="service-icon" aria-hidden="true">✦</div>
            <h3>{service.title}</h3>
            <a href="#booking" aria-label={`Book ${service.title}`}>
              Book this service
            </a>
          </article>
        ))}
      </section>

      <section className="section work-section" id="work">
        <div className="section-copy">
          <p className="eyebrow">Work quality</p>
          <h2>Built to feel dependable before the first call.</h2>
          <p>
            The site should make visitors feel like they are dealing with someone
            organized, respectful, and serious about doing the job correctly.
          </p>
        </div>

        <div className="gallery-grid" aria-label="Project gallery">
          {galleryItems.map((item) => (
            <div
              className="gallery-card has-image"
              key={item.title}
              style={{ '--card-image': `url(${item.image})` }}
            >
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy">
          <p className="eyebrow">Request service</p>
          <h2>Book a handyman visit without pricing or payment online.</h2>
          <p>
            Send the project details and contact information. The next step is a
            direct follow-up to confirm availability, scope, and timing.
          </p>

          <div className="contact-card" id="contact">
            <p>Prefer direct contact?</p>
            <a href="tel:+14040000000">(404) 000-0000</a>
            <a href="mailto:johnwolf.connect@gmail.com">johnwolf.connect@gmail.com</a>
          </div>
        </div>

        <form
          ref={bookingFormRef}
          className="booking-form"
          onSubmit={handleBookingSubmit}
        >
          <input type="hidden" name="source" value="Handyman website booking form" />
          <input type="hidden" name="payment_status" value="No payment collected online" />

          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Phone number
            <input type="tel" name="phone" placeholder="Best contact number" required />
          </label>

          <label>
            Email address
            <input type="email" name="email" placeholder="Best email address" required />
          </label>

          <label>
            Service needed
            <select name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => (
                <option value={service.title} key={service.title}>{service.title}</option>
              ))}
              <option value="Other project">Other project</option>
            </select>
          </label>

          <label>
            How soon?
            <select name="preferred_time" defaultValue="" required>
              <option value="" disabled>Select a timeframe</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="In a few weeks">In a few weeks</option>
              <option value="This month">This month</option>
              <option value="In a few months">In a few months</option>
            </select>
          </label>

          <label>
            Service Area
            <input
              type="text"
              name="service_area"
              placeholder="What city are you in?"
              required
            />
          </label>

          <label>
            Project details
            <textarea
              name="details"
              rows="5"
              placeholder="Tell us what needs to be repaired, installed, assembled, or completed."
              required
            />
          </label>

          <button type="submit" disabled={submitStatus === 'sending'}>
            {submitStatus === 'sending' ? 'Sending Request...' : 'Send Booking Request'}
          </button>

          {submitStatus === 'success' && (
            <p className="form-alert success" role="status">
              Request sent. The handyman has been notified by email and you should receive a confirmation email shortly.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="form-alert error" role="alert">
              Something went wrong. Please call or email directly so your request is not missed.
            </p>
          )}

          <p className="form-note">
            This form does not collect payment. It sends a booking request to johnwolf.connect@gmail.com.
          </p>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-brand-block">
          <a className="brand" href="#home" aria-label="Handyman home">
            <span className="brand-mark">H</span>
            <span>Handyman Services</span>
          </a>
          <p>Reliable home repair and improvement help.</p>
        </div>

        <div className="footer-actions">
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#booking">Book</a>
            <a href="tel:+14040000000">Call</a>
          </div>

          <div className="social-links" aria-label="Social media links">
            <a href="https://facebook.com" aria-label="Facebook">
              <span aria-hidden="true">f</span>
            </a>
            <a href="https://nextdoor.com" aria-label="Nextdoor">
              <span aria-hidden="true">N</span>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5"></rect>
                <circle cx="12" cy="12" r="3.5"></circle>
                <circle cx="17" cy="7" r="1"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
