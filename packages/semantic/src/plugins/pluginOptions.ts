
import type { PluginSpec } from 'semantic-release'

import { commitAnalyzer, git, github, npm } from './index'

const releaseNotesConfig = [
  '@semantic-release/release-notes-generator'
]

const getPluginOptions = (optionsPassed?: any): PluginSpec[] => {

  const optionsDefault = {
    enableGit: false,
    enableGithub: true,
    enableNpm: true,
    enableReleaseNotes: false,
    enableReleaseNotesCustom: true,
    // pkgRoot: './dist',
    tarballDir: './dist',
  }

  const options = {
    ...optionsDefault,
    ...optionsPassed,
  }

  const { npmPublish, pkgRoot, tarballDir } = options
  const npmConfig = npm({ npmPublish, pkgRoot, tarballDir })

  const {
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  } = options

  const githubConfig = github({
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  })

  const gitConfig = git(options)

  const _plugins: any = [
    commitAnalyzer(),
    options.enableReleaseNotes ? releaseNotesConfig : '',
    options.enableNpm ? npmConfig : '',
    options.enableGithub ? githubConfig : '',
    options.enableGit ? gitConfig : '',
  ]

  const plugins: PluginSpec[] = _plugins.filter((plugin: any) => !!plugin)

  return plugins
}

export { getPluginOptions }
