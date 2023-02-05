import type { PluginSpec } from 'semantic-release'

const commitAnalyzer = (releaseRulesPassed): PluginSpec => {
  const releaseRules = [...releaseRulesPassed]

  return [
    '@semantic-release/commit-analyzer', {
      releaseRules
    }
  ]
}

export { commitAnalyzer }
