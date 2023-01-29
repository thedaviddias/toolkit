/**
 * @ref(tsup) https://tsup.egoist.dev/
 *
 */
import type { Options } from 'tsup'
import { defineConfig } from 'tsup'

const config: Options = {
  clean: false,
  dts: true,
  external: [],
  format: ['esm', 'cjs'],
  minify: true,
  noExternal: [],
  outDir: 'dist',
  silent: true,
  sourcemap: false,
  splitting: false,
  treeshake: false,
  target: ['node16'],
}

export { config }
export default defineConfig({ ...config })
