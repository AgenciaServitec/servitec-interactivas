import animations from "tailwindcss-animated"
import flowbite from "flowbite/plugin"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/flowbite/**/*.js"],
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
				'tertiary': {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'original': '#292929',
				},	
			},
			backgroundImage:{
				"about-brand": "url('/images/bg-brands.webp')"
			}
		},
	},
	plugins: [animations,flowbite],
}
