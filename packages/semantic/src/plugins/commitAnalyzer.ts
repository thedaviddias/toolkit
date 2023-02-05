import type { PluginSpec } from 'semantic-release'

const commitAnalyzer = (): PluginSpec => {

  return [
    '@semantic-release/commit-analyzer', {
      "preset": "angular",
      "releaseRules": [
        {"type": "docs", "scope": "README", "release": "patch"},
        {"type": "refactor", "scope": "core-*", "release": "minor"},
        {"type": "refactor", "release": "patch"},
        {"scope": "no-release", "release": false}
      ]
    }
  ]
}

export { commitAnalyzer }
