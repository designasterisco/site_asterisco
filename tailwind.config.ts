/* eslint-disable @typescript-eslint/no-require-imports */
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem'
  			},
  			screens: {
  				DEFAULT: '1280px'
  			}
  		},
  		keyframes: {
				slideLeft: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
  			moveLeft: {
  				'0%': {
  					transform: 'translate(-50%, -50%) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'translate(-150%, -50%) rotate(-360deg)'
  				}
  			},
  			moveMiddle: {
  				'0%': {
  					transform: 'translate(-50%, -50%) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'translate(-50%, -50%) rotate(360deg)'
  				}
  			},
  			moveRight: {
  				'0%': {
  					transform: 'translate(-50%, -50%) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'translate(50%, -50%) rotate(360deg)'
  				}
  			},
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
  			}
  		},
  		animation: {
  			moveLeft: 'moveLeft 1s ease forwards',
  			moveMiddle: 'moveMiddle 1s ease forwards',
  			moveRight: 'moveRight 1s ease forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-left': 'slideLeft 40s linear infinite',
  		},
  		fontFamily: {
  			primary: 'var(--font-sora)',
  			secondary: 'var(--font-schoolbell)',
				baloo_2: 'var(--font-baloo-2)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			brand: {
  				green: '#336145',
  				'light-yellow': '#E6E2C3',
  				light: '#F3F2DE',
  				dark: '#121212'
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
