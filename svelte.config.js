import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import path from "path"

export default {
    kit: {
        adapter: adapter(),
        files: {
            assets: path.resolve("src", "static")
        },
        env: {
            publicPrefix: "CHIRON_"
        }
    },
    preprocess: [vitePreprocess()]
}
