const branches = [
  { name: 'main' },
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['thedaviddias'],
  },
}

module.exports.config = config
