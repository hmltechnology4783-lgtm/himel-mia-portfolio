import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { personal, principles, projects, skills } from './data'

type IconName = 'arrow' | 'spark' | 'code' | 'tool' | 'github' | 'linkedin' | 'facebook' | 'menu' | 'close' | 'external' | 'check'

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></>,
    code: <><path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" /><path d="m14 5-4 14" /></>,
    tool: <><path d="m14.7 6.3 3 3" /><path d="M4 20 14.5 9.5" /><path d="m15 5 2-2 4 4-2 2" /><path d="m4 20 4-.8L5 16l-1 4Z" /></>,
    github: <><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.4-3.7 4.9 4.9 0 0 0-.1-3.7s-1.2-.4-3.8 1.4a13.1 13.1 0 0 0-7 0C5.4.8 4.2 1.2 4.2 1.2a4.9 4.9 0 0 0-.1 3.7 5.3 5.3 0 0 0-1.4 3.7c0 5.3 3.2 6.5 6.2 6.8A3.4 3.4 0 0 0 8 18.1V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    facebook: <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
    close: <><path d="m18 6-12 12" /><path d="m6 6 12 12" /></>,
    external: <><path d="M15 3h6v6" /><path d="m10 14 11-11" /><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
] as const

function SocialLinks({ compact = false }: { compact?: boolean }) {
  const socials: { name: 'github' | 'linkedin' | 'facebook'; label: string; href: string }[] = [
    { name: 'github', label: 'GitHub', href: personal.social.github },
    { name: 'linkedin', label: 'LinkedIn', href: personal.social.linkedin },
    { name: 'facebook', label: 'Facebook', href: personal.social.facebook },
  ]

  return (
    <div className={`social-links${compact ? ' social-links--compact' : ''}`} aria-label="Social media">
      {socials.map((social) => (
        <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Himel on ${social.label}`} title={`${social.label} profile — replace placeholder URL in src/data.ts`}>
          <Icon name={social.name} size={compact ? 17 : 18} />
        </a>
      ))}
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'portfolio') {
    return (
      <div className="mock-window mock-portfolio" aria-hidden="true">
        <div className="mock-browser"><i /><i /><i /><span>himelmia.dev</span><b /></div>
        <div className="mock-portfolio-body">
          <div className="mock-nav"><b>HM.</b><span /><span /><span /></div>
          <div className="mock-hero"><small>HELLO, I'M HIMEL</small><strong>Building for<br />the web<span>.</span></strong><i /></div>
          <div className="mock-foot"><span /><span /><span /></div>
        </div>
      </div>
    )
  }
  if (kind === 'landing') {
    return (
      <div className="mock-window mock-landing" aria-hidden="true">
        <div className="mock-browser"><i /><i /><i /><span>studio.example</span><b /></div>
        <div className="landing-art">
          <div className="landing-copy"><small>LESS, BUT BETTER</small><strong>Make room<br />for good ideas.</strong><span /></div>
          <div className="landing-orb"><i /><b /></div>
          <div className="landing-bottom"><span /><span /><span /></div>
        </div>
      </div>
    )
  }
  return (
    <div className="mock-window mock-todo" aria-hidden="true">
      <div className="mock-browser"><i /><i /><i /><span>today.tasks</span><b /></div>
      <div className="todo-art">
        <div className="todo-heading"><div><small>YOUR SPACE</small><strong>Today's focus</strong></div><span>•••</span></div>
        <div className="todo-progress"><i /><b /></div>
        {['Review CSS notes', 'Build a new component', 'Take a short break'].map((task, index) => (
          <div className={`todo-task${index === 0 ? ' is-done' : ''}`} key={task}><i>{index === 0 && <Icon name="check" size={11} />}</i><span>{task}</span><b /></div>
        ))}
        <div className="todo-add">＋ <span>Add a task</span></div>
      </div>
    </div>
  )
}

function ProjectLinks({ demoUrl, codeUrl }: { demoUrl: string; codeUrl: string }) {
  return (
    <div className="project-links">
      {demoUrl ? <a href={demoUrl} target="_blank" rel="noreferrer">Live demo <Icon name="arrow" size={15} /></a> : <span title="Add a real demo URL in src/data.ts">Live demo <small>coming soon</small></span>}
      {codeUrl ? <a href={codeUrl} target="_blank" rel="noreferrer">View code <Icon name="arrow" size={15} /></a> : <span title="Add a real repository URL in src/data.ts">View code <small>coming soon</small></span>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    if (!personal.email) {
      setFormStatus('Email is not configured yet. Add your real address in src/data.ts to enable this mailto form.')
      return
    }
    const values = new FormData(form)
    const subject = encodeURIComponent(String(values.get('subject')))
    const body = encodeURIComponent(
      `From: ${String(values.get('name'))} (${String(values.get('email'))})\n\n${String(values.get('message'))}`,
    )
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setFormStatus('Your email app should open with your message prepared. Review and send it there; this site does not send messages.')
  }

  const emailHref = `mailto:${personal.email}`
  const currentYear = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Himel Mia, home"><span className="brand-mark">HM<span>.</span></span><span className="brand-name">Himel Mia</span></a>
          <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a className="home-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="mobile-talk" href={emailHref} onClick={() => setMenuOpen(false)}>Let's talk <Icon name="arrow" size={15} /></a>
          </nav>
          <a className="nav-cta" href={emailHref}>Let's talk <Icon name="arrow" size={15} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <Icon name={menuOpen ? 'close' : 'menu'} size={21} />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <span className="hero-kicker"><span className="status-light" /> HELLO, I'M HIMEL MIA</span>
            <h1>Building My<br />Journey Into<br />the <span>Web.</span></h1>
            <p className="hero-subtitle">Aspiring Web Developer <i /> Creative Problem Solver</p>
            <p className="hero-description">I’m learning to build modern, responsive, and friendly experiences for the web — one project, one new idea, and one line of code at a time.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={16} /></a>
              <a className="button button-secondary" href={emailHref}>Contact me <span className="button-arrow">↗</span></a>
            </div>
            <div className="hero-social">
              <span>FIND ME ONLINE</span><i /><SocialLinks compact />
            </div>
          </div>
          <div className="hero-art reveal">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-grid" />
            <div className="portrait-card">
              <div className="portrait-topline"><span>BASED IN BANGLADESH</span><span>01 / 01</span></div>
              <div className="portrait-placeholder">
                {!personal.photoIsPlaceholder && <img className="portrait-image" src={personal.photo} alt="Himel Mia" />}
                <div className="portrait-glow" />
                {personal.photoIsPlaceholder && <>
                  <div className="placeholder-symbol">HM<span>.</span></div>
                  <div className="placeholder-label"><span className="placeholder-icon">＋</span><span>YOUR PHOTO GOES HERE<small>PERSONAL PORTRAIT PLACEHOLDER</small></span></div>
                </>}
                <div className="portrait-corner corner-tl" /><div className="portrait-corner corner-br" />
              </div>
              <div className="portrait-caption"><div><span className="caption-name">Himel Mia</span><span className="caption-role">Aspiring Web Developer</span></div><span className="caption-location"><i /> Bangladesh</span></div>
            </div>
            <div className="opportunity-badge"><span className="badge-icon"><Icon name="spark" size={16} /></span><span>Open to learning<br />& opportunities</span></div>
            <div className="art-index">HM — 2026</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><i /></a>
        </section>

        <section className="about section-wrap section-space" id="about">
          <div className="about-aside reveal"><span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT ME</span><span className="about-index">01 <i /> 05</span></div>
          <div className="about-content reveal">
            <h2>A new chapter,<br />written <span>in code.</span></h2>
            <div className="about-columns">
              <p>I’m Himel, an aspiring web developer from Bangladesh. I’m at the beginning of my journey, excited by the way a few thoughtful lines of code can turn an idea into something people can use.</p>
              <div><p>I learn by building real projects, paying attention to clean interfaces and responsive design, and steadily getting more comfortable with the tools of the web.</p><p>I’m open to learning from others, collaborating, and exploring beginner-friendly opportunities as I continue to grow.</p></div>
            </div>
            <a className="text-link" href="#contact">A little more about working together <Icon name="arrow" size={16} /></a>
          </div>
          <div className="about-stamp" aria-hidden="true"><span>LEARNING<br />BY BUILDING</span><i>✳</i></div>
        </section>

        <section className="skills section-wrap section-space" id="skills">
          <SectionHeading eyebrow="TOOLS & TECHNOLOGIES" title={<>Learning the tools<br />to <span>build better.</span></>} copy="A growing toolkit, built on the fundamentals and strengthened with every new project." />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className={`skill-card reveal${index === 2 ? ' skill-card-learning' : ''}`} key={group.title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon name={group.icon as IconName} size={19} /></span><span className="skill-number">0{index + 1}</span></div>
                <p className="skill-status">{group.status}</p><h3>{group.title}</h3>
                <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}{index === 2 && <i>↗</i>}</span>)}</div>
                {index === 2 && <span className="learning-note"><span /> In progress, one step at a time</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap section-space" id="projects">
          <div className="projects-heading">
            <SectionHeading eyebrow="SELECTED PRACTICE PROJECTS" title={<>Small steps.<br /><span>Real progress.</span></>} copy="A few starter ideas for the kinds of things I’m building as I learn. I’ll replace these with real project details as my work grows." />
            <span className="demo-note"><Icon name="spark" size={15} /> STARTER PROJECT IDEAS — DEMOS NOT YET LINKED</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <div className={`project-visual project-visual-${project.visual}`}><ProjectVisual kind={project.visual} /><span className="starter-pill">STARTER IDEA</span></div>
                <div className="project-card-content">
                  <div className="project-meta"><span>PROJECT {project.number}</span><Icon name="arrow" size={16} /></div>
                  <h3>{project.title}</h3><p>{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <ProjectLinks demoUrl={project.demoUrl} codeUrl={project.codeUrl} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="principles section-wrap section-space">
          <div className="principles-intro reveal"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT I BRING</span><h2>How I’m choosing<br />to <span>show up.</span></h2><p>Not a list of achievements — just the principles I want to bring to every new thing I learn and build.</p></div>
          <div className="principles-list">
            {principles.map((item) => <article className="principle-item reveal" key={item.number}><span className="principle-number">{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div><span className="principle-arrow"><Icon name="arrow" size={17} /></span></article>)}
          </div>
        </section>

        <section className="contact section-wrap section-space" id="contact">
          <div className="contact-top reveal">
            <span className="eyebrow"><span className="eyebrow-dot" /> SAY HELLO</span>
            <h2>Have a project<br />in <span>mind?</span></h2>
            <p>I’d love to hear what you’re working on. If you’re open to collaborating, sharing advice, or helping a beginner grow, let’s start a conversation.</p>
            <a className="email-link" href={emailHref}>{personal.email}<Icon name="arrow" size={17} /></a>
            <SocialLinks />
          </div>
          <form className="contact-form reveal" onSubmit={handleContactSubmit}>
            <div className="form-heading"><span>DROP ME A NOTE</span><span>✳</span></div>
            <div className="form-row">
              <label>Your name<input name="name" type="text" placeholder="e.g. Alex Morgan" autoComplete="name" required minLength={2} /></label>
              <label>Your email<input name="email" type="email" placeholder="Your email address" autoComplete="email" required /></label>
            </div>
            <label>Subject<input name="subject" type="text" placeholder="What would you like to talk about?" required minLength={3} /></label>
            <label>Your message<textarea name="message" placeholder="Tell me a little about it..." rows={4} required minLength={10} /></label>
            <div className="form-submit-row"><button className="button button-primary" type="submit">Prepare email <Icon name="arrow" size={16} /></button><span>Your email app opens a draft; you send it.</span></div>
            <p className="form-status" aria-live="polite" role="status">{formStatus}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">HM<span>.</span></span><span className="brand-name">Himel Mia</span></a><p>Learning, building, and growing<br />on the web — from Bangladesh.</p></div>
          <div className="footer-links"><span>EXPLORE</span><div>{navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></div>
          <div className="footer-social"><span>ELSEWHERE</span><SocialLinks compact /></div>
          <a className="back-top" href="#home">BACK TO TOP <span>↑</span></a>
        </div>
        <div className="footer-bottom section-wrap"><span>© {currentYear} Himel Mia. All rights reserved.</span><span>Designed & built with care by Himel Mia <i>✳</i></span></div>
      </footer>
    </>
  )
}

export default App
