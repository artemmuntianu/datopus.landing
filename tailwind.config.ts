import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "./content/**/*.{md,mdx}"
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        screens: {
            sm: '640px',// => @media (min-width: 640px) { ... }
            md: '768px',// => @media (min-width: 768px) { ... }
            lg: '1024px',// => @media (min-width: 1024px) { ... }
            xl: '1280px',// => @media (min-width: 1280px) { ... }
            '2xl': '1536px',// => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['"Segoe UI"', ...fontFamily.sans]
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
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
                'grid': {
                    '0%': {
                        transform: 'translateY(-50%)'
                    },
                    '100%': {
                        transform: 'translateY(0)'
                    }
                },
                'shine-pulse': {
                    '0%': {
                        'background-position': '0% 0%'
                    },
                    '50%': {
                        'background-position': '100% 100%'
                    },
                    to: {
                        'background-position': '0% 0%'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'grid': 'grid 15s linear infinite'
            }
        }
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
