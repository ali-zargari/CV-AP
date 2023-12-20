import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	eslintConfigPrettier,
	build: {
		outDir: "./dist",
		rollupOptions: {
			input: {
				main: "./index.html",
				//other: "./src/*.js",
				//util: "./utils/myUtil.js",
				// Add more files as needed
			},
		},
	},
});
