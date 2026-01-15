

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="logo">VM</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
          <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
          <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
          <li><a href="#achievements" onClick={(e) => scrollToSection(e, 'achievements')}>Achievements</a></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="grid-lines"></div>
        <div className="animated-shapes">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>
        <div className="hero-content">
          <h1>Hi, I'm <span className="gradient-text">Vidya Meharwade</span></h1>
          <h2>BCA Student & Aspiring Developer</h2>
          <p>Motivated and detail-oriented graduate with strong problem-solving and analytical skills. Enthusiastic about learning new technologies and applying knowledge to real-world challenges.</p>
          <div className="cta-buttons">
            <a href="#about" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'about')}>Explore My Work</a>
            <a href="mailto:vidyameharwade873@gmail.com" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <h3>Hello! I'm Vidya</h3>
            <p>I'm a dedicated BCA student at AGM College with a passion for technology and continuous learning. My journey in computer science has been driven by curiosity and a desire to create meaningful solutions.</p>
            <p>With a strong academic record of 9.27 SGPA and hands-on experience in various technologies, I'm committed to growing as a developer and contributing to innovative projects. I thrive in dynamic environments and love tackling new challenges.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <div>
                <div style={{fontWeight: 600, marginBottom: '3px', color: '#f1f5f9'}}>Email</div>
                <div style={{color: '#94a3b8', fontSize: '0.95rem'}}>vidyameharwade873@gmail.com</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div>
                <div style={{fontWeight: 600, marginBottom: '3px', color: '#f1f5f9'}}>Phone</div>
                <div style={{color: '#94a3b8'}}>+91 9980106623</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <div style={{fontWeight: 600, marginBottom: '3px', color: '#f1f5f9'}}>Location</div>
                <div style={{color: '#94a3b8'}}>Hubli, Karnataka</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          <div className="education-card">
            <h3>Bachelor of Computer Application</h3>
            <div className="institution">AGM College of BBA & BCA, Varur</div>
            <div className="year">2023 - Present</div>
            <div className="score">Current SGPA: 9.27</div>
          </div>
          <div className="education-card">
            <h3>Pre University College - Commerce</h3>
            <div className="institution">JSS Pre University College, Hubli</div>
            <div className="year">2021 - 2023</div>
            <div className="score">Percentage: 93%</div>
          </div>
          <div className="education-card">
            <h3>SSLC</h3>
            <div className="institution">Shri Maharana Pratapsimha High School, Hubli</div>
            <div className="year">2020 - 2021</div>
            <div className="score">Percentage: 90%</div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>💻 Technical Skills</h3>
            <div className="skills-list">
              {['Python', 'Java', 'C Programming', 'MySQL', 'MongoDB', 'DBMS', 'Node.js', 'Flutter', 'Linux'].map(skill => (
                <div key={skill} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3>🎯 Soft Skills</h3>
            <div className="skills-list">
              {['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Creativity', 'Innovation'].map(skill => (
                <div key={skill} className="skill-item">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>🌤️ Weather App</h3>
            <p>Developed a cross-platform weather application using Flutter framework. Features real-time weather updates, intuitive UI, and seamless user experience across multiple devices.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>🏆 Ideathon Participant</h3>
            <p>Participated in Ideathon at AGM College of BBA & BCA, Varur (2025). Collaborated with peers to develop innovative solutions.</p>
          </div>
          <div className="achievement-card">
            <h3>🎯 Event Organizer</h3>
            <p>Successfully organized Technical Treasure Hunt Event at AGM College of BBA & BCA, Varur (2025). Demonstrated leadership skills.</p>
          </div>
          <div className="achievement-card">
            <h3>🔐 Cyber Security Certification</h3>
            <p>Completed Cyber Security certification from Skill India Digital.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Vidya Meharwade. All Rights Reserved.</p>
        <p>Seeking opportunities to grow in a dynamic organization</p>
      </footer>
    </div>
  );
}

export default App;
