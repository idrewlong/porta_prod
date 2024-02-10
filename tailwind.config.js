/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				ivory: '#FFFFF0',
				ap_dark_gray: '#414851',
				ap_steel_gray: '#71767c',
				ap_silver: '#a0a3a8',
				ap_navy: '#121a25',
				ap_charcoal_blue: '#0e141c',
				ap_midnight: '#090d13'
			}
		}
	},
	plugins: []
};
