import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import editionStudioImg from './assets/editionstudio.png';
import airJordanImg from './assets/airJordan.png';
import miniStoreImg from './assets/miniStore.png';
import logoImg from './assets/logo.png';
import udayImg from './assets/uday.png';
import devanshImg from './assets/devansh.jpg';

// Common components to match the design's recurring elements
const PillLabel = ({ children }) => (
  <span className="inline-block px-6 py-2 rounded-full border border-gray-300 text-[18px] font-semibold tracking-wider text-gray-600 mb-6 uppercase">
    {children}
  </span>
);

function Header({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goHomeAndScroll = (id) => (e) => {
    e.preventDefault();
    onNavigate('home');
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer" onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}>
        <img src={logoImg} alt="Uday.Dev Logo" className="h-6 object-contain" />
        Uday.Dev
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-600">
        <a href="#home" onClick={goHomeAndScroll('home')} className="hover:text-black transition-colors hover:scale-105 cursor-pointer">Home</a>
        <a href="#services" onClick={goHomeAndScroll('services')} className="hover:text-black transition-colors hover:scale-105 cursor-pointer">Services</a>
        <a href="#portfolio" onClick={goHomeAndScroll('portfolio')} className="hover:text-black transition-colors hover:scale-105 cursor-pointer">Portfolio</a>
        <a href="#about" onClick={goHomeAndScroll('about')} className="hover:text-black transition-colors hover:scale-105 cursor-pointer">About Us</a>
      </nav>

      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('contact')} className="hidden sm:block px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-gray-300 text-xs md:text-sm font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm">
          Contact Me
        </button>
        
        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="block md:hidden p-2 text-gray-600 hover:text-black transition-colors z-[60]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-[55] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="flex flex-col items-center gap-8 text-2xl font-bold tracking-tight text-gray-800">
          <a href="#home" onClick={goHomeAndScroll('home')} className="hover:text-black transition-all hover:scale-110">Home</a>
          <a href="#services" onClick={goHomeAndScroll('services')} className="hover:text-black transition-all hover:scale-110">Services</a>
          <a href="#portfolio" onClick={goHomeAndScroll('portfolio')} className="hover:text-black transition-all hover:scale-110">Portfolio</a>
          <a href="#about" onClick={goHomeAndScroll('about')} className="hover:text-black transition-all hover:scale-110">About Us</a>
          <button onClick={() => { onNavigate('contact'); setIsMenuOpen(false); }} className="mt-4 px-10 py-4 rounded-full bg-black text-white text-lg font-semibold shadow-xl hover:bg-gray-800 active:scale-95 transition-all">
            Contact Me
          </button>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="px-6 md:px-12 pt-8 lg:pt-16 pb-16 bg-white min-h-[calc(100vh-100px)] flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-16">
      <div className="flex-1 flex flex-col justify-end w-full text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[8rem] xl:text-[11rem] leading-[1.1] md:leading-[0.9] tracking-tighter font-normal mt-6 md:mt-0 break-words w-full pb-4 md:pb-0">
          Creative<br />
          Developer
        </h1>
        {/* Sliding Partners Animation inside Hero */}
        <div className="mt-8 md:mt-12 py-4 flex flex-wrap justify-center md:justify-start gap-4 overflow-hidden mask-fade w-full max-w-2xl mx-auto md:mx-0">
           {['WordPress', 'Shopify', 'Framer', 'Figma', 'VS Code', 'GitHub', 'React', 'Tailwind CSS'].map((p, i) => (
             <div key={i} className="flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-gray-100 rounded-full text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap shadow-sm hover:bg-gray-200 transition-colors cursor-default">
               <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black rounded-full opacity-40"></div>
               {p}
             </div>
           ))}
        </div>
      </div>
      <div className="shrink-0 w-full md:w-64 lg:w-72 flex flex-col justify-between gap-8 md:gap-4 items-center md:items-end">
        <div className="w-56 sm:w-64 md:w-full h-56 sm:h-64 md:h-[18rem] rounded-[2rem] overflow-hidden bg-gray-100 object-cover shrink-0 shadow-sm border-4 border-white">
          <img src={udayImg} alt="Portrait" className="w-full h-full object-cover object-top" />
        </div>
        <div className="text-sm font-medium text-center md:text-right md:text-base lg:text-[1.2rem] xl:text-[1.2rem] leading-relaxed w-full text-gray-600 max-w-xs md:max-w-none">
          Hi, I'm Uday.Dev, a Web <br className="hidden md:block" />
          Developer Creating <br className="hidden md:block" />Intuitive Digital <br className="hidden md:block" />
          Experiences
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-12 md:py-24 bg-white border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-10 md:mb-16">
        <div className="max-w-2xl">
          <PillLabel>About Us</PillLabel>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl leading-[1.1] font-semibold tracking-tighter mb-4 md:mb-8">
            Transforming complex visions into high-performing digital realities.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
             As a freelance developer, I specialize in building bespoke web experiences that bridge the gap between aesthetic excellence and technical precision.
          </p>
        </div>
        <div className="max-w-xs text-xs sm:text-sm text-gray-400 md:text-gray-500 font-medium leading-relaxed pt-0 md:pt-20">
          My mission is to empower brands by delivering scalable, user-centric products that not only look stunning but drive measurable business results through clean, optimized code.
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <div className="flex-[1.5] relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-gray-100 aspect-[16/10] shadow-xl md:shadow-2xl group">
           <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop" alt="Creative Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
           <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-white">
             Bespoke Development
           </div>
        </div>
        
        <div className="flex-1 flex flex-col md:justify-center md:items-end gap-8 md:gap-16 px-0 md:text-right">
          <div className="group">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[ -0.05em] mb-2 md:mb-4 text-black group-hover:translate-x-2 transition-transform duration-300 italic font-serif">02+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1 md:mb-2 text-primary">Years of Excellence</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed max-w-[240px]">Proven track record of delivering high-quality, independent web solutions for global clients.</div>
          </div>
          <div className="group">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[ -0.05em] mb-2 md:mb-4 text-black group-hover:translate-x-2 transition-transform duration-300 italic font-serif">10+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1 md:mb-2 text-primary">Projects Delivered</div>
            <div className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed max-w-[240px]">Successful collaborations ranging from boutique brand sites to complex SaaS platforms.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services({ onNavigate }) {
  const services = [
    { title: "Web Development", desc: "Building scalable, performant, and responsive web applications from scratch.", dark: true },
    { title: "UI/UX Design", desc: "Creating intuitive and engaging user experiences through functional and aesthetic design.", dark: false },
    { title: "SEO", desc: "Optimize your website visibility and ranking on search engines to drive organic traffic.", dark: false },
    { title: "WordPress", desc: "Custom WordPress theme development and CMS management tailored to your needs.", dark: true },
    { title: "Shopify", desc: "Building converting e-commerce stores using Shopify to elevate your online business.", dark: false },
  ];

  return (
    <section id="services" className="px-6 md:px-12 py-24 bg-gray-50 rounded-[3rem]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <PillLabel>Services</PillLabel>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] leading-tight font-semibold tracking-tight mb-6">
            A Comprehensive look at what we offer and how we deliver
          </h2>
          <p className="text-sm font-medium text-gray-500 mb-8 max-w-xs leading-relaxed">
            A comprehensive look at our services and how we deliver them.
          </p>
          <button onClick={() => onNavigate('contact')} className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-xl hover:bg-gray-800">
            Hire Us
          </button>
        </div>
        
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className={`group p-6 md:p-8 rounded-3xl flex flex-col justify-between h-56 md:h-64 cursor-pointer transition-all duration-300 hover:-translate-y-2 ${s.dark ? 'bg-black text-white hover:bg-gray-900 shadow-xl' : 'bg-white text-black shadow-sm hover:shadow-xl'}`}>
              <div>
                <h3 className="text-xl font-bold mb-3 transition-transform group-hover:translate-x-1">{s.title}</h3>
                <p className={`text-xs font-medium leading-relaxed ${s.dark ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>
              </div>
              <div className="flex justify-end">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 ${s.dark ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <svg className={`w-4 h-4 ${s.dark ? 'text-white' : 'text-black'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const [activeExp, setActiveExp] = useState(1);
  const experiences = [
    { title: "B.Tech in Computer Science", desc: "Studied core principles of programming, algorithms, database management, and software engineering foundations.", year: "2022 - 2026" },
    { title: "Web Dev Bootcamp at Coding Ninja", desc: "Intensive training program focusing on modern React, Node.js, and building full-stack web applications.", year: "2023" },
    { title: "Frontend Developer Intern at TechStart", desc: "Assisted in building responsive user interfaces, fixing bugs, and collaborating with senior developers on real-world projects.", year: "2023 - 2024" },
    { title: "Freelance Web Developer", desc: "Creating reactive websites, customizing themes, and designing portfolios for independent clients.", year: "2024 - Now" },
  ];

  return (
    <section className="px-6 md:px-12 py-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xl">
          <PillLabel>Experience</PillLabel>
          <h2 className="text-4xl md:text-[2.75rem] leading-tight font-semibold tracking-tight">
            A brief snapshot of my academic & early journey
          </h2>
        </div>
        <div className="max-w-xs text-xs text-gray-500 font-medium leading-relaxed pt-2 md:pt-16">
          A summary of my education, internships, and freelance projects as I begin my professional career.
        </div>
      </div>
      
      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div key={i} onClick={() => setActiveExp(i)} className={`flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-8 px-4 md:px-6 border-b border-gray-100 cursor-pointer transition-all duration-300 ${activeExp === i ? 'bg-gray-50 rounded-2xl border-transparent scale-[1.01] shadow-sm' : 'hover:bg-gray-50 hover:rounded-2xl'}`}>
             <div className="max-w-2xl mb-4 md:mb-0">
               <h3 className="text-base md:text-lg font-bold mb-2">{exp.title}</h3>
               <p className="text-xs text-gray-500 font-medium leading-relaxed">{exp.desc}</p>
             </div>
             <div className="text-xl md:text-3xl font-semibold tracking-tighter shrink-0">{exp.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    { image: editionStudioImg, link: "https://editionstudio.in/", color: "bg-gray-800", title: "Edition Studio" },
    { image: airJordanImg, link: "https://kadam-uday03.github.io/air-jordan-web/", color: "bg-gray-300", title: "Air Jordan" },
    { image: miniStoreImg, link: "https://kadam-uday03.github.io/Ministore/", color: "bg-gray-700", title: "Ministore" },
  ];

  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <PillLabel>Portfolio</PillLabel>
          <h2 className="text-4xl md:text-[2.75rem] leading-tight font-semibold tracking-tight">
            Explore my portfolio of web solutions
          </h2>
        </div>
        <div className="text-xs text-gray-500 font-medium max-w-xs mb-2">
          Explore my portfolio full of robust web solutions.
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map((proj, i) => (
          <div 
            key={i} 
            className={`aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl ${proj.image ? 'bg-black' : proj.color} relative overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.03] hover:shadow-2xl hover:z-10`}
            onClick={() => window.open(proj.link || '#', '_blank')}
          >
            {proj.image ? (
               <img src={proj.image} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            ) : (
               <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <svg className="w-16 h-16 text-white transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               </div>
            )}
             <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
               <div className="bg-white/90 backdrop-blur rounded-xl p-3">
                 <h4 className="text-sm font-bold text-gray-900">{proj.title}</h4>
               </div>
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black shrink-0">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Testimonial() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-32 flex justify-center text-center bg-white relative overflow-hidden">
      <div className="absolute top-4 md:top-16 text-[10rem] md:text-[15rem] leading-none text-gray-100 font-serif -z-10 select-none">"</div>
      <div className="max-w-4xl z-10 px-0 md:px-4">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl italic font-semibold leading-relaxed md:leading-relaxed mb-8 md:mb-12 tracking-tight z-10">
          "Without Uday.Dev, we would never had been able to implement this website ourselves. Being a small team we don't have enough hours in the day. <br/><br/> The team at Uday.Dev researched our brand, designed the UI and provided continuous support to ensure exceptional performance. The results have been amazing and we couldn't ask for a better partner."
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
             <img src={devanshImg} className="w-full h-full object-cover object-top" alt="Author" />
          </div>
          <div className="text-left">
            <div className="text-sm font-bold">Edition Studio</div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Devansh Jain,Co-Founder </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white">
      <div className="px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 border-b border-white/10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter">
          Let's Connect<br/>There
        </h2>
        <a href="mailto:hello@uday.dev">
          <button className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/30 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10">
              <svg className="w-3 h-3 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
            Hit me Email
          </button>
        </a>
      </div>
      
      <div className="px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 text-xs font-medium text-gray-400">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white mb-6">
            <img src={logoImg} alt="Uday.Dev Logo" className="h-6 object-contain brightness-0 invert" />
            Uday.Dev
          </div>
          <p className="leading-relaxed max-w-xs mb-8">
            High-quality web development and design services tailored to elevate your business and online presence.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Mock */}
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"><span className="text-[10px]">Ig</span></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"><span className="text-[10px]">Tw</span></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"><span className="text-[10px]">In</span></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"><span className="text-[10px]">Fb</span></div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          <div className="font-bold text-white mb-4">Address</div>
          <p className="leading-relaxed">Technology Park T-11, Company<br/>Residence, 47342 Gumiesta, Indonesia.</p>
        </div>
        
        <div className="lg:col-span-3">
          <div className="font-bold text-white mb-4">Email Address</div>
          <p className="mb-2 hover:text-white cursor-pointer">hello@duwy.com</p>
          <p className="hover:text-white cursor-pointer">career@duwy.com</p>
        </div>
        
        <div className="lg:col-span-2">
          <div className="font-bold text-white mb-4">Phone Number</div>
          <p className="mb-2">(0121) 689 332-159</p>
          <p>(0121) 489 332-159</p>
        </div>
      </div>
      
      <div className="px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-gray-500 uppercase tracking-widest gap-4 md:gap-6 text-center md:text-left">
        <div>Copyright 2024 by Uday.Dev. All right reserved</div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#" className="hover:text-white">Templates</a>
          <a href="#" className="hover:text-white">Tools</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">About Us</a>
        </div>
      </div>
    </footer>
  )
}

function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_jjhupl9', 'template_r0m56pq', form.current, 'N_YSKGONd793zENJ7')
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section className="px-6 md:px-12 py-24 bg-white min-h-[60vh] flex flex-col items-center">
      <PillLabel>Get In Touch</PillLabel>
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-center mb-8">
        Let's work together!
      </h1>
      <p className="text-gray-500 mb-12 text-center max-w-lg leading-relaxed">
        Whether you have a question, a project in mind, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
      </p>
      
      <form ref={form} className="w-full max-w-2xl bg-gray-50 p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col gap-6" onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-6">
          <input type="text" name="from_name" placeholder="Your Name" required className="flex-1 bg-white px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-black transition-colors" />
          <input type="email" name="from_email" placeholder="Your Email" required className="flex-1 bg-white px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-black transition-colors" />
        </div>
        <input type="text" name="subject" placeholder="Subject" className="w-full bg-white px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-black transition-colors" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full bg-white px-6 py-4 rounded-[2rem] border border-gray-200 outline-none focus:border-black transition-colors resize-none"></textarea>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className={`bg-black text-white px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl hover:bg-gray-800 self-center md:self-start w-full md:w-auto mt-2 ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 font-semibold animate-bounce mt-2">✨ Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 font-semibold mt-2">❌ Something went wrong. Please try again or email me directly.</p>
          )}
        </div>
      </form>
    </section>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="font-sans bg-white text-gray-900 selection:bg-black selection:text-white min-h-screen overflow-x-hidden w-full">
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <About />
          <Services onNavigate={setCurrentPage} />
          <Experience />
          <Portfolio />
          <Testimonial />
        </>
      ) : (
        <ContactPage />
      )}
      <Footer />
    </div>
  )
}

export default App;
