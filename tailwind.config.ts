import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg-1)',
        'bg-secondary': 'var(--bg-2)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        'panel-soft': 'var(--panel-soft)',
        'panel-soft-2': 'var(--panel-soft-2)',
        'panel-soft-3': 'var(--panel-soft-3)',
        'panel-soft-4': 'var(--panel-soft-4)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        chip: 'var(--chip)',
        line: 'var(--line)',
        topbar: 'var(--topbar)',
        'nav-panel': 'var(--nav-panel)',
        'input-bg': 'var(--input-bg)',
        'section-index': 'var(--section-index)',
        shadow: 'var(--shadow)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'text-flicker': 'textFlicker 4s infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'text-jitter': 'textJitter 0.8s infinite',
        'scan-pulse': 'scanPulse 2s ease-in-out infinite',
        'ghost-pulse': 'ghostPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'title-pulse': 'titlePulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
