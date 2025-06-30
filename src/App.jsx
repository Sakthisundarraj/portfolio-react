import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isVisible, setIsVisible] = useState({
    about: false,
    experience: false,
    skills: false,
    projects: false,
    contact: false
  })

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setIsVisible(prev => ({
            ...prev,
            [sectionId]: true
          }))
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => {
      observer.observe(section)
    })

    // Add scroll effect for navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (window.scrollY > 100) {
        navbar?.classList.add('scrolled')
      } else {
        navbar?.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Sakthi Sundarraj</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1>Sakthi Sundarraj</h1>
            <div className="hero-title">
              <span className="title-text">GIS Engineer</span>
              <span className="title-separator">•</span>
              <span className="title-text">Web Developer</span>
            </div>
            <p className="hero-description">
              Passionate about creating innovative digital solutions with 4.5 years of experience 
              in Geographic Information Systems and modern web technologies.
            </p>
            <div className="hero-buttons">
              <button className="cta-button primary">Download CV</button>
              <button className="cta-button secondary">View Projects</button>
            </div>
            <div className="hero-social">
              <a href="mailto:sakthi.dante3@gmail.com" className="social-icon">📧</a>
              <a href="tel:+916380997414" className="social-icon">📞</a>
              <a href="https://github.com/sakthisundarraj" target="_blank" rel="noopener noreferrer" className="social-icon">💻</a>
              <a href="#" className="social-icon">💼</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-profile">
                <div className="profile-image">
                  <span>👨‍💻</span>
                </div>
                <div className="profile-badge">
                  <span>4.5+ Years</span>
                  <small>Experience</small>
                </div>
              </div>
              <div className="floating-card card-1">
                <span>🗺️</span>
                <p>GIS Expert</p>
              </div>
              <div className="floating-card card-2">
                <span>🌐</span>
                <p>Web Dev</p>
              </div>
              <div className="floating-card card-3">
                <span>📱</span>
                <p>Responsive</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible.about ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>About Me</h2>
            <p className="section-subtitle">Get to know me better</p>
          </div>
          
          <div className="about-content">
            <div className="about-main">
              <div className="about-intro">
                <div className="intro-badge">
                  <span>👋</span>
                  <span>Passionate Professional</span>
                </div>
                <h3>GIS Engineer & Web Developer</h3>
                <p className="intro-text">
                  I am a passionate GIS Engineer with 4.5 years of experience, looking forward to work 
                  in a challenging environment where I get opportunities to grow my technical as well 
                  as interpersonal skills.
                </p>
                <p className="intro-text">
                  I specialize in Geographic Information Systems, web development, and creating 
                  innovative digital solutions. My expertise includes HTML, CSS, Bootstrap, JavaScript, 
                  and WordPress development.
                </p>
              </div>
              
              <div className="about-highlights">
                <h4>Key Highlights</h4>
                <div className="highlights-grid">
                  <div className="highlight-item">
                    <div className="highlight-icon">🎯</div>
                    <div className="highlight-content">
                      <h5>Problem Solver</h5>
                      <p>Creative solutions for complex technical challenges</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🚀</div>
                    <div className="highlight-content">
                      <h5>Fast Learner</h5>
                      <p>Quickly adapt to new technologies and frameworks</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🤝</div>
                    <div className="highlight-content">
                      <h5>Team Player</h5>
                      <p>Excellent collaboration and communication skills</p>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">📈</div>
                    <div className="highlight-content">
                      <h5>Growth Mindset</h5>
                      <p>Continuously improving and expanding skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-sidebar">
              <div className="personal-info-card">
                <h4>Personal Information</h4>
                <div className="info-list">
                  <div className="info-item">
                    <span className="info-icon">📧</span>
                    <div className="info-details">
                      <label>Email</label>
                      <span>sakthi.dante3@gmail.com</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📞</span>
                    <div className="info-details">
                      <label>Phone</label>
                      <span>+91-6380997414</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <div className="info-details">
                      <label>Location</label>
                      <span>Coimbatore, Tamilnadu</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">🏠</span>
                    <div className="info-details">
                      <label>Address</label>
                      <span>2nd R.K.S Street, Keelakottai, Chinnalapatti, Dindigul-624301</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="stats-card">
                <h4>Quick Stats</h4>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">4.5+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Technologies</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Languages</div>
                  </div>
                </div>
              </div>
              
              <div className="interests-card">
                <h4>Interests & Hobbies</h4>
                <div className="interests-list">
                  <span className="interest-tag">🌐 Web Development</span>
                  <span className="interest-tag">🗺️ GIS Technology</span>
                  <span className="interest-tag">📱 Mobile Apps</span>
                  <span className="interest-tag">🎨 UI/UX Design</span>
                  <span className="interest-tag">📚 Learning</span>
                  <span className="interest-tag">🏃 Fitness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`experience ${isVisible.experience ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Experience & Education</h2>
            <p className="section-subtitle">My professional journey</p>
          </div>
          <div className="experience-content">
            <div className="experience-section">
              <h3>Professional Experience</h3>
              <div className="experience-item">
                <div className="experience-header">
                  <h4>GIS Engineer</h4>
                  <span className="experience-duration">4.5 Years</span>
                </div>
                <p>Specialized in Geographic Information Systems and spatial data analysis</p>
              </div>
            </div>
            
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <div className="education-header">
                  <h4>MSc (Computer Science)</h4>
                  <span className="education-duration">2014-2016</span>
                </div>
                <p>Karpagam University</p>
              </div>
              <div className="education-item">
                <div className="education-header">
                  <h4>BSc (Computer Science)</h4>
                  <span className="education-duration">2011-2014</span>
                </div>
                <p>Parvathys Arts and Science College, Dindigul, Tamilnadu</p>
              </div>
              <div className="education-item">
                <div className="education-header">
                  <h4>Higher Secondary</h4>
                  <span className="education-duration">2009-2011</span>
                </div>
                <p>Devangar Higher Secondary School, Chinnalapatti, Dindigul, Tamilnadu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`skills ${isVisible.skills ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Skills & Languages</h2>
            <p className="section-subtitle">My technical expertise</p>
          </div>
          <div className="skills-content">
            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">🌐</span>
                  <h4>HTML</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎨</span>
                  <h4>CSS</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📱</span>
                  <h4>Bootstrap</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">⚡</span>
                  <h4>JavaScript</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📝</span>
                  <h4>WordPress</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '70%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🗺️</span>
                  <h4>GIS</h4>
                  <div className="skill-level">
                    <div className="skill-bar" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="languages-section">
              <h3>Languages</h3>
              <div className="languages-grid">
                <div className="language-item">
                  <h4>English</h4>
                  <div className="language-levels">
                    <span>Read ✓</span>
                    <span>Write ✓</span>
                    <span>Speak ✓</span>
                  </div>
                </div>
                <div className="language-item">
                  <h4>Tamil</h4>
                  <div className="language-levels">
                    <span>Read ✓</span>
                    <span>Write ✓</span>
                    <span>Speak ✓</span>
                  </div>
                </div>
                <div className="language-item">
                  <h4>Telugu</h4>
                  <div className="language-levels">
                    <span>Read ✓</span>
                    <span>Write ✓</span>
                    <span>Speak ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`projects ${isVisible.projects ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Projects</h2>
            <p className="section-subtitle">My recent work</p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-icon">🏦</div>
              <h3>ATM Application</h3>
              <p>A secure ATM password management system with user authentication and transaction processing.</p>
              <div className="project-links">
                <a href="https://sakthisundarraj.github.io/ATMpassword/index.html" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">🚀</div>
              <h3>Startup Website</h3>
              <p>A modern, responsive startup landing page built with HTML, CSS, and Bootstrap.</p>
              <div className="project-links">
                <a href="https://sakthisundarraj.github.io/Startup/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">👰</div>
              <h3>Bethany Website</h3>
              <p>A beautiful wedding and events website showcasing services and portfolio.</p>
              <div className="project-links">
                <a href="https://sakthisundarraj.github.io/Bethany/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-icon">✅</div>
              <h3>Form Validation</h3>
              <p>Advanced form validation system with JavaScript for enhanced user experience.</p>
              <div className="project-links">
                <a href="https://sakthisundarraj.github.io/formvalidation-new/" target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
        </a>
      </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`contact ${isVisible.contact ? 'animate-in' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">Let's work together</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>I'm always open to discussing new opportunities and exciting projects!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span>📧</span>
                  <p>sakthi.dante3@gmail.com</p>
                </div>
                <div className="contact-item">
                  <span>📞</span>
                  <p>+91-6380997414</p>
                </div>
                <div className="contact-item">
                  <span>📍</span>
                  <p>Coimbatore, Tamilnadu, India</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
        </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Sakthi Sundarraj</h3>
              <p>GIS Engineer & Web Developer</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="mailto:sakthi.dante3@gmail.com" className="social-link">📧</a>
                <a href="tel:+916380997414" className="social-link">📞</a>
                <a href="https://github.com/sakthisundarraj" target="_blank" rel="noopener noreferrer" className="social-link">💻</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Sakthi Sundarraj. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
  )
}

export default App
