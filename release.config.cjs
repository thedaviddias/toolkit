const { getConfig } = require('./packages/semantic/dist/index.cjs')

const branches = [
  { name: 'main' },
  { name: 'canary', prerelease: 'canary' },
]

const config = {
  branches
}

module.exports.config = config
module.exports.getConfig = getConfig
