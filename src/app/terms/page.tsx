import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Josué Barros",
    description: "Terms of Service for Josué Barros - Full-Stack Engineer & MVP Builder. Read the terms and conditions for using our services.",
};

export default function TermsPage() {
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
                    Terms of Service
                </h1>
                <p className="text-foreground-secondary mb-12">
                    Last updated: December 15, 2025
                </p>

                <div className="prose-custom space-y-8">
                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            By accessing or using the website josuebarros.com (&quot;Website&quot;) or engaging my freelance
                            software development services (&quot;Services&quot;), you agree to be bound by these Terms of Service.
                            If you disagree with any part of these terms, you may not access the Website or use the Services.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            I provide custom software development services including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>MVP (Minimum Viable Product) development</li>
                            <li>Full-stack web application development</li>
                            <li>Mobile application development</li>
                            <li>UI/UX design implementation</li>
                            <li>Technical consulting and architecture planning</li>
                            <li>Code review and optimization</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Project Engagement</h2>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Discovery Process</h3>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            All projects begin with a discovery process to understand requirements, scope, and timeline.
                            A paid discovery phase ($2,000) may be offered for complex projects, which is deductible from
                            the final project cost if you proceed.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Proposals and Contracts</h3>
                        <p className="text-foreground-secondary leading-relaxed">
                            After discovery, I will provide a detailed proposal outlining scope, deliverables, timeline,
                            and pricing. All projects require a signed contract before work begins. The contract will
                            supersede these general terms where applicable.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Minimum project engagement starts at $15,000 USD</li>
                            <li>A deposit (typically 30-50%) is required to begin work</li>
                            <li>Payments are structured based on project milestones</li>
                            <li>Final payment is due upon project completion and delivery</li>
                            <li>Late payments may incur additional fees as specified in the project contract</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Your Content</h3>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            You retain ownership of all content, materials, and intellectual property you provide for the project.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Deliverables</h3>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            Upon full payment, you receive full ownership of all custom code and deliverables created
                            specifically for your project. This includes source code, documentation, and design files.
                        </p>

                        <h3 className="font-display text-lg font-semibold text-foreground mb-3 mt-6">Portfolio Rights</h3>
                        <p className="text-foreground-secondary leading-relaxed">
                            I reserve the right to display completed work in my portfolio and marketing materials unless
                            otherwise agreed in writing.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Project Timeline</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            Typical MVP projects are delivered within 6-10 weeks. Timelines are estimates and may vary
                            based on scope changes, feedback cycles, and external dependencies. I commit to transparent
                            communication about any timeline adjustments.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Revisions and Changes</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            The project scope includes a reasonable number of revisions as outlined in the contract.
                            Significant scope changes or additional features beyond the original agreement may require
                            a change order with adjusted timeline and pricing.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Confidentiality</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I will treat all project information, business plans, and proprietary data as confidential.
                            A separate NDA (Non-Disclosure Agreement) can be signed upon request before discussing
                            sensitive project details.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            To the maximum extent permitted by law, I shall not be liable for any indirect, incidental,
                            special, consequential, or punitive damages resulting from your use of the Services. My total
                            liability shall not exceed the amount paid for the specific project giving rise to the claim.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                        <p className="text-foreground-secondary leading-relaxed mb-4">
                            Either party may terminate a project engagement with written notice. In case of termination:
                        </p>
                        <ul className="list-disc pl-6 text-foreground-secondary space-y-2">
                            <li>Payment is due for all work completed up to the termination date</li>
                            <li>You will receive all deliverables completed up to that point</li>
                            <li>Deposits are non-refundable but will be credited toward work completed</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">11. Warranty</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I provide 2 weeks of post-launch support to address bugs or issues directly related to the
                            delivered work. Extended support and maintenance are available through separate retainer
                            agreements starting at $3,000/month.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">12. Governing Law</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            These Terms shall be governed by and construed in accordance with applicable laws, without
                            regard to conflict of law principles. Any disputes shall be resolved through good-faith
                            negotiation, and if necessary, binding arbitration.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            I reserve the right to modify these Terms at any time. Changes will be posted on this page
                            with an updated revision date. Your continued use of the Website or Services after changes
                            constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-semibold text-foreground mb-4">14. Contact</h2>
                        <p className="text-foreground-secondary leading-relaxed">
                            For questions about these Terms or to discuss a potential project, please contact me:
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
