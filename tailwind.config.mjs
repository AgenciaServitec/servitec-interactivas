/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'primary': {
					'50': '#edfff5',
					'100': '#d6ffea',
					'200': '#afffd5',
					'300': '#71ffb6',
					'400': '#2dfb90',
					'500': '#02e570',
					'600': '#00bf59',
					'original': '#00a651',
					'800': '#06753d',
					'900': '#085f34',
					'950': '#00361b',
				},
				'secondary': {
					'50': '#f1f7fd',
					'100': '#dfedfa',
					'200': '#c6e0f7',
					'300': '#9ecdf2',
					'400': '#70b1ea',
					'500': '#4f93e2',
					'600': '#3a77d6',
					'700': '#3163c4',
					'original': '#3056a9',
					'900': '#29477f',
					'950': '#1d2c4e',
				},				
				"footer":{
					"100": "#292929"
				}
				
			}
		},
	},
	plugins: [],
}
