import { PalmLeaf, BotanicalFrame } from "./BotanicalDecor";

export default function AboutPage() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-6 relative">
      {/* Decorative leaf branch in the corner */}
      <PalmLeaf className="-top-10 -left-10 opacity-30 rotate-45" size={180} side="left" />
      <PalmLeaf className="bottom-10 -right-10 opacity-20 -rotate-45" size={200} side="right" />

      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
          Meet the Facilitator
        </span>
        <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
          About Pallavi Jadhav
        </h1>
        <p className="text-lg text-[#374038]/70 mt-3 font-light">
          Psychology Researcher & Art-Based Facilitator
        </p>
        <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left: Picture and basic info */}
        <div className="md:col-span-5 flex justify-center">
          <div className="max-w-xs w-full">
            <BotanicalFrame>
              <div className="aspect-[3/4] bg-[#A8B08D]/25 relative flex flex-col justify-between p-6 text-center select-none">
                {/* A beautiful sketch representation since actual image is unavailable */}
                <div className="w-full h-full flex flex-col items-center justify-center border border-[#A8B08D]/40 rounded-lg p-4 bg-[#F7F4EE]/50">
                  <span className="text-[#3F5222] text-5xl font-serif mb-2">✧</span>
                  <p className="text-lg font-medium text-[#374038] tracking-tight">Pallavi Jadhav</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold mt-1">PhD Scholar</p>
                  <p className="text-[9px] text-[#374038]/60 mt-2 max-w-[180px] leading-relaxed">
                    Researching the intersection of creative expression, self-understanding, and psychological well-being.
                  </p>
                  
                  {/* Botanical outline drawing */}
                  <svg className="w-16 h-16 text-[#A8B08D] mt-6" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M 50 90 C 50 70, 45 40, 20 30" />
                    <path d="M 50 70 C 55 50, 65 30, 80 20" />
                    <path d="M 50 90 V 10" />
                    <ellipse cx="20" cy="30" rx="6" ry="3" fill="#E4CDD3" stroke="currentColor" strokeWidth="0.8" />
                    <ellipse cx="80" cy="20" rx="6" ry="3" fill="#DAD5E7" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>
              </div>
            </BotanicalFrame>
          </div>
        </div>

        {/* Right: Biography/Content */}
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium text-[#3F5222] tracking-tight">
            Why I created Explore & Express
          </h2>
          
          <div className="text-[#374038]/95 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              My work in psychology continually brings me back to one question:
              <strong> How do people come to understand themselves more deeply?</strong>
            </p>
            <p>
              Through my journey into art-based reflection, I discovered that insight does not always emerge through conversation alone. Sometimes, when we try to speak, the vocabulary of everyday language falls short.
            </p>
            <p>
              Instead, truth appears through a color. A shape. A symbol. A shared canvas. A creative experience. These moments often reveal stories we have been carrying for years, hidden beneath the noise of expectations and societal labels.
            </p>
            <p>
              Explore & Express was created as a space where people can slow down, reflect, and reconnect with themselves through creativity. Not to become someone new, but to understand who they already are.
            </p>
          </div>

          <div className="pt-6 border-t border-[#A8B08D]/20">
            <p className="text-xl font-normal text-[#556F2D] font-serif">Pallavi Jadhav</p>
            <p className="text-xs uppercase tracking-widest text-[#374038]/60 mt-1">
              Psychology Researcher • Art-Based Facilitator
            </p>
          </div>
        </div>
      </div>

      {/* Educational Background & Approach Section */}
      <div className="mt-20 border-t border-[#A8B08D]/20 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#3F5222] tracking-tight">The Academic Foundation</h3>
            <p className="text-[#374038]/85 text-sm md:text-base leading-relaxed">
              As a PhD scholar in psychology, my work is grounded in theories of self-actualization, creative expression, and narrative identity. We do not look at art as a technical skill, but rather as a cognitive and emotional mirror. The focus is always on the psychological inquiry—using creative activities to bypass rational defenses and access deeper, unconscious insights.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-[#3F5222] tracking-tight">Our Philosophy in Action</h3>
            <p className="text-[#374038]/85 text-sm md:text-base leading-relaxed">
              We believe that healing is not about correcting a defect, but about integrating your whole story. Every workshop and card deck we create is structured to ensure safety, curiosity, and non-judgmental exploration. Here, you are invited to view your life from a distance, inspect the marks left by your experiences, and decide how you want to draw the next line.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
