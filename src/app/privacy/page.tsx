import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Josué Barros",
    description: "Privacy Policy for Josué Barros - Full-Stack Engineer & MVP Builder. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors text-sm mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Back to Home
                </Link>

                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Privacy Policy
                </h1>
                <p className="text-foreground-secondary mb-12">
                    Last updated: December 15, 2025
                </p>

                <div className="prose-custom space-y-8">
                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            Josué Barros (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;) operates the website josuebarros.com (the &quot;Service&quot;).
                            This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you
                            visit my website or use my services. Please read this privacy policy carefully.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Information I Collect</h2>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Personal Information</h3>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            When you use my contact form or engage my services, I may collect:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Name and email address</li>
                            <li>Company name and role</li>
                            <li>Project details and requirements</li>
                            <li>Budget and timeline preferences</li>
                            <li>Any other information you voluntarily provide</li>
                        </ul>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Automatically Collected Information</h3>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I use privacy-focused analytics (Plausible Analytics) which collects:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Page views and referral sources</li>
                            <li>Country-level location (no IP addresses stored)</li>
                            <li>Device type and browser information</li>
                            <li>No cookies are used for tracking</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How I Use Your Information</h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I use the information collected to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Respond to your inquiries and provide requested services</li>
                            <li>Send project proposals and contracts</li>
                            <li>Communicate about ongoing projects</li>
                            <li>Improve my website and services</li>
                            <li>Send occasional updates about my services (only if you opt-in)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I do not sell, trade, or rent your personal information to third parties. I may share information only:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>With your consent</li>
                            <li>To comply with legal obligations</li>
                            <li>With service providers who assist in my business operations (e.g., email services, hosting)</li>
                            <li>To protect my rights or the safety of others</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I implement appropriate technical and organizational security measures to protect your personal
                            information against unauthorized access, alteration, disclosure, or destruction. However, no
                            method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Access the personal data I hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Object to or restrict processing of your data</li>
                            <li>Data portability</li>
                            <li>Withdraw consent at any time</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            This website uses Plausible Analytics, which is a privacy-focused analytics tool that does not
                            use cookies or collect personal data. No cookie consent is required as no tracking cookies are used.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Third-Party Links</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            My website may contain links to third-party websites. I am not responsible for the privacy
                            practices or content of these external sites. I encourage you to read the privacy policies
                            of any linked websites.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I may update this Privacy Policy from time to time. Any changes will be posted on this page
                            with an updated revision date. I encourage you to review this policy periodically.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Contact Me</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            If you have any questions about this Privacy Policy or my data practices, please contact me at:
                        </p>
                        <p className="text-foreground-secondary mt-4">
                            <strong className="text-foreground">Email:</strong>{" "}
                            <a href="mailto:hello@josuebarros.com" className="text-primary hover:underline">
                                hello@josuebarros.com
                            </a>
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-foreground/10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
