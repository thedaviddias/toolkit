const branches = [
  { name: 'main' },
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['thedaviddias'],
  },
  pkgRoot: './dist',
}

module.exports.config = config
