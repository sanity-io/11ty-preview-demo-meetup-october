const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'preview',
    functionsDir: './netlify/functions/',
    copy: ['src/sanity.js']
  })
  return {
    dir: {
      input: 'src'
    }
  }
}