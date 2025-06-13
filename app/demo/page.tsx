import Link from 'next/link'
import './demo.css'

export default function DemoPage() {
  return (
    <div className="demo-container">
      {/* Demo Header */}
      <header className="demo-header">
        <div className="header-content">
          <h1>Experience Our Platform</h1>
          <p className="subtitle">
            Take a hands-on tour of our product's key features and capabilities
          </p>
          <div className="header-cta">
            <Link href="https://generous-dinosaur-78.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fdemo" className="cta-button primary">
              Start Free Trial
            </Link>
            <Link href="/contact" className="cta-button secondary">
              Get Personal Demo
            </Link>
          </div>
        </div>
      </header>

      {/* Interactive Demo Section */}
      <section className="interactive-demo">
        <div className="demo-tabs">
          <button className="tab-button active">Dashboard</button>
          <button className="tab-button">Analytics</button>
          <button className="tab-button">Workflows</button>
          <button className="tab-button">Settings</button>
        </div>

        <div className="demo-content">
          <div className="demo-preview">
            <div className="product-frame">
              {/* Placeholder for product screenshot/video */}
              <div className="product-placeholder">
                <div className="placeholder-content">
                  <h3>Interactive Demo</h3>
                  <p>Click through the tabs to explore different features</p>
                </div>
              </div>
            </div>
          </div>
          <div className="demo-features">
            <div className="feature-highlight active">
              <h3>Intuitive Dashboard</h3>
              <ul>
                <li>Real-time performance metrics</li>
                <li>Customizable widgets</li>
                <li>Quick access to key functions</li>
              </ul>
            </div>
            <div className="feature-highlight">
              <h3>Advanced Analytics</h3>
              <ul>
                <li>Interactive data visualizations</li>
                <li>Custom report builder</li>
                <li>Export to multiple formats</li>
              </ul>
            </div>
            <div className="feature-highlight">
              <h3>Smart Workflows</h3>
              <ul>
                <li>Drag-and-drop automation builder</li>
                <li>Pre-built templates</li>
                <li>Conditional logic paths</li>
              </ul>
            </div>
            <div className="feature-highlight">
              <h3>Team Settings</h3>
              <ul>
                <li>Role-based permissions</li>
                <li>Single sign-on (SSO)</li>
                <li>Audit logs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="benefits-section">
        <h2>Why Customers Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Increased Efficiency</h3>
            <p>Reduce manual work by up to 80% with our automation features</p>
          </div>
          <div className="benefit-card">
            <h3>Better Insights</h3>
            <p>Make data-driven decisions with real-time analytics</p>
          </div>
          <div className="benefit-card">
            <h3>Enterprise Security</h3>
            <p>Military-grade encryption and compliance certifications</p>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="demo-cta">
        <div className="cta-content">
          <h2>Ready to see it in action?</h2>
          <p>Schedule a personalized demo with our product specialists</p>
          <Link href="/contact" className="cta-button primary large">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}