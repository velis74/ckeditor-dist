import { createRequire } from 'node:module';
import { defineConfig } from 'vite'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { resolve } from 'path';

const require = createRequire( import.meta.url );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )],
  build: {
    target: 'es2015',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
      name: 'ckeditor.[name]',
    },
  }
})
