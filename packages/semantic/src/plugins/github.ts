import type { PluginSpec } from 'semantic-release'

const github = (options: any): PluginSpec => {
  const optionsEmpty =
    options &&
    Object.values(options).filter((i) => typeof i !== 'undefined').length === 0

  if (!options || optionsEmpty)
    return [
      '@semantic-release/github',
      {
        addReleases: false,
        labels: false,
        releasedLabels: false,
        successComment: false,
      },
    ]

  const { githubAssets, ...config } = options
  return [
    '@semantic-release/github',
    {
      assets: githubAssets,
      addReleases: false,
      labels: false,
      releasedLabels: false,
      successComment: false,
      ...config,
    },
  ]
}

export { github }
