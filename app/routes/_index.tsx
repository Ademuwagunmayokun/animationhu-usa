import { useEffect, useState } from "react";

import { APP_TITLE } from "@/lib/app-config";

const heroSlides = [
  {
    tag: "AI & Automation",
    title: "Make AI work for your business.",
    description:
      "Connect practical AI tools to the systems you already use. Automate routine work, improve customer experiences, and give your team time back.",
    action: "Explore services",
    href: "#ai-automation",
    image: "https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg",
  },
  {
    tag: "Digital Products",
    title: "Build digital products that move you forward.",
    description:
      "From websites and dashboards to full-stack platforms and mobile apps, we turn your ideas into useful, scalable products.",
    action: "Explore services",
    href: "#digital-products",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    tag: "Creative Production",
    title: "Make your next story impossible to miss.",
    description:
      "AI-assisted video, thoughtful editing, and graphic design for campaigns, education, social, and the moments that matter.",
    action: "Explore services",
    href: "#creative-production",
    image: "https://images.pexels.com/photos/6621400/pexels-photo-6621400.jpeg",
  },
  {
    tag: "Business Growth",
    title: "Turn better information into better decisions.",
    description:
      "See what is working, reach the right audience, and keep day-to-day operations moving with practical digital support.",
    action: "Explore services",
    href: "#business-growth",
    image:
      "https://images.pexels.com/photos/38808473/pexels-photo-38808473.jpeg",
  },
];

const serviceGroups = [
  {
    id: "ai-automation",
    number: "01",
    title: "AI & automation",
    description:
      "Put useful AI to work across customer service, communication, and everyday processes.",
    image: "https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg",
    services: [
      {
        title: "AI Integration Specialist",
        description:
          "Identify practical AI opportunities, connect tools to existing systems, and automate repetitive work without rebuilding everything.",
      },
      {
        title: "AI Chatbot Development",
        description:
          "Create conversational assistants for customer questions, lead generation, education, sales, and internal support.",
      },
    ],
  },
  {
    id: "digital-products",
    number: "02",
    title: "Digital products",
    description:
      "Design and develop responsive experiences shaped around your customers and the way your business works.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    services: [
      {
        title: "Full-Stack Development",
        description:
          "Build responsive websites, applications, dashboards, databases, and business systems from interface to infrastructure.",
      },
      {
        title: "Web Design & Development",
        description:
          "Create professional, mobile-ready websites with clear structure, useful content, and room to grow.",
      },
      {
        title: "UX/UI Design",
        description:
          "Research user needs, shape information, and design accessible interfaces and interactive prototypes.",
      },
      {
        title: "Mobile App Development",
        description:
          "Take mobile products from concept and design through development, testing, and deployment.",
      },
    ],
  },
  {
    id: "creative-production",
    number: "03",
    title: "Creative production",
    description:
      "Bring your message to life with polished visual content built for the places your audience watches and shares.",
    image: "https://images.pexels.com/photos/6621400/pexels-photo-6621400.jpeg",
    services: [
      {
        title: "AI Video Generation & Editing",
        description:
          "Produce promotional, educational, social, and animated videos—from scripting and AI visuals to voice, sound, and final edit.",
      },
      {
        title: "Video Editing",
        description:
          "Shape raw footage with precise cuts, sound, motion graphics, subtitles, color, and platform-ready formats.",
      },
      {
        title: "Graphic Design",
        description:
          "Create brand identities, campaigns, social graphics, brochures, posters, and clear visual communications.",
      },
    ],
  },
  {
    id: "business-growth",
    number: "04",
    title: "Business growth & operations",
    description:
      "Make informed decisions, strengthen your digital presence, and give routine work the support it needs.",
    image:
      "https://images.pexels.com/photos/38808473/pexels-photo-38808473.jpeg",
    services: [
      {
        title: "Data Analytics",
        description:
          "Turn business information into clear reports, useful dashboards, visualizations, and actionable insight.",
      },
      {
        title: "Social Media Management",
        description:
          "Plan, create, schedule, and measure content that grows your audience across social platforms.",
      },
      {
        title: "SEO Services",
        description:
          "Improve discoverability with keyword research, optimized pages, focused content, and search performance tracking.",
      },
      {
        title: "Virtual Assistant Services",
        description:
          "Get dependable support with research, scheduling, email, documents, data entry, and daily coordination.",
      },
      {
        title: "Bookkeeping & Accounting Support",
        description:
          "Keep financial records organized with transaction tracking, invoice management, reconciliation, and reporting support.",
      },
    ],
  },
];

export function meta() {
  return [
    { title: `${APP_TITLE} — Digital Services` },
    {
      name: "description",
      content:
        "Animation Hub connects AI, technology, design, and operations to help businesses move forward.",
    },
  ];
}

