export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6">
            {/* Background Pattern */}
            <div className="absolute inset-0 dark:opacity-20 opacity-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(108, 92, 231, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-8">
                    <div>
                        <h1
                            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <div className="text-[#1A1A2E] dark:text-white">Your Digital Presence.</div>
                            <div
                                className="bg-gradient-to-r from-[#2664eb] to-[#00D2FF] dark:to-[#00D2FF] bg-clip-text text-transparent"
                            >
                                Scaled with Precision.
                            </div>
                        </h1>
                        <p className="text-lg text-[#5A5A7A] dark:text-[#8888A8] max-w-lg" style={{ fontFamily: 'var(--font-body)' }}>
                            We transform Indian SMBs into digital powerhouses through data-driven social media, high-converting web design, and performance ads that actually deliver ROI.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-[#2664eb] text-white rounded-lg hover:bg-[#5B4CD6] dark:hover:bg-[#7D6EF0] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#2664eb]/20"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Start Your Strategy
                        </a>
                        <a
                            href="#portfolio"
                            className="px-8 py-4 bg-transparent text-[#2664eb] border border-[#2664eb] rounded-lg hover:bg-[#2664eb] hover:text-white transition-all duration-300"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>

                {/* Right Content - Floating Cards */}
                <div className="relative h-[500px] hidden lg:block">
                    {/* Card 1 */}
                    <div
                        className="absolute top-0 right-0 w-[280px] p-6 bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        style={{
                            transform: 'rotate(2deg) translateY(0px)',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2664eb] to-[#00D2FF]"></div>
                            <div>
                                <div className="text-sm text-[#1A1A2E] dark:text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>VisionEdge Media</div>
                                <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">@visionedge</div>
                            </div>
                        </div>
                        <p className="text-sm text-[#1A1A2E] dark:text-white mb-3">
                            Just launched our new product! 🚀 Check out the results we achieved in just 30 days.
                        </p>
                        <div className="h-40 bg-gradient-to-br from-[#2664eb]/20 to-[#00D2FF]/20 rounded-lg"></div>
                        <div className="flex gap-4 mt-3 text-xs text-[#5A5A7A] dark:text-[#8888A8]">
                            <span>❤️ 2.4K</span>
                            <span>💬 156</span>
                            <span>🔄 892</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="absolute bottom-0 left-0 w-[260px] p-6 bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        style={{
                            transform: 'rotate(-3deg) translateY(0px)',
                            animation: 'float 6s ease-in-out infinite 2s'
                        }}
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 rounded bg-[#25D366] flex items-center justify-center text-white text-xs">✓</div>
                            <span className="text-sm text-[#1A1A2E] dark:text-white" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>Campaign Active</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-[#5A5A7A] dark:text-[#8888A8]">Reach</span>
                                <span className="text-[#1A1A2E] dark:text-white" style={{ fontWeight: 500 }}>124K</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#5A5A7A] dark:text-[#8888A8]">Engagement</span>
                                <span className="text-[#1A1A2E] dark:text-white" style={{ fontWeight: 500 }}>8.4%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-[#5A5A7A] dark:text-[#8888A8]">Conversions</span>
                                <span className="text-[#2664eb]" style={{ fontWeight: 500 }}>+342</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="absolute top-1/2 right-1/4 w-[240px] p-5 bg-[#F4F4F8] dark:bg-[#111118] border border-[#E8E8F0] dark:border-[#1C1C28] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                        style={{
                            transform: 'rotate(1deg) translateY(-50%)',
                            animation: 'float 6s ease-in-out infinite 4s'
                        }}
                    >
                        <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8] mb-2" style={{ letterSpacing: '0.08em' }}>MONTHLY GROWTH</div>
                        <div className="text-3xl text-[#1A1A2E] dark:text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>+156%</div>
                        <div className="text-xs text-[#25D366]">↗ From last month</div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
      `}</style>
        </section>
    )
}