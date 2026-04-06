import { useState } from 'react';
import social_media from '../assets/social media.jpg';
import web_design from '../assets/website.png';
import video_post_production from '../assets/video-post-production.webp';
import google_meta_ads from '../assets/google_meta_ads.png'
import lauchpad from "../assets/launch_pad.jpg"
import event_craft from "../assets/event_craft.jpg";
import drone_show from '../assets/sky_show.webp'
import edit_pro from '../assets/edit_pro.jpg';
import whatsapp_add from '../assets/whatsappp_business.jpg'

export function Services() {
    const [_hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const services = [
        {
            image: lauchpad,
            title: 'LaunchPad 360',
            tagline: 'Complete Business Launch Solution',
            description: 'Complete startup essentials to launch your business professionally.',
            points: [
                'Website / Ecommerce',
                'Branding Kit',
                'Invoice & Quotation System'
            ],
            includes: ['5 Pages Website', 'Logo Design', 'Business Email', 'Hosting Setup'],
            metric: '₹19,999+',
            metricLabel: 'One-time',

            popular: false,
            ctaText: 'Launch Your Business'
        },
        {
            image: google_meta_ads,
            title: 'AdMax Pro',
            tagline: 'Performance Marketing Powerhouse',
            description: 'Performance marketing focused on ROI and conversions.',
            points: [
                'Google + Meta Ads',
                'Campaign Optimization',
                'Weekly Reports'
            ],
            includes: ['Ad Creation', 'A/B Testing', 'Audience Targeting', 'Monthly Review'],
            metric: '₹7,999/mo',
            metricLabel: 'Ads Mgmt',

            popular: true,
            ctaText: 'Start Advertising'
        },
        {
            image: social_media,
            title: 'SocialPulse',
            tagline: 'Social Media Domination',
            description: 'End-to-end social media management and growth.',
            points: [
                'Content Creation',
                'Posting & Reels',
                'Engagement'
            ],
            includes: ['15 Posts/Month', '5 Reels', 'Community Mgmt', 'Monthly Analytics'],
            metric: '₹6,999/mo',
            metricLabel: 'Social Growth',

            popular: false,
            ctaText: 'Grow Your Brand'
        },
        {
            image: video_post_production,
            title: 'YouTube Growth Engine',
            tagline: 'From Zero to Viral',
            description: 'Grow your YouTube channel with strategy and optimization.',
            points: [
                'SEO + Thumbnails',
                'Content Strategy',
                'Analytics'
            ],
            includes: ['Channel Audit', 'Keyword Research', 'Thumbnail Design', 'Competitor Analysis'],
            metric: '₹8,999/mo',
            metricLabel: 'YouTube',

            popular: false,
            ctaText: 'Boost Your Channel'
        },
        {
            image: whatsapp_add,
            title: 'WhatsApp Business Suite',
            tagline: 'Automated Customer Communication',
            description: 'Automate and scale your customer communication.',
            points: [
                'API Setup',
                'Automation Flows',
                'Broadcast Campaigns'
            ],
            includes: ['API Integration', 'Chatbot Setup', 'Template Creation', 'Analytics Dashboard'],
            metric: '₹4,999+',
            metricLabel: 'Setup',

            popular: false,
            ctaText: 'Get WhatsApp API'
        },
        {
            image: event_craft,
            title: 'EventCraft',
            tagline: 'Memorable Event Experiences',
            description: 'Professional event planning and execution.',
            points: [
                'Corporate Events',
                'Brand Launches',
                'On-ground Execution'
            ],
            includes: ['Event Planning', 'Vendor Management', 'On-site Coordination', 'Post-Event Report'],
            metric: '₹15K+',
            metricLabel: 'Per Project',

            popular: false,
            ctaText: 'Plan Your Event'
        },
        {
            image: web_design,
            title: 'TechEase',
            tagline: 'Hassle-Free IT Infrastructure',
            description: 'Complete IT and office infrastructure setup.',
            points: [
                'System Setup',
                'Networking',
                'Software Install'
            ],
            includes: ['Hardware Setup', 'Network Configuration', 'Software Installation', 'Support'],
            metric: '₹5K+',
            metricLabel: 'Setup',

            popular: false,
            ctaText: 'Get IT Support'
        },
        {
            image: drone_show,
            title: 'SkyShow',
            tagline: 'Aerial Light Show Spectacular',
            description: 'Drone-based aerial light show experiences.',
            points: [
                'Drone Shows',
                'Event Visuals',
                'Brand Promotions'
            ],
            includes: ['Choreographed Show', 'Custom Animations', 'Event Coverage', 'Safety Compliance'],
            metric: '₹1.5L+',
            metricLabel: 'Per Event',

            popular: false,
            ctaText: 'Book Drone Show'
        },
        {
            image: edit_pro,
            title: 'EditPro Studio',
            tagline: 'Professional Video Excellence',
            description: 'Professional video editing and post-production.',
            points: [
                'Editing',
                'Color Grading',
                'Motion Graphics'
            ],
            includes: ['4K Editing', 'Color Correction', 'Sound Design', 'Rapid Delivery'],
            metric: '₹1,500+',
            metricLabel: 'Per Video',

            popular: false,
            ctaText: 'Edit Your Video'
        }
    ];

    return (
        <section id="services" className="py-24 px-6 bg-white dark:bg-[#0A0A0F] relative overflow-hidden">
            {/* Animated background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2664eb]/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2664eb]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5B8DEF]/5 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2664eb] text-white text-sm font-semibold mb-4 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse absolute" />
                        Our Services
                    </div>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A2E] dark:text-white"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        What We{' '}
                        <span className="bg-gradient-to-r from-[#2664eb] to-[#5B8DEF] bg-clip-text text-transparent animate-gradient">
                            Master
                        </span>
                    </h2>
                    <p className="text-lg text-[#5A5A7A] dark:text-[#8888A8] max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to elevate your brand
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                animation: `fadeInUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) ${index * 0.1}s backwards`
                            }}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-3 left-6 z-20">
                                    <div className="px-3 py-1 bg-gradient-to-r from-[#2664eb] to-[#5B8DEF] text-white text-xs font-bold rounded-full shadow-lg">
                                        🔥 Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card glow effect */}
                            <div className={`absolute -inset-0.5  rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl group-hover:blur-2xl`} />

                            {/* Card content */}
                            <div className="relative bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">

                                {/* Image Container */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent opacity-70" />
                                    <div className="absolute inset-0 bg-[#2664eb]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Tagline Overlay */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <p className="text-white/90 text-xs">{service.tagline}</p>
                                        </div>
                                    </div>

                                    {/* Metric badge */}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-lg px-3 py-1.5 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="text-white font-bold text-lg">{service.metric}</div>
                                        <div className="text-white/80 text-xs">{service.metricLabel}</div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6">
                                    {/* Title */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-[#2664eb]/10 flex items-center justify-center group-hover:bg-[#2664eb]/20 transition-all duration-300">
                                                <svg className="w-5 h-5 text-[#2664eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <h3
                                                className="text-xl font-bold text-[#1A1A2E] dark:text-white transition-colors duration-300 group-hover:text-[#2664eb]"
                                                style={{ fontFamily: 'var(--font-heading)' }}
                                            >
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-[#6C6C8A] dark:text-[#7A7A9A] mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-[#2664eb]/30 to-transparent my-4 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2664eb] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>

                                    {/* What's Included Section */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-semibold text-[#2664eb] uppercase tracking-wider mb-2">
                                            What's Included
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.includes.map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-2 py-1 bg-[#2664eb]/5 dark:bg-[#2664eb]/10 rounded-md text-[#5A5A7A] dark:text-[#8888A8]"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-5">
                                        <h4 className="text-xs font-semibold text-[#2664eb] uppercase tracking-wider mb-2">
                                            Key Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {service.points.map((point, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-[#5A5A7A] dark:text-[#8888A8] flex items-start gap-2 group/item transition-all duration-300 hover:translate-x-1"
                                                >
                                                    <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#2664eb]/10 flex items-center justify-center mt-0.5">
                                                        <svg className="w-2.5 h-2.5 text-[#2664eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTA Button */}

                                </div>

                                {/* Hover overlay effect */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
                
                @keyframes ping-slow {
                    75%, 100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
                
                .animate-ping {
                    animation: ping-slow 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                
                .delay-1000 {
                    animation-delay: 1000ms;
                }
            `}</style>
        </section>
    );
}