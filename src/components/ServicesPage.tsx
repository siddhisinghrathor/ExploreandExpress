import { PalmLeaf } from "./BotanicalDecor";

export default function ServicesPage() {
  const workshops = [
    {
      title: "Collaborative Canvas",
      description: "Explore how other people's influence shapes your life story.",
      details: "A shared interactive exercise where we map out relationships, family patterns, and social expectations, reflecting on how they blend with our personal identity.",
      focus: "Relational boundaries, systemic influence, family-of-origin stories",
      time: "2.5 Hours",
      color: "bg-[#DAD5E7]/25",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="35" cy="50" r="18" strokeDasharray="3 3" />
          <circle cx="65" cy="50" r="18" />
          <path d="M47 50 A6 6 0 0 1 53 50" />
        </svg>
      )
    },
    {
      title: "Life Mapping",
      description: "Visually explore moments that shaped your identity.",
      details: "An exercise in drawing a visual timeline of your life. Instead of dates and events, we draw emotional landscapes, major transitions, and moments of quiet transformation.",
      focus: "Narrative synthesis, timeline integration, pivot point identification",
      time: "3 Hours",
      color: "bg-[#F7F4EE]/90",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M15 80 Q35 40 50 60 Q65 80 85 30" strokeLinecap="round" />
          <circle cx="15" cy="80" r="2" fill="currentColor" />
          <circle cx="50" cy="60" r="2" fill="currentColor" />
          <circle cx="85" cy="30" r="2" fill="currentColor" />
          <path d="M50 20 V35" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "Creative Reflection",
      description: "Use art as a mirror for self-awareness.",
      details: "Learn how to use watercolors, sketching, and clay modeling to observe current emotions. We focus entirely on the process of creation rather than the final product.",
      focus: "Mindfulness, somatic grounding, self-observation without judgment",
      time: "2 Hours",
      color: "bg-[#E4CDD3]/25",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="50" cy="45" rx="22" ry="25" />
          <path d="M38 35 Q50 25 62 35" strokeDasharray="3 3" />
          <path d="M42 45 Q50 50 58 45" />
        </svg>
      )
    },
    {
      title: "Identity Exploration",
      description: "Understand who you are beneath labels and expectations.",
      details: "We peel back the masks: professional titles, social expectations, and personal stories. Using mixed media, we examine who lives behind the roles we play daily.",
      focus: "Deconstruction of expectations, core identity identification, internal alignment",
      time: "3 Hours",
      color: "bg-[#F7F4EE]/90",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M30 30 H70 V70 H30 Z" />
          <path d="M22 22 H78 V78 H22 Z" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="8" />
        </svg>
      )
    },
    {
      title: "Emotional Storytelling",
      description: "Give experiences form through creativity.",
      details: "A therapeutic-grade workshop designed to help transform difficult, complex, or unexpressed emotions into symbolic drawings, externalizing pain and reclaiming your power.",
      focus: "Externalization of trauma, symbolic dialogue, grief and release integration",
      time: "2.5 Hours",
      color: "bg-[#A8B08D]/20",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M50 25 C65 25 75 40 75 55 C75 70 65 80 50 80 C35 80 25 70 25 55 C25 40 35 25 50 25 Z" />
          <path d="M50 45 Q55 52 50 60" />
          <path d="M50 35 V40" />
        </svg>
      )
    },
    {
      title: "Purpose Discovery",
      description: "Reconnect with what feels meaningful and true.",
      details: "Find your path through creative prompts. We use visual collages, card readings, and journaling to uncover values and set clear, heart-aligned intentions for the future.",
      focus: "Purpose identification, value alignment, path drawing, intention setting",
      time: "3 Hours",
      color: "bg-[#F7F4EE]/90",
      icon: (
        <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#556F2D]" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="50" cy="50" r="30" />
          <path d="M50 20 L50 80" strokeDasharray="3 3" />
          <path d="M20 50 L80 50" strokeDasharray="3 3" />
          <path d="M40 40 L60 60 M60 40 L40 60" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-6 relative">
      <PalmLeaf className="-top-12 -right-12 opacity-25 -rotate-12" size={190} side="right" />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
          Our Experiences
        </span>
        <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
          Reflective Workshops & Activities
        </h1>
        <p className="text-lg text-[#374038]/85 mt-4 leading-relaxed font-light">
          We use art not as a destination, but as a doorway to self-understanding. 
          Our sessions are structured to be emotionally safe, intellectually stimulating, and creative. No artistic background is required.
        </p>
        <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-6" />
      </div>

      {/* Workshop Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workshops.map((w, idx) => (
          <div 
            key={idx} 
            className={`p-6 rounded-2xl border border-[#A8B08D]/30 shadow-2xs flex flex-col justify-between ${w.color} transition-all duration-300 hover:shadow-xs hover:border-[#556F2D]/30`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-[#F7F4EE] rounded-xl border border-[#A8B08D]/20">
                  {w.icon}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#374038]/60 border border-[#A8B08D]/30 px-2 py-0.5 rounded-sm">
                  {w.time}
                </span>
              </div>
              
              <div className="space-y-1.5">
                <h3 className="text-2xl font-medium text-[#3F5222] tracking-tight">{w.title}</h3>
                <p className="text-sm text-[#556F2D] font-medium leading-relaxed">{w.description}</p>
              </div>

              <p className="text-sm text-[#374038]/85 leading-relaxed pt-2 border-t border-[#A8B08D]/15">
                {w.details}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#A8B08D]/15">
              <p className="text-[9px] uppercase tracking-widest text-[#374038]/50 font-bold mb-1">Focus Areas</p>
              <p className="text-xs text-[#3F5222] font-medium leading-relaxed">{w.focus}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Workshop structure information */}
      <div className="mt-20 bg-[#556F2D] text-[#F7F4EE] p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-md">
        {/* Subtle leaf overlay background inside banner */}
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-end pointer-events-none w-1/3">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white" stroke="currentColor" strokeWidth="1">
            <path d="M 50 100 V 0" />
            <path d="M 50 80 Q 20 60 10 30" />
            <path d="M 50 60 Q 80 40 90 20" />
          </svg>
        </div>

        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#E4CDD3] font-bold">The Facilitation Format</span>
          <h3 className="text-3xl font-medium tracking-tight">How our sessions are structured</h3>
          <p className="text-[#F7F4EE]/90 leading-relaxed text-base md:text-lg font-light">
            Every workshop begins with a 15-minute grounding and somatic breathing exercise. 
            We then transition into the core creative activity, where you work individually or collaboratively on your project. 
            The final 45 minutes are dedicated to a guided reflective discussion and journal writing to capture insights.
          </p>
          <div className="pt-4">
            <p className="text-xs uppercase tracking-widest text-[#A8B08D]">Available Formats</p>
            <p className="text-sm font-medium mt-1">Individual Sessions • Small Group Retreats • Academic Workshops</p>
          </div>
        </div>
      </div>
    </div>
  );
}
