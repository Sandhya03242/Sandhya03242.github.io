import { useEffect, useState } from "react";
import profilePhoto from "./assets/profile.jpg";
import resume from "./assets/Sandhya_S_Resume.pdf";

const experience = [
  {
    number: "01",
    date: "AUG 2024 — AUG 2026",
    role: "Junior AI Engineer",
    company: "Axomium Labs · Remote",
    points: [
      "Built domain-focused AI, Generative AI and RAG workflows using LangChain, LangGraph, Pinecone and API-based LLMs.",
      "Implemented embeddings, vector search, context workflows, AI agents and tool calling for practical AI applications.",
      "Worked on LLM fine-tuning and inference optimization using Transformers, LoRA and PEFT.",
      "Developed containerized FastAPI services and production-oriented AI pipelines with Docker.",
    ],
    tags: [
      "Python",
      "LLMs",
      "Generative AI",
      "RAG",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "Transformers",
      "Fine-tuning",
      "LoRA",
      "PEFT",
      "Embeddings",
      "Vector Databases",
      "FastAPI",
      "Docker",
    ],
  },
  {
    number: "02",
    date: "JUL 2024 — NOV 2024",
    role: "Data Science Intern",
    company: "Luminar Technolab · Kochi",
    points: [
      "Performed EDA, data preparation, visualization and reporting using Python, NumPy, Pandas and Power BI.",
      "Built machine learning workflows with feature engineering and Scikit-learn.",
      "Analyzed real-world datasets to transform raw data into useful insights.",
    ],
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
      "Power BI",
    ],
  },
];

