import type { PluginSpec } from 'semantic-release'

const git = (options): PluginSpec => {
  return [
    '@semantic-release/git',
    {
      assets:
        typeof options.gitAssets === 'boolean'
          ? false
          : ['package.json']
              .concat(!!options.gitAssets ? options.gitAssets : [])
              .filter((a) => a),
      message: options.message
        ? options.message
        : 'chore(release): `${nextRelease.gitTag}` [skip ci] \n\n${nextRelease.notes}',
    },
  ]
}

export { git }
