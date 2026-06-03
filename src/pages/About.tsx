import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-navy py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-4 md:px-10">
          <h1 className="text-[36px] md:text-[44px] font-bold mb-4 leading-[1.1]">About RHOHF</h1>
          <p className="text-[16px] text-slate-300 max-w-[420px] mx-auto leading-[1.5]">
            We are a global non-profit organization dedicated to creating sustainable change and empowering communities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-neutral">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-slate-200 border-t-4 border-t-green shadow-sm">
              <Target className="text-green w-10 h-10 mb-5" />
              <h2 className="text-[22px] font-bold text-navy mb-3">Our Mission</h2>
              <div className="text-[14px] text-text-light leading-[1.6] space-y-3">
                <p>
                  Rehoboth Hearts of Hope Foundation is a non-profit, non-political organization established to improve the living conditions of disadvantaged individuals and communities through practical, sustainable empowerment initiatives.
                </p>
                <p>
                  We aim to provide financial assistance, educational support, and access to learning resources for children, youths, and adults in need. The Foundation promotes self-reliance by delivering skills acquisition and vocational training programs that enhance employability and create pathways to economic independence.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-slate-200 border-t-4 border-t-navy shadow-sm">
              <Eye className="text-navy w-10 h-10 mb-5" />
              <h2 className="text-[22px] font-bold text-navy mb-3">Our Vision</h2>
              <div className="text-[14px] text-text-light leading-[1.6] space-y-3">
                <p>
                  We work to remove barriers to personal and professional development by offering mentorship, scholarships, and career guidance. We prioritize empowering women and girls through education and training that advance gender equality, while supporting individuals with special educational needs through inclusive interventions.
                </p>
                <p>
                  Through community-based awareness programs on health, sustainability, and positive social values, we contribute to poverty reduction, improved access to education, and the development of inclusive, resilient, and self-sustaining communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="container mx-auto px-4 md:px-10">
          <Heart className="text-green w-12 h-12 mx-auto mb-4" />
          <h2 className="text-[32px] font-bold text-navy mb-4">Join Our Journey</h2>
          <p className="text-[16px] text-text-light max-w-2xl mx-auto mb-8 leading-[1.5]">
            Our work is only possible through the support of generous donors, dedicated volunteers, and committed partners.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/donate" className="bg-green hover:bg-green-hover text-white px-7 py-3.5 rounded font-bold text-[14px] transition-colors">
              Donate Now
            </Link>
            <Link to="/get-involved" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-7 py-3.5 rounded font-bold text-[14px] transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
