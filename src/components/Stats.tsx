export function Stats() {
    const stats = [
        { label: '100K+ Organic Views', value: '100K+' },
        { label: '50+ Brands Grown', value: '50+' },
        { label: '5★ Average Rating', value: '5.0★' },
        { label: '1 Year Experience', value: '1 Yr' }
    ];

    return (
        <section className="bg-[#1A1A2E] dark:bg-[#0A0A0F] py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center relative">
                            {index > 0 && (
                                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[#E8E8F0]/20 dark:bg-[#1C1C28]"></div>
                            )}
                            <div
                                className="text-3xl md:text-4xl text-white mb-2"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-sm text-[#8888A8]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
