/* eslint-disable import/order */
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const { config: configDefault } = require('../../release.config.cjs')

const { name } = require('./package.json')

const branches = [
  ...configDefault.branches
]

const configPassed = {
  ...configDefault,
  branches,
  tagFormat: `${name}@\${version}`,
}

const config = configPassed

module.exports = config
