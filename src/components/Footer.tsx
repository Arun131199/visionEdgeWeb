export function Footer() {
    return (
        <footer className="bg-[#1A1A2E] dark:bg-[#0A0A0F] py-12 px-6 border-t border-[#1C1C28]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Tagline */}
                    <div className="md:col-span-2">
                        <div style={{ fontFamily: 'var(--font-heading)' }} className="text-2xl text-white mb-3">
                            Vision<span className="text-[#2664eb]">Edge</span>
                        </div>
                        <p className="text-[#8888A8] text-sm max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
                            Empowering Indian SMBs and startups with premium digital marketing solutions that drive measurable growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                            Follow Us
                        </h4>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/visionedge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#111118] border border-[#1C1C28] rounded-lg flex items-center justify-center text-[#8888A8] hover:text-[#2664eb] hover:border-[#2664eb] transition-all"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/company/visionedge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#111118] border border-[#1C1C28] rounded-lg flex items-center justify-center text-[#8888A8] hover:text-[#2664eb] hover:border-[#2664eb] transition-all"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="https://facebook.com/visionedge"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-[#111118] border border-[#1C1C28] rounded-lg flex items-center justify-center text-[#8888A8] hover:text-[#2664eb] hover:border-[#2664eb] transition-all"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1C1C28] flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#8888A8] text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        © 2026 VisionEdge. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            Privacy Policy
                        </a>
                        <a href="#" className="text-[#8888A8] hover:text-[#2664eb] transition-colors text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
