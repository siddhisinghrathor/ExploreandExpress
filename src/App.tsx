import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PenTool } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import SharedCanvas from "./components/SharedCanvas";
import InteractiveDeck from "./components/InteractiveDeck";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import FreeResourcesPage from "./components/FreeResourcesPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";

// Botanical assets
import { 
  PalmLeaf, 
  OrganicBlob, 
  FlowerBadge, 
  BotanicalFrame 
} from "./components/BotanicalDecor";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  
  // Reflection prompt state for typing answers
  const [reflections, setReflections] = useState<{ [key: string]: string }>({});
  const [activeReflectCard, setActiveReflectCard] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleReflectChange = (promptIdx: number, value: string) => {
    setReflections({
      ...reflections,
      [promptIdx]: value
    });
  };

  const reflectionPrompts = [
    "What part of my story still shapes me today?",
    "What belief about myself came from someone else?",
    "What am I holding onto that no longer serves me?",
    "What would I create if fear wasn't involved?",
    "What deserves more attention in my life right now?",
    "What does a meaningful life look like for me?"
  ];

  // Helper for hash navigation (updates URL hash for bookmarking / navigation sanity)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "about", "services", "deck", "resources", "blog", "contact"].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Trigger on mount
    
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === "home" ? "" : page;
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#374038] selection:bg-[#E4CDD3] selection:text-[#3F5222] relative pb-12 pt-20">
      {/* Decorative Blurry Background Blobs */}
      <OrganicBlob className="top-40 left-10 w-96 h-96" color="bg-[#DAD5E7]/20" delay={0} />
      <OrganicBlob className="bottom-80 right-10 w-80 h-80" color="bg-[#E4CDD3]/20" delay={3} />
      <OrganicBlob className="top-1/2 left-1/3 w-80 h-80" color="bg-[#A8B08D]/15" delay={6} />

      {/* FIXED NAVBAR */}
      <Navbar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* MAIN CONTENT VIEWPORT */}
      <main className="w-full relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {currentPage === "home" && (
              <div className="space-y-28 md:space-y-36">
                
                {/* SECTION 1 — HERO */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12">
                  {/* Hero Image Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: "url('/hero_workspace_bg.png')" }}
                  />
                  {/* Solid overlay for high typography readability */}
                  <div className="absolute inset-0 bg-[#F7F4EE]/90 -z-10" />

                  {/* Botanical accents floating near hero */}
                  <PalmLeaf className="-top-10 -right-10 opacity-30 -rotate-12" size={240} side="right" />
                  <PalmLeaf className="bottom-5 -left-10 opacity-25 rotate-45" size={200} side="left" />

                  <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#556F2D] font-bold block">
                      Explore & Express Studio
                    </span>
                    
                    <h1 className="text-5xl md:text-7xl font-normal text-[#3F5222] tracking-tight leading-[1.15]">
                      Your life is already <br className="hidden md:inline" />telling a story.
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-[#374038] max-w-2xl mx-auto leading-relaxed font-light">
                      Most of us move through life carrying experiences, expectations, memories, and emotions without ever stopping to truly look at them.
                      <br className="hidden md:inline" /><br className="hidden md:inline" />
                      Explore &amp; Express creates space to pause, reflect, and understand the story you are living.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                      <button
                        onClick={() => {
                          const element = document.getElementById("stories-we-carry");
                          element?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-6 py-3.5 w-full sm:w-auto text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm shadow-2xs font-semibold"
                      >
                        Explore Your Story
                      </button>
                      <button
                        onClick={() => handlePageChange("about")}
                        className="px-6 py-3.5 w-full sm:w-auto text-xs uppercase tracking-widest border border-[#556F2D] text-[#556F2D] hover:bg-[#556F2D] hover:text-[#F7F4EE] transition-all rounded-sm font-semibold"
                      >
                        Meet Pallavi
                      </button>
                    </div>
                  </div>

                  {/* Decorative flower badge spinning in hero */}
                  <FlowerBadge className="absolute bottom-10 right-10 opacity-75" color="pink" size={80} text="EXPLORE" />
                </section>

                {/* SECTION 2 — THE STORIES WE CARRY */}
                <section id="stories-we-carry" className="max-w-5xl mx-auto px-6 py-12 relative scroll-mt-20">
                  <PalmLeaf className="-top-12 -left-12 opacity-15 rotate-12" size={180} side="left" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Left: Picture container with custom botanical frame */}
                    <div className="md:col-span-5 flex justify-center">
                      <div className="max-w-xs w-full">
                        <BotanicalFrame>
                          <div className="aspect-[4/5] bg-[#A8B08D]/20 relative flex flex-col justify-between p-6 select-none">
                            {/* Sketch rendering of a journal / canvas */}
                            <div className="w-full h-full border border-[#556F2D]/20 rounded-lg flex flex-col items-center justify-center p-4 bg-[#F7F4EE]/60">
                              <span className="text-[#3F5222] text-3xl font-serif mb-2">✦</span>
                              <p className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Reflective Study</p>
                              
                              {/* Simple abstract outline of a leaf branch and open journal */}
                              <svg className="w-24 h-24 text-[#556F2D]/60 mt-4" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M20 70 C30 75 70 75 80 70 M20 65 C30 70 70 70 80 65" />
                                <path d="M50 20 V72" strokeDasharray="3 3" />
                                <path d="M 50 35 C 40 25, 25 30, 20 45" />
                                <path d="M 50 45 C 60 35, 75 40, 80 55" />
                              </svg>
                              
                              <p className="text-[10px] text-[#374038]/60 mt-4 text-center leading-relaxed">
                                &ldquo;The question is not whether the marks exist. The question is whether we understand them.&rdquo;
                              </p>
                            </div>
                          </div>
                        </BotanicalFrame>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:col-span-7 space-y-6">
                      <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
                        We all carry marks left by life.
                      </h2>
                      
                      <div className="text-base md:text-lg text-[#374038]/95 space-y-4 leading-relaxed font-light">
                        <p>Some come from childhood.</p>
                        <p>Some from relationships.</p>
                        <p>Some from success.</p>
                        <p>Some from disappointment.</p>
                        <p>Some from things people told us about who we should be.</p>
                        <p className="pt-2">
                          Every experience leaves an impression. Over time, those impressions become the lens through which we see ourselves and the world.
                        </p>
                        <p className="text-[#556F2D] font-medium pt-2">
                          The question is not whether these marks exist.
                          <br />
                          The question is whether we understand them.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 3 — THE SHARED CANVAS (SCROLL STORYTELLING CENTERPIECE) */}
                <section className="bg-[#F7F4EE] border-y border-[#A8B08D]/20 py-16">
                  <SharedCanvas />
                </section>

                {/* SECTION 4 — WHY ART? */}
                <section className="max-w-5xl mx-auto px-6 py-12 relative">
                  <PalmLeaf className="-bottom-16 -right-12 opacity-20 -rotate-12" size={170} side="right" />
                  
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
                      Why use art for reflection?
                    </h2>
                    <p className="text-lg text-[#556F2D] font-bold mt-2 uppercase tracking-widest">
                      Because some things are easier to draw than explain.
                    </p>
                    <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Some feelings exist before words.",
                        text: "There are experiences we feel deeply but struggle to explain. Art gives those experiences a place to exist, letting us shape them without the pressure of perfect vocabulary."
                      },
                      {
                        title: "Patterns become visible.",
                        text: "The colors, shapes, and symbols we repeatedly choose often reveal stories we haven't fully noticed. Externalizing them reveals our inner architecture."
                      },
                      {
                        title: "Art slows us down.",
                        text: "In a fast-moving world, creative acts force us to pause. The physical action of drawing or painting creates space to observe, feel, and simply listen."
                      },
                      {
                        title: "Meaning emerges naturally.",
                        text: "When we create without judgment, insight appears on its own. The visual canvas doesn't lie; it shows us what we truly value without rational defenses."
                      }
                    ].map((card, idx) => (
                      <div 
                        key={idx}
                        className="p-8 bg-[#F7F4EE]/80 border border-[#A8B08D]/35 rounded-2xl paper-card shadow-2xs space-y-4 hover:shadow-xs transition-shadow duration-300"
                      >
                        <h3 className="text-xl md:text-2xl font-medium text-[#3F5222] tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#374038]/85 leading-relaxed font-light">
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION 5 — WHAT PEOPLE OFTEN DISCOVER */}
                <section className="bg-[#F7F4EE]/60 border-y border-[#A8B08D]/25 py-20 relative">
                  <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <span className="text-xs uppercase tracking-widest text-[#556F2D] font-bold block mb-2">
                        Common Realisations
                      </span>
                      <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
                        What begins to emerge
                      </h2>
                      <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        "I've been living according to expectations that were never mine.",
                        "I'm carrying stories that no longer belong to me.",
                        "I am stronger than I give myself credit for.",
                        "I deserve compassion from myself.",
                        "I finally understand why certain patterns keep repeating.",
                        "I know what truly matters now."
                      ].map((discovery, idx) => (
                        <div 
                          key={idx}
                          className="p-6 bg-[#F7F4EE] border border-[#A8B08D]/30 rounded-xl flex items-start space-x-3 paper-card shadow-2xs"
                        >
                          <span className="text-[#556F2D] text-lg font-serif mt-0.5">✧</span>
                          <p className="text-sm md:text-base text-[#374038]/90 font-light leading-relaxed">
                            {discovery}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* SECTION 6 — WHAT WE EXPLORE TOGETHER */}
                <section className="max-w-5xl mx-auto px-6 py-12">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-2">
                      Studio Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
                      Experiences inside the workshops
                    </h2>
                    <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Collaborative Canvas",
                        desc: "Explore how other people's influence shapes your life story."
                      },
                      {
                        title: "Life Mapping",
                        desc: "Visually explore moments that shaped your identity."
                      },
                      {
                        title: "Creative Reflection",
                        desc: "Use art as a mirror for self-awareness."
                      },
                      {
                        title: "Identity Exploration",
                        desc: "Understand who you are beneath labels and expectations."
                      },
                      {
                        title: "Emotional Storytelling",
                        desc: "Give experiences form through creativity."
                      },
                      {
                        title: "Purpose Discovery",
                        desc: "Reconnect with what feels meaningful and true."
                      }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-6 bg-[#F7F4EE]/90 border border-[#A8B08D]/30 rounded-xl space-y-3 shadow-2xs hover:border-[#556F2D]/30 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-medium text-[#3F5222] tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-[#374038]/85 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mt-12">
                    <button
                      onClick={() => handlePageChange("services")}
                      className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#556F2D] font-bold hover:text-[#3F5222] transition-colors focus:outline-none"
                    >
                      <span>Explore Workshops in detail</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </section>

                {/* SECTION 7 — A MOMENT OF REFLECTION (INTERACTIVE TYPING DIALOGUE) */}
                <section className="bg-[#DAD5E7]/25 border-y border-[#A8B08D]/20 py-20 relative">
                  <PalmLeaf className="-top-12 -right-12 opacity-15 rotate-45" size={180} side="right" />
                  
                  <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                      <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
                        Pause for a moment.
                      </h2>
                      <p className="text-base md:text-lg text-[#374038]/80 mt-2 font-light">
                        There are no right answers here. Only curiosity.
                      </p>
                      <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
                    </div>

                    {/* Interactive prompts layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {reflectionPrompts.map((prompt, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setActiveReflectCard(activeReflectCard === idx ? null : idx)}
                          className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer shadow-2xs select-none ${
                            activeReflectCard === idx 
                              ? "bg-[#F7F4EE] border-[#556F2D] shadow-xs lg:col-span-2" 
                              : "bg-[#F7F4EE]/90 border-[#A8B08D]/30 hover:border-[#556F2D]/35"
                          }`}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold">
                                Reflection Prompt {idx + 1}
                              </span>
                              <PenTool size={12} className={activeReflectCard === idx ? "text-[#556F2D]" : "text-[#A8B08D]"} />
                            </div>

                            <p className="text-base font-medium text-[#3F5222] tracking-tight">
                              {prompt}
                            </p>

                            {activeReflectCard === idx ? (
                              <div className="pt-3 border-t border-[#A8B08D]/20 mt-3" onClick={(e) => e.stopPropagation()}>
                                <textarea
                                  rows={4}
                                  value={reflections[idx] || ""}
                                  onChange={(e) => handleReflectChange(idx, e.target.value)}
                                  className="w-full bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-sm p-3 text-sm text-[#374038] focus:outline-none focus:border-[#556F2D] resize-none leading-relaxed font-light"
                                  placeholder="Type your quiet thoughts here. Your entries are saved only locally in your mind and screen..."
                                  autoFocus
                                />
                                <div className="flex justify-between items-center mt-2 text-[10px] text-[#374038]/50">
                                  <span>Private Reflection</span>
                                  <button
                                    onClick={() => setActiveReflectCard(null)}
                                    className="text-[#556F2D] hover:underline uppercase tracking-wider font-bold"
                                  >
                                    Close Notebook
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <p className="text-[10px] uppercase tracking-wider text-[#374038]/50 pt-2 border-t border-[#A8B08D]/15 mt-3">
                                {reflections[idx] ? "Reflection written (Click to edit)" : "Click to write your answer..."}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* SECTION 8 — MOMENTS OF REALISATION */}
                <section className="max-w-5xl mx-auto px-6 py-12 relative">
                  <PalmLeaf className="-bottom-16 -left-12 opacity-15 rotate-12" size={170} side="left" />
                  
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs uppercase tracking-widest text-[#556F2D] font-bold block mb-2">
                      Insights Gathered
                    </span>
                    <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
                      Moments of Realisation
                    </h2>
                    <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      "I came expecting an art activity and left understanding myself differently.",
                      "The shared canvas exercise changed the way I think about my relationships.",
                      "For the first time, I saw how much of my identity was built around other people's expectations.",
                      "I stopped trying to fix myself and started trying to understand myself."
                    ].map((realisation, idx) => (
                      <div 
                        key={idx}
                        className="p-8 bg-[#F7F4EE] border border-[#A8B08D]/35 rounded-2xl paper-card shadow-2xs flex flex-col justify-between"
                      >
                        <span className="text-[#556F2D] text-3xl font-serif block mb-4 select-none">“</span>
                        <p className="text-lg text-[#374038] font-light leading-relaxed italic">
                          {realisation}
                        </p>
                        <span className="text-right text-[#556F2D] text-lg font-serif block mt-4 select-none">”</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION 9 — MEET PALLAVI (HOME HIGHLIGHT) */}
                <section className="bg-[#E4CDD3]/20 border-y border-[#A8B08D]/20 py-20 relative">
                  <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                      {/* Left: Portrait Sketch Frame */}
                      <div className="md:col-span-5 flex justify-center">
                        <div className="max-w-xs w-full">
                          <BotanicalFrame>
                            <div className="aspect-[3/4] bg-[#A8B08D]/25 relative flex flex-col justify-between p-6 text-center select-none">
                              <div className="w-full h-full flex flex-col items-center justify-center border border-[#A8B08D]/40 rounded-lg p-4 bg-[#F7F4EE]/50">
                                <span className="text-[#3F5222] text-4xl font-serif mb-2">✧</span>
                                <p className="text-base font-medium text-[#374038] tracking-tight">Pallavi Jadhav</p>
                                <p className="text-[9px] uppercase tracking-widest text-[#556F2D] font-bold mt-1">PhD Scholar</p>
                                
                                <svg className="w-14 h-14 text-[#A8B08D] mt-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                  <path d="M50 90 V10 M30 40 Q50 30 70 40 M35 60 Q50 50 65 60" />
                                </svg>
                              </div>
                            </div>
                          </BotanicalFrame>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="md:col-span-7 space-y-6">
                        <span className="text-xs uppercase tracking-widest text-[#556F2D] font-bold block">
                          The Vision
                        </span>
                        <h2 className="text-3xl md:text-4xl font-normal text-[#3F5222] tracking-tight">
                          Why I created Explore & Express
                        </h2>
                        
                        <div className="text-[#374038]/95 space-y-4 text-base md:text-lg leading-relaxed font-light">
                          <p>
                            My work in psychology continually brings me back to one question: How do people come to understand themselves more deeply?
                          </p>
                          <p>
                            Through my journey into art-based reflection, I discovered that insight does not always emerge through conversation alone. Sometimes it appears through a colour. A shape. A symbol. A shared canvas. A creative experience.
                          </p>
                          <p>
                            Explore & Express was created as a space where people can slow down, reflect, and reconnect with themselves through creativity. Not to become someone new. But to understand who they already are.
                          </p>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <div>
                            <p className="text-lg font-normal text-[#556F2D] font-serif">Pallavi Jadhav</p>
                            <p className="text-[10px] uppercase tracking-widest text-[#374038]/60">
                              Psychology Researcher • Art-Based Facilitator
                            </p>
                          </div>
                          <button
                            onClick={() => handlePageChange("about")}
                            className="px-4 py-2 text-xs uppercase tracking-widest border border-[#556F2D] text-[#556F2D] hover:bg-[#556F2D] hover:text-[#F7F4EE] transition-all rounded-sm font-semibold"
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 10 — FINAL CTA */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-[#F7F4EE] border-t border-[#A8B08D]/20">
                  {/* Watercolor/Nature inspired background styles */}
                  <div className="absolute inset-0 bg-[#E4CDD3]/15 pointer-events-none" />
                  <PalmLeaf className="-top-12 -left-12 opacity-25 rotate-12" size={200} side="left" />
                  <PalmLeaf className="bottom-12 -right-12 opacity-20 -rotate-12" size={220} side="right" />
                  
                  <div className="max-w-3xl mx-auto px-6 text-center space-y-8 relative z-10">
                    <span className="text-[#3F5222] text-4xl font-serif block">✧</span>
                    
                    <h2 className="text-4xl md:text-6xl font-normal text-[#3F5222] tracking-tight leading-tight">
                      Your story deserves attention.
                    </h2>
                    
                    <p className="text-lg md:text-2xl text-[#374038]/90 max-w-2xl mx-auto leading-relaxed font-light">
                      Every experience has left a mark. Some painful. Some beautiful. Some unfinished. 
                      You do not need to erase them. You only need to understand them.
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => handlePageChange("contact")}
                        className="px-8 py-4 text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm shadow-2xs font-semibold"
                      >
                        Begin Your Journey
                      </button>
                    </div>
                  </div>
                </section>

              </div>
            )}

            {/* PAGE RENDERING */}
            {currentPage === "about" && <AboutPage />}
            {currentPage === "services" && <ServicesPage />}
            {currentPage === "deck" && <InteractiveDeck />}
            {currentPage === "resources" && <FreeResourcesPage />}
            {currentPage === "blog" && <BlogPage />}
            {currentPage === "contact" && <ContactPage />}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto px-6 mt-20 pt-16 border-t border-[#A8B08D]/20 text-center md:text-left space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Quote */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-normal text-[#3F5222] tracking-wide">Explore &amp; Express</h2>
            <p className="text-sm text-[#374038]/80 leading-relaxed font-light max-w-sm">
              Creative workshops, reflective card decks, and psychology-driven self-inquiry designed by PhD scholar Pallavi Jadhav.
            </p>
            <p className="text-xs text-[#556F2D] font-serif leading-relaxed pt-2 block">
              &ldquo;Art does not tell us who we are.<br />It helps us remember.&rdquo;
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Reflections</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Begin Your Journey" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePageChange(item.id)}
                  className="text-left text-[#374038]/90 hover:text-[#556F2D] transition-colors focus:outline-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3 text-sm text-[#374038]/90">
            <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Contact</h3>
            <p className="font-light leading-relaxed">
              Koregaon Park, Pune, India<br />
              hello@exploreandexpress.in
            </p>
            <p className="text-[10px] text-[#374038]/60 pt-2">
              &copy; {new Date().getFullYear()} Explore &amp; Express. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
