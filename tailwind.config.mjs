/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: { 
			colors: {
				body: "var(--color-bg)",
				"box-bg": "var(--color-box)",
				"box-shadow": "var(--box-sd)",
				"box-border": "var(--box-border)",
				primary: "var(--color-primary)",
				"heading-1": "var(--heading-1)",
				"heading-2": "var(--heading-2)",
				"heading-3": "var(--heading-3)",
			},
			screens:{
				midmd:"880px"
			},
			fontSize: {
				sm: ['16px', '20px'],
				base: ['18px', '26px'],
				lg: ['24px', '32px'],
				xl: ['34px', '40px'],
			  }
		},
	},
	plugins: [],
}
