import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import {
  ArrowRight, Brain, BriefcaseBusiness, CalendarDays, Check, ChevronDown,
  Compass, HeartPulse, Menu, MessageCircle, MoonStar, Quote, Sparkles,
  Target, Users, X, Zap, BookOpen, Coffee, Layers3, Mail, Phone
} from 'lucide-react';
import './styles.css';

const services = [
  {
    icon: Brain,
    eyebrow: 'Hypnotherapy',
    title: 'Hypnotherapy & Mindset',
    copy: 'Practical, focused sessions designed to help you change unhelpful patterns, build confidence and feel more in control.',
    bullets: ['Confidence & self-belief', 'Habits & unwanted patterns', 'Performance & mindset', 'Personal change'],
    accent: 'mint'
  },
  {
    icon: HeartPulse,
    eyebrow: 'Mind & Body',
    title: 'Mind-Body Pain Management',
    copy: 'Hypnosis, focused attention, relaxation and mindfulness techniques to help change the way you experience and respond to pain.',
    bullets: ['Hypnotic techniques', 'Relaxation skills', 'Focused attention', 'Self-management tools'],
    accent: 'coral'
  },
  {
    icon: MoonStar,
    eyebrow: 'Calm & Regulation',
    title: 'Anxiety, Stress & Relaxation',
    copy: 'Learn tools that help settle a busy nervous system, reduce mental noise and create a calmer response under pressure.',
    bullets: ['Anxiety management', 'Stress reduction', 'Deep relaxation', 'Sleep & switching off'],
    accent: 'blue'
  },
  {
    icon: BriefcaseBusiness,
    eyebrow: 'Leadership',
    title: 'Executive Mind Coaching',
    copy: 'A private thinking space for founders, executives and high performers who want clearer decisions and stronger personal performance.',
    bullets: ['Decision clarity', 'Leadership mindset', 'Performance under pressure', 'Limiting beliefs'],
    accent: 'gold'
  },
  {
    icon: Layers3,
    eyebrow: 'Tarot & Reflection',
    title: 'Tarot for Mindfulness',
    copy: 'Not fortune telling. Tarot used as a reflective framework to create better questions, fresh perspectives and personal insight.',
    bullets: ['Personal readings', 'Tarot for mindfulness', '1-to-1 tarot training', 'Tarot workshops'],
    accent: 'violet'
  },
  {
    icon: Users,
    eyebrow: 'Groups & Teams',
    title: 'Workshops & Training',
    copy: 'Interactive sessions for professionals, organisations and groups covering mindset, relaxation, pain management, anxiety and communication.',
    bullets: ['Corporate workshops', 'Professional training', 'Group experiences', 'Bespoke programmes'],
    accent: 'mint'
  }
];

const pathways = [
  { title: 'I want to feel calmer', text: 'Anxiety, stress, relaxation and nervous-system regulation.', icon: MoonStar },
  { title: 'I want to change something', text: 'Hypnotherapy, habits, confidence and personal change.', icon: Zap },
  { title: 'I need clearer thinking', text: 'Executive coaching, mindset and decision clarity.', icon: Target },
  { title: 'I want a different perspective', text: 'Tarot, mindfulness and reflective personal insight.', icon: Compass }
];

const tarotOffers = [
  ['Personal Tarot Reading', 'A private reflective reading focused on your situation, choices and next steps.'],
  ['Tarot for Mindfulness', 'Use tarot as a structured tool for reflection, awareness and personal growth.'],
  ['1-to-1 Tarot Training', 'Learn Phil’s practical, non-predictive approach to reading the cards with confidence.'],
  ['Tarot Workshops', 'Engaging group workshops for personal insight, teams, events and wellbeing programmes.']
];

