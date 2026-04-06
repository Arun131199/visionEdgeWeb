import { useState } from 'react';
import logo from '../assets/logo.png';
import gillLogo from '../assets/GIIL-LOGO.png'
import deloft_logo from '../assets/daloft_trans.jpg.webp'
import narah from '../assets/Asset_1.webp'
import founder_vayuratha from '../assets/founder_vayuratha.jpg'

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    company: string;
    image?: string; 
};
export function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials: Testimonial[] = [
        {
            quote: "VisionEdge completely transformed our online presence. Our lead volume has doubled since they took over our social strategy. Their team is responsive, data-driven, and truly cares about our success.",
            name: "Mohan Rishikesh M",
            designation: "Founder",
            company: "Vayuratha Private Limited",
            image: founder_vayuratha
        },
        {
            quote: "The landing page they designed converted at 8.2% - triple our old site. ROI was positive within the first month. Highly recommend for any startup.",
            name: "Dinesh",
            designation: "CEO",
            company: "Daloft Aerospace"
        },
        {
            quote: "Our Meta ads were bleeding money until VisionEdge took over. They cut our CPA by 60% and scaled us to ₹2L monthly revenue. Game changers.",
            name: "Sneha",
            designation: "CEO",
            company: "Narah"
        }
    ];

    const logos = [
        logo,
        gillLogo,
        deloft_logo,
        narah
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-[#0A0A0F]">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl text-center mb-16 text-[#1A1A2E] dark:text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Trust is Earned
                </h2>

                {/* Client Logo Marquee */}
                <div className="overflow-hidden mb-16">
                    <div className="relative">
                        {/* Gradient overlays for smooth edges */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

                        {/* Marquee Container */}
                        <div className="flex gap-12 animate-marquee whitespace-nowrap">
                            {/* First set of logos */}
                            {logos.map((logo, index) => (
                                <div
                                    key={`first-${index}`}
                                    className="shrink-0 w-32 h-20 px-4 py-3 bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl flex items-center justify-center hover:border-[#2664eb] transition-all duration-300 hover:shadow-lg"
                                >
                                    <img
                                        src={logo}
                                        alt="Client Logo"
                                        className="w-full h-full object-contain filter  hover:grayscale-1 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}

                            {logos.map((logo, index) => (
                                <div
                                    key={`second-${index}`}
                                    className="shrink-0 w-32 h-20 px-4 py-3 bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl flex items-center justify-center hover:border-[#2664eb] transition-all duration-300 hover:shadow-lg"
                                >
                                    <img
                                        src={logo}
                                        alt="Client Logo"
                                        className="w-full h-full object-contain filter  hover:grayscale-0 transition-all duration-300"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl p-8 md:p-12">
                        <svg className="w-12 h-12 text-[#2664eb] mb-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p
                            className="text-xl md:text-2xl text-[#1A1A2E] dark:text-white mb-8 leading-relaxed"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            {testimonials[currentTestimonial].quote}
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2664eb] to-[#00D2FF] flex items-center justify-center text-white text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                                {
                                    testimonials[currentTestimonial].image ? (
                                        <img
                                            src={testimonials[currentTestimonial].image}
                                            alt="founder_image"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        testimonials[currentTestimonial].name.charAt(0)
                                    )
                                }
                            </div>
                            <div>
                                <div className="text-lg text-[#1A1A2E] dark:text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                                    {testimonials[currentTestimonial].name}
                                </div>
                                <div className="text-sm text-[#5A5A7A] dark:text-[#8888A8]">
                                    {testimonials[currentTestimonial].designation}, {testimonials[currentTestimonial].company}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index
                                        ? 'bg-[#2664eb] w-8'
                                        : 'bg-[#E8E8F0] dark:bg-[#1C1C28]'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
}
