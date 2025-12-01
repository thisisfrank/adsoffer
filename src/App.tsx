import { Code2, Check, Star, Mail, ChevronDown, X, Shield, ShoppingCart, Laptop, Target, Rocket, TrendingUp, DollarSign, Zap, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
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
  customLayout?: boolean;
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
      id: 5,
      title: 'Cinematic Quality with Industry Leading Technology',
      description: '',
      tags: [],
      image: 'https://res.cloudinary.com/dsl86jjuk/video/upload/v1764568668/PATH_8_1_sfgai8.mp4',
      images: [],
      customLayout: true
    },
    {
      id: 4,
      title: 'Narrative/Character Videos',
      description: 'Scripted story with AI-generated presenter or persona. Perfect for storytelling, brand messaging, or creating memorable characters for your campaigns.',
      tags: ['AI Presenter', 'Storytelling', 'Brand Character'],
      image: 'https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569117/Agent_Hub_lut1x6.mp4',
      images: ['https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569117/Agent_Hub_lut1x6.mp4']
    },
    {
      id: 1,
      title: 'Screen Share Videos',
      description: 'Walkthrough of your product, software, or service in action. Perfect for demonstrating features, showing your platform, or explaining how something works step-by-step.',
      tags: ['Product Demo', 'Software', 'Tutorial'],
      image: 'https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569024/Shortlist_Promo_Lofi_Audio_et4pyu.mp4',
      images: ['https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569024/Shortlist_Promo_Lofi_Audio_et4pyu.mp4']
    },
    {
      id: 3,
      title: 'UGC-Style Videos',
      description: 'Selfie-cam, talking-head format that looks like a real person filmed it on their phone. Great for authentic testimonials, product reviews, or social proof.',
      tags: ['Authentic', 'Social Media', 'Mobile-First'],
      image: 'https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569241/Arcads_-_Stocky_Gent_with_Captions_1_g4yazi.mp4',
      images: ['https://res.cloudinary.com/dsl86jjuk/video/upload/v1764569241/Arcads_-_Stocky_Gent_with_Captions_1_g4yazi.mp4']
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
      question: "What's the turnaround time for video production?",
      answer: "The Holiday Ad Sprint delivers 3 videos in 7 days. The Q4 Campaign Ready package delivers 4 videos in 14 days. Both timelines start from project kickoff after your briefing call."
    },
    {
      question: "What video formats and deliverables do I receive?",
      answer: "You'll receive all videos in multiple formats optimized for different platforms: MP4 (1080p HD), square format (1:1) for Instagram/Facebook feeds, vertical format (9:16) for Stories/Reels/TikTok, and landscape (16:9) for YouTube and web. All files include proper compression for fast loading."
    },
    {
      question: "How many revision rounds are included?",
      answer: "The Holiday Ad Sprint includes 1 revision round. The Q4 Campaign Ready package includes 2 revision rounds. Additional revisions can be added at $500 per round if needed."
    },
    {
      question: "Can I get videos faster than the standard delivery time?",
      answer: "Yes, rush delivery is available for an additional fee. Contact us during your briefing to discuss expedited timelines and rush pricing for your specific project needs."
    },
    {
      question: "Do you provide scripting services?",
      answer: "Yes. The Holiday Ad Sprint includes script outlines for each video. The Q4 Campaign Ready package includes full scripting service with detailed scripts for all videos. We can also work from your existing scripts if you prefer."
    },
    {
      question: "What happens after I receive my videos?",
      answer: "You own the videos outright and can use them across any platform. If you need additional edits, more videos, or want to create variations for testing, we offer follow-up packages and can discuss ongoing video production needs."
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
            <span>Book Your Briefing</span>
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8">
              <Code2 className="w-4 h-4 text-white" />
              <span className="text-xs md:text-sm text-white">Video Creative Agency</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              Fast Turnaround Video Creative<br /><span className="italic">for Q4 Campaigns</span>
            </h1>

            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 leading-relaxed">
              High-converting ad videos delivered in 7-14 days so you can capture holiday traffic before it's gone.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Who This Is For</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-white/20 transition-all">
              <div className="mb-4">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">E-commerce Brands</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Launching holiday campaigns and need high-quality video ads fast to capture Q4 traffic.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-white/20 transition-all">
              <div className="mb-4">
                <Laptop className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">SaaS & Tech Companies</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                With year-end ad budgets to spend and need video creative before agencies book up.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-white/20 transition-all">
              <div className="mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Coaches & Consultants</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Running Q4 promos and need professional video assets to stand out in crowded feeds.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-white/20 transition-all">
              <div className="mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Busy Founders</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Who need assets fast—agencies are booked through January and you can't wait.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Portfolio Section */}
      <section id="projects-section" className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">ROI Optimized Content</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              let animationClass = 'animate-fadeIn';
              if (index === 0) animationClass = 'animate-fadeInSlideRight';
              else if (index === 2) animationClass = 'animate-fadeInSlideLeft';

              if (project.customLayout) {
                return (
                  <div
                    key={project.id}
                    className={`md:col-span-2 lg:col-span-3 group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-white/30 transition-all ${projectsVisible ? animationClass : 'opacity-0'}`}
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/50">
                        <h3 className="text-2xl md:text-4xl text-center" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                          <span className="italic">{project.title}</span>
                        </h3>
                      </div>
                      <div className="md:w-2/3 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        {project.image && project.image.endsWith('.mp4') ? (
                          <video
                            src={project.image}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                          />
                        ) : project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-slate-500 text-sm py-24">Media placeholder</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-white/30 transition-all cursor-pointer ${projectsVisible ? animationClass : 'opacity-0'}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/50 overflow-hidden">
                    {project.image.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                      <span className="italic">{project.title}</span>
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
            {/* Step 1: Brief & Strategy */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Brief & Strategy</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Understand your campaign goals
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We dig into your target audience, campaign objectives, and key messaging to craft videos that convert.
              </p>
            </div>

            {/* Step 2: Production & Editing */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Production & Editing</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Fast, polished video creation
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Scripts, voiceovers, editing, and motion graphics — all delivered with speed and precision to meet your Q4 deadlines.
              </p>
            </div>

            {/* Step 3: Deliver & Revise */}
            <div className={`bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all ${processVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Deliver & Revise</span>
                </h3>
                <p className="text-lg font-semibold text-white mb-3">
                  Launch-ready assets on time
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Get your videos in all the formats you need, with revision rounds included to ensure they're campaign-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">Why Now</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Q4 Ad Costs Peak Dec 15-25</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Get your campaigns live before CPMs spike. The earlier you launch, the more efficient your spend.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="mb-3">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Use-It-or-Lose-It Budgets</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Marketing dollars expire Dec 31. Deploy them now on video creative that drives results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="mb-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">One Converting Video Pays for Itself</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A single ad that hits can 10x this investment. The ROI potential far outweighs the cost.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Limited December Slots</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Taking 2-3 projects max. Once they're filled, this closes until January.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              <span className="italic">What Our Clients Say</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">Trusted by founders and growing teams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Testimonial - Alex */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all">
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

            {/* Testimonial - Mason */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-white/20 transition-all">
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

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Package 1: Small Batch */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Small Batch</span>
                </h3>
                <p className="text-slate-400 mb-4 text-sm md:text-base">
                  2 core assets • 7-day delivery
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold">$2,500</span>
                </div>
              </div>

              <button onClick={scrollToCalendar} className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg transition-all mb-6 text-sm md:text-base">
                Book Your Briefing
              </button>

              <div className="space-y-3">
                <p className="font-semibold text-white mb-3 text-sm md:text-base">What's included:</p>
                {[
                  '2 videos (up to 45 seconds each)',
                  'Full scripting service',
                  '1 revision round',
                  '7-day delivery',
                  'Style options: Screen share walkthrough OR Explainer with voiceover'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 2: Big Bundle */}
            <div className="bg-slate-800/50 backdrop-blur border-2 border-white/50 rounded-xl md:rounded-2xl p-6 md:p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white text-slate-900 px-4 py-1 rounded-full text-xs font-semibold">POPULAR</span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                  <span className="italic">Big Bundle</span>
                </h3>
                <p className="text-slate-400 mb-4 text-sm md:text-base">
                  4 core assets • 14-day delivery
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-bold">$4,500</span>
                </div>
              </div>

              <button onClick={scrollToCalendar} className="w-full bg-white hover:bg-slate-100 text-slate-900 font-semibold py-3 rounded-lg transition-all mb-6 text-sm md:text-base">
                Book Your Briefing
              </button>

              <div className="space-y-3">
                <p className="font-semibold text-white mb-3 text-sm md:text-base">What's included:</p>
                {[
                  '4 videos (up to 45 seconds each)',
                  'Full scripting service',
                  '2 revision rounds',
                  '14-day delivery',
                  'Style options: Screen share walkthrough, Explainer with voiceover, UGC-style authentic videos, OR Narrative/character storytelling'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">

            {/* Guarantee Box */}
            <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
              <div className="flex items-start gap-3 md:gap-4 mb-4 justify-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">Delivery Guarantee</h3>
                </div>
              </div>

              <p className="text-slate-300 font-semibold mb-3 text-sm md:text-base text-center">Every project includes:</p>
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 max-w-md mx-auto">
                {[
                  'Clear scope and deliverables',
                  'On-time delivery commitment',
                  'Revision rounds as specified',
                  'Launch-ready video files'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3 justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 mb-3 md:mb-4 text-sm md:text-base">
                We deliver what we promise, on schedule.<br />Your videos will be campaign-ready by your deadline.
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
            <span className="italic">Ready to Get Started?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8">
            Book your briefing call to discuss your Q4 campaigns and get started.
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

            <div className="md:w-2/3 overflow-hidden relative">
              <div className="w-full h-full">
                {selectedProject.image.endsWith('.mp4') ? (
                  <video
                    src={selectedProject.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
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