const skills = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Transformers",
  "Hugging Face",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "RAG",
  "LLMs",
  "AI Agents",
  "Pinecone",
  "FAISS",
  "Chroma",
  "PEFT",
  "Unsloth",
  "NLP",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "SQL",
  "Docker",
  "AWS",
  "MCP",
  "Streamlit",
  "Gradio",
  "Git",
  "GitHub",
  "Power BI",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span>S</span>
          <b>Sandhya.</b>
        </a>

        <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#stack" onClick={closeMenu}>
            Stack
          </a>

          <a href="#education" onClick={closeMenu}>
            Education
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <a
            className="nav-resume"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <span>↗</span>
          </a>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero container" id="home">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="pulse"></span>
            Available for AI Engineering opportunities
          </div>

          <h1>
            Building{" "}
            <span className="gradient-text">
              AI systems
            </span>{" "}
            that solve real-world problems.
          </h1>

          <p className="hero-sub">
            Junior AI Engineer building Generative AI, LLM, RAG and agentic
            systems with Python and modern backend technologies.
          </p>

          <div className="hero-buttons">
            <a className="btn btn-primary" href="#projects">
              Explore my work <span>↗</span>
            </a>

            <a
              className="btn btn-ghost"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              View Resume <span>↗</span>
            </a>

            <a
              className="btn btn-ghost"
              href="https://github.com/Sandhya03242"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>Python</span>
            <i>·</i>
            <span>GenAI</span>
            <i>·</i>
            <span>AI Agents</span>
            <i>·</i>
            <span>FastAPI</span>
          </div>
        </div>

        <div className="hero-visual reveal delay-1">
          <div className="orb orb-a"></div>
          <div className="orb orb-b"></div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="node n1">AI</div>
          <div className="node n2">RAG</div>
          <div className="node n3">LLM</div>
          <div className="node n4">API</div>

          <div className="portrait-card">
            <img
              src={profilePhoto}
              alt="Sandhya S - Junior AI Engineer"
              className="portrait-image"
            />
          </div>

          <div className="floating-chip chip-one">
            ⌁ Intelligent automation
          </div>

          <div className="floating-chip chip-two">
            ✦ AI / GenAI
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Skills ticker">
        <div className="ticker-track">
          <span>AI ENGINEERING</span>
          <b>✦</b>
          <span>GENERATIVE AI</span>
          <b>✦</b>
          <span>LLM APPLICATIONS</span>
          <b>✦</b>
          <span>AI AGENTS</span>
          <b>✦</b>
          <span>COMPUTER VISION</span>
          <b>✦</b>
          <span>FASTAPI</span>
          <b>✦</b>

          <span>AI ENGINEERING</span>
          <b>✦</b>
          <span>GENERATIVE AI</span>
          <b>✦</b>
          <span>LLM APPLICATIONS</span>
          <b>✦</b>
          <span>AI AGENTS</span>
          <b>✦</b>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section className="section container about" id="about">
      <div className="section-label reveal">
        01 — About
      </div>

      <div className="about-grid">
        <div className="section-heading reveal">
          <p className="mini">A little context</p>

          <h2>
            Curious by nature.
            <br />
            <em>Engineer by practice.</em>
          </h2>
        </div>

        <div className="about-copy reveal delay-1">
          <p>
            I’m <strong>Sandhya S</strong>, a computer science engineering
            graduate and Junior AI Engineer focused on building practical AI
            solutions that move beyond ideas and into real applications.
          </p>

          <p>
            My work focuses on{" "}
            <strong>
              Python, AI, Generative AI, LLMs, RAG, AI agents, machine learning
              and backend engineering
            </strong>
            , with an emphasis on turning intelligent workflows into
            reliable, usable systems. I enjoy working across the AI
            development journey from experimentation and integration to
            building applications that solve real-world problems.
          </p>

          <div className="stats">
            <div>
              <strong>2 Years</strong>
              <span>AI Engineering</span>
            </div>

            <div>
              <strong>6 Months</strong>
              <span>Data Science</span>
            </div>

            <div>
              <strong>3+</strong>
              <span>AI Projects</span>
            </div>

            <a
              className="stat-resume"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              <strong>Resume ↗</strong>
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-label reveal">
        02 — Experience
      </div>

      <div className="section-heading split reveal">
        <div>
          <p className="mini">Where I’ve been building</p>

          <h2>
            Engineering AI that
            <br />
            <em>works.</em>
          </h2>
        </div>

        <p className="section-note">
          Hands-on experience building AI applications, LLM workflows,
          intelligent automation and backend systems.
        </p>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <article
            className="timeline-item reveal"
            key={item.number}
          >
            <div className="timeline-dot"></div>

            <div className="time">{item.date}</div>

            <div className="role-card">
              <div className="role-top">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>

                <span className="role-number">
                  {item.number}
                </span>
              </div>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function OmniSight() {
  return (
    <article className="project-feature reveal">
      <div className="project-art omni">
        <div className="scanline"></div>

        <div className="ui-window">
          <div className="ui-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="ui-content">
            <div className="ui-side"></div>

            <div className="ui-main">
              <div className="bug-box">
                <small>VISION DETECTED</small>
                <strong>UI ISSUE</strong>
                <span>
                  Smart Watch title overlaps image
                </span>
              </div>

              <div className="fix-line">
                <span>QWEN VLM</span>
                <i>→</i>
                <span>FIX</span>
                <i>→</i>
                <span>RETEST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-info">
        <div className="project-index">
          01 / FEATURED
        </div>

        <h3>OmniSight</h3>

        <p>
          A multimodal UI self-healing and RPA agent designed to
          automatically detect, diagnose and repair web interface issues.
          The system captures a webpage using Playwright, processes the
          screenshot and HTML, analyzes the interface with a Qwen
          vision-language model, generates a potential fix, modifies the
          source code and retests the application to verify the result.
        </p>

        <p className="project-description-secondary">
          The pipeline combines browser automation, multimodal AI,
          intelligent action generation and automated verification into
          an end-to-end healing workflow. It also integrates a React
          dashboard for monitoring issues and connects the workflow with
          Git-based source control.
        </p>

        <div className="flow">
          <span>Playwright</span>
          <b>→</b>
          <span>Optimize</span>
          <b>→</b>
          <span>Qwen VLM</span>
          <b>→</b>
          <span>Fix</span>
          <b>→</b>
          <span>Retest</span>
          <b>→</b>
          <span>Verify</span>
        </div>

        <div className="tags">
          <span>Python</span>
          <span>Qwen VLM</span>
          <span>Playwright</span>
          <span>LangGraph</span>
          <span>FastAPI</span>
          <span>React</span>
        </div>

        <div className="project-actions">
          <a
            href="https://github.com/Sandhya03242/OmniSight_Multimodal_UI_SelfHealing_RPA-Agent"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function MusicProject() {
  return (
    <article className="project-feature reveal">
      <div className="project-art music">
        <div className="music-circle">
          <span>♪</span>
        </div>

        <div className="wave">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>

      <div className="project-info">
        <div className="project-index">
          02 / NLP
        </div>

        <span className="project-type">
          NLP / RECOMMENDER
        </span>

        <h3>Music Recommender System</h3>

        <p>
          A content-based music recommendation system that suggests songs
          based on the similarity of their lyrics and metadata. The system
          uses NLP preprocessing, TF-IDF vectorization and cosine similarity
          to identify relevant songs from the Spotify Million Song Dataset.
        </p>

        <p className="project-description-secondary">
          Spotify's API is integrated to retrieve album artwork for
          recommendations, while Streamlit provides an interactive web
          interface for exploring similar songs.
        </p>

        <div className="flow">
          <span>NLP</span>
          <b>→</b>
          <span>TF-IDF</span>
          <b>→</b>
          <span>Cosine Similarity</span>
          <b>→</b>
          <span>Recommendation</span>
        </div>

        <div className="tags">
          <span>Python</span>
          <span>NLP</span>
          <span>TF-IDF</span>
          <span>Scikit-learn</span>
          <span>Spotify API</span>
          <span>Streamlit</span>
        </div>

        <div className="project-actions">
          <a
            href="https://github.com/Sandhya03242/-Music_Recommender_System"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function VisionProject() {
  return (
    <article className="project-feature reveal delay-1">
      <div className="project-art vision">
        <div className="vision-grid"></div>

        <div className="camera">
          <span>◉</span>
        </div>
      </div>

      <div className="project-info">
        <div className="project-index">
          03 / COMPUTER VISION
        </div>

        <span className="project-type">
          COMPUTER VISION / IOT
        </span>

        <h3>VisioGuide</h3>

        <p>
          A smart wearable computer vision system designed to assist
          visually impaired individuals by detecting objects in their
          surroundings and providing real-time audio feedback. The system
          captures live video through a USB webcam, processes frames using
          a pre-trained TensorFlow Lite CNN model and OpenCV, and identifies
          everyday objects such as furniture and vehicles.
        </p>

        <p className="project-description-secondary">
          Detected objects are converted into spoken feedback using
          Pyttsx3, enabling users to receive information about their
          surroundings through headphones. The system runs on a Raspberry
          Pi 3 with a portable hardware setup combining the camera,
          processing unit, audio output and power bank.
        </p>

        <div className="flow">
          <span>Webcam</span>
          <b>→</b>
          <span>OpenCV</span>
          <b>→</b>
          <span>TensorFlow Lite</span>
          <b>→</b>
          <span>Detection</span>
          <b>→</b>
          <span>Voice</span>
        </div>

        <div className="tags">
          <span>Python</span>
          <span>TensorFlow Lite</span>
          <span>OpenCV</span>
          <span>NumPy</span>
          <span>Pyttsx3</span>
          <span>Raspberry Pi</span>
        </div>

        <div className="project-actions">
          <a
            href="https://github.com/Sandhya03242/Visioguide"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      className="section container projects"
      id="projects"
    >
      <div className="section-label reveal">
        03 — Selected work
      </div>

      <div className="section-heading split reveal">
        <div>
          <p className="mini">Things I’ve built</p>

          <h2>
            Projects that
            <br />
            <em>solve real problems.</em>
          </h2>
        </div>

        <p className="section-note">
          A selection of systems where AI meets real interfaces,
          automation and user problems.
        </p>
      </div>

      <OmniSight />
      <MusicProject />
      <VisionProject />
    </section>
  );
}

function Toolkit() {
  return (
    <section
      className="section stack-section"
      id="stack"
    >
      <div className="container">
        <div className="section-label reveal">
          04 — Toolkit
        </div>

        <div className="stack-grid">
          <div className="section-heading reveal">
            <p className="mini">
              My technical playground
            </p>

            <h2>
              The tools behind
              <br />
              <em>the systems.</em>
            </h2>

            <p className="stack-intro">
              A practical stack for building, connecting, serving and
              shipping AI.
            </p>
          </div>

          <div className="skill-cloud reveal delay-1">
            {skills.map((skill, index) => (
              <div
                className={`skill ${
                  index === 0 ||
                  skill === "FastAPI" ||
                  skill === "LangChain"
                    ? "featured"
                    : ""
                }`}
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section
      className="section container education"
      id="education"
    >
      <div className="section-label reveal">
        05 — Education
      </div>

      <div className="edu-card reveal">
        <div>
          <p className="mini">Foundation</p>

          <h2>
            B.Tech in Computer
            <br />
            <em>Science & Engineering</em>
          </h2>
        </div>

        <div className="edu-details">
          <strong>
            APJ Abdul Kalam Technological University
          </strong>

          <span>2020 — 2024</span>

          <span>CGPA 7.73 / 10 · First Class</span>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="contact container"
      id="contact"
    >
      <div className="contact-orbit"></div>

      <div className="contact-inner reveal">
        <p className="mini">06 — Contact</p>

        <h2>
          Let’s build something
          <br />
          <span>intelligent.</span>
        </h2>

        <p>
          Open to AI Engineer, GenAI and AI/ML opportunities.
        </p>

        <a
          className="contact-email"
          href="mailto:sandhyasuresh03242@gmail.com"
        >
          sandhyasuresh03242@gmail.com{" "}
          <span>↗</span>
        </a>

        <div className="socials">
          <a
            href="https://linkedin.com/in/sandhya-s-610350254"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Sandhya03242"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
        }
      );

      revealElements.forEach((element) => {
        revealObserver.observe(element);
      });

      return () => {
        revealObserver.disconnect();
      };
    }

    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }, []);

  return (
    <>
      <div
        className="cursor-glow"
        aria-hidden="true"
      ></div>

      <div
        className="noise"
        aria-hidden="true"
      ></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Toolkit />
        <Education />
        <Contact />
      </main>

      <footer className="footer container">
        <span>© 2026 Sandhya S</span>

        <span>
          Designed & built for the next opportunity.
        </span>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;