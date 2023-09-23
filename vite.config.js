import laravel from "laravel-vite-plugin";
import { resolve } from 'path';
import { defineConfig } from "vite";

export default defineConfig({
    resolve: {
        alias: {
            "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
            "~bootstrap-icons": resolve(
                __dirname,
                "node_modules/bootstrap-icons",
            ),
            "~perfect-scrollbar": resolve(
                __dirname,
                "node_modules/perfect-scrollbar",
            ),
            "~@fontsource": resolve(__dirname, "node_modules/@fontsource"),
        },
    },
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
