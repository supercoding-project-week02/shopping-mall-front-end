import * as path from 'path';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), svgr(), jsconfigPaths()],
  alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
});
