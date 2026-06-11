import { useState } from "react";
import { PalmLeaf } from "./BotanicalDecor";

interface Post {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[];
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    {
      id: 1,
      title: "The Colors of Memory: How We Paint Our Past",
      category: "Psychological Theory",
      date: "May 24, 2026",
      excerpt: "Why do we associate childhood memories with specific tones? An inquiry into color psychology and narrative memory retrieval.",
      content: [
        "In our research, we frequently observe that when people are asked to describe their early years, their descriptions are filled with sensory and color associations. A childhood home might not be described by its dimensions, but by 'the heavy brown shadow of the wooden cabinet' or 'the soft, safety-inducing sage green of my grandmother's garden.'",
        "Color is not just a visual stimulus; it is a neurological link to memory and emotion. When we experience an event, our amygdala and hippocampus register the sensory inputs in tandem with the emotional charge. Under stress, verbal articulation is often suppressed, but color perception remains highly active.",
        "This is why, in art-based reflection, choosing a color is often the first step to unpacking a locked memory. When you select a muted blue or a primary green, your brain is accessing a narrative structure that words cannot yet reach. We are not painting what we see; we are painting what we felt.",
        "Next time you sit with a journal, do not begin by writing. Begin by placing a color on the corner of the page. Let the color be the prompt. Observe what thoughts, events, or faces begin to crystallize around it."
      ]
    },
    {
      id: 2,
      title: "Why We Sketch What We Cannot Say: The Pre-verbal Mind",
      category: "Creative Expression",
      date: "April 12, 2026",
      excerpt: "Some feelings exist in our bodies before we have language to name them. Exploring how drawing serves as a somatic bridge.",
      content: [
        "Human language is a relatively modern invention in our evolutionary timeline. Long before we had nouns, verbs, and syntax, we had somatic sensations, imagery, and gestures. When we experience emotional overwhelm, stress, or trauma, our brains temporarily revert to these pre-verbal processing systems.",
        "In psychological terms, this is why talking about a difficult experience can sometimes feel like hitting a wall. The words feel dry, disconnected, or entirely absent. This is not a lack of cooperation; it is a neurological limit.",
        "Art acts as a translator for the pre-verbal mind. By placing a brush in your hand and allowing it to move without predefined guidelines, you bypass the cognitive filter of the prefrontal cortex. The shapes that emerge—sharp angles, soft loops, dark concentrated circles—are representations of somatic states.",
        "By externalizing these sensations onto a physical canvas, we gain a crucial sense of psychological distance. We can look at our grief, our confusion, or our hope from across the room. We can study it, name it, and eventually, integrate it."
      ]
    },
    {
      id: 3,
      title: "The Marks Others Leave: Defining Relational Boundaries",
      category: "Self-Reflection",
      date: "March 18, 2026",
      excerpt: "Understanding the difference between the expectations we inherit and the choices we actively make.",
      content: [
        "We are social beings, which means our identity is built through contact. From the moment we are born, our parents, teachers, and partners leave impressions on us. They tell us who we are, what we should value, and what a successful life looks like.",
        "In our Collaborative Canvas workshops, we refer to these as 'inherited marks.' Many of these marks are beautiful: a mentor's belief in our capability, a partner's warmth, a parent's cultural heritage. But some marks are heavy, restrictive, or painful.",
        "The difficulty arises when we mistake these inherited marks for our own handiwork. We spend years living a life that someone else outlined for us, wondering why we feel hollow or misaligned.",
        "Self-discovery is not about erasing the marks left by others—that is impossible. Rather, it is about learning to recognize them. When you can look at your canvas and say, 'This mark belongs to my father's fear, and this mark belongs to society's timeline,' you free yourself to choose the next brushstroke."
      ]
    }
  ];

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-6 relative">
      <PalmLeaf className="-top-8 -right-8 opacity-20 -rotate-45" size={180} side="right" />

      {selectedPost ? (
        /* Single Post View */
        <div className="space-y-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-xs uppercase tracking-widest text-[#556F2D] hover:text-[#3F5222] font-bold focus:outline-none flex items-center space-x-1"
          >
            <span>&larr; Back to Journal List</span>
          </button>

          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold bg-[#F7F4EE] px-2 py-0.5 border border-[#A8B08D]/30 rounded-sm">
              {selectedPost.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
              {selectedPost.title}
            </h1>
            <p className="text-xs text-[#374038]/50 uppercase tracking-widest">
              Published on {selectedPost.date} • By Pallavi Jadhav
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#A8B08D]/20 my-6" />

          <div className="space-y-6 text-base md:text-lg text-[#374038]/90 leading-relaxed font-light">
            {selectedPost.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-12 border-t border-[#A8B08D]/20 mt-12 flex justify-between items-center">
            <p className="text-xs text-[#374038]/60 italic">
              Thank you for reading this reflection. Feel free to copy these prompts into your personal notebook.
            </p>
            <button 
              onClick={() => setSelectedPost(null)}
              className="px-4 py-2 text-xs uppercase tracking-widest bg-[#556F2D] text-[#F7F4EE] hover:bg-[#3F5222] transition-colors rounded-sm"
            >
              Back to Journal
            </button>
          </div>
        </div>
      ) : (
        /* Blog Index View */
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm uppercase tracking-[0.2em] text-[#556F2D] font-bold block mb-3">
              The Journal
            </span>
            <h1 className="text-4xl md:text-5xl font-normal text-[#3F5222] tracking-tight leading-tight">
              Essays on Art & Psychology
            </h1>
            <p className="text-lg text-[#374038]/85 mt-4 leading-relaxed font-light">
              Periodic writings exploring self-observation, creative theory, research highlights, and prompts for your personal reflection.
            </p>
            <div className="w-12 h-[1px] bg-[#A8B08D] mx-auto mt-6" />
          </div>

          {/* Posts List */}
          <div className="space-y-12">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="p-8 bg-[#F7F4EE]/90 border border-[#A8B08D]/30 rounded-2xl paper-card shadow-2xs hover:shadow-xs transition-all duration-300 group cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#556F2D] font-bold bg-[#F7F4EE] px-2 py-0.5 border border-[#A8B08D]/25 rounded-sm">
                      {post.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#374038]/50">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-[#3F5222] tracking-tight group-hover:text-[#556F2D] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm md:text-base text-[#374038]/85 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center space-x-1 text-xs uppercase tracking-widest text-[#556F2D] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Read Reflection</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
