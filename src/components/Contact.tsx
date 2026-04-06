import axios from "axios";
import { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        service: '',
        preferred_time: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new URLSearchParams();

            formData.append("name", formState.name);
            formData.append("email", formState.email);
            formData.append("mobile", formState.phone);
            formData.append("message", formState.message);
            formData.append("Service Interest", formState.service);
            formData.append("Preferred Time", formState.preferred_time);

            await axios.post(
                "https://script.google.com/macros/s/AKfycbyv6RlOaGE0SyVBLVB3bNr9QWp5ZvVriKdgRX11W3TnZW-jf3wdsTsjE4FHLFX1EaTzTA/exec",
                formData
            );

            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormState({ name: '', phone: '', email: '', message: '', service: '', preferred_time: '' });
                setIsLoading(false);
            }, 3000);

        } catch (error) {
            console.error("Error:", error);
            setIsLoading(false);
            alert("Something went wrong. Please try again.");
        }
    };

    const services = [
        { value: "", label: "Select a Service", icon: "🎯" },
        { value: "Social Media", label: "Social Media Marketing", icon: "📱", description: "Instagram, LinkedIn, Facebook" },
        { value: "Web Design", label: "Web Design & Development", icon: "🎨", description: "Custom websites, landing pages" },
        { value: "Video Production", label: "Video Post-Production", icon: "🎬", description: "Editing, motion graphics, VFX" },
        { value: "Meta Ads", label: "Meta Advertising", icon: "📊", description: "Facebook & Instagram ads" },
        { value: "Google Ads", label: "Google Advertising", icon: "🔍", description: "Search, display, YouTube" },
    ];

    

    return (
        <section id="contact" className="py-24 px-6 bg-white dark:bg-[#0A0A0F] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2664eb]/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl text-center mb-6 text-[#1A1A2E] dark:text-white font-bold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Elevate Your{' '}
                    <span className="bg-gradient-to-r from-[#2664eb] to-[#5B8DEF] bg-clip-text text-transparent">
                        Brand
                    </span>
                </h2>
                <p className="text-center text-[#5A5A7A] dark:text-[#8888A8] mb-16 max-w-2xl mx-auto">
                    Ready to scale your digital presence? Let's create something extraordinary together.
                </p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-[#F4F4F8] to-white dark:from-[#111118] dark:to-[#0A0A0F] rounded-2xl p-8 border border-[#E8E8F0] dark:border-[#1C1C28]">
                            <h3
                                className="text-2xl mb-4 text-[#1A1A2E] dark:text-white font-bold"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Let's Talk Growth
                            </h3>
                            <p className="text-[#5A5A7A] dark:text-[#8888A8] leading-relaxed">
                                Schedule a free 30-minute strategy call and discover how we can transform your brand's digital presence.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Location */}
                            <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#F4F4F8] dark:hover:bg-[#111118] cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-[#2664eb]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5 text-[#2664eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-[#5A5A7A] dark:text-[#8888A8] mb-1 font-medium">Location</div>
                                    <div className="text-[#1A1A2E] dark:text-white font-semibold">
                                        Chennai, Tamil Nadu, India
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#F4F4F8] dark:hover:bg-[#111118] cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-[#2664eb]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5 text-[#2664eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-[#5A5A7A] dark:text-[#8888A8] mb-1 font-medium">Email</div>
                                    <a
                                        href="mailto:mithran@visionedge.online"
                                        className="text-[#2664eb] hover:underline font-semibold"
                                    >
                                        mithran@visionedge.online
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-[#F4F4F8] dark:hover:bg-[#111118] cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-[#2664eb]/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-5 h-5 text-[#2664eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm text-[#5A5A7A] dark:text-[#8888A8] mb-1 font-medium">Phone</div>
                                    <a
                                        href="tel:+919876543210"
                                        className="text-[#2664eb] hover:underline font-semibold"
                                    >
                                        +91 95001 91182
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F8] dark:bg-[#111118] rounded-full">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">24hr Response</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F8] dark:bg-[#111118] rounded-full">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">Free Consultation</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F8] dark:bg-[#111118] rounded-full">
                                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">No Obligation</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-gradient-to-br from-[#F4F4F8] to-white dark:from-[#111118] dark:to-[#0A0A0F] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl p-8 shadow-xl">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-125 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl mb-3 text-[#1A1A2E] dark:text-white font-bold">
                                    Message Sent! 🎉
                                </h3>
                                <p className="text-[#5A5A7A] dark:text-[#8888A8]">
                                    Thanks for reaching out! We'll get back to you within 24 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="peer w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-[#0A0A0F] text-sm text-[#5A5A7A] dark:text-[#8888A8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2664eb]">
                                        Full Name
                                    </label>
                                </div>

                                {/* Phone */}
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                        className="peer w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-[#0A0A0F] text-sm text-[#5A5A7A] dark:text-[#8888A8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2664eb]">
                                        Phone Number
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="peer w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-[#0A0A0F] text-sm text-[#5A5A7A] dark:text-[#8888A8] transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2664eb]">
                                        Email Address
                                    </label>
                                </div>

                                {/* Enhanced Service Dropdown */}
                                <div className="relative">
                                    <select
                                        id="service"
                                        value={formState.service}
                                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                        onFocus={() => setFocusedField('service')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                        required
                                    >
                                        {services.map((service, idx) => (
                                            <option key={idx} value={service.value} className="py-2">
                                                {service.icon} {service.label}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-[#2664eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Enhanced Time Selection */}
                                <div className="relative">
                                    <label className="block text-sm font-medium text-[#5A5A7A] dark:text-[#8888A8] mb-2">
                                        Preferred Time
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="time"
                                            id="preferred_time"
                                            name="preferred_time"
                                            value={formState.preferred_time}
                                            onChange={(e) => setFormState({ ...formState, preferred_time: e.target.value })}
                                            className="w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300"
                                            required
                                            step="900" // 15-minute intervals
                                            min="10:00"
                                            max="19:30"
                                        />
                                        
                                    </div>
                                    <p className="text-xs text-[#5A5A7A] dark:text-[#8888A8] mt-1">
                                        Available time: 10:00 AM to 7:30 PM (IST)
                                    </p>
                                </div>

                                {/* Message */}
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows={4}
                                        className="peer w-full px-4 py-3 bg-white dark:bg-[#0A0A0F] border-2 border-[#E8E8F0] dark:border-[#1C1C28] rounded-xl text-[#1A1A2E] dark:text-white focus:border-[#2664eb] focus:outline-none transition-all duration-300 resize-none"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="absolute left-4 -top-2.5 px-1 bg-white dark:bg-[#0A0A0F] text-sm text-[#5A5A7A] dark:text-[#8888A8] transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[#2664eb]">
                                        Tell us about your project
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3.5 bg-gradient-to-r from-[#2664eb] to-[#5B8DEF] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2664eb]/25 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </div>
                                    ) : (
                                        'Schedule Free Consultation →'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}