/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        heading: ['Inter', 'sans-serif'],
                        body: ['Inter', 'sans-serif'],
                        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
                },
                colors: {
                        void: '#050816',
                        surface: '#0B1224',
                        'surface-highlight': '#111A31',
                        cyan: {
                                DEFAULT: '#19C2D8',
                                50: '#ecfeff',
                                300: '#67E8F9',
                                400: '#19C2D8',
                                500: '#0EA5B7',
                                600: '#0E8394',
                        },
                        violet: {
                                DEFAULT: '#7c3aed',
                                400: '#a78bfa',
                                500: '#8b5cf6',
                                600: '#7c3aed',
                        },
                        emerald: {
                                DEFAULT: '#10b981',
                                300: '#6EE7B7',
                                400: '#42D39B',
                                500: '#22B97D',
                        },
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
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to: { height: 'var(--radix-accordion-content-height)' }
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to: { height: '0' }
                        },
                        'glow-pulse': {
                                '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
                                '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' }
                        },
                        'float': {
                                '0%, 100%': { transform: 'translateY(0)' },
                                '50%': { transform: 'translateY(-10px)' }
                        },
                        'slide-up': {
                                '0%': { opacity: '0', transform: 'translateY(20px)' },
                                '100%': { opacity: '1', transform: 'translateY(0)' }
                        }
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                        'float': 'float 3s ease-in-out infinite',
                        'slide-up': 'slide-up 0.5s ease-out'
                },
                boxShadow: {
                        'neon-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
                        'neon-violet': '0 0 20px rgba(124, 58, 237, 0.5)',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
