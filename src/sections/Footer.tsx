import logoImage from '@/assets/images/logo.svg';
import Image from 'next/image';

const navLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "#", label: "Copyright © 2026" },
];

const contactLinks = [
    {
        href: "mailto:v.drakontaeidis@gmail.com",
        label: "Email",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        href: "https://www.linkedin.com/in/vaggelis-drakontaeidis-059b751a5",
        label: "LinkedIn",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        href: "https://x.com/vaggelisdrak",
        label: "X (Twitter)",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <section className='py-16'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-start md:items-center md:justify-between gap-10'>
                    {/* Logo + contact links */}
                    <div className="flex flex-col gap-4">
                        <Image src={logoImage} alt="Logo" />
                        <div className="flex flex-col gap-2">
                            <p className="text-white/30 text-xs uppercase tracking-widest font-medium">Contact</p>
                            {contactLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    className="flex items-center gap-2 text-white/50 text-sm hover:text-pink-400 transition-colors duration-200"
                                >
                                    {link.icon}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav links */}
                    <nav className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-white/50 text-sm hover:text-white transition-colors duration-200">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
