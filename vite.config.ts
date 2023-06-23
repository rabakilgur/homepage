import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	root: "src",
	publicDir: "./public",
	build: {
		outDir: "../_BUILD",
		emptyOutDir: true,
		minify: "esbuild",
		cssMinify: true,
		// manifest: true,
		assetsDir: "./dist",
		sourcemap: true,
	},
	define: {
		"global": "globalThis",
	},
});
