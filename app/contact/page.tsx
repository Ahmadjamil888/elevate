import Link from 'next/link'
import './contact.css'

export default function ContactPage() {
  return (
    <div className="contact-container">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p className="subtitle">
            We'd love to hear from you! Reach out for sales, support, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="methods-container">
          {/* Contact Card - Sales */}
          <div className="contact-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 8L12 13L17 8" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Sales Inquiries</h3>
            <p>Interested in our products? Our sales team can help find the right solution for you.</p>
            <a href="mailto:sales@yourcompany.com" className="contact-link">
              sales@yourcompany.com
            </a>
            <a href="tel:+18005551234" className="contact-link">
              +1 (800) 555-1234
            </a>
          </div>

          {/* Contact Card - Support */}
          <div className="contact-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17H12.01" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Customer Support</h3>
            <p>Need help with your account or have technical questions? Our support team is here for you.</p>
            <a href="mailto:support@yourcompany.com" className="contact-link">
              support@yourcompany.com
            </a>
            <a href="tel:+18005554321" className="contact-link">
              +1 (800) 555-4321
            </a>
          </div>

          {/* Contact Card - General */}
          <div className="contact-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#ea5455" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>General Inquiries</h3>
            <p>For all other questions, partnership opportunities, or media requests.</p>
            <a href="mailto:hello@yourcompany.com" className="contact-link">
              hello@yourcompany.com
            </a>
            <a href="tel:+18005556789" className="contact-link">
              +1 (800) 555-6789
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-content">
            <h2>Send Us a Message</h2>
            <p>
              Have a question or want to discuss a project? Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales Question</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
          <div className="form-image">
            {/* Replace with your actual image */}
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="location-container">
          <div className="location-info">
            <h2>Our Offices</h2>
            <div className="office">
              <h3>Headquarters</h3>
              <address>
                123 Business Avenue<br />
                San Francisco, CA 94107<br />
                United States
              </address>
              <a href="tel:+14155550123" className="contact-link">
                +1 (415) 555-0123
              </a>
            </div>
            <div className="office">
              <h3>European Office</h3>
              <address>
                456 Innovation Street<br />
                London, EC1A 1BB<br />
                United Kingdom
              </address>
              <a href="tel:+442071234567" className="contact-link">
                +44 20 7123 4567
              </a>
            </div>
          </div>
          <div className="location-map">
            {/* Replace with your actual map embed */}
            <div className="map-placeholder">
              <p>Map of our locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Ready to get started?</h2>
          <p>
            Schedule a personalized demo with our team to see how we can help your business grow.
          </p>
          <Link href="/demo" className="cta-button">
            Request a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}