const pressArticles = [
  {
    publication: '9am Business',
    category: 'Leadership',
    title: 'Why regulated leaders make better decisions',
    summary: 'Why calmness, clarity and self-awareness matter when the pressure is on.',
    url: 'https://9ambusiness.co.uk/columnist/why-regulated-leaders-make-better-decisions/'
  },
  {
    publication: '9am Business',
    category: 'Tarot & Business',
    title: 'Why tarot reading for business is the next big thing',
    summary: 'Using cards as prompts for better questions, broader thinking and clearer decisions.',
    url: 'https://9ambusiness.co.uk/exclusive/why-tarot-reading-for-business-is-the-next-big-thing/'
  },
  {
    publication: 'The Guardian',
    category: 'Press Coverage',
    title: 'Phil Macleod coverage in The Guardian',
    summary: 'Direct publication search results and coverage pages for articles and mentions.',
    url: 'https://www.theguardian.com/search?q=Phil%20Macleod'
  },
  {
    publication: 'Daily Mail (UK)',
    category: 'Press Coverage',
    title: 'Phil Macleod coverage in Daily Mail UK',
    summary: 'Publication search results and features from Daily Mail UK.',
    url: 'https://www.dailymail.com/home/search.html?query=phil+macleod&channel=home&page=1'
  },
  {
    publication: 'Express',
    category: 'Press Coverage',
    title: 'Phil Macleod coverage in Express',
    summary: 'Express newspaper search and source pages related to Phil Macleod.',
    url: 'https://www.express.co.uk/search?s=Phil%20Macleod'
  },
  {
    publication: 'Daily Mail Ireland',
    category: 'Press Coverage',
    title: 'Phil Macleod coverage in Daily Mail Ireland',
    summary: 'Daily Mail Ireland pages and related search coverage links.',
    url: 'https://www.dailymail.co.uk/news/ireland/index.html'
  },
  {
    publication: 'Daily Mail US',
    category: 'Press Coverage',
    title: 'Phil Macleod coverage in Daily Mail US',
    summary: 'US edition coverage pages and related source links.',
    url: 'https://www.dailymail.co.uk/ushome/index.html'
  }
];

const commonAreas = [
  {
    lead: 'I need to build',
    title: 'CONFIDENCE\nIN MYSELF',
    help: 'Through personalised hypnotherapy sessions, we\'ll work together to strengthen your self-belief and inner confidence. You\'ll learn to silence that critical inner voice and develop unshakeable self-assurance that radiates from within. Ready to transform your relationship with yourself? Book your consultation today.',
    icon: Zap,
    accent: 'mint'
  },
  {
    lead: 'I\'m looking for',
    title: 'GENUINE LOVE\nCONNECTION',
    help: 'Discover what might be blocking you from forming deep, meaningful relationships. Hypnotherapy can help you release past relationship patterns, build emotional confidence, and attract the authentic love connection you deserve. Let\'s unlock your capacity for genuine intimacy. Start your journey to love today.',
    icon: HeartPulse,
    accent: 'coral'
  },
  {
    lead: 'I\'m struggling with',
    title: 'AN ADDICTION',
    help: 'Break free from the cycle of addiction with compassionate, evidence-based hypnotherapy. We\'ll address the underlying emotional patterns whilst building new, healthier coping strategies. Recovery is possible, and you don\'t have to do it alone. Take the first step towards freedom today.',
    icon: Brain,
    accent: 'blue'
  },
  {
    lead: 'I\'m searching for',
    title: 'PURPOSE IN\nMY LIFE',
    help: 'Discover your true calling and align your life with your deepest values. Through guided exploration, we\'ll help you connect with your authentic self and find the direction you\'ve been seeking. Your meaningful life awaits. Book your purpose discovery session now.',
    icon: Compass,
    accent: 'gold'
  },
  {
    lead: 'I want to achieve',
    title: 'CAREER\nGROWTH',
    help: 'Unlock your professional potential and overcome career obstacles holding you back. Whether it\'s imposter syndrome, fear of success, or lack of clarity, hypnotherapy can help you develop the mindset for career advancement. Ready to accelerate your professional journey? Let\'s talk about your goals.',
    icon: BriefcaseBusiness,
    accent: 'violet'
  },
  {
    lead: 'I\'m going through',
    title: 'TRANSITION\nIN LIFE',
    help: 'Navigate life\'s major changes with greater ease and resilience. Whether it\'s divorce, retirement, moving house, or any significant transition, hypnotherapy provides tools to manage uncertainty and embrace new chapters with confidence. Ready to turn change into opportunity? Schedule your session today.',
    icon: Target,
    accent: 'mint'
  },
  {
    lead: 'I need help to',
    title: 'MANAGE STRESS\nBETTER',
    help: 'Learn powerful stress management techniques that address both symptoms and root causes. Develop a calmer nervous system, improve your response to pressure, and find peace even during life\'s most challenging moments. Take control of your stress today. Book your relaxation breakthrough session.',
    icon: MoonStar,
    accent: 'coral'
  },
  {
    lead: 'I need support with',
    title: 'DRIVING\nANXIETY',
    help: 'Regain confidence behind the wheel with calm, practical hypnotherapy support. We\'ll work on the thought patterns and physical stress responses that can make driving feel overwhelming, so you can feel safer, steadier and more in control on the road.',
    icon: Target,
    accent: 'gold'
  },
  {
    lead: 'I\'m working through',
    title: 'A PERIOD\nOF GRIEF',
    help: '',
    icon: BookOpen,
    accent: 'blue'
  }
];

