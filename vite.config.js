import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import Icons from "unplugin-icons/vite"
import path from "path"

export default defineConfig({
    plugins: [
        sveltekit(),
        Icons({
            compiler: "svelte"
        })
    ],
    resolve: {
        alias: {
            "$": path.resolve("src"),
            "$styles": path.resolve("src", "styles")
        }
    }
})
