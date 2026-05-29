import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "Services", "Portfolio", "Process", "Contact"];

const SERVICES = [
  {
    icon: "🖥️",
    title: "Website Design",
    desc: "Modern, fast websites built from scratch and designed to turn visitors into paying customers.",
  },
  {
    icon: "🔄",
    title: "Website Redesign",
    desc: "Transform your outdated website into a polished, high-converting experience that builds trust instantly.",
  },
  {
    icon: "📍",
    title: "Local SEO",
    desc: "Get found on Google by people searching for your services in Ashford and across Kent.",
  },
  {
    icon: "📌",
    title: "Google Business Profile",
    desc: "Optimise your profile so you rank higher on Google Maps and attract more local customers.",
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    desc: "Ongoing updates, security checks, backups and improvements so your site stays fast and fresh.",
  },
];

const PORTFOLIO = [
  {
    category: "Restaurant",
    title: "Trattoria Bella",
    subtitle: "Italian Restaurant — Ashford",
    result1: "+340% organic traffic",
    result2: "3× online reservations",
    result3: "Page 1 Google in 6 weeks",
    color: "#fef3c7",
    accent: "#d97706",
    emoji: "🍝",
    desc: "A full redesign and SEO overhaul for a family-run Italian restaurant that had been relying on word-of-mouth alone. The new site brought in over 200 new diners in the first month.",
  },
  {
    category: "Barber",
    title: "Kingdom Cuts",
    subtitle: "Modern Barber Shop — Maidstone",
    result1: "+180% new bookings",
    result2: "Top 3 Google Maps",
    result3: "5-star review showcase",
    color: "#eff6ff",
    accent: "#2563EB",
    emoji: "✂️",
    desc: "A sleek, dark-toned site with integrated booking system that made it easy for customers to book 24/7. Organic search grew by 180% within two months of launch.",
  },
  {
    category: "Gym",
    title: "Forge Fitness",
    subtitle: "Independent Gym — Folkestone",
    result1: "+95 new members",
    result2: "2× membership enquiries",
    result3: "Ranked #1 'gym near me'",
    color: "#f0fdf4",
    accent: "#16a34a",
    emoji: "🏋️",
    desc: "A bold, energetic brand identity and conversion-focused website that helped Forge Fitness compete with national gym chains. Their contact form now averages 12 enquiries per week.",
  },
];

const WHY = [
  { icon: "📍", title: "Based in Ashford, Kent", desc: "I work with local businesses face-to-face and understand the Kent market." },
  { icon: "⚡", title: "Fast Turnaround", desc: "Most websites are live within 2–3 weeks, not months." },
  { icon: "📱", title: "Mobile-First Design", desc: "Over 70% of your customers browse on their phone — your site will look perfect on every device." },
  { icon: "🔍", title: "SEO-Friendly Builds", desc: "Every site I build is structured to rank well in Google from day one." },
  { icon: "🤝", title: "Personal 1-on-1 Support", desc: "You'll always deal directly with me — no account managers, no agencies." },
  { icon: "💷", title: "Transparent Pricing", desc: "No hidden fees. You'll know exactly what you're paying for before we start." },
];

const STEPS = [
  { num: "01", title: "Discovery Call", desc: "We chat about your business, goals and what you need from your website. No obligation, no hard sell.", icon: "📞" },
  { num: "02", title: "Design Mockup", desc: "I create a visual mockup of your homepage so you can see exactly how it will look before we build anything.", icon: "🎨" },
  { num: "03", title: "Website Build", desc: "Once you approve the design, I build your fully responsive, SEO-optimised website to perfection.", icon: "🛠️" },
  { num: "04", title: "Launch & Support", desc: "We go live together. I stay on hand for any tweaks, questions or ongoing maintenance you need.", icon: "🚀" },
];