const bookCallEmailHref = 'mailto:phil@thought-reader.co.uk?subject=I%27d%20like%20to%20chat';
const contactPhoneHref = 'tel:+447394168872';

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [['Services','#services'],['How I Help','#pathways'],['Workshops','#workshops'],['About','#about']];
  return <header className="nav-wrap">
    <div className="nav container">
      <a className="brand" href="#top" aria-label="Thought Reader home">
        <span className="brand-mark">TR</span>
        <span><strong>THOUGHT LEADER</strong><small>THOUGHT READER</small></span>
      </a>
      <nav className="desktop-nav">{links.map(([l,h]) => <a key={l} href={h}>{l}</a>)}<a className="nav-cta" href={bookCallEmailHref}><Mail size={15}/>Book A Call</a><a href={bookCallEmailHref}>phil@thought-reader.co.uk</a><a href={contactPhoneHref}><Phone size={15}/>+44 7394 168872</a></nav>
      <button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Open navigation">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="mobile-nav">{links.map(([l,h]) => <a key={l} href={h} onClick={()=>setOpen(false)}>{l}</a>)}<a href={bookCallEmailHref} onClick={()=>setOpen(false)}><Mail size={15}/>Book A Call</a><a href={bookCallEmailHref} onClick={()=>setOpen(false)}>phil@thought-reader.co.uk</a><a href={contactPhoneHref} onClick={()=>setOpen(false)}><Phone size={15}/>+44 7394 168872</a></div>}
  </header>
}

