import Link from 'next/link'
import './page.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transform Your <span className="highlight">Business</span> With Our Platform</h1>
            <p className="hero-subtitle">
              The complete solution to streamline operations, boost productivity, 
              and drive growth for modern enterprises.
            </p>
            <div className="hero-cta">
              <Link href="https://generous-dinosaur-78.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="cta-button primary">
                Start Free Trial
              </Link>
              <Link href="/demo" className="cta-button secondary">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="hero-image">
            
            <div className="image-placeholder"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2>Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Advanced Analytics</h3>
              <p>Real-time insights and data visualization for informed decision-making across your organization.</p>
            </div>
            <div className="feature-card">
              <h3>Workflow Automation</h3>
              <p>Eliminate repetitive tasks with intelligent automation that adapts to your processes.</p>
            </div>
            <div className="feature-card">
              <h3>Enterprise Security</h3>
              <p>Military-grade encryption and compliance standards to protect your data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2>Trusted by Industry Leaders</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "This platform transformed our operational efficiency. We've seen a 40% increase in productivity since implementation."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <p className="author-name">Sarah Johnson</p>
                  <p className="author-title">CEO, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "The analytics capabilities alone are worth the investment. We're making data-driven decisions faster than ever."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"></div>
                <div>
                  <p className="author-name">Michael Chen</p>
                  <p className="author-title">CTO, InnovateX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>98%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>10K+</h3>
              <p>Active Users</p>
            </div>
            <div className="stat-card">
              <h3>4.9/5</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3>How does the pricing work?</h3>
              <p>We offer tiered pricing based on your organization's size and needs. All plans include full platform access with varying levels of support and features.</p>
            </div>
            <div className="faq-card">
              <h3>Is there a free trial?</h3>
              <p>Yes, we offer a 14-day free trial with full access to all features. No credit card required to start.</p>
            </div>
            <div className="faq-card">
              <h3>What security measures are in place?</h3>
              <p>We use enterprise-grade encryption, regular security audits, and comply with all major industry standards including SOC 2 and GDPR.</p>
            </div>
            <div className="faq-card">
              <h3>How quickly can we get started?</h3>
              <p>Most teams are up and running within minutes. Our onboarding process ensures you get value from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Get in touch with our team to discuss how we can help you achieve your goals.</p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <textarea placeholder="How can we help you?" rows={4} required></textarea>
              </div>
              <button type="submit" className="cta-button primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}