const TESTIMONIALS = [
  {
    name: "Marco Conti",
    business: "Owner, Trattoria Bella",
    text: "Working with Ashford Web Studio transformed our business. We went from virtually invisible on Google to getting multiple new table bookings every single day through our website. Honestly couldn't recommend enough.",
    stars: 5,
    initial: "MC",
    color: "#fef3c7",
  },
  {
    name: "Jade Thompson",
    business: "Manager, Radiance Beauty Salon",
    text: "Our old website was embarrassing — I was almost ashamed to share it. Now I'm proud to hand out my business card. The whole process was smooth and the results have been incredible. Enquiries are through the roof.",
    stars: 5,
    initial: "JT",
    color: "#fce7f3",
  },
  {
    name: "Dean Morrison",
    business: "Owner, Kingdom Cuts",
    text: "I was sceptical about spending money on a website but the bookings it generates pays for itself every single week. Professional, fast and genuinely understands what small businesses need.",
    stars: 5,
    initial: "DM",
    color: "#eff6ff",
  },
  {
    name: "Priya Patel",
    business: "Owner, Forge Fitness",
    text: "Phenomenal service. We ranked on the first page of Google within a few weeks and we've signed up nearly 100 new members since the launch. Best investment I've made for the business.",
    stars: 5,
    initial: "PP",
    color: "#f0fdf4",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "£299",
    desc: "Perfect for sole traders and new businesses who need a professional online presence fast.",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Business Profile setup",
      "30 days free support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Business",
    price: "£599",
    desc: "The most popular choice for established local businesses ready to grow online.",
    features: [
      "Up to 6 pages",
      "Premium custom design",
      "Booking / enquiry system",
      "Full local SEO optimisation",
      "Google Analytics setup",
      "Google Business Profile optimisation",
      "60 days free support",
      "Speed & performance optimisation",
    ],
    cta: "Book a Free Call",
    highlight: true,
  },
  {
    name: "Premium",
    price: "£999",
    desc: "A full-service package for businesses who want to dominate locally and grow fast.",
    features: [
      "Unlimited pages",
      "Bespoke custom design",
      "E-commerce / booking integration",
      "Comprehensive local SEO campaign",
      "Monthly SEO reporting",
      "Priority ongoing support",
      "Content writing included",
      "90 days free support",
      "Professional copywriting",
    ],
    cta: "Book a Free Call",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How long does a website take to build?",
    a: "Most projects are completed within 2–3 weeks from the date you approve the design mockup. Larger or more complex builds may take up to 4 weeks. I'll give you a clear timeline before we start.",
  },
  {
    q: "Do I need to provide my own content and photos?",
    a: "If you have photos and text, great — send them over. If not, I can source professional stock photography and, on the Premium package, write the copy for you. We'll discuss this on your discovery call.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. Website redesigns are one of my most common projects. I'll keep anything that's working (like your domain and any existing content) and rebuild everything else to a modern standard.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. All packages include free support after launch. I also offer affordable monthly maintenance plans for businesses who want ongoing updates, security monitoring and improvements.",
  },
  {
    q: "Will my website work on mobile devices?",
    a: "Every website I build is 100% mobile-first and fully responsive. It will look and work perfectly on smartphones, tablets and desktops — all tested before launch.",
  },
];

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 16 }}>★</span>
      ))}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function AshfordWebStudio() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", business: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectionLabel = {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#2563EB",
    marginBottom: 12,
  };

  const sectionTitle = {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800,
    color: "#0f172a",
    lineHeight: 1.15,
    marginBottom: 16,
    fontFamily: "'Sora', sans-serif",
  };

  const sectionSub = {
    fontSize: 18,
    color: "#475569",
    lineHeight: 1.7,
    maxWidth: 560,
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#0f172a", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #2563EB; color: #fff; }
        a { text-decoration: none; color: inherit; }
        button { cursor: pointer; border: none; background: none; font-family: inherit; }
        input, textarea, select { font-family: inherit; }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          padding: 6px 0;
          position: relative;
          cursor: pointer;
          transition: color 0.2s;
          background: none;
          border: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #2563EB;
          transition: width 0.25s;
        }
        .nav-link:hover { color: #2563EB; }
        .nav-link:hover::after { width: 100%; }

        .btn-primary {
          background: #2563EB;
          color: #fff;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          display: inline-block;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-primary:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.4);
        }
        .btn-primary:active { transform: translateY(0); }

        .btn-outline {
          background: transparent;
          color: #0f172a;
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          border: 2px solid #e2e8f0;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          display: inline-block;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-outline:hover {
          border-color: #2563EB;
          color: #2563EB;
          transform: translateY(-2px);
        }

        .service-card {
          background: #fff;
          border: 1.5px solid #f1f5f9;
          border-radius: 16px;
          padding: 32px 28px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(15,23,42,0.1);
          border-color: #2563EB;
        }

        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #f1f5f9;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .portfolio-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(15,23,42,0.12);
        }

        .why-card {
          background: #f8fafc;
          border-radius: 14px;
          padding: 28px 24px;
          transition: background 0.2s, transform 0.2s;
        }
        .why-card:hover {
          background: #eff6ff;
          transform: translateY(-3px);
        }

        .testimonial-card {
          background: #fff;
          border: 1.5px solid #f1f5f9;
          border-radius: 18px;
          padding: 32px 28px;
          transition: box-shadow 0.25s;
        }
        .testimonial-card:hover {
          box-shadow: 0 16px 48px rgba(15,23,42,0.08);
        }

        .pricing-card {
          border-radius: 20px;
          padding: 36px 32px;
          border: 2px solid #f1f5f9;
          transition: transform 0.25s, box-shadow 0.25s;
          position: relative;
        }
        .pricing-card:hover { transform: translateY(-4px); }
        .pricing-card.featured {
          background: #0f172a;
          color: #fff;
          border-color: #0f172a;
          box-shadow: 0 24px 64px rgba(15,23,42,0.25);
        }

        .faq-item {
          border-bottom: 1.5px solid #f1f5f9;
          padding: 20px 0;
        }
        .faq-trigger {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: inherit;
          font-size: 17px;
          font-weight: 600;
          color: #0f172a;
          padding: 0;
        }
        .faq-trigger:hover { color: #2563EB; }

        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-label { font-size: 14px; font-weight: 500; color: #374151; }
        .form-input {
          padding: 13px 16px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          font-size: 15px;
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          color: #0f172a;
          background: #fff;
        }
        .form-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
        }
        .form-input::placeholder { color: #94a3b8; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: fadeDown 0.6s ease both;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero-h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(36px, 6vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #0f172a;
          animation: fadeUp 0.7s 0.15s ease both;
          margin-bottom: 24px;
        }
        .hero-h1 span { color: #2563EB; }

        .hero-sub {
          font-size: clamp(16px, 2vw, 20px);
          color: #475569;
          line-height: 1.7;
          max-width: 560px;
          animation: fadeUp 0.7s 0.3s ease both;
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeUp 0.7s 0.45s ease both;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 56px;
          animation: fadeUp 0.7s 0.6s ease both;
        }

        .stat-item { text-align: center; }
        .stat-num {
          font-family: 'Sora', sans-serif;
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1;
        }
        .stat-label { font-size: 13px; color: #64748b; margin-top: 4px; }

        .hero-visual {
          position: relative;
          animation: fadeUp 0.8s 0.5s ease both;
        }

        .browser-mock {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 40px 120px rgba(15,23,42,0.18);
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .browser-bar {
          background: #f8fafc;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid #f1f5f9;
        }
        .browser-dot { width: 10px; height: 10px; border-radius: 50%; }
        .browser-url {
          flex: 1;
          background: #fff;
          border-radius: 6px;
          padding: 5px 12px;
          font-size: 12px;
          color: #64748b;
          border: 1px solid #e2e8f0;
          margin: 0 8px;
          text-align: center;
        }

        .float-card {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 16px 40px rgba(15,23,42,0.14);
          padding: 14px 18px;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: floatAnim 4s ease-in-out infinite;
          border: 1px solid #f1f5f9;
        }
        @keyframes floatAnim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .section { padding: 96px 0; }
        .container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }

        @media (max-width: 768px) {
          .section { padding: 64px 0; }
          .stat-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .stat-num { font-size: 26px; }
          .hero-ctas { flex-direction: column; align-items: flex-start; }
          .hero-visual { display: none; }
        }

        .process-connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #2563EB, #93c5fd);
          position: relative;
          top: 28px;
          margin: 0 8px;
        }

        .tag-pill {
          display: inline-block;
          background: rgba(37,99,235,0.08);
          color: #2563EB;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .footer-link { color: #94a3b8; font-size: 14px; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: background 0.2s;
          cursor: pointer;
        }
        .social-btn:hover { background: rgba(37,99,235,0.5); }
      `}</style>

      {/* NAV */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #f1f5f9" : "none",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#0f172a" }}>
            <span style={{ color: "#2563EB" }}>Ashford</span> Web Studio
          </div>

          <nav style={{ display: "flex", gap: 36, alignItems: "center" }} className="desktop-nav">
            {NAV_LINKS.map(link => (
              <button key={link} className="nav-link" onClick={() => scrollTo(link.toLowerCase())}>{link}</button>
            ))}
            <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => scrollTo("contact")}>
              Book Free Consultation
            </button>
          </nav>

          <button
            style={{ display: "none", background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#0f172a" }}
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div style={{ background: "#fff", borderTop: "1px solid #f1f5f9", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            {NAV_LINKS.map(link => (
              <button key={link} className="nav-link" onClick={() => scrollTo(link.toLowerCase())} style={{ fontSize: 16, padding: "8px 0" }}>{link}</button>
            ))}
            <button className="btn-primary" onClick={() => scrollTo("contact")}>Book Free Consultation</button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      {/* HERO */}
      <section id="home" style={{ paddingTop: 100, paddingBottom: 80, background: "linear-gradient(160deg, #f8faff 0%, #fff 60%)", position: "relative", overflow: "hidden" }}>
        {/* bg decoration */}
        <div style={{ position: "absolute", top: -80, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="hero-badge">
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse-dot 2s infinite", display: "inline-block" }} />
                Available for new projects in Kent
              </div>
              <h1 className="hero-h1">
                Get More Customers With A Website That <span>Actually Works</span>
              </h1>
              <p className="hero-sub">
                I help restaurants, cafes, barbers, gyms and local businesses across Kent attract more customers, generate more enquiries and look professional online.
              </p>
              <div className="hero-ctas">
                <button className="btn-primary" onClick={() => scrollTo("contact")}>
                  📞 Book a Free Consultation
                </button>
                <button className="btn-outline" onClick={() => scrollTo("portfolio")}>
                  View My Work →
                </button>
              </div>

              <div className="stat-grid">
                {[["50+", "Websites Built"], ["100%", "Mobile Ready"], ["4.9★", "Client Rating"]].map(([num, label]) => (
                  <div className="stat-item" key={label}>
                    <div className="stat-num">{num}</div>
                    <div className="stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="browser-mock">
                <div className="browser-bar">
                  <div className="browser-dot" style={{ background: "#ff5f56" }} />
                  <div className="browser-dot" style={{ background: "#ffbd2e" }} />
                  <div className="browser-dot" style={{ background: "#27c93f" }} />
                  <div className="browser-url">trattoriabella.co.uk</div>
                </div>
                <div style={{ padding: "32px 28px", background: "#0f172a", minHeight: 320, position: "relative" }}>
                  <div style={{ width: "60%", height: 12, background: "rgba(255,255,255,0.2)", borderRadius: 6, marginBottom: 16 }} />
                  <div style={{ width: "80%", height: 24, background: "rgba(255,255,255,0.9)", borderRadius: 6, marginBottom: 10 }} />
                  <div style={{ width: "70%", height: 24, background: "rgba(255,255,255,0.9)", borderRadius: 6, marginBottom: 24 }} />
                  <div style={{ width: "45%", height: 14, background: "rgba(255,255,255,0.5)", borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ width: "55%", height: 14, background: "rgba(255,255,255,0.5)", borderRadius: 4, marginBottom: 32 }} />
                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ background: "#2563EB", borderRadius: 8, padding: "10px 24px", fontSize: 12, color: "#fff", fontWeight: 700 }}>Book a Table</div>
                    <div style={{ border: "1px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "10px 24px", fontSize: 12, color: "#fff" }}>View Menu</div>
                  </div>
                  <div style={{ position: "absolute", bottom: 20, right: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, width: 140 }}>
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ height: 40, background: "rgba(255,255,255,0.08)", borderRadius: 6 }} />
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 28px", background: "#fff", display: "flex", gap: 16 }}>
                  {["#f1f5f9","#e2e8f0","#f8fafc"].map((c,i) => (
                    <div key={i} style={{ flex: 1, height: 8, background: c, borderRadius: 4 }} />
                  ))}
                </div>
              </div>

              <div className="float-card" style={{ bottom: 28, left: -28, animationDelay: "0s" }}>
                <span style={{ fontSize: 22 }}>📈</span>
                <div>
                  <div style={{ color: "#0f172a", fontSize: 13 }}>Organic traffic</div>
                  <div style={{ color: "#22c55e", fontWeight: 700 }}>+340% this month</div>
                </div>
              </div>

              <div className="float-card" style={{ top: 32, right: -20, animationDelay: "2s", fontSize: 12 }}>
                <span style={{ fontSize: 20 }}>🔔</span>
                <div>
                  <div style={{ color: "#0f172a" }}>New enquiry received</div>
                  <div style={{ color: "#64748b", fontSize: 11, marginTop: 2 }}>2 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#f8fafc", borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", padding: "18px 24px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px 40px", alignItems: "center" }}>
          {["🍕 Restaurants","☕ Cafes","✂️ Barbers","🏋️ Gyms","💅 Salons","🔧 Trades","📦 Local Services"].map(t => (
            <span key={t} style={{ fontSize: 14, color: "#64748b", fontWeight: 500, whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={sectionLabel}>What I offer</div>
              <h2 style={{ ...sectionTitle, textAlign: "center" }}>Everything you need to grow online</h2>
              <p style={{ ...sectionSub, margin: "0 auto", textAlign: "center" }}>
                From a brand new website to ongoing SEO and local Google visibility — I've got you covered.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="service-card">
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#0f172a" }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.65 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <div style={sectionLabel}>Recent work</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
                <h2 style={{ ...sectionTitle, marginBottom: 0 }}>Projects that delivered results</h2>
                <button className="btn-outline" onClick={() => scrollTo("contact")}>Start your project →</button>
              </div>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {PORTFOLIO.map((p, i) => (
              <FadeIn key={p.title} delay={i * 100}>
                <div className="portfolio-card" style={{ background: "#fff" }}>
                  <div style={{ background: p.color, height: 220, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                    <span style={{ fontSize: 80 }}>{p.emoji}</span>
                    <div style={{ position: "absolute", top: 16, left: 16 }}>
                      <span className="tag-pill">{p.category}</span>
                    </div>
                    {/* mini browser mock */}
                    <div style={{ position: "absolute", bottom: 16, right: 16, left: 16, background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "1px solid #e2e8f0" }}>
                      <div style={{ background: "#f8fafc", padding: "6px 10px", display: "flex", gap: 4, alignItems: "center" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f56" }} />
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#27c93f" }} />
                        <div style={{ flex: 1, background: "#e2e8f0", borderRadius: 3, height: 8, marginLeft: 4 }} />
                      </div>
                      <div style={{ padding: "10px 10px 8px", display: "flex", gap: 6 }}>
                        <div style={{ flex: 2, height: 6, background: p.color, borderRadius: 3 }} />
                        <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 3 }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "28px 28px 32px" }}>
                    <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 6 }}>{p.subtitle}</div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#0f172a", fontFamily: "'Sora', sans-serif" }}>{p.title}</h3>
                    <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.65, marginBottom: 20 }}>{p.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {[p.result1, p.result2, p.result3].map(r => (
                        <div key={r} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 20, height: 20, borderRadius: "50%", background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: p.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div style={sectionLabel}>Why choose me</div>
                <h2 style={sectionTitle}>Your local web specialist in Ashford, Kent</h2>
                <p style={{ ...sectionSub, marginBottom: 32 }}>
                  Unlike large agencies, you get a dedicated expert who genuinely cares about your results — someone who's invested in your business growing.
                </p>
                <button className="btn-primary" onClick={() => scrollTo("contact")}>Let's talk about your business</button>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {WHY.map((w, i) => (
                <FadeIn key={w.title} delay={i * 70}>
                  <div className="why-card">
                    <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, color: "#0f172a" }}>{w.title}</h4>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{w.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section" style={{ background: "#0f172a" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ ...sectionLabel, color: "#93c5fd" }}>How it works</div>
              <h2 style={{ ...sectionTitle, color: "#fff", textAlign: "center" }}>From first call to live website</h2>
              <p style={{ ...sectionSub, color: "#94a3b8", margin: "0 auto", textAlign: "center" }}>
                A clear, simple process designed to be stress-free for busy business owners.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, position: "relative" }}>
            {STEPS.map((step, i) => (
              <FadeIn key={step.title} delay={i * 100}>
                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 18,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: 20, right: 20,
                    fontSize: 56, fontFamily: "'Sora', sans-serif",
                    fontWeight: 800, color: "rgba(255,255,255,0.05)",
                    lineHeight: 1
                  }}>{step.num}</div>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{step.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563EB", marginBottom: 8 }}>Step {step.num}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div style={{ textAlign: "center", marginTop: 56 }}>
              <button className="btn-primary" onClick={() => scrollTo("contact")}>Start with a free discovery call</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={sectionLabel}>Client reviews</div>
              <h2 style={{ ...sectionTitle, textAlign: "center" }}>What local business owners say</h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 80}>
                <div className="testimonial-card">
                  <StarRating />
                  <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, margin: "16px 0 20px", fontStyle: "italic" }}>"{t.text}"</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid #f1f5f9", paddingTop: 16 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: t.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 700, color: "#374151", flexShrink: 0
                    }}>{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{t.name}</div>
                      <div style={{ fontSize: 13, color: "#94a3b8" }}>{t.business}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section">
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div style={sectionLabel}>Transparent pricing</div>
              <h2 style={{ ...sectionTitle, textAlign: "center" }}>Simple, honest packages</h2>
              <p style={{ ...sectionSub, textAlign: "center", margin: "0 auto" }}>
                No hidden fees. No surprises. Just great websites that work hard for your business.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
            {PRICING.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 100}>
                <div className={`pricing-card ${plan.highlight ? "featured" : ""}`} style={{ background: plan.highlight ? "#0f172a" : "#fff" }}>
                  {plan.highlight && (
                    <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#2563EB", color: "#fff", fontSize: 12, fontWeight: 700, padding: "5px 18px", borderRadius: 100, whiteSpace: "nowrap" }}>
                      ⭐ Most Popular
                    </div>
                  )}
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: plan.highlight ? "#93c5fd" : "#2563EB" }}>{plan.name}</span>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 48, fontWeight: 800, color: plan.highlight ? "#fff" : "#0f172a" }}>{plan.price}</span>
                  </div>
                  <p style={{ fontSize: 14, color: plan.highlight ? "#94a3b8" : "#64748b", lineHeight: 1.6, marginBottom: 28 }}>{plan.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                    {plan.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <span style={{ color: "#2563EB", fontWeight: 700, fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 14, color: plan.highlight ? "#e2e8f0" : "#374151", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollTo("contact")}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: plan.highlight ? "none" : "2px solid #e2e8f0",
                      background: plan.highlight ? "#2563EB" : "transparent",
                      color: plan.highlight ? "#fff" : "#0f172a",
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={e => { e.target.style.background = plan.highlight ? "#1d4ed8" : "#f8fafc"; }}
                    onMouseLeave={e => { e.target.style.background = plan.highlight ? "#2563EB" : "transparent"; }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <p style={{ textAlign: "center", fontSize: 14, color: "#94a3b8", marginTop: 32 }}>
              All prices include VAT. Custom quotes available for larger projects. <button onClick={() => scrollTo("contact")} style={{ color: "#2563EB", fontWeight: 600, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: 14 }}>Get in touch →</button>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "#f8fafc" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <FadeIn>
              <div>
                <div style={sectionLabel}>FAQs</div>
                <h2 style={sectionTitle}>Common questions answered</h2>
                <p style={{ ...sectionSub, fontSize: 16 }}>
                  Can't find your answer here? Drop me a message and I'll get back to you same day.
                </p>
                <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => scrollTo("contact")}>Ask a question</button>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div>
                {FAQS.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <button
                      className="faq-trigger"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    >
                      <span>{faq.q}</span>
                      <span style={{ fontSize: 20, color: "#2563EB", transform: faqOpen === i ? "rotate(45deg)" : "none", transition: "transform 0.25s", flexShrink: 0, marginLeft: 16 }}>+</span>
                    </button>
                    {faqOpen === i && (
                      <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, paddingTop: 12 }}>{faq.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "center" }}>
            <FadeIn>
              <div>
                <div style={sectionLabel}>Get in touch</div>
                <h2 style={sectionTitle}>Let's Grow Your Business Online</h2>
                <p style={{ ...sectionSub, marginBottom: 40 }}>
                  Book a free, no-obligation discovery call. We'll discuss your business, your goals and how a great website can help you get more customers.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    ["📧", "ananya05chhabra@gmail.com"],
                    ["📞", "07825795517"],
                    ["📍", "Ashford, Kent, UK"],
                  ].map(([icon, text]) => (
                    <div key={text} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{ width: 44, height: 44, background: "#eff6ff", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                      <span style={{ fontSize: 16, color: "#374151" }}>{text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 40, padding: "24px", background: "#f0fdf4", borderRadius: 16, border: "1px solid #bbf7d0" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#15803d", marginBottom: 6 }}>✅ What happens next</div>
                  <p style={{ fontSize: 14, color: "#166534", lineHeight: 1.6 }}>After you submit, I'll reply within a few hours to schedule a free 30-minute call at a time that suits you.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              {submitted ? (
                <div style={{ background: "#f0fdf4", border: "2px solid #bbf7d0", borderRadius: 20, padding: "56px 40px", textAlign: "center" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>Message sent!</h3>
                  <p style={{ fontSize: 16, color: "#166534", lineHeight: 1.6 }}>Thanks for getting in touch. I'll be in touch within a few hours to arrange your free discovery call.</p>
                </div>
              ) : (
                <div style={{ background: "#fff", border: "1.5px solid #f1f5f9", borderRadius: 20, padding: "40px 36px", boxShadow: "0 16px 48px rgba(15,23,42,0.07)" }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0f172a", marginBottom: 28 }}>Request Free Consultation</h3>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input className="form-input" type="text" placeholder="John Smith" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input className="form-input" type="email" placeholder="john@yourbusiness.co.uk" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div className="form-group">
                        <label className="form-label">Business Name *</label>
                        <input className="form-input" type="text" placeholder="Your Business Name" required value={formData.business} onChange={e => setFormData({...formData, business: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input className="form-input" type="tel" placeholder="07700 900 000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tell me about your business *</label>
                      <textarea className="form-input" rows={4} placeholder="What type of business do you have? What are your main goals?" required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ resize: "vertical" }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px", fontSize: 16, textAlign: "center" }}>
                      Request Free Consultation →
                    </button>
                    <p style={{ fontSize: 13, color: "#94a3b8", textAlign: "center" }}>No commitment required. I'll reply within a few hours.</p>
                  </form>
                </div>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div style={{ background: "#2563EB", padding: "64px 24px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Ready to get more customers from your website?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", marginBottom: 32, lineHeight: 1.6 }}>
            Join local businesses across Kent who are growing online with Ashford Web Studio.
          </p>
          <button className="btn-primary" style={{ background: "#fff", color: "#2563EB", boxShadow: "none", fontSize: 16, padding: "16px 36px" }} onClick={() => scrollTo("contact")}>
            Book Your Free Discovery Call Today
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#0a0f1e", padding: "56px 24px 32px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", marginBottom: 16 }}>
                <span style={{ color: "#2563EB" }}>Ashford</span> Web Studio
              </div>
              <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
                Professional website design and local SEO for businesses across Ashford, Kent and the surrounding area.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["f", "in", "ig"].map(s => (
                  <div key={s} className="social-btn" style={{ color: "#94a3b8", fontWeight: 700, fontSize: 13 }}>{s}</div>
                ))}
              </div>
            </div>

            {[
              { title: "Services", links: ["Website Design", "Website Redesign", "Local SEO", "Google Business", "Maintenance"] },
              { title: "Company", links: ["About", "Portfolio", "Process", "Pricing", "Contact"] },
              { title: "Contact", links: ["ananya05chhabra@gmail.com", "07825795517", "Ashford, Kent, UK"] },
            ].map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{col.title}</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map(link => (
                    <span key={link} className="footer-link" style={{ cursor: "pointer" }}>{link}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#4b5563" }}>© 2025 Ashford Web Studio. All rights reserved.</span>
            <div style={{ display: "flex", gap: 24 }}>
              {["Privacy Policy", "Terms of Service"].map(l => (
                <span key={l} className="footer-link" style={{ cursor: "pointer" }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
