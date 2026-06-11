import { Download } from "lucide-react";
import { PalmLeaf } from "./BotanicalDecor";

export default function FreeResourcesPage() {
  const resources = [
    {
      title: "The Weekly Reflection Journal",
      category: "Journal Layout",
      description: "A 5-page structured reflection journal layout with specific daily prompts designed to help you process experiences, track recurring feelings, and notice life patterns.",
      fileSize: "PDF (1.2 MB)",
      color: "bg-[#F7F4EE]/90",
      borderColor: "border-[#A8B08D]/40"
    },
    {
      title: "Life Mapping Worksheet",
      category: "Creative Template",
      description: "A blank visual template with instructions on how to chart your life story's emotional highs, lows, and turning points through colors and lines.",
      fileSize: "PDF (840 KB)",
      color: "bg-[#DAD5E7]/25",
      borderColor: "border-[#DAD5E7]/70"
    },
    {
      title: "Color & Symbol Guidebook",
      category: "Insight Reference",
      description: "A simple guide exploring how psychology links colors, shapes, and repetitive motifs to underlying emotions, helping you analyze what emerges on your canvas.",
      fileSize: "PDF (2.4 MB)",
      color: "bg-[#E4CDD3]/25",
      borderColor: "border-[#E4CDD3]/70"
    },
    {
      title: "Slowing Down: 10 Creative Prompts",
      category: "Reflective Activities",
      description: "Ten quick, guided exercises utilizing simple household art supplies (pencils, markers, coffee drops) to ground yourself when feeling overwhelmed.",
      fileSize: "PDF (610 KB)",
      color: "bg-[#F7F4EE]/90",
      borderColor: "border-[#A8B08D]/35"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-6 relative">
      <PalmLeaf className="top-10 -left-12 opacity-25 rotate-90" size={170} side="left" />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
          Self-Discovery Guides
        </span>
        <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
          Free Reflective Resources
        </h1>
        <p className="text-lg text-[#374038]/85 mt-4 leading-relaxed font-light">
          Self-exploration should be accessible. We have designed these worksheets and guides to help you start your journey of reflection at home, in your own time.
        </p>
        <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-6" />
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((res, idx) => (
          <div 
            key={idx}
            className={`p-6 rounded-2xl border ${res.borderColor} ${res.color} shadow-2xs flex flex-col justify-between transition-all duration-300 hover:shadow-xs hover:border-[#556F2D]/20`}
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold bg-[#F7F4EE] px-2 py-0.5 border border-[#A8B08D]/30 rounded-sm inline-block">
                {res.category}
              </span>
              
              <h3 className="text-2xl font-medium text-[#3F5222] tracking-tight">
                {res.title}
              </h3>
              
              <p className="text-sm text-[#374038]/85 leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#A8B08D]/15 mt-6">
              <span className="text-xs text-[#374038]/60 font-medium">
                Format: {res.fileSize}
              </span>
              
              <button 
                onClick={() => alert("Thank you. This template is a sample demonstration.")}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#556F2D] font-bold hover:text-[#3F5222] transition-colors focus:outline-none"
              >
                <Download size={14} />
                <span>Download Guide</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Suggestion */}
      <div className="mt-20 border-t border-[#A8B08D]/20 pt-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-[#3F5222] text-3xl font-serif">✧</span>
          <h3 className="text-2xl md:text-3xl font-normal text-[#3F5222] tracking-tight">
            Looking for a structured journal?
          </h3>
          <p className="text-base md:text-lg text-[#374038]/85 leading-relaxed max-w-xl mx-auto font-light">
            We are currently developing a physical, linen-bound workbook titled <strong>The Marks We Carry</strong>. It contains 12 chapters of psychology-driven creative activities, heavy sketch paper, and guided reflections.
          </p>
          <div className="pt-2">
            <span className="text-xs uppercase tracking-widest text-[#374038]/60 border-b border-[#A8B08D]/30 pb-1">
              Coming Late Autumn 2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
