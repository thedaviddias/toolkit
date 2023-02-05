import type { PluginSpec } from 'semantic-release'

interface GitPluginOptions {
  message?: string
  gitAssets?: string[] | false
}

const git = (options: GitPluginOptions): PluginSpec => {
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
