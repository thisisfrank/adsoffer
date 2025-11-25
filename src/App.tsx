import { Code2, Check, Star, Mail, ChevronDown, X, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import CostCalculator from './CostCalculator';
import ProprietaryDevelopment from './ProprietaryDevelopment';
import GuaranteeModal from './GuaranteeModal';

declare global {
  interface Window {
    Cal: any;
  }
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  images: string[];
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGuaranteeModalOpen, setIsGuaranteeModalOpen] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: 'SaaS Development',
      description: 'Full-stack candidate sourcing platform for recruiters — AI-powered matching, profile analysis, and automated outreach to scale hiring workflows.',
      tags: ['Full-Stack', 'SaaS', 'AI Integration'],
      image: '/videoframe_18712.png',
      images: ['/videoframe_18712.png', '/Landing Page.png', '/Admin Control.png']
    },
    {
      id: 2,
      title: 'Micro Tool Development',
      description: 'Custom inventory management system — streamlining item tracking, business intake, and eliminating manual data entry across projects.',
      tags: ['Make.com', 'CRM Integration', 'Automation'],
      image: '/Inventory Tracker copy.png',
      images: ['/Inventory Tracker copy.png', '/Inventory Tracker.png', '/Admin Control.png']
    },
    {
      id: 3,
      title: 'Portal Development',
      description: 'Real-time analytics dashboard for logistics company — route tracking, performance metrics, and operational insights to optimize delivery efficiency.',
      tags: ['React', 'Custom Portal', 'API Integration'],
      image: '/Transport Portal copy.png',
      images: ['/Transport Portal copy.png', '/Transport Portal 2.PNG', '/Transport Portal.png']
    }
  ];

  const scrollToCalendar = () => {
    document.getElementById('my-cal-inline')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === 'process-section') {
                setProcessVisible(true);
              } else if (entry.target.id === 'projects-section') {
                setProjectsVisible(true);
              }
            }
          });
        },
        { threshold: 0.2 }
      );

      const processSection = document.getElementById('process-section');
      const projectsSection = document.getElementById('projects-section');

      if (processSection) {
        observer.observe(processSection);
      }
      if (projectsSection) {
        observer.observe(projectsSection);
      }

      return () => {
        if (processSection) {
          observer.unobserve(processSection);
        }
        if (projectsSection) {
          observer.unobserve(projectsSection);
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.Cal) return;

    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", { origin: "https://cal.com" });

    window.Cal("inline", {
      elementOrSelector: "#my-cal-inline",
      calLink: "frank-gonzalez/clean-cut-systems-30m-audit",
      layout: "month_view"
    });

    window.Cal("ui", {
      theme: "dark",
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How much does it cost to build an MVP?",
      answer: "Traditional development agencies charge $50K-$100K and take 3-6 months. Our AI-powered approach delivers a launch-ready MVP in just 4 weeks for $9,500. For clients who want to expand beyond the MVP scope, total investment typically ranges $15K-$30K depending on additional features."
    },
    {
      question: "How long does it take to build an app?",
      answer: "We deliver fully functional MVPs in 4 weeks from kickoff to launch. Our AI-powered development process allows us to move significantly faster than traditional development teams while maintaining high quality standards."
    },
    {
      question: "What happens after my MVP launches?",
      answer: "After launch, we offer 2-week enhancement sprints at $4,500 for clients who want to iterate and expand their MVP based on user feedback. These revision cycles allow you to add features, improve UX, or scale functionality as your business grows."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes. We provide ongoing support, maintenance, and iteration packages so your product continues to evolve as your user base grows and feedback comes in."
    },
    {
      question: "What's included in the $9,500 MVP package?",
      answer: "Your MVP includes a fully functional product with core features, user authentication and onboarding flow, database integration, responsive design, and basic API integrations. We handle strategy, design, development, and testing—everything needed for launch."
    },
    {
      question: "How do you build apps so quickly?",
      answer: "We leverage cutting-edge AI development tools combined with proven frameworks and templates. This allows us to focus on your unique business logic and user experience rather than rebuilding common functionality from scratch."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Header */}
      <header className="bg-[#0a0f1a] border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <h1 className="text-lg md:text-2xl" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            <span className="italic">Clean Cut Systems</span>
          </h1>
          <button onClick={scrollToCalendar} className="bg-white hover:bg-slate-100 text-slate-900 font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all flex items-center gap-2 text-sm md:text-base">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Get in Touch</span>
            <span className="sm:hidden">Contact</span>
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <Code2 className="w-4 h-4 text-white" />
              <span className="text-xs md:text-sm text-white">AI-Powered Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              Build Your MVP in<br /><span className="italic">Just 4 Weeks</span>
            </h1>

            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed">
              Fast-track your product from idea to launch with AI-powered development.
            </p>
          </div>
        </div>
      </section>

      {/* Logo Scroll Section */}
      <section className="py-8 md:py-12 bg-[#0a0f1a] overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll w-[4928px] md:w-[7252px]">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex shrink-0">
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Admin Control.png" alt="Admin Control Dashboard" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Landing Page.png" alt="Landing Page" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Super-Recruiter-AI-Powered-Candidate-Sourcing.png" alt="Super Recruiter Platform" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/videoframe_18712.png" alt="Platform Demo" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Inventory Tracker.png" alt="Inventory Tracker" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Transport Portal.png" alt="Transport Portal" className="w-full h-full object-contain" />
                </div>
                <div className="shrink-0 w-80 h-48 md:w-[500px] md:h-[280px] bg-slate-800/30 border border-slate-700/50 rounded-lg p-2 overflow-hidden mr-6">
                  <img src="/Bank-Statement-Comparison-Tool-Compare-Spending-Instantly.png" alt="Bank Statement Comparison Tool" className="w-full h-full object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process-section" className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Our Process</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Step 1: Scope */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Scope</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Define what matters most
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We cut through feature bloat and identify the core functionality that will validate your idea fastest.
              </p>
            </div>

            {/* Step 2: Ship */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Ship</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Launch in 4 weeks, not 4 months
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                AI-powered development means we move at startup speed — you get a working product while your competitors are still writing specs.
              </p>
            </div>

            {/* Step 3: Scale */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Scale</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Iterate based on real data
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Once you're live, we help you prioritize what to build next based on actual user behavior, not assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProprietaryDevelopment />

      {/* Case Studies / Portfolio Section */}
      <section id="projects-section" className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Featured Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              let animationClass = 'animate-fadeIn';
              if (index === 0) animationClass = 'animate-fadeInSlideRight';
              else if (index === 2) animationClass = 'animate-fadeInSlideLeft';

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-white/30 transition-all cursor-pointer ${projectsVisible ? animationClass : 'opacity-0'}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                      <span className="italic">{project.title}</span>
                    </h3>
                    <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Calculate Your Return</span>
            </h2>
          </div>
          <CostCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">What Our Clients Say</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">Trusted by founders and growing teams</p>
          </div>

          <div className="relative">
            <div className="md:flex md:animate-scroll-slow md:gap-6 space-y-4 md:space-y-0">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="md:flex md:gap-6 md:shrink-0 space-y-4 md:space-y-0">
                  {/* Testimonial 1 */}
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all md:w-96 md:shrink-0">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                      "Frank is amazing. He helped us diagnose which parts of our business we should automate and in what order so that we can receive the most value for our money upfront. He is an amazing communicator and we look forward to partnering with him for all our future automation needs!"
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">Sargis Ivanov</p>
                      <p className="text-xs md:text-sm text-slate-400">Logistics Manager</p>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all md:w-96 md:shrink-0">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                      "Absolute GREAT experience with Frank. Go with Frank, you won't be disappointed."
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">Alex Papageorge</p>
                      <p className="text-xs md:text-sm text-slate-400">Recruiting Firm CEO</p>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all md:w-96 md:shrink-0">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                      "Hire him. You won't be sorry. Literally saves us at least 20 hours a week and we can now reallocate that time to other tasks as opposed to hiring another employee. My employees are excited because their jobs have been made exponentially easier. Frank is a resourceful expert in his field. Highly recommended."
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">Dawn Rucinski</p>
                      <p className="text-xs md:text-sm text-slate-400">Seller's Agent</p>
                    </div>
                  </div>

                  {/* Testimonial 4 */}
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all md:w-96 md:shrink-0">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                      "Frank is unbelievable at his job and his talent is worth every cent. Very great communication, quick turnaround time, and willing to do whatever is needed to get the job done. Will be working together long into the future. Highly recommended."
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">Mason Kuhr</p>
                      <p className="text-xs md:text-sm text-slate-400">Supplement Brand Owner</p>
                    </div>
                  </div>

                  {/* Testimonial 5 */}
                  <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all md:w-96 md:shrink-0">
                    <div className="flex gap-1 mb-3 md:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white" />
                      ))}
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base">
                      "Frank is well versed in Sales, Marketing, Automation & AI, Management. He's a well-rounded business athlete. I not only appreciated the quality of Frank's output but also his perspective and advice on many business situations. He's a star. I will surely work with Frank again very soon."
                    </p>
                    <div>
                      <p className="font-semibold text-white text-sm md:text-base">Ben Moore</p>
                      <p className="text-xs md:text-sm text-slate-400">SaaS Founder</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Simple Pricing</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* MVP Development Package */}
            <div className="bg-slate-800/50 backdrop-blur border-2 border-white/50 rounded-xl md:rounded-2xl p-6 md:p-10 relative text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">MVP Development</span>
                </h3>
                <p className="text-slate-400 mb-4 md:mb-6 text-sm md:text-base">
                  In 4-weeks you'll have a full working product ready to launch to the world.
                </p>
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-4xl md:text-5xl font-bold">$9,500</span>
                  <span className="text-slate-400 text-sm md:text-base">/ One-time</span>
                </div>
              </div>

              <button onClick={scrollToCalendar} className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 md:py-4 rounded-lg transition-all mb-6 md:mb-8 text-sm md:text-base">
                Get Started Today
              </button>

              <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
                <p className="font-semibold text-slate-300 mb-3 md:mb-4 text-sm md:text-base text-center">What's included:</p>
                {[
                  'Functional MVP',
                  'Database setup',
                  'API integrations',
                  'User authentication',
                  'Design components',
                  '24-hour email response time',
                  'Weekly progress updates'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="mt-8 md:mt-12 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
              <div className="flex items-start gap-3 md:gap-4 mb-4 justify-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Backed by Our Guarantee.</h3>
                </div>
              </div>

              <p className="text-slate-300 font-semibold mb-3 text-sm md:text-base text-center">Every project includes:</p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 max-w-md mx-auto">
                {[
                  'Written scope with clear deliverables',
                  '4-week delivery commitment',
                  'Functional features that meet acceptance criteria',
                  'Full guarantee backing our work'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 mb-3 md:mb-4 text-sm md:text-base">
                Not a satisfaction guarantee—a delivery guarantee.<br />We commit to shipping what we scope, on time.
              </p>

              <button
                onClick={() => setIsGuaranteeModalOpen(true)}
                className="text-white hover:text-slate-200 transition-colors underline text-sm md:text-base"
              >
                Read full terms →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Frequently Asked Questions</span>
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 md:px-6 py-4 md:py-5 flex items-center justify-between text-left hover:bg-slate-800/50 transition-all"
                >
                  <h4 className="text-base md:text-lg font-semibold text-white pr-3 md:pr-4">{faq.question}</h4>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-5">
                    <p className="text-slate-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-12 md:pt-24 pb-6 md:pb-8 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl mb-4 md:mb-6" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            <span className="italic">Ready to Build?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8">
            Book a call to discuss your project and get started within days.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="pb-8 md:pb-12 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div
            style={{ width: '100%', height: '700px', overflow: 'auto' }}
            id="my-cal-inline"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <button
            onClick={() => setIsGuaranteeModalOpen(true)}
            className="text-slate-400 hover:text-white transition-colors text-sm md:text-base underline"
          >
            Our Guarantee
          </button>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0);
          }}
        >
          <div
            className="relative bg-[#0f1419] border border-slate-700/50 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedProject(null);
                setCurrentImageIndex(0);
              }}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700/50">
              <h3 className="text-3xl md:text-4xl mb-6 italic" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                {selectedProject.title}
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-base md:text-lg">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-2/3 overflow-hidden relative flex flex-col">
              <div className="flex-1 overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-center gap-2 py-4 bg-[#0f1419]">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-white w-8'
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Guarantee Modal */}
      <GuaranteeModal
        isOpen={isGuaranteeModalOpen}
        onClose={() => setIsGuaranteeModalOpen(false)}
      />
    </div>
  );
}

export default App;