export default function HomeRoute() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((index) => (index + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, []);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="animation-hub">
      <section
        className="ah-hero ah-service-hero"
        aria-label="Animation Hub services"
      >
        <div className="ah-hero-image" key={currentSlide.image}>
          <img src={currentSlide.image} alt="" fetchPriority="high" />
        </div>
        <div className="ah-hero-shade" />

        <header className="ah-header">
          <a className="ah-logo" href="#top" aria-label="Animation Hub home">
            <img
              src="https://animationhub.eu/wp-content/themes/animationhub/assets/img/logo.svg"
              alt="Animation Hub"
            />
          </a>
          <nav className="ah-desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#approach">How we work</a>
            <a href="#about">About</a>
          </nav>
          <div className="ah-header-actions">
            <a
              className="ah-submit-button"
              href="https://animationhub.eu/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="ah-mobile-actions">
            <button
              className={`ah-menu-trigger${mobileMenuOpen ? " is-open" : ""}`}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav className="ah-mobile-menu" aria-label="Mobile navigation">
            <a href="#services" onClick={closeMobileMenu}>
              Services
            </a>
            <a href="#approach" onClick={closeMobileMenu}>
              How we work
            </a>
            <a href="#about" onClick={closeMobileMenu}>
              About
            </a>
            <a
              className="ah-submit-button"
              href="https://animationhub.eu/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </a>
          </nav>
        )}

        <div className="ah-hero-copy" id="top">
          <p className="ah-hero-tag">
            <span />
            {currentSlide.tag}
          </p>
          <h1>{currentSlide.title}</h1>
          <p className="ah-hero-description">{currentSlide.description}</p>
          <a className="ah-yellow-button" href={currentSlide.href}>
            {currentSlide.action}
          </a>
        </div>
        <div
          className="ah-carousel-dots"
          role="group"
          aria-label="Choose a service focus"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show ${slide.tag}`}
              aria-pressed={index === activeSlide}
            />
          ))}
        </div>
      </section>

      <main>
        <section className="ah-services" id="services">
          <div className="ah-services-heading">
            <p className="ah-section-kicker">What we do</p>
            <h2>Ideas into useful work.</h2>
            <p>
              One practical partner for the technology, creative, and
              operational work that moves your business forward.
            </p>
          </div>
          <div className="ah-service-groups">
            {serviceGroups.map((group) => (
              <article
                className="ah-service-group"
                id={group.id}
                key={group.id}
              >
                <div className="ah-service-art">
                  <img src={group.image} alt="" loading="lazy" />
                </div>
                <div className="ah-service-group-content">
                  <p className="ah-service-number">
                    {group.number} / Animation Hub
                  </p>
                  <h3>{group.title}</h3>
                  <p className="ah-service-group-description">
                    {group.description}
                  </p>
                  <div className="ah-service-list">
                    {group.services.map((service) => (
                      <details className="ah-service-item" key={service.title}>
                        <summary>
                          <span>{service.title}</span>
                          <span className="ah-service-plus" aria-hidden="true">
                            +
                          </span>
                        </summary>
                        <p>{service.description}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ah-approach" id="approach">
          <p className="ah-section-kicker">How we work</p>
          <h2>Clear thinking. Useful outcomes.</h2>
          <div className="ah-approach-steps">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>We learn how your business works and where you want to go.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Make a plan</h3>
              <p>
                We shape a practical approach around your goals, people, and
                systems.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Build & improve</h3>
              <p>
                We deliver the work, learn from what happens, and keep making it
                better.
              </p>
            </article>
          </div>
        </section>

        <section className="ah-about" id="about">
          <div>
            <p className="ah-section-kicker">Animation Hub</p>
            <h2>Creative thinking, built for the real world.</h2>
          </div>
          <p>
            We bring AI, design, development, and business support together to
            help organizations solve practical problems and create what comes
            next.
          </p>
          <a
            className="ah-yellow-button"
            href="https://animationhub.eu/contact/"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="ah-footer ah-service-footer">
        <div className="ah-footer-main">
          <a className="ah-logo" href="#top" aria-label="Animation Hub home">
            <img
              src="https://animationhub.eu/wp-content/themes/animationhub/assets/img/logo.svg"
              alt="Animation Hub"
            />
          </a>
          <h2>
            Make something
            <br />
            that moves you forward.
          </h2>
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#approach">How we work</a>
            <a href="#about">About</a>
            <a
              href="https://animationhub.eu/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="ah-footer-bottom">
          <span>Animation Hub</span>
          <span>© Animation Hub</span>
        </div>
      </footer>
    </div>
  );
}
