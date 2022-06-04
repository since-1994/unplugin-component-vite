import { createVuePlugin } from 'vite-plugin-vue2';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
    plugins: [
        createVuePlugin(),
        Components({
            resolvers: [
                // example of importing Vant
                (componentName) => {
                    // where `componentName` is always CapitalCase
                    // componentName = componentName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    if(componentName.startsWith('Gtris'))
                        return { name: componentName, from: '/packages/index.js' }
                },
            ],
        })
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: '/src',
            },
        ],
    },
});