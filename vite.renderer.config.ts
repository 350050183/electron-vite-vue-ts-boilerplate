import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line import/no-unresolved
import Components from 'unplugin-vue-components/vite';
// eslint-disable-next-line import/no-unresolved
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [vue(),
        Components({
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false, // css in js
                }),
            ],
        }),
    ],
});
