import { Facebook, Twitter, Linkedin, Calendar, ArrowRight } from "lucide-react";

export function News() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://rhohf.org/news';

  const articles = [
    {
      id: 1,
      title: "New Clean Water Initiative Launched in Rural Kenya",
      excerpt: "Today, RHOHF officially inaugurated three new solar-powered water purification systems, bringing clean drinking water to over 5,000 residents.",
      date: "April 18, 2026",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
      category: "Health & Wellness"
    },
    {
      id: 2,
      title: "Annual Education Scholarship Drive Exceeds Goal",
      excerpt: "Thanks to generous donors from around the globe, we have surpassed our $500,000 goal to fund university scholarships for underprivileged youth.",
      date: "April 10, 2026",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
      category: "Youth Education"
    },
    {
      id: 3,
      title: "Women's Micro-Finance Program Expands to Southeast Asia",
      excerpt: "Building on the success of our African pilot programs, we are launching new micro-loan facilities to support women entrepreneurs in three new countries.",
      date: "March 28, 2026",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      category: "Women's Empowerment"
    }
  ];

  const shareLinks = (title: string, url: string) => ({
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-navy py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-4 md:px-10">
          <h1 className="text-[36px] md:text-[44px] font-bold mb-4 leading-[1.1]">News & Updates</h1>
          <p className="text-[16px] text-slate-300 max-w-[420px] mx-auto leading-[1.5]">
            Stay informed about our latest projects, community stories, and the global impact of your support.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-20 bg-neutral">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <div className="flex flex-col gap-8">
            {articles.map((article) => {
              const links = shareLinks(article.title, `${currentUrl}#article-${article.id}`);
              
              return (
                <article key={article.id} id={`article-${article.id}`} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row transition-shadow hover:shadow-md">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-green text-white text-[11px] uppercase tracking-[1px] font-bold px-3 py-1 rounded">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 md:w-3/5 flex flex-col">
                    <div className="flex items-center gap-2 text-text-light text-[12px] font-semibold mb-3">
                      <Calendar size={14} />
                      <time>{article.date}</time>
                    </div>
                    
                    <h2 className="text-[22px] font-bold text-navy mb-3 leading-snug">
                      {article.title}
                    </h2>
                    
                    <p className="text-[14px] text-text-light leading-[1.6] mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <a href="#" className="inline-flex items-center gap-2 text-[14px] text-green font-bold hover:text-navy transition-colors group">
                        Read Full Story
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] uppercase tracking-[1px] text-text-light font-bold mr-1">Share</span>
                        <a 
                          href={links.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded bg-slate-100 text-navy flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook size={14} />
                        </a>
                        <a 
                          href={links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded bg-slate-100 text-navy flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter size={14} />
                        </a>
                        <a 
                          href={links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded bg-slate-100 text-navy flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
