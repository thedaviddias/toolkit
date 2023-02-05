import type { PluginSpec } from 'semantic-release'

const npm = (options: any): PluginSpec => {
  if (
    !options ||
    (typeof options.pkgRoot !== 'string' &&
      typeof options.npmPublish !== 'boolean' &&
      typeof options.tarballDir === 'undefined')
  )
    return '@semantic-release/npm'

  return [
    '@semantic-release/npm',
    {
      ...options,
    },
  ]
}

export { npm }
