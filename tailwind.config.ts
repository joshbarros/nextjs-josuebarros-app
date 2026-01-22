import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'hsl(var(--foreground) / 0.9)',
                        '--tw-prose-headings': 'hsl(var(--foreground))',
                        '--tw-prose-lead': 'hsl(var(--foreground) / 0.9)',
                        '--tw-prose-links': 'hsl(var(--primary))',
                        '--tw-prose-bold': 'hsl(var(--foreground))',
                        '--tw-prose-counters': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-bullets': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-hr': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-quotes': 'hsl(var(--foreground))',
                        '--tw-prose-quote-borders': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-captions': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-code': 'hsl(var(--foreground))',
                        '--tw-prose-pre-code': 'hsl(var(--foreground))',
                        '--tw-prose-pre-bg': 'hsl(var(--background))',
                        '--tw-prose-th-borders': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-td-borders': 'hsl(var(--foreground) / 0.3)',
                    }
                },
                invert: {
                    css: {
                        '--tw-prose-body': 'hsl(var(--foreground) / 0.9)',
                        '--tw-prose-headings': 'hsl(var(--foreground))',
                        '--tw-prose-lead': 'hsl(var(--foreground) / 0.9)',
                        '--tw-prose-links': 'hsl(var(--primary))',
                        '--tw-prose-bold': 'hsl(var(--foreground))',
                        '--tw-prose-counters': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-bullets': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-hr': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-quotes': 'hsl(var(--foreground))',
                        '--tw-prose-quote-borders': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-captions': 'hsl(var(--foreground) / 0.6)',
                        '--tw-prose-code': 'hsl(var(--foreground))',
                        '--tw-prose-pre-code': 'hsl(var(--foreground))',
                        '--tw-prose-pre-bg': 'hsl(var(--background))',
                        '--tw-prose-th-borders': 'hsl(var(--foreground) / 0.3)',
                        '--tw-prose-td-borders': 'hsl(var(--foreground) / 0.3)',
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace']
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                },
                ticker: {
                    '0%': {
                        transform: 'translateX(0)'
                    },
                    '100%': {
                        transform: 'translateX(-50%)'
                    }
                },
                float: {
                    '0%, 100%': {
                        transform: 'translate(0, 0)'
                    },
                    '33%': {
                        transform: 'translate(30px, -30px)'
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px)'
                    }
                },
                'float-reverse': {
                    '0%, 100%': {
                        transform: 'translate(0, 0)'
                    },
                    '33%': {
                        transform: 'translate(-30px, 30px)'
                    },
                    '66%': {
                        transform: 'translate(20px, -20px)'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                ticker: 'ticker 20s linear infinite',
                'ticker-slow': 'ticker 30s linear infinite',
                float: 'float 18s ease-in-out infinite',
                'float-slow': 'float 25s ease-in-out infinite',
                'float-reverse': 'float-reverse 22s ease-in-out infinite'
            }
        }
    },
    plugins: [tailwindcssAnimate, typography],
} satisfies Config;
