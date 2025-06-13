import Link from 'next/link'
import './features.css'

export default function FeaturesPage() {
  return (
    <div className="features-container">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="hero-content">
          <h1>Powerful Features Designed for <span className="highlight">Your Success</span></h1>
          <p className="subtitle">
            Discover how our platform's capabilities can transform your workflow and drive results
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-main">
        <div className="section-header">
          <h2>Core Capabilities</h2>
          <p>Everything you need to optimize your operations</p>
        </div>

        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Advanced Analytics</h3>
            <p>Real-time dashboards and customizable reports with predictive insights and data visualization.</p>
        
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Smart Automation</h3>
            <p>Create custom workflows with our drag-and-drop builder and pre-built templates.</p>
            
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Enterprise Security</h3>
            <p>Military-grade encryption, SSO, and compliance with SOC 2, GDPR, and HIPAA standards.</p>
            
          </div>

          {/* Feature Card 4 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Seamless Integrations</h3>
            <p>Connect with 100+ tools via our API and native integrations with popular platforms.</p>
            
          </div>

          {/* Feature Card 5 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Team Collaboration</h3>
            <p>Real-time commenting, task assignments, and shared workspaces for distributed teams.</p>
            
          </div>

          {/* Feature Card 6 */}
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Mobile Ready</h3>
            <p>Full functionality on iOS and Android with offline capabilities and push notifications.</p>
            
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="feature-highlights">
        <div className="highlight-item">
          <div className="highlight-content">
            <h2>Customizable Dashboard</h2>
            <p>
              Tailor your workspace with drag-and-drop widgets, personalized layouts, 
              and role-based views that adapt to your workflow.
            </p>
            <ul className="highlight-list">
              <li>Save multiple dashboard configurations</li>
              <li>Create custom KPI widgets</li>
              <li>Set up automated data refreshes</li>
            </ul>
            <Link href="/demo" className="cta-button secondary">
              See Dashboard Demo
            </Link>
          </div>
          <div className="highlight-visual">
            {/* Placeholder for dashboard image */}
            <div className="visual-placeholder dashboard"></div>
          </div>
        </div>

        <div className="highlight-item reverse">
          <div className="highlight-content">
            <h2>Powerful Reporting Engine</h2>
            <p>
              Generate beautiful, insightful reports with our flexible builder 
              and schedule automatic distribution to stakeholders.
            </p>
            <ul className="highlight-list">
              <li>50+ pre-built report templates</li>
              <li>Custom branding options</li>
              <li>Automated PDF/Excel exports</li>
            </ul>
            <Link href="/demo" className="cta-button secondary">
              Explore Reporting
            </Link>
          </div>
          <div className="highlight-visual">
            {/* Placeholder for reporting image */}
            <div className="visual-placeholder reporting"></div>
          </div>
        </div>
      </section>

      {/* Features CTA */}
      <section className="features-cta">
        <div className="cta-content">
          <h2>Ready to experience these features?</h2>
          <p>Start your free trial or schedule a personalized demo</p>
          <div className="cta-buttons">
            <Link href="https://generous-dinosaur-78.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="cta-button primary">
              Start Free Trial
            </Link>
            <Link href="/demo" className="cta-button secondary">
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}