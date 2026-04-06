import { useState } from 'react';

export function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    const plans = [
        {
            name: 'Starter',
            monthlyPrice: 8000,
            yearlyPrice: 76800,
            features: [
                '8 social media posts/month',
                '1 landing page design',
                'Basic Meta ads setup',
                'Monthly analytics report',
                'Email support'
            ],
            recommended: false
        },
        {
            name: 'Growth',
            monthlyPrice: 25000,
            yearlyPrice: 240000,
            features: [
                '20 social media posts/month',
                '3 page website + blog',
                'Meta + Google Ads management',
                'Video editing (4 videos/month)',
                'Weekly strategy calls',
                'Priority support'
            ],
            recommended: true
        },
        {
            name: 'Scale',
            monthlyPrice: 60000,
            yearlyPrice: 576000,
            features: [
                'Unlimited social content',
                'Full website + e-commerce',
                'Multi-channel ad campaigns',
                'Professional video production',
                'Dedicated account manager',
                'Custom analytics dashboard',
                '24/7 support'
            ],
            recommended: false,
            custom: true
        }
    ];

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <section id="pricing" className="py-24 px-6 bg-[#F4F4F8] dark:bg-[#0A0A0F]">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl text-center mb-4 text-[#1A1A2E] dark:text-white"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Scale Your Success
                </h2>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-sm ${!isYearly ? 'text-[#1A1A2E] dark:text-white' : 'text-[#5A5A7A] dark:text-[#8888A8]'}`} style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                        Monthly
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className="relative w-16 h-8 bg-[#E8E8F0] dark:bg-[#1C1C28] rounded-full transition-colors duration-300"
                        style={{ backgroundColor: isYearly ? '#2664eb' : '' }}
                    >
                        <div
                            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-8' : ''
                                }`}
                        />
                    </button>
                    <div className="flex items-center gap-2">
                        <span className={`text-sm ${isYearly ? 'text-[#1A1A2E] dark:text-white' : 'text-[#5A5A7A] dark:text-[#8888A8]'}`} style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                            Yearly
                        </span>
                        {isYearly && (
                            <span className="text-xs bg-[#2664eb] text-white px-2 py-1 rounded-full" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                                -20%
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 bg-white dark:bg-[#111118] rounded-2xl transition-all duration-300 hover:-translate-y-2 ${plan.recommended
                                    ? 'border-2 border-[#2664eb] shadow-xl shadow-[#2664eb]/20'
                                    : 'border border-[#E8E8F0] dark:border-[#1C1C28]'
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2664eb] text-white text-xs rounded-full" style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.08em' }}>
                                    RECOMMENDED
                                </div>
                            )}

                            <h3
                                className="text-2xl mb-2 text-[#1A1A2E] dark:text-white"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {plan.name}
                            </h3>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className="text-4xl text-[#1A1A2E] dark:text-white"
                                        style={{ fontFamily: 'var(--font-heading)' }}
                                    >
                                        {plan.custom ? '' : formatPrice(isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice)}
                                    </span>
                                    {!plan.custom && (
                                        <span className="text-sm text-[#5A5A7A] dark:text-[#8888A8]">/month</span>
                                    )}
                                    {plan.custom && (
                                        <span className="text-2xl text-[#1A1A2E] dark:text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                                            Custom
                                        </span>
                                    )}
                                </div>
                                {isYearly && !plan.custom && (
                                    <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8] mt-1">
                                        Billed {formatPrice(plan.yearlyPrice)} yearly
                                    </div>
                                )}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-2 text-sm text-[#5A5A7A] dark:text-[#8888A8]"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        <svg className="w-5 h-5 text-[#2664eb] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`block w-full py-3 text-center rounded-lg transition-all duration-300 ${plan.recommended
                                        ? 'bg-[#2664eb] text-white hover:bg-[#5B4CD6] dark:hover:bg-[#7D6EF0]'
                                        : 'bg-transparent text-[#2664eb] border border-[#2664eb] hover:bg-[#2664eb] hover:text-white'
                                    }`}
                                style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
                            >
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
