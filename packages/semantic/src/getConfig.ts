import type { Options as SemanticReleaseOptions } from 'semantic-release'

import { getPluginOptions } from './plugins'

const getConfig = (configPassed = {}): SemanticReleaseOptions => {
  const plugins = getPluginOptions(configPassed)

  const configInit: any = {
    branches: [{ name: 'main' }, { name: 'canary', prerelease: 'canary' }],
    extends: ['semantic-release-commit-filter'],
    plugins,
    tagFormat: `v\${version}`,
  }

  const config: SemanticReleaseOptions = {
    ...configInit,
    ...configPassed,
  }

  return config
}

export { getConfig }
