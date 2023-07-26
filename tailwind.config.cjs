/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: 'Montserrat, sans-serif',
		},
		container: {
			center: true
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark",],
	  },
}
