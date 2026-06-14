import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, BookOpen, Globe, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-neutral py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[44px] font-bold text-navy leading-[1.1] mb-4"
              >
                Empowering Communities, Transforming Lives.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[16px] text-text-light mb-6 max-w-[420px] leading-[1.5]"
              >
                We are dedicated to sustainable development, health equity, and educational empowerment across marginalized regions.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/programs" 
                  className="bg-green hover:bg-green-hover text-white px-7 py-3.5 rounded font-bold text-[14px] transition-colors"
                >
                  Our Initiatives
                </Link>

              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full h-[300px] md:h-[400px] bg-slate-300 rounded-xl relative overflow-hidden"
            >
              <img 
                src="https://i.ibb.co/fRYq4rC/Whats-App-Image-2023-11-21-at-19-08-55-4.jpg" 
                alt="RHOHF Initiative" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-200">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]">
            {[
              { number: "150k+", label: "Lives Impacted" },
              { number: "42", label: "Projects Completed" },
              { number: "12", label: "Partner NGOs" },
              { number: "$2.4M", label: "Donations Managed" }
            ].map((stat, i) => (
              <div key={i} className="bg-white py-8 flex flex-col items-center justify-center">
                <span className="text-[28px] font-extrabold text-green leading-none mb-1">{stat.number}</span>
                <span className="text-[11px] uppercase tracking-[1px] text-text-light font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-[22px] text-navy font-bold mb-8 flex items-center gap-2.5 after:content-[''] after:flex-grow after:h-[1px] after:bg-slate-200">
            Our Core Focus Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: "Health & Wellness",
                desc: "Providing accessible medical care and health education to remote villages and urban slums.",
                color: "bg-green"
              },
              {
                icon: BookOpen,
                title: "Youth Education",
                desc: "Scholarships and vocational training programs for underprivileged students and orphans.",
                color: "bg-navy"
              },
              {
                icon: Users,
                title: "Women's Empowerment",
                desc: "Small business micro-loans and leadership workshops for local women entrepreneurs.",
                color: "bg-green"
              }
            ].map((program, i) => (
              <div key={i} className="border border-slate-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <div className={`w-8 h-8 ${program.color} rounded-md mb-3 flex items-center justify-center text-white`}>
                  <program.icon size={18} />
                </div>
                <h3 className="text-[16px] text-navy font-bold mb-2">{program.title}</h3>
                <p className="text-[13px] text-text-light leading-[1.4]">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-20 bg-neutral">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[400px]">
              <img 
                src="https://i.ibb.co/kgSRfQw5/2.png" 
                alt="Children looking at a device together" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-[22px] text-navy font-bold mb-4 flex items-center gap-2.5 after:content-[''] after:flex-grow after:h-[1px] after:bg-slate-200">
                Catalysts for Sustainable Change
              </h2>
              <p className="text-[14px] text-text-light mb-6 leading-[1.6]">
                Founded on the belief that every individual deserves a chance to thrive, we work tirelessly to bridge the gap between potential and opportunity. Our holistic approach addresses the root causes of poverty and inequality.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Community-led development initiatives",
                  "Transparent and accountable operations",
                  "Long-term sustainable impact focus"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green shrink-0 mt-0.5" size={16} />
                    <span className="text-[14px] text-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-[14px] text-navy font-bold hover:text-green transition-colors group"
              >
                Discover Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Stories Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="text-[22px] text-navy font-bold mb-8 flex items-center gap-2.5 after:content-[''] after:flex-grow after:h-[1px] after:bg-slate-200">
            Voices from the Community
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The new school in our village has given my children a chance at a future I could only dream of. Education is changing everything for us.",
                author: "Sarah M.",
                role: "Community Member",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=2070&auto=format&fit=crop"
              },
              {
                quote: "Thanks to the clean water initiative, our community no longer suffers from waterborne diseases. We are healthier and stronger.",
                author: "David K.",
                role: "Local Leader",
                image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2070&auto=format&fit=crop"
              },
              {
                quote: "The agricultural training provided by RHOHF helped me double my crop yield. I can now provide for my family and send my kids to school.",
                author: "Elena R.",
                role: "Farmer & Beneficiary",
                image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=2069&auto=format&fit=crop"
              }
            ].map((testimonial, i) => (
              <div key={i} className="border border-slate-200 p-6 rounded-lg">
                <p className="text-[14px] text-text-light italic mb-6 leading-[1.6]">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[14px] text-navy leading-tight">{testimonial.author}</h4>
                    <p className="text-[12px] text-text-light">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <h2 className="text-[32px] font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-[16px] text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you choose to donate, volunteer, or partner with us, your contribution helps build a better world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/donate" 
              className="bg-green hover:bg-green-hover text-white px-7 py-3.5 rounded font-bold text-[14px] transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              to="/get-involved" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-7 py-3.5 rounded font-bold text-[14px] transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
