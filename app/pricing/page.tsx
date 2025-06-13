import Link from 'next/link'
import './pricing.css'

export default function PricingPage() {
  return (
    <div className="pricing-container">
      {/* Pricing Hero */}
      <section className="pricing-hero">
        <div className="hero-content">
          <h1>Simple, Transparent <span className="highlight">Pricing</span></h1>
          <p className="subtitle">
            Choose the plan that fits your needs. Start for free, upgrade anytime.
          </p>
          <div className="toggle-container">
            <span className="toggle-label">Monthly</span>
            <label className="toggle-switch">
              <input type="checkbox" id="billing-toggle" />
              <span className="slider"></span>
            </label>
            <span className="toggle-label">Annual <span className="discount-badge">(Save 20%)</span></span>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pricing-tiers">
        <div className="tiers-container">
          {/* Starter Tier */}
          <div className="pricing-tier">
            <div className="tier-header">
              <h3>Starter</h3>
              <p className="tier-description">Perfect for individuals and small teams</p>
              <div className="price">
                <span className="amount">$19</span>
                <span className="period">/month</span>
              </div>
              <Link href="https://generous-dinosaur-78.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="cta-button secondary">
                Get Started
              </Link>
            </div>
            <div className="tier-features">
              <ul>
                <li>✓ Up to 10 users</li>
                <li>✓ Basic analytics</li>
                <li>✓ 5 workflow automations</li>
                <li>✓ Email support</li>
                <li>✗ Advanced reporting</li>
                <li>✗ API access</li>
                <li>✗ Dedicated account manager</li>
              </ul>
            </div>
          </div>

          {/* Professional Tier (Featured) */}
          <div className="pricing-tier featured">
            <div className="popular-badge">Most Popular</div>
            <div className="tier-header">
              <h3>Professional</h3>
              <p className="tier-description">For growing businesses</p>
              <div className="price">
                <span className="amount">$49</span>
                <span className="period">/month</span>
              </div>
              <Link href="https://generous-dinosaur-78.accounts.dev/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F" className="cta-button primary">
                Start Free Trial
              </Link>
            </div>
            <div className="tier-features">
              <ul>
                <li>✓ Up to 50 users</li>
                <li>✓ Advanced analytics</li>
                <li>✓ 20 workflow automations</li>
                <li>✓ Priority support</li>
                <li>✓ Custom reporting</li>
                <li>✓ Basic API access</li>
                <li>✗ Dedicated account manager</li>
              </ul>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="pricing-tier">
            <div className="tier-header">
              <h3>Enterprise</h3>
              <p className="tier-description">For large organizations</p>
              <div className="price">
                <span className="amount">$99</span>
                <span className="period">/month</span>
              </div>
              <Link href="/contact" className="cta-button secondary">
                Contact Sales
              </Link>
            </div>
            <div className="tier-features">
              <ul>
                <li>✓ Unlimited users</li>
                <li>✓ Premium analytics</li>
                <li>✓ Unlimited automations</li>
                <li>✓ 24/7 support</li>
                <li>✓ Advanced reporting</li>
                <li>✓ Full API access</li>
                <li>✓ Dedicated account manager</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="feature-comparison">
        <div className="section-container">
          <h2>Detailed Feature Comparison</h2>
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-feature">Features</div>
              <div className="header-tier">Starter</div>
              <div className="header-tier">Professional</div>
              <div className="header-tier">Enterprise</div>
            </div>
            
            <div className="table-row">
              <div className="row-feature">Number of Users</div>
              <div className="row-value">Up to 10</div>
              <div className="row-value">Up to 50</div>
              <div className="row-value">Unlimited</div>
            </div>
            
            <div className="table-row">
              <div className="row-feature">Workflow Automations</div>
              <div className="row-value">5</div>
              <div className="row-value">20</div>
              <div className="row-value">Unlimited</div>
            </div>
            
            <div className="table-row">
              <div className="row-feature">Advanced Analytics</div>
              <div className="row-value">Basic</div>
              <div className="row-value">Advanced</div>
              <div className="row-value">Premium</div>
            </div>
            
            <div className="table-row">
              <div className="row-feature">API Access</div>
              <div className="row-value">✗</div>
              <div className="row-value">Basic</div>
              <div className="row-value">Full</div>
            </div>
            
            <div className="table-row">
              <div className="row-feature">Support</div>
              <div className="row-value">Email</div>
              <div className="row-value">Priority</div>
              <div className="row-value">24/7</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="section-container">
          <h2>Pricing FAQs</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I change plans later?</h3>
              <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>We offer a 14-day free trial for the Professional plan. No credit card required to start.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and bank transfers for annual plans.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer discounts for nonprofits?</h3>
              <p>Yes, we offer special pricing for registered nonprofits. Please contact our sales team for more information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="enterprise-cta">
        <div className="cta-content">
          <h2>Need custom enterprise pricing?</h2>
          <p>Contact our sales team for volume discounts, dedicated infrastructure, and premium support options.</p>
          <Link href="/contact" className="cta-button primary">
            Talk to Sales
          </Link>
        </div>
      </section>
    </div>
  )
}