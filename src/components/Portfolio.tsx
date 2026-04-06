import { useState } from 'react';
import deloft from '../assets/deloft.png'
import vayuratha from '../assets/reel_snap.png'

type PortfolioItem = {
    category: string;
    title: string;
    description: string;
    image: string;
    link?: string;
    client: string;
    year: string;
    metrics: string;
};
export function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
    const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

    const portfolioItems = [
        {
            category: 'Web',
            title: 'Daloft Aerospace Site',
            description: 'A specialized corporate solution focused on lead conversion and professional brand positioning.',
            image: deloft,
            link: 'https://daloftaerospace.in/',
            client: 'Drone Manufacturer',
            year: '2024',
            metrics: '200% increase in sales'
        },


        {
            category: 'Video',
            title: 'Viral Education Campaign',
            description: 'Targeted storytelling for aerospace students that reached over 100k organic views.',
            image: vayuratha,
            client: 'Vayuratha Private Limited',
            year: '2023',
            metrics: '100k+ views',
            link:"https://www.instagram.com/vayuratha_pvt.ltd/"
        },


        {
            category: 'Ads',
            title: 'Google Ads Campaign',
            description: 'Search and display campaigns for local business',
            image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NTI3OTM5NHww&ixlib=rb-4.1.0&q=80&w=1080',
            client: 'Local Service Provider',
            year: '2024',
            metrics: '150% ROAS'
        }
    ];

    const filters = [
        { name: 'All', count: portfolioItems.length },
        { name: 'Web', count: portfolioItems.filter(item => item.category === 'Web').length },
        { name: 'Social', count: portfolioItems.filter(item => item.category === 'Social').length },
        { name: 'Video', count: portfolioItems.filter(item => item.category === 'Video').length },
        { name: 'Ads', count: portfolioItems.filter(item => item.category === 'Ads').length }
    ];

    const filteredItems = activeFilter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const handleImageError = (index:number) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    return (
        <>
            <section id="portfolio" className="py-24 px-6 bg-[#F4F4F8] dark:bg-[#0A0A0F] relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2664eb]/5 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2664eb]/10 text-[#2664eb] text-sm font-semibold mb-4">
                            <span className="w-2 h-2 rounded-full bg-[#2664eb] animate-pulse" />
                            OUR PORTFOLIO
                        </div>

                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1A1A2E] dark:text-white"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            The Results{' '}
                            <span className="bg-gradient-to-r from-[#2664eb] to-[#5B8DEF] bg-clip-text text-transparent">
                                Speak
                            </span>
                        </h2>

                        <p className="text-lg text-[#5A5A7A] dark:text-[#8888A8] max-w-2xl mx-auto">
                            Explore our latest work and see how we've helped brands achieve their goals
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {filters.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`group relative px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${activeFilter === filter.name
                                    ? 'bg-[#2664eb] text-white shadow-lg shadow-[#2664eb]/25'
                                    : 'bg-white dark:bg-[#111118] text-[#5A5A7A] dark:text-[#8888A8] hover:bg-[#2664eb]/10'
                                    }`}
                            >
                                <span className="relative z-10">{filter.name}</span>
                                <span className={`ml-2 text-xs ${activeFilter === filter.name
                                    ? 'text-white/80'
                                    : 'text-[#2664eb]'
                                    }`}>
                                    ({filter.count})
                                </span>

                                {activeFilter !== filter.name && (
                                    <div className="absolute inset-0 rounded-full bg-[#2664eb]/0 group-hover:bg-[#2664eb]/5 transition-all duration-300" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedItem(item)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.05}s backwards`
                                }}
                            >
                                {/* Card Glow */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2664eb]/20 to-[#5B8DEF]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

                                {/* Card Content */}
                                <div className="relative bg-white dark:bg-[#111118] rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                                        {!imageErrors[index] ? (
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 bg-cover"
                                                loading="lazy"
                                                onError={() => handleImageError(index)}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-center">
                                                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <p className="text-sm text-gray-500">Image preview</p>
                                                </div>
                                            </div>
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#2664eb] text-white text-xs font-semibold rounded-lg shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            {item.category}
                                        </div>

                                        {/* View Button */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <button className="cursor-pointer px-6 py-3 bg-white dark:bg-[#1A1A2E] text-[#2664eb] font-semibold rounded-xl transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                                                View Project
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 text-[#1A1A2E] dark:text-white group-hover:text-[#2664eb] transition-colors">
                                            {item.title}
                                        </h3>

                                        <p className="text-sm text-[#5A5A7A] dark:text-[#8888A8] mb-4 line-clamp-2">
                                            {item.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="flex items-center justify-between pt-4 border-t border-[#E8E8F0] dark:border-[#1C1C28]">
                                            <div>
                                                <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">Result</div>
                                                <div className="text-sm font-semibold text-[#2664eb]">{item.metrics}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8]">Client</div>
                                                <div className="text-sm font-medium text-[#1A1A2E] dark:text-white">{item.client}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            <h3 className="text-xl font-semibold text-[#1A1A2E] dark:text-white mb-2">No projects found</h3>
                            <p className="text-[#5A5A7A] dark:text-[#8888A8]">Try adjusting your filter</p>
                        </div>
                    )}
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
                    
                    .line-clamp-2 {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                `}</style>
            </section>

            {/* Modal for Project Details */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white dark:bg-[#111118] rounded-2xl overflow-hidden shadow-2xl transform animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full cursor-pointer bg-black/50 text-white hover:bg-black/70 transition-all duration-300 flex items-center justify-center"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Image */}
                        <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                            {!imageErrors[portfolioItems.findIndex(item => item === selectedItem)] ? (
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <svg className="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-[#2664eb]/10 text-[#2664eb] text-xs font-semibold rounded-full">
                                    {selectedItem.category}
                                </span>
                                <span className="text-sm text-[#5A5A7A] dark:text-[#8888A8]">{selectedItem.year}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-[#1A1A2E] dark:text-white">
                                {selectedItem.title}
                            </h3>

                            <p className="text-[#5A5A7A] dark:text-[#8888A8] mb-6 leading-relaxed">
                                {selectedItem.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#F4F4F8] dark:bg-[#0A0A0F] rounded-xl">
                                <div>
                                    <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8] mb-1">Client</div>
                                    <div className="font-semibold text-[#1A1A2E] dark:text-white">{selectedItem.client}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-[#5A5A7A] dark:text-[#8888A8] mb-1">Key Result</div>
                                    <div className="font-semibold text-[#2664eb]">{selectedItem.metrics}</div>
                                </div>
                            </div>

                            {selectedItem.link && (
                                <a
                                    href={selectedItem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2664eb] text-white font-semibold rounded-xl hover:bg-[#5B8DEF] transition-all duration-300"
                                >
                                    View Live Project
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
}