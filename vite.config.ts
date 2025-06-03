import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

import basicSsl from '@vitejs/plugin-basic-ssl'
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        basicSsl(),
        react({
            babel: {
                plugins: [
                    [
                        'babel-plugin-styled-components',
                        {
                            displayName: true,
                            fileName: false,
                        },
                    ],
                ],
            },
        }),
        tsconfigPaths(),
        svgr(),
        legacy({
            targets: ['defaults', 'IE >= 11', 'Chrome >= 49', 'Firefox >= 52', 'Safari >= 11', 'iOS >= 11'],
        }),
    ],
})
