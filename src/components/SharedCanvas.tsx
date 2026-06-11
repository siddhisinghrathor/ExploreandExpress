import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, RotateCcw } from "lucide-react";

export default function SharedCanvas() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Step 1",
      heading: "You begin with a blank page.",
      description: "A space of quiet potential. Unmarked, open, and waiting. In the beginning, there are no expectations, no expectations of who you should be, and no predefined paths.",
      reflection: "Take a breath. Remember the feeling of starting fresh."
    },
    {
      title: "Step 2",
      heading: "People enter your story.",
      description: "Parents. Friends. Teachers. Partners. Strangers. As we grow, others step into our space, bringing their own stories, expectations, and energy into our lives.",
      reflection: "Who are the key figures that walked into your early chapters?"
    },
    {
      title: "Step 3",
      heading: "They leave marks.",
      description: "Some beautiful. Some painful. Some unexpected. A word of encouragement, a sudden heartbreak, a strict rule, a shared laugh—every interaction leaves a print upon your canvas.",
      reflection: "Some marks were chosen for you; others arrived by surprise."
    },
    {
      title: "Step 4",
      heading: "The canvas changes.",
      description: "Over time, the blank space becomes filled. The colors run together. Some areas feel crowded; others feel shadowed. The canvas becomes a complex map of where you have been.",
      reflection: "Notice how the layers of your experiences have blended together."
    },
    {
      title: "Step 5",
      heading: "You continue creating.",
      description: "Awareness begins when you pick up the brush yourself. You look at the marks left by others and decide how to respond. You start drawing your own lines, navigating through what already exists.",
      reflection: "You are no longer just the page; you are now the artist."
    },
    {
      title: "Step 6",
      heading: "The artwork becomes uniquely yours.",
      description: "A testament to survival, learning, beauty, and complexity. No one else has a canvas that looks like yours. Every line and color tells the story of how you became who you are.",
      reflection: "What is one detail on your canvas that you've grown to appreciate?"
    }
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // SVG Drawing elements based on steps
  const renderCanvasGraphics = () => {
    return (
      <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Step 1: Blank page - simple paper border sketch */}
        <motion.rect
          x="20"
          y="20"
          width="360"
          height="360"
          rx="12"
          stroke="#A8B08D"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
        />

        {/* Step 2: People enter - light structural background patterns (faint gray outlines) */}
        {activeStep >= 1 && (
          <g>
            {/* Strangers / Society: faint structural lines */}
            <motion.path
              d="M 50 350 L 50 150 C 50 100, 150 50, 200 50"
              stroke="#DAD5E7"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M 350 350 L 350 200 C 350 150, 250 100, 200 100"
              stroke="#DAD5E7"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            />
          </g>
        )}

        {/* Step 3: They leave marks - soft watercolor blots */}
        {activeStep >= 2 && (
          <g>
            {/* Muted Pink Blotch (Gentle mark, like family) */}
            <motion.circle
              cx="130"
              cy="160"
              r="45"
              fill="#E4CDD3"
              fillOpacity="0.55"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
              style={{ filter: "blur(6px)" }}
            />

            {/* Soft Lavender Blotch (Unexpected mark) */}
            <motion.circle
              cx="260"
              cy="230"
              r="55"
              fill="#DAD5E7"
              fillOpacity="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              style={{ filter: "blur(8px)" }}
            />

            {/* Sage Green Spot (A growing mark) */}
            <motion.path
              d="M 180 120 Q 220 80 280 130 Q 320 180 250 210 Z"
              fill="#A8B08D"
              fillOpacity="0.4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{ filter: "blur(5px)" }}
            />
          </g>
        )}

        {/* Step 4: The canvas changes - blending marks, overlaying textures */}
        {activeStep >= 3 && (
          <g>
            {/* Deeper Green overlapping marks (difficult times / intense marks) */}
            <motion.path
              d="M 120 220 C 140 180, 200 170, 220 230 C 200 270, 150 280, 120 220 Z"
              fill="#556F2D"
              fillOpacity="0.18"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1 }}
              style={{ filter: "blur(4px)" }}
            />

            {/* Faint charcoal pencil hatch marks representing struggle */}
            <motion.path
              d="M 90 230 L 120 200 M 95 235 L 125 205 M 100 240 L 130 210 M 105 245 L 135 215"
              stroke="#374038"
              strokeWidth="0.8"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2 }}
            />
          </g>
        )}

        {/* Step 5: You continue creating - your active brush stroke */}
        {activeStep >= 4 && (
          <g>
            {/* The individual's line: A strong, elegant, fluid line winding its way, drawn in Primary Green */}
            <motion.path
              d="M 60 280 C 100 320, 160 310, 190 250 C 220 190, 170 120, 220 100 C 270 80, 310 120, 330 180"
              stroke="#556F2D"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* Small golden glow circle at the active tip of the stroke */}
            <motion.circle
              cx="330"
              cy="180"
              r="5"
              fill="#F7F4EE"
              stroke="#556F2D"
              strokeWidth="1.5"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </g>
        )}

        {/* Step 6: Complete unique artwork - botanical leaves grow from your line, showing integration */}
        {activeStep >= 5 && (
          <g>
            {/* Botanical Leaf 1 */}
            <motion.path
              d="M 220 100 C 235 90, 250 95, 255 105 C 245 115, 230 110, 220 100 Z"
              fill="#A8B08D"
              stroke="#3F5222"
              strokeWidth="1"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Botanical Leaf 2 */}
            <motion.path
              d="M 190 250 C 175 260, 160 255, 155 245 C 165 235, 180 240, 190 250 Z"
              fill="#E4CDD3"
              stroke="#3F5222"
              strokeWidth="1"
              initial={{ scale: 0, rotate: 30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            {/* Botanical Leaf 3 */}
            <motion.path
              d="M 330 180 C 345 185, 355 175, 350 165 C 340 165, 330 170, 330 180 Z"
              fill="#DAD5E7"
              stroke="#3F5222"
              strokeWidth="1"
              initial={{ scale: 0, rotate: 15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />

            {/* Tiny stars representing realization */}
            <motion.path
              d="M 200 45 L 202 50 L 207 50 L 203 53 L 205 58 L 200 55 L 195 58 L 197 53 L 193 50 L 198 50 Z"
              fill="#3F5222"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.path
              d="M 110 320 L 111 323 L 115 323 L 112 325 L 113 329 L 110 327 L 107 329 L 108 325 L 105 323 L 109 323 Z"
              fill="#3F5222"
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
          </g>
        )}
      </svg>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-[#556F2D] block mb-2 font-semibold">
          Section 3 — The Shared Canvas
        </span>
        <h2 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight">
          Imagine your life as a canvas.
        </h2>
        <div className="w-16 h-[1px] bg-[#A8B08D] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: The Visual Canvas Representation */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-3xl shadow-sm p-4 flex items-center justify-center overflow-hidden">
            {/* Paper texture overlay inside canvas */}
            <div className="absolute inset-0 paper-texture pointer-events-none opacity-20" />
            
            {renderCanvasGraphics()}

            {/* Corner flowers sketch */}
            <div className="absolute bottom-3 left-3 text-[10px] text-[#A8B08D]/40 select-none">
              EX & EX STUDIO
            </div>
            <div className="absolute top-3 right-3 text-[10px] text-[#A8B08D]/40 select-none">
              PALLAVI JADHAV
            </div>
          </div>
        </div>

        {/* Right: Content card with stepper */}
        <div className="lg:col-span-6 flex flex-col justify-between min-h-[350px] order-1 lg:order-2">
          <div className="relative overflow-hidden min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-4"
              >
                <div className="text-[#A8B08D] text-sm uppercase tracking-widest font-bold">
                  {steps[activeStep].title}
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#374038] tracking-tight">
                  {steps[activeStep].heading}
                </h3>
                <p className="text-[#374038]/85 text-base md:text-lg leading-relaxed">
                  {steps[activeStep].description}
                </p>
                <div className="pt-4 border-t border-[#A8B08D]/20 mt-4">
                  <p className="text-[11px] uppercase tracking-wider text-[#556F2D] font-bold mb-1">
                    Reflection Prompt
                  </p>
                  <p className="text-sm text-[#3F5222] italic leading-relaxed">
                    “{steps[activeStep].reflection}”
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stepper Controls */}
          <div className="flex items-center justify-between pt-8 border-t border-[#A8B08D]/30 mt-6">
            <div className="flex space-x-1.5">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeStep ? "w-6 bg-[#556F2D]" : "w-2 bg-[#A8B08D]/40"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                disabled={activeStep === 0}
                className={`p-2 rounded-full border border-[#A8B08D]/40 transition-colors focus:outline-none ${
                  activeStep === 0
                    ? "opacity-30 cursor-not-allowed text-[#374038]"
                    : "hover:bg-[#A8B08D]/15 text-[#556F2D]"
                }`}
                aria-label="Previous step"
              >
                <ChevronLeft size={18} />
              </button>

              {activeStep < steps.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 flex items-center space-x-2 text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm focus:outline-none"
                >
                  <span>Next Step</span>
                  <ChevronRight size={14} />
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 flex items-center space-x-2 text-xs uppercase tracking-widest bg-[#E4CDD3] text-[#3F5222] hover:bg-[#DAD5E7] transition-colors rounded-sm focus:outline-none"
                >
                  <RotateCcw size={12} />
                  <span>Begin Again</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Final Statement Section (Fades in when step 6 is active or reached) */}
      <AnimatePresence>
        {activeStep === 5 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="mt-16 text-center max-w-2xl mx-auto p-8 border border-[#556F2D]/20 bg-[#F7F4EE]/90 rounded-2xl paper-card shadow-xs"
          >
            <p className="text-xl md:text-2xl text-[#3F5222] font-normal leading-relaxed">
              You cannot choose every mark that appears on your canvas.
            </p>
            <p className="text-2xl md:text-3xl text-[#556F2D] font-medium tracking-tight mt-2">
              But you can choose what you create next.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