function App(){
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState({ error: false, message: '' });
  const [openAreas, setOpenAreas] = useState({});
  const [isPressModalOpen, setIsPressModalOpen] = useState(false);

  const latestPressArticles = pressArticles.slice(0, 5);

  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitFeedback({ error: false, message: '' });

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      setSubmitFeedback({
        error: true,
        message: 'Email service is not configured yet. Please add the required EmailJS environment variables.'
      });
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
      from_name: `${formData.get('firstName')} ${formData.get('lastName')}`.trim(),
      reply_to: formData.get('email')
    };

    try {
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, {
        publicKey: emailjsPublicKey
      });

      e.currentTarget.reset();
      setSubmitFeedback({
        error: false,
        message: 'Thanks. Your confidential enquiry has been sent.'
      });
    } catch (error) {
      setSubmitFeedback({
        error: true,
        message: 'Something went wrong sending your enquiry. Please try again in a moment.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div id="top">
    <Nav/>
    <main>
      <section className="hero section-dark">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="kicker"><Sparkles size={16}/> Change the way you think. Change what happens next.</div>
            <h1>Your mind is powerful.<br/><em>Learn how to use it.</em></h1>
            <p className="hero-lead">Hypnotherapy, mind-body techniques, executive coaching and reflective practices to help you feel calmer, think more clearly and create meaningful change.</p>
            <div className="hero-actions"><a className="button primary" href="#services">Explore how I can help <ArrowRight size={18}/></a><a className="button ghost" href="#contact">Talk to Phil</a></div>
            <div className="hero-proof"><div><strong>20+</strong><span>years' experience</span></div><div><strong>1:1</strong><span>private support</span></div><div><strong>UK</strong><span>online & in person</span></div></div>
          </div>
          <div className="hero-visual" aria-label="Abstract mind and reflection visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="portrait-card">
              <div className="portrait-silhouette"><Brain size={76}/></div>
              <div className="portrait-copy"><span>PHIL MACLEOD</span><strong>Hypnotherapist · Mind Coach · Speaker</strong></div>
            </div>
            <div className="floating-card fc-one"><span className="dot"></span>Calm under pressure</div>
            <div className="floating-card fc-two"><span className="dot coral"></span>Think differently</div>
          </div>
        </div>
      </section>

      <section className="trust-strip"><div className="container trust-inner"><span>PRIVATE 1-TO-1</span><span>•</span><span>WORKSHOPS</span><span>•</span><span>RETREATS</span><span>•</span><span>CORPORATE TRAINING</span><span>•</span><span>PERSONAL DEVELOPMENT</span></div></section>

      <section className="section" id="pathways">
        <div className="container">
          <div className="section-heading narrow"><span className="eyebrow">START WITH WHAT YOU NEED</span><h2>You don’t need to know which technique you need.</h2><p>Start with the change you want. We can work out the most useful approach from there.</p></div>
          <div className="path-grid">{pathways.map(({title,text,icon:Icon})=><a href="#contact" className="path-card" key={title}><span className="icon-bubble"><Icon/></span><div><h3>{title}</h3><p>{text}</p></div><ArrowRight/></a>)}</div>
        </div>
      </section>

      <section className="section soft" id="services">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">WAYS TO WORK WITH PHIL</span><h2>Practical support for mind, performance and wellbeing.</h2><p>Different tools, one aim: helping you create enough space and control to think, feel and respond differently.</p></div>
          <div className="service-grid">{services.map(({icon:Icon,eyebrow,title,copy,bullets,accent})=><article className={`service-card ${accent}`} key={title}><div className="service-icon"><Icon/></div><span className="mini-label">{eyebrow}</span><h3>{title}</h3><p>{copy}</p><ul>{bullets.map(b=><li key={b}><Check size={15}/>{b}</li>)}</ul><a href="#contact">Find out more <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className="section" id="common-areas">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">COMMON AREAS I HELP WITH</span><h2>Support tailored to what you are going through right now.</h2><p>Start with your situation. We can shape the sessions around what you most want to change, heal or strengthen.</p></div>
          <div className="service-grid">{commonAreas.map(({lead,title,help,icon:Icon,accent})=>{const isOpen = Boolean(openAreas[title]); return <article className={`service-card ${accent} ${isOpen ? 'is-open' : 'is-collapsed'}`} key={title}><button className="common-area-toggle" type="button" onClick={()=>setOpenAreas((prev)=>({...prev,[title]:!prev[title]}))} aria-expanded={isOpen}><div className="service-icon"><Icon/></div><span className="mini-label">{lead}</span><h3>{title.split('\n').map((line, idx)=>{const lines = title.split('\n'); return <React.Fragment key={`${title}-${line}-${idx}`}>{line}{idx < lines.length - 1 ? <br/> : null}</React.Fragment>;})}</h3><span className="common-area-toggle-label">{isOpen ? 'Hide details' : 'How Therapy Can Help'}<ChevronDown size={16} style={{transform:isOpen ? 'rotate(180deg)' : 'rotate(0deg)',transition:'transform 180ms ease'}}/></span></button>{isOpen ? <><p style={{marginTop:'16px'}}>{help || 'Support is tailored to your situation, pace and goals. Book a call to talk through what you need.'}</p><a href="#contact">Contact Us Now <ArrowRight size={16}/></a></> : null}</article>;})}</div>
        </div>
      </section>

      <section className="split-section section-dark" id="about">
        <div className="container split-grid">
          <div className="quote-panel"><Quote size={42}/><blockquote>“The cards have no power. Thinking creates the power that you can use.”</blockquote><span>PHIL MACLEOD</span></div>
          <div className="about-copy"><span className="eyebrow light">ABOUT PHIL</span><h2>Not about telling you what to think. It’s about helping you think differently.</h2><p>I’ve spent more than two decades working with people in high-pressure, high-performance and deeply personal situations. My approach combines hypnotherapy, coaching, mindset tools, mindfulness and, where useful, reflective techniques such as tarot.</p><p>Some people come because they feel stuck. Others want to perform better. Some simply want to feel calmer. The technique matters less than creating the right conditions for change.</p><div className="checks"><span><Check/>Confidential and practical</span><span><Check/>No judgement or theatre</span><span><Check/>Focused on useful change</span></div><a className="text-link" href="#contact">Work with Phil <ArrowRight/></a></div>
        </div>
      </section>

      <section className="section tarot-section" id="tarot">
        <div className="container tarot-grid">
          <div className="tarot-copy"><span className="eyebrow">TAROT, WITHOUT THE FORTUNE TELLING</span><h2>A different way to create clarity.</h2><p>Tarot can be used as a prompt for reflection rather than prediction. A card can interrupt habitual thinking, raise a new question and help you look at a situation from a different angle.</p><p>That makes it a surprisingly useful mindfulness, coaching and decision-making tool.</p><a className="button dark" href="#contact">Explore tarot sessions <ArrowRight size={18}/></a></div>
          <div className="tarot-stack">{tarotOffers.map(([t,c],i)=><div className="tarot-offer" key={t}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{c}</p></div><ArrowRight/></div>)}</div>
        </div>
      </section>

      <section className="section soft" id="workshops">
        <div className="container workshop-grid">
          <div><span className="eyebrow">WORKSHOPS & PROFESSIONAL TRAINING</span><h2>Useful techniques people can actually take away and use.</h2><p className="large-copy">Interactive sessions for teams, professionals and groups. Available as standalone workshops or tailored programmes.</p></div>
          <div className="workshop-list">
            <div><HeartPulse/><span><strong>Mind-Body Pain Management</strong><small>Hypnosis, attention, relaxation and practical self-management techniques.</small></span></div>
            <div><MoonStar/><span><strong>Anxiety & Stress Management</strong><small>Tools for regulation, focus, calm and responding better under pressure.</small></span></div>
            <div><Brain/><span><strong>Hypnosis Skills for Professionals</strong><small>Applied communication, suggestion, relaxation and mindset techniques.</small></span></div>
            <div><BriefcaseBusiness/><span><strong>Leadership & Performance</strong><small>Decision quality, state management, resilience and clear thinking.</small></span></div>
          </div>
        </div>
      </section>

      <section className="retreat section-dark" id="retreats">
        <div className="container retreat-inner"><div><span className="eyebrow light">FULLY MASTER YOUR MIND</span><h2>Step away from the noise.<br/>Come back thinking differently.</h2><p>Immersive retreat experiences combining mindset, hypnotherapy, reflection, relaxation and practical personal-development work.</p></div><a className="button primary" href="https://www.thought-reader.co.uk/retreat" target="_blank" rel="noreferrer">Explore retreats <ArrowRight size={18}/></a></div>
      </section>

      <section className="section articles" id="blogs">
        <div className="container"><div className="section-heading row-heading"><div><span className="eyebrow">THINKING OUT LOUD</span><h2>Articles, ideas & practical tools.</h2><p>Latest 5 are shown here. Open the full list to browse every publication source.</p></div><button type="button" className="button dark" onClick={()=>setIsPressModalOpen(true)}>View all articles <ArrowRight size={16}/></button></div>
          <div className="article-grid">
            {latestPressArticles.map((item)=><article key={`${item.publication}-${item.title}`}><span>{item.category.toUpperCase()}</span><h3>{item.title}</h3><p>{item.summary}</p><a href={item.url} target="_blank" rel="noreferrer">Read on {item.publication} <ArrowRight/></a></article>)}
          </div>
        </div>
      </section>

      {isPressModalOpen ? <div className="press-modal-backdrop" role="dialog" aria-modal="true" aria-label="All published articles"><div className="press-modal"><div className="press-modal-head"><h3>All Published Articles & Press Links</h3><button type="button" onClick={()=>setIsPressModalOpen(false)} aria-label="Close articles list"><X size={18}/></button></div><div className="press-modal-list">{pressArticles.map((item)=><article className="press-modal-item" key={`modal-${item.publication}-${item.title}`}><span>{item.publication}</span><h4>{item.title}</h4><p>{item.summary}</p><a href={item.url} target="_blank" rel="noreferrer">Open source <ArrowRight size={15}/></a></article>)}</div></div></div> : null}

      <section className="faq section soft"><div className="container faq-grid"><div><span className="eyebrow">QUESTIONS</span><h2>A few things people usually want to know.</h2></div><div>{[
        ['Do I need to know which service I want?','No. Start with what you want to change or improve. Phil can help identify the most useful way to approach it.'],
        ['Is tarot used to predict the future?','No. Phil uses tarot as a reflective and mindfulness tool — a way of creating questions, alternative perspectives and insight.'],
        ['Can sessions be online?','Yes. Sessions can be delivered online, with in-person work available depending on the service and location.'],
        ['Do you work with organisations?','Yes. Workshops, training and executive sessions can be tailored for organisations, professional teams and leadership groups.']
      ].map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>

      <section className="contact section-dark" id="contact"><div className="container contact-grid"><div><span className="eyebrow light">START A CONVERSATION</span><h2>What would you like to change?</h2><p>You don’t need the perfect explanation. Tell Phil what’s happening, what you’d like to be different, and take it from there.</p><div className="contact-points"><span><MessageCircle/>Confidential conversation</span><span><CalendarDays/>Online & in-person options</span><span><Coffee/>No-pressure first chat</span></div></div><form onSubmit={handleContactSubmit}><div className="field-row"><label>First name<input required name="firstName"/></label><label>Last name<input required name="lastName"/></label></div><label>Email<input required type="email" name="email"/></label><label>What can I help with?<select name="service"><option>Choose an area</option><option>Hypnotherapy & Mindset</option><option>Mind-Body Pain Management</option><option>Anxiety, Stress & Relaxation</option><option>Executive Mind Coaching</option><option>Tarot / Mindfulness</option><option>Workshops & Training</option><option>Retreats</option><option>Something else</option></select></label><label>Tell me a little about what you’d like to change<textarea rows="4" name="message"></textarea></label><button className="button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send a confidential enquiry'} <ArrowRight size={18}/></button>{submitFeedback.message ? <p role="status" aria-live="polite" style={{marginTop:'12px',color:submitFeedback.error ? '#ff8e72' : '#b8edcf'}}>{submitFeedback.message}</p> : null}</form></div></section>
    </main>
    <footer><div className="container footer-grid"><div className="brand footer-brand"><span className="brand-mark">TR</span><span><strong>THOUGHT LEADER</strong><small>THOUGHT READER</small></span></div><div><strong>Explore</strong><a href="#services">Services</a><a href="#common-areas">Common Areas</a><a href="#tarot">Tarot</a><a href="#workshops">Workshops</a><a href="#retreats">Retreats</a></div><div><strong>Book A Call</strong><a href={bookCallEmailHref}><Mail size={15}/>phil@thought-reader.co.uk</a><a href={contactPhoneHref}><Phone size={15}/>+44 7394 168872</a></div><div><strong>Important</strong><p>These services support wellbeing and personal development and are not a substitute for urgent medical or mental-health care. For persistent or unexplained pain, seek appropriate medical advice.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Thought Leader | Thought Reader</span><span>Phil Macleod</span></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
