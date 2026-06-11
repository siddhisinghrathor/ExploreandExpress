import { useState } from "react";
import { PalmLeaf } from "./BotanicalDecor";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "session",
    reflection: "",
    feelingState: "",
    newsletter: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-6 relative">
      <PalmLeaf className="-top-12 -left-12 opacity-25 rotate-12" size={180} side="left" />
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
          Begin Your Journey
        </span>
        <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
          Connect with Us
        </h1>
        <p className="text-lg text-[#374038]/85 mt-4 leading-relaxed font-light">
          Whether you want to attend a small group workshop, book an individual inquiry session, or just ask a question—we invite you to start a thoughtful conversation with yourself first.
        </p>
        <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-6" />
      </div>

      {submitted ? (
        <div className="max-w-xl mx-auto text-center p-8 bg-[#F7F4EE]/90 border border-[#556F2D]/20 rounded-2xl paper-card shadow-xs space-y-6">
          <span className="text-3xl text-[#556F2D]">✧</span>
          <h3 className="text-2xl font-medium text-[#3F5222]">Thank you for sharing.</h3>
          <p className="text-sm text-[#374038]/85 leading-relaxed max-w-md mx-auto">
            Your message has been received with care. Pallavi will review your thoughts and reach out to you within a few days to coordinate our next steps.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs uppercase tracking-widest text-[#556F2D] font-bold hover:text-[#3F5222] focus:outline-none border-b border-[#A8B08D]/40 pb-0.5"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8 bg-[#F7F4EE]/90 p-8 border border-[#A8B08D]/30 rounded-2xl paper-card shadow-2xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#374038]/70 font-semibold block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-sm p-3 text-sm text-[#374038] focus:outline-none focus:border-[#556F2D] transition-colors"
                    placeholder="E.g., Ananya Sharma"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#374038]/70 font-semibold block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-sm p-3 text-sm text-[#374038] focus:outline-none focus:border-[#556F2D] transition-colors"
                    placeholder="E.g., name@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#374038]/70 font-semibold block">
                  How would you like to engage?
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "session", label: "Individual Art Session" },
                    { id: "group", label: "Collaborative Workshop" },
                    { id: "inquiry", label: "General Inquiry / Hello" }
                  ].map((option) => (
                    <label 
                      key={option.id}
                      className={`border p-3 rounded-sm flex items-center justify-center text-xs uppercase tracking-wider cursor-pointer text-center transition-all ${
                        formData.interest === option.id
                          ? "bg-[#556F2D] text-[#F7F4EE] border-[#556F2D] font-medium"
                          : "bg-[#F7F4EE] text-[#374038]/80 border-[#A8B08D]/40 hover:bg-[#A8B08D]/10"
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={option.id}
                        checked={formData.interest === option.id}
                        onChange={() => setFormData({ ...formData, interest: option.id })}
                        className="sr-only"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="reflection" className="text-xs uppercase tracking-widest text-[#374038]/70 font-semibold block">
                  What part of your life story are you hoping to pause and reflect on?
                </label>
                <textarea
                  id="reflection"
                  rows={4}
                  value={formData.reflection}
                  onChange={(e) => setFormData({ ...formData, reflection: e.target.value })}
                  className="w-full bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-sm p-3 text-sm text-[#374038] focus:outline-none focus:border-[#556F2D] transition-colors resize-none leading-relaxed"
                  placeholder="Take your time. Feel free to describe any expectations, relationships, or changes you are navigating..."
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="feelingState" className="text-xs uppercase tracking-widest text-[#374038]/70 font-semibold block">
                  If your current emotional space were a color, texture, or shape, what would it be?
                </label>
                <input
                  type="text"
                  id="feelingState"
                  value={formData.feelingState}
                  onChange={(e) => setFormData({ ...formData, feelingState: e.target.value })}
                  className="w-full bg-[#F7F4EE] border border-[#A8B08D]/40 rounded-sm p-3 text-sm text-[#374038] focus:outline-none focus:border-[#556F2D] transition-colors"
                  placeholder="E.g., A rough charcoal line, a faded lavender smudge, a circle that isn't quite closed..."
                />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="h-4 w-4 rounded border-[#A8B08D]/40 text-[#556F2D] focus:ring-[#556F2D]"
                />
                <label htmlFor="newsletter" className="text-xs text-[#374038]/80 leading-none cursor-pointer">
                  Subscribe to monthly reflection prompts and studio journals.
                </label>
              </div>

              <div className="pt-4 border-t border-[#A8B08D]/20">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm font-semibold focus:outline-none shadow-2xs"
                >
                  Send Reflection Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact info */}
          <div className="lg:col-span-4 space-y-8 lg:pl-4">
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Studio Space</h3>
              <p className="text-sm text-[#374038]/90 leading-relaxed font-light">
                Explore &amp; Express Studio<br />
                Koregaon Park, Pune, MH, India<br />
                <span className="text-[#374038]/60 mt-1 block">In-person workshops held monthly. Virtual sessions held globally.</span>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Direct Inquiry</h3>
              <p className="text-sm text-[#374038]/90 font-light">
                Email: <a href="mailto:hello@exploreandexpress.in" className="hover:text-[#556F2D] transition-colors border-b border-[#A8B08D]/40 pb-0.5">hello@exploreandexpress.in</a>
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Academic Correspondence</h3>
              <p className="text-sm text-[#374038]/90 font-light">
                For research collaborations, speaking invitations, or academic inquiries, please email <a href="mailto:p.jadhav@psychology-research.edu" className="hover:text-[#556F2D] transition-colors border-b border-[#A8B08D]/40 pb-0.5">p.jadhav@research.edu</a>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest text-[#556F2D] font-bold">Social Reflection</h3>
              <div className="flex flex-col space-y-1.5 text-sm text-[#374038]/90 font-light">
                <a href="#" className="hover:text-[#556F2D] transition-colors flex items-center space-x-1.5">
                  <span>✧</span> <span>Instagram — Studio Journal</span>
                </a>
                <a href="#" className="hover:text-[#556F2D] transition-colors flex items-center space-x-1.5">
                  <span>✧</span> <span>Substack — Written Reflections</span>
                </a>
                <a href="#" className="hover:text-[#556F2D] transition-colors flex items-center space-x-1.5">
                  <span>✧</span> <span>ResearchGate — Publications</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[#A8B08D]/20">
              <p className="text-xs text-[#374038]/60 leading-relaxed italic">
                &ldquo;There is no goal to produce perfect art. Only the goal to sit with your truth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
