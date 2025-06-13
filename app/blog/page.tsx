import Link from 'next/link'
import './blog.css'

const blogPosts = [
  {
    id: 1,
    title: "10 Productivity Hacks for Remote Teams in 2024",
    excerpt: "Discover the latest strategies to keep your distributed team productive and engaged in the new year.",
    date: "May 15, 2024",
    readTime: "5 min read",
    category: "Productivity",
    image: "/blog/remote-teams.jpg"
  },
  {
    id: 2,
    title: "The Future of AI in Business Automation",
    excerpt: "How artificial intelligence is transforming workflows and what it means for your organization.",
    date: "April 28, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/blog/ai-automation.jpg"
  },
  {
    id: 3,
    title: "Case Study: How Company X Increased Efficiency by 40%",
    excerpt: "Learn how one company leveraged our platform to dramatically improve their operational efficiency.",
    date: "April 10, 2024",
    readTime: "6 min read",
    category: "Case Studies",
    image: "/blog/case-study.jpg"
  },
  {
    id: 4,
    title: "Essential Security Practices for SaaS Companies",
    excerpt: "Protect your business and customer data with these must-implement security measures.",
    date: "March 22, 2024",
    readTime: "7 min read",
    category: "Security",
    image: "/blog/saas-security.jpg"
  },
  {
    id: 5,
    title: "The Complete Guide to Workflow Automation",
    excerpt: "Everything you need to know to start automating repetitive tasks in your organization.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Automation",
    image: "/blog/workflow-automation.jpg"
  },
  {
    id: 6,
    title: "Why Data Visualization Matters for Decision Making",
    excerpt: "How turning data into visuals leads to better business decisions at every level.",
    date: "February 18, 2024",
    readTime: "4 min read",
    category: "Analytics",
    image: "/blog/data-viz.jpg"
  }
]

export default function BlogPage() {
  return (
    <div className="blog-container">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="hero-content">
          <h1>Insights & Resources</h1>
          <p className="subtitle">
            Discover the latest trends, tips, and strategies to grow your business
          </p>
          <div className="search-container">
            <input type="text" placeholder="Search articles..." className="search-input" />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post">
        <div className="featured-content">
          <span className="featured-badge">Featured</span>
          <h2>The 2024 Guide to Digital Transformation</h2>
          <p className="excerpt">
            How leading companies are adapting to the new digital landscape and what you can learn from their strategies.
          </p>
          <div className="meta">
            <span className="date">June 2, 2024</span>
            <span className="divider">•</span>
            <span className="read-time">12 min read</span>
          </div>
          <Link href="/blog/digital-transformation-2024" className="read-more">
            Read Article →
          </Link>
        </div>
        <div className="featured-image">
          {/* Replace with your actual featured image */}
          <div className="image-placeholder"></div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="categories">
        <div className="categories-container">
          <button className="category active">All Articles</button>
          <button className="category">Productivity</button>
          <button className="category">Technology</button>
          <button className="category">Case Studies</button>
          <button className="category">Security</button>
          <button className="category">Automation</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid">
        <div className="grid-container">
          {blogPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                {/* Replace with your actual post image */}
                <div className="image-placeholder"></div>
                <span className="category-badge">{post.category}</span>
              </div>
              <div className="post-content">
                <div className="meta">
                  <span className="date">{post.date}</span>
                  <span className="divider">•</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="excerpt">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="read-more">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="cta-content">
          <h2>Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive the latest articles, product updates, and industry insights directly to your inbox.
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="email-input" 
              required 
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          <p className="disclaimer">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="popular-tags">
        <h3>Popular Topics</h3>
        <div className="tags-container">
          <Link href="/blog/tag/productivity" className="tag">Productivity</Link>
          <Link href="/blog/tag/ai" className="tag">AI</Link>
          <Link href="/blog/tag/automation" className="tag">Automation</Link>
          <Link href="/blog/tag/security" className="tag">Security</Link>
          <Link href="/blog/tag/case-studies" className="tag">Case Studies</Link>
          <Link href="/blog/tag/analytics" className="tag">Analytics</Link>
          <Link href="/blog/tag/remote-work" className="tag">Remote Work</Link>
          <Link href="/blog/tag/digital-transformation" className="tag">Digital Transformation</Link>
        </div>
      </section>
    </div>
  )
}