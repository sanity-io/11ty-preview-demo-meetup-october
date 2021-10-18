const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'preview',
    functionsDir: './netlify/functions/'
  })
  return {
    dir: {
      input: 'src'
    }
  }
}