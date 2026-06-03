import { Heart } from "lucide-react";

export function Donate() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-navy py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-4 md:px-10">
          <Heart className="text-green w-12 h-12 mx-auto mb-4" />
          <h1 className="text-[36px] md:text-[44px] font-bold mb-4 leading-[1.1]">Make a Donation</h1>
          <p className="text-[16px] text-slate-300 max-w-[420px] mx-auto leading-[1.5]">
            Your generous contribution helps us continue our mission and create lasting impact in communities worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-10 max-w-3xl">
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-[22px] font-bold text-navy mb-6 text-center flex items-center gap-2.5 after:content-[''] after:flex-grow after:h-[1px] after:bg-slate-200 before:content-[''] before:flex-grow before:h-[1px] before:bg-slate-200">
              Choose Your Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["$25", "$50", "$100", "Other"].map((amount, i) => (
                <button 
                  key={i}
                  className={`py-3 rounded font-bold text-[14px] transition-colors ${
                    i === 1 
                      ? "bg-green text-white shadow-sm" 
                      : "bg-white text-navy border border-slate-200 hover:border-green hover:text-green"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-semibold text-navy mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:ring-1 focus:ring-green focus:border-green outline-none text-[14px]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-navy mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:ring-1 focus:ring-green focus:border-green outline-none text-[14px]" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-navy mb-1.5">Email Address</label>
                <input type="email" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:ring-1 focus:ring-green focus:border-green outline-none text-[14px]" placeholder="john@example.com" />
              </div>
              
              <div className="pt-4">
                <button type="button" className="w-full bg-green hover:bg-green-hover text-white py-3.5 rounded font-bold text-[14px] transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Heart size={18} />
                  Donate $50 Now
                </button>
              </div>
              <p className="text-center text-[12px] text-text-light mt-4">
                Secure payment processing. You will receive an email receipt for your tax records.